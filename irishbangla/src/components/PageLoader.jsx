/** Shown only while admin (lazy) routes load. */
export default function PageLoader() {
  return (
    <div className="page-loader" aria-live="polite" aria-busy="true" aria-label="Loading page">
      <div className="page-loader__shell">
        <div className="page-loader__hero" />
        <div className="page-loader__grid">
          <div className="page-loader__card page-loader__card--side" />
          <div className="page-loader__card page-loader__card--main">
            <div className="page-loader__line page-loader__line--lg" />
            <div className="page-loader__line" />
            <div className="page-loader__line page-loader__line--sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
