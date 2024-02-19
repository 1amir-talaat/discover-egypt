function Manu({ data, type }) {
  return (
    <>
      {data.map((d, id) => {
        return (
          <p
            onMouseOver={() => {
              type(d);
            }}
            key={id}
          >
            {d}
          </p>
        );
      })}
    </>
  );
}

export default Manu;
