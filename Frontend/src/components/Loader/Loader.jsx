import "./loader.css";

function Loader() {
  return (
    <div className="vw-100 vh-100 d-flex align-items-center justify-content-center">
      <div className="newtons-cradle">
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
      </div>
    </div>
  );
}

export default Loader;
