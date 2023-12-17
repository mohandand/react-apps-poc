import React from "react";
import './Accor.css'
import Accor from "./Accor";
export default function AccorItem(){
    return(
        <div className="container">
            <h2>Accordion Component</h2>
            <Accor item={"What is this Accord"} contetnt={"Accor is nothig but its component to use it like for Faq and otherplace whwre you can hide content and show them if required"}/>
            <Accor item={"What is this Accord"} contetnt={"Accor is nothig but its component to use it like for Faq and otherplace whwre you can hide content and show them if required"}/>
        </div>
    )
}
 