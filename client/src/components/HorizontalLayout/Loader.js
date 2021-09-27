import { useEffect } from "react";
const Loader = () => {
//   useEffect(() => {
//     document.getElementById("preloader").style.display = "block";
//     document.getElementById("status").style.display = "block";

//     setTimeout(function () {
//       document.getElementById("preloader").style.display = "none";
//       document.getElementById("status").style.display = "none";
//     }, 1500);
//   }, []);
  return (
    <>
      <div id="preloader">
        <div id="status">
          <div className="spinner-chase">
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
