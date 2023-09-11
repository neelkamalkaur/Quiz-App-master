import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserInput = ({ques, setStep, setUserSymptumData}) => {
  const navigate = useNavigate();


  const handleInputChange = (event) => {
    setUserSymptumData((prevState) => {
      if (prevState.length == undefined)
        return [...prevState, { ques, answer: event.target.value }];

      const newAnswer = { ques, answer: event.target.value };
      const questionIndex = prevState.findIndex((item) => item.ques === ques);

      if (questionIndex !== -1) {
        const updatedUserInfo = [...prevState];
        updatedUserInfo[questionIndex].answer = newAnswer.answer;
        return updatedUserInfo;
      } else {
        return [...prevState, newAnswer];
      }
    });
  };

  return ( <>
   <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12">
        <div class="quiz-header-title mb-5">
         
          <h3>{ques}</h3>
        </div>
        <div class="quiz-body">
          <form>
          <div class="mb-4">
          <textarea class="form-control" rows="5" onChange={handleInputChange}></textarea>
        </div>
       
         <div class="d-grid my-4">
        <button class="btn btn-back btn-block rounded-pill" onClick={() => navigate("/dermatologyuser")}>Continue</button>
        </div>
          </form>
        
      </div>
    </div>
  </div>
  </div>
  
  </>
   
  );
};

export default UserInput;
