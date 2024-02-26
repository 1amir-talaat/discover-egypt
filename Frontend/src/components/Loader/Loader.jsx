import "./loader.css";

function Loader() {
  return (
    <div className="vw-100 vh-100 d-flex align-items-center justify-content-center">
      <div className="pyramid-loader">
        <div className="wrapper">
          <span className="side side1"></span>
          <span className="side side2"></span>
          <span className="side side3"></span>
          <span className="side side4"></span>
          <span className="shadow"></span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
