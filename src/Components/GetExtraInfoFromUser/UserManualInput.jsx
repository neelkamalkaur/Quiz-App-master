import React ,{useState} from "react";
import UserInput from "./UserInput";


export default function UserManualInput() {
  const [step, setStep] = useState(1);

  const [userSymptumData, setUserSymptumData] = useState([]);
  console.log(userSymptumData);

  return (
    <>
      {step == 1 && (
        <UserInput
          ques={"What was the outcome of your visit? Did you receive a diagnosis? If so, what was it?"}
          
          setStep={setStep}
          setUserSymptumData={setUserSymptumData}
        />
      )}
  
    </>
  );
}
