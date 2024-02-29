import { useLanguage } from "../../../context/LanguageContext";

function Manu({ data, type, path }) {
  const { language } = useLanguage();

  const langData = data[language];

  return (
    <>
      <div className="menu-content">
        {langData.map((d, id) => {
          return (
            <p style={{ width: "100%" }} key={id}>
              <a href={path[id] ? `/${path[id]}` : ""}>
                <span
                  onMouseOver={() => {
                    type(data.en[id]);
                  }}
                >
                  {d}
                </span>
              </a>
            </p>
          );
        })}
      </div>
    </>
  );
}

export default Manu;
