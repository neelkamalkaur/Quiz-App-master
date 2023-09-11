import React, { useEffect, useState } from "react";

import { symData } from "../UserSymDetailsData";
import UserSym from "./UserSym";
import { useNavigate } from "react-router-dom";

import { useUserSymContext } from "../../GlobalContext/userSymContext2";

export default function UserSymDetails() {
  const [symptumDetails, setSymptumDetails] = useState([]);
  const [symptumData, setSymptumData] = useState([...symData]);
  const [step, setStep] = useState(1);
  const [renderData, setRenderData] = useState(symptumData.slice(0, 1));
  const navigate = useNavigate();

  // context data for previous Routes (User Info)

  // const {state} = useInfoContext();
  // const data  = state.data;
  // const entries = Object.entries(data);
  // console.log(entries,"*******");



  const { state, dispatch } = useUserSymContext();


console.log(state.data,"999999");
  
 

  console.log(symptumDetails);



  
  const handleRenderComponent = async (data) => {
    await  dispatch({ type: "ADD_USERSYM_DATA", payload: symptumDetails });
   
    if (step >= symData.length) {
  
      navigate("/dermatologyuser");
    }
    await setStep((step) => {
      return step + 1;
    });
    await setSymptumDetails((prevState) => {
      return [...prevState, data];
    });
   await  dispatch({ type: "ADD_USERSYM_DATA", payload: symptumDetails });

    await setRenderData(symptumData.slice(step, step + 1));
   

  };
console.log(symptumDetails);



  return (
    <>
      {renderData.map((symptum, index) => {
        return (
          <>
            <UserSym

            setStep={setStep}
              question={symptum.question}
              options={symptum.options}
              facet={symptum.facet_tip}
              option_type={symptum.option_type}
              input_type={symptum.input_type}
              handleRenderComponent={handleRenderComponent}
             
            />
          </>
        );
      })}
    </>
  );
}
