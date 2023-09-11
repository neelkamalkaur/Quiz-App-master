import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserPrescriptionContext } from '../../GlobalContext/userInputPrescription';


export default function CoverHistory() {

  const {state} = useUserPrescriptionContext();

  console.log(state.data);


    const navigate = useNavigate();

  return (
    <>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12">
            <div class="quiz-header-title mb-5">
            <h1>Cover History</h1>

            </div>
     
     
     <div class="quiz-body">
     <div class="d-grid my-4">
     <button class="btn btn-black btn-block rounded-pill" onClick={()=>{
        navigate('/userallergicinfo');
     }}>Continue</button>
     </div>
     </div>
     </div>
     </div>
     </div>
    

    </>
  )
}
