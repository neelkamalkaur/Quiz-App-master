import React, { useState } from "react";

const InputTypeSelect = ({  question , helperText ,handleRenderComponent }) => {

    
    const [value, setValue] = useState({
      ques :"",
      ans :"",
    });

    const handleInputChange =(event)=>{


        setValue((prevState)=>({
          ...prevState,

          ques: question,
            ans : event.target.value,
        }));
    }


  return (
    <>
 
 <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12">
        <div class="quiz-header-title mb-5">
          <h3>
         {question}
          </h3> 
          <p>{helperText}</p>
        </div>
        <div class="quiz-body">
         <div class="mb-4">
           <select class="form-select" name="using_prescription_or_over_the_contery_medications" onChange={handleInputChange}  >
            <option value={""}>select</option>
            <option value={"val1"}>val1</option>
            <option value={"val2"}>val2</option>
            <option value={"val3"}>val3</option>
           </select>
        </div>
        <div class="d-grid mb-4">
        <button class="btn btn-black btn-block rounded-pill" onClick={() => handleRenderComponent(value)}>Continue</button>
        </div>
        </div>

       
      </div>
      </div>
      </div>
    </>
  );
};

export default InputTypeSelect;