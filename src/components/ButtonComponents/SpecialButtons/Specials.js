import React, { useState } from "react";
import SpecialButton from "./SpecialButton.js"
//import any components needed

//Import your array data to from the provided data file
import { specials } from "../../../data.js"

const Specials = () => {
  // STEP 2 - add the imported data to state

const [specialButtons] = useState(specials)
// console.log(useState(specials))
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

       {specialButtons.map((special, index) => (
           <SpecialButton key={index} special ={special}/>
       ))}
    </div>
  );
};

export default Specials;
