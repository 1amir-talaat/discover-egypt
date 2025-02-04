import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../Card/Card";
import { useLanguage } from "../../context/LanguageContext";

function SearchResults() {
  const location = useLocation();
  const { language } = useLanguage();
  const [data, setData] = useState([]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const querye = queryParams.get("search");

    console.log(querye);

    axios
      .post("import.meta.env.VITE_HOSTsearch", { keyword: querye })
      .then((response) => {
        console.log("Response:", response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [location.search]);

  console.log(language);
  console.log(data);
  console.log(data[language]);
  return (
    <div className="container">
      {data && data[language] && (
        <div className="row">
          <Card data={data[language]} />
        </div>
      )}
    </div>
  );
}

export default SearchResults;
