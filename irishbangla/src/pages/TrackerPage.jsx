import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { touristVisaTimeline } from "../data/touristVisaTimeline";
import "../styles/tracker.css";

export default function TrackerPage() {
  const { trackingId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTracker = async () => {
      try {
        const ref = doc(db, "visaTrackers", trackingId);
        const snap = await getDoc(ref);

        if (!snap.exists()) {
          setError("Invalid Tracking ID");
        } else {
          setData(snap.data());
        }
      } catch (err) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchTracker();
  }, [trackingId]);

  if (loading) return <h2 className="center">Loading...</h2>;
  if (error) return <h2 className="center">{error}</h2>;

  // 🔥 AUTO PROGRESS LOGIC
  const steps = touristVisaTimeline.map(step => ({
    ...step,
    completed: step.id <= data.currentStep
  }));

  return (
    <div className="tracker-page">
      <h1>Visa Application Status</h1>

      <div className="card">
        <h3>{data?.Name}</h3>
        <p><strong>Tracking ID:</strong> {trackingId}</p>
        <p><strong>Country:</strong> {data?.country}</p>
        <p><strong>Status:</strong> {data?.status}</p>
      </div>

      {/* TIMELINE */}
      <div className="timeline">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`timeline-item ${step.side} ${step.completed ? "done" : ""}`}
          >
            {/* Content */}
            <div className={`content ${step.final ? "final" : ""}`}>
              <h4>{step.title}</h4>
            </div>

            {/* Dot */}
            <span className={`dot ${step.completed ? "success" : ""}`} />
          </div>
        ))}
      </div>

      <p className="updated">
        Last Updated:{" "}
        {data?.lastUpdated?.toDate
          ? data.lastUpdated.toDate().toLocaleDateString()
          : "N/A"}
      </p>
    </div>
  );
}
