import { createContext, useContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useAuth } from "./AuthContext";
import { useLanguage } from "./LanguageContext";

const WillingToArriveContext = createContext();

const willingToArriveReducer = (state, action) => {
  switch (action.type) {
    case "SET_WILLING_TO_ARRIVE":
      return action.payload;
    case "ADD_TO_WILLING_TO_ARRIVE":
      return [...state, action.payload];
    case "REMOVE_FROM_WILLING_TO_ARRIVE":
      return state.filter((item) => item.placeId !== action.payload);
    default:
      return state;
  }
};

const api = axios.create({
  baseURL: "http://localhost:5000",
});

const WillingToArriveProvider = ({ children }) => {
  const { user } = useAuth();
  const { language } = useLanguage();
  const [willingToArrive, dispatchWillingToArrive] = useReducer(willingToArriveReducer, []);

  useEffect(() => {
    const fetchWillingToArriveItems = async () => {
      try {
        if (user) {
        const response = await api.get(`/willing-to-arrive/${user.id}`);
        dispatchWillingToArrive({
          type: "SET_WILLING_TO_ARRIVE",
          payload: response.data[language],
        });
        console.log(response);

        }else{
          dispatchWillingToArrive({
            type: "SET_WILLING_TO_ARRIVE",
            payload: [],
          });
        }
      } catch (error) {
        console.error("Error fetching Willing to Arrive items:", error);
      }
    };

    fetchWillingToArriveItems();
  }, [user, language]);

  const addToWillingToArrive = async (placeId) => {
    try {
      const response = await api.post("/willing-to-arrive", {
        userId: user.id,
        placeId,
      });
      dispatchWillingToArrive({
        type: "ADD_TO_WILLING_TO_ARRIVE",
        payload: response.data.willingToArrive,
      });
    } catch (error) {
      console.error("Error adding to Willing to Arrive:", error);
      throw error;
    }
  };

  WillingToArriveProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const removeFromWillingToArrive = async (placeId) => {
    try {
      await api.delete("/willing-to-arrive", {
        data: { userId: user.id, placeId },
      });

      dispatchWillingToArrive({
        type: "REMOVE_FROM_WILLING_TO_ARRIVE",
        payload: placeId,
      });
    } catch (error) {
      console.error("Error removing item from Willing to Arrive:", error);
      throw error;
    }
  };

  return (
    <WillingToArriveContext.Provider
      value={{
        willingToArrive,
        addToWillingToArrive,
        removeFromWillingToArrive,
      }}
    >
      {children}
    </WillingToArriveContext.Provider>
  );
};

const useWillingToArrive = () => {
  const context = useContext(WillingToArriveContext);
  if (!context) {
    throw new Error("useWillingToArrive must be used within a WillingToArriveProvider");
  }
  return context;
};

export { WillingToArriveProvider, useWillingToArrive };
