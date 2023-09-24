export default function Loading({ height, width, color }) {
  return (
    <div
      className="Loading"
      style={{
        height: height ? height : "100vh",
        width: width ? width : "100vw",
      }}
    >
      <div className="LoadingContainer">
        <div className="Spinner" style={{ borderColor: color }}></div>
      </div>
    </div>
  );
}
