import React ,{useState} from "react";
import { prescription_choice } from "./UserInputPrescriptionData";
import { useNavigate } from "react-router-dom";
import InputTypeSelect from "./InputTypeSelect";
import UserSym from "../UserSymDetails/UserSym";
import { useUserPrescriptionContext } from "../../GlobalContext/userInputPrescription";

export default function UserInputPrescription() {
  const [userPrescriptionDetails, setUserPrescriptionDetails] = useState([]);
  const [prescriptionData, setPrescriptionData] = useState([
    ...prescription_choice,
  ]);
  const [step, setStep] = useState(1);
  const [renderData, setRenderData] = useState(prescriptionData.slice(0, 1));
  const navigate = useNavigate();

  const getSymptumDetails = (e) => {};

  const {state , dispatch} = useUserPrescriptionContext();

  const handleRenderComponent = async (data) => {
    await setStep((step) => {
      return step + 1;
    });

    if(step>=prescriptionData.length){

        dispatch({ type:'ADD_USER_INPUT_PRESCRIPTION_DATA', payload:  userPrescriptionDetails})

        navigate('/coverhistory');
    }

    await setRenderData(prescription_choice.slice(step, step + 1));
    await setUserPrescriptionDetails((prevState) => {
      return [...prevState, data];
    });
  };

  console.log(userPrescriptionDetails);
  return (
    <>


      {renderData.map((data, index) => {
        return (
            <div>
                    {

                        data.input_type === "select" ? (
                            <InputTypeSelect
                              question={data.question}
                              helperText={data.helper_text}
                              setStep={setStep}
                              handleRenderComponent={handleRenderComponent}
                            />
                          ) : (
                              <UserSym
                              question={data.question}
                              options={data.options}
                              facet={data.facet_tip}
                              getSymptumDetails={getSymptumDetails}
                              option_type={data.option_type}
                              input_type={data.input_type}
                              handleRenderComponent={handleRenderComponent}
                            />
                          )
                    }
                </div>
        )
      })}
    </>
  );
}
