import React from "react";
import Hero from "../components/UsefulContacts/Hero";
import EmergencyNumbers from "../components/UsefulContacts/EmergencyNumbers";
import UsefulNumbers from "../components/UsefulContacts/UsefulNumbers";
import TelephoneCode from "../components/UsefulContacts/TelephoneCode";
import KeepExploring from "../components/UsefulContacts/KeepExploring";
function UsefulContacts(){
    return(
        <>
        <Hero/>
        <EmergencyNumbers/>
        <UsefulNumbers/>
        <TelephoneCode/>
        <KeepExploring/>
        </>
    );
}
export default UsefulContacts;