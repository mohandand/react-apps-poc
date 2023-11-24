import React from 'react';
import './accordion.css';
import AccordionOne from './AccordionOne';

export default function Accordion(){
   
   const data = [{
    title: "About React",
    content: "React is Library used in web applications user interface devlopement. Its one of the poppular one becasue of virtualDOM, Components strustrure"
   },
   {
    title: "About Angular",
    content: "React is Library used in web applications user interface devlopement. Its one of the poppular one becasue of virtualDOM, Components strustrure"
   },
   {
    title: "About Javascript",
    content: "React is Library used in web applications user interface devlopement. Its one of the poppular one becasue of virtualDOM, Components strustrure"
   }
]  
    return(
        <div className="accordion-container">
            <h3>Accordion</h3>
            <AccordionOne title={data[0].title} content={data[0].content}/>
            <AccordionOne title={data[1].title} content={data[1].content}/>
        </div>
    )
}