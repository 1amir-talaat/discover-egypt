export default {
  control: (provided) => ({
    ...provided,
    border: "none",
    transition: "0.3s",
    borderBottom: "1px solid #e6e6e6",
    boxShadow: "none",
    margin: "10px",
    borderRadius: 0,
    "&:hover": {
      borderBottom: "1px solid #b1b1b1",
    },
    "&:focus": {
      borderColor: "#767676",
    },
  }),
  option: (provided) => ({
    ...provided,
    border: "none",
    borderBottom: ".1rem solid #f7f7f7",
    padding: "5px 15px",
    color: "#767676",
    fontSize: "12px",
    backgroundColor: "white",
    "&:hover": {
      borderColor: "#087e8c",
      color: "#087e8c",
      backgroundColor: "#087e8c29",
    },
  }),

  menuList: (provided) => ({
    ...provided,
    height: "90px",
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#087e8c",
      borderRadius: "3px",
    },
  }),

};
