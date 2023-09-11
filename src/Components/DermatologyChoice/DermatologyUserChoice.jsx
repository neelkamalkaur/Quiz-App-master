import React, { useState } from "react";
import {dermatology_choice} from "./DermatologyChoiceData"
import { useNavigate } from "react-router-dom";
import UserSym from "../UserSymDetails/UserSym";
import { useDermatologyContext } from "../../GlobalContext/userDermatologyContext3";
// import { useUserSymContext } from "../../GlobalContext/userSymContext2";




export default function DermatologyUserChoice() {

  // const {state} = useUserSymContext();

  // console.log(state.data,"dermatology previous data");

  const navigate = useNavigate();

  const [dermatologyDetails, setDermatologyDetails] = useState([]);
  const [dermatologyChoice, setDermatologyChoice] = useState([...dermatology_choice]);
  const [step, setStep] = useState(1);
  const [renderData, setRenderData] = useState(dermatologyChoice.slice(0, 1));


  const {state , dispatch} = useDermatologyContext();

  const handleRenderComponent = async (data) => {
  

   
    await setStep((step)=>{
     return step+1
    });
    if(step>=dermatology_choice.length){


     await  dispatch({ type: 'ADD_USER_DERMATOLOGY_DATA', payload:  dermatologyDetails})
      navigate("/userinputprescription");
    }

    await setRenderData(dermatology_choice.slice(step, step + 1));
    await setDermatologyDetails((prevState) => {
      return [...prevState, data];
    });
    
  };

  

console.log(dermatologyDetails,"dermatologyDetails");
 



  return (
    <>
      

      {renderData.map((symptum, index) => {
        return (
          <>
            <UserSym
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
