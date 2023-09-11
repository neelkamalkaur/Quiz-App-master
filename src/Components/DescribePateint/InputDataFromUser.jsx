import React,{useState} from 'react'


export default function InputDataFromUser({question , helperText, handleRenderComponent}) {

    const [inputData , setInputData] =useState({
       
    })

    
    const inputHandler=(event)=>{
        setInputData({
          ...inputData,
            [event.target.name]:event.target.value
        })
    }

    

  return (
    <>
       <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12">
                <div class="quiz-header">
                   <h4> {question}</h4>
                    <p>{helperText}</p>
                </div>
               

                <div class="quiz-body">
                    <div class="mb-4">
                    <label class="form-label">Height</label>
                       <input type="text" class="form-control" name="height" id="height" onChange={inputHandler}  />    
                    </div>
                    <div class="mb-4">
                       
                    <label class="form-label">Weight</label>
                    <input class="form-control" type="text" name="weight" id="weight" onChange={inputHandler} />
                    </div>
               <div class="d-grid mt-5">
               <button class="btn btn-black btn-block rounded-pill" onClick={()=>{handleRenderComponent(inputData)}}>Next</button>
               </div>
                


                </div>
                
        </div>
        </div>
        </div>
    </>
  )
}
