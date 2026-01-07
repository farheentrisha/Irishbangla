import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
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
        console.error(err);
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchTracker();
  }, [trackingId]);

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  if (error) return <h2 style={{ textAlign: "center" }}>{error}</h2>;

  const steps = data?.steps ? Object.entries(data.steps) : [];

  return (
    <div className="tracker-page">
      <h1>Visa Application Status</h1>

      <div className="card">
        <h3>{data?.Name}</h3>
        <p><strong>Tracking ID:</strong> {trackingId}</p>
        <p><strong>Country:</strong> {data?.country}</p>
        <p><strong>Status:</strong> {data?.status}</p>
      </div>

      <div className="timeline">
        {steps.map(([label, completed], index) => (
          <div
            key={index}
            className={`timeline-item ${completed ? "done" : ""}`}
          >
            <span className="dot"></span>
            <div className="content">
              <p>{label}</p>
            </div>
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
