import { useLanguage } from "../../../context/LanguageContext";

function Manu({ data, type }) {
  const { language } = useLanguage();

  const langData = data[language];

  return (
    <>
      <div className="menu-content">
        {langData.map((d, id) => {
          return (
            <p style={{ width: "100%" }} key={id}>
              <span
                onMouseOver={() => {
                  type(data.en[id]);
                }}
              >
                {d}
              </span>
            </p>
          );
        })}
      </div>
    </>
  );
}

export default Manu;
