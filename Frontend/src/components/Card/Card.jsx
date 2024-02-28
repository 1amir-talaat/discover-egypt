import { useLanguage } from "../../context/LanguageContext";
import "./Crad.css"

import { useWillingToArrive } from "../../context/WillingToArriveContext";
import { useAuth } from "../../context/AuthContext";

import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

function Card({ data }) {
    const { language } = useLanguage();
    const { willingToArrive, addToWillingToArrive, removeFromWillingToArrive } = useWillingToArrive();
    const { user } = useAuth();

    return (
        <>
            {data.map((item) => {
                return (
                    <>

                        {item.title}
                    </>
                );
            })}
        </>
    )

}

export default Card