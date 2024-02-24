import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function SearchResults() {
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const querye = queryParams.get("search");

    console.log(querye);

    axios
      .post("http://localhost:5000/search", { keyword: querye })
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [location.search]);

  return (
    <div className="container">
    </div>
  );
}

export default SearchResults;
