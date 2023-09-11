import React, { useState } from "react";
import { describe_data } from "./DescribePateintData";
import InputDataFromUser from "./InputDataFromUser";
import InputTypeSelect from "../Madication_Prescription/InputTypeSelect";
import { useNavigate } from "react-router-dom";
import UserSym from "../UserSymDetails/UserSym";
import { useDescribeInfoContext } from "../../GlobalContext/userDescribeContext";

export default function DescribePateint() {
  const [userDescDetails, setUserDescDetails] = useState([]);
  const [describeUserData, setDescribeData] = useState([...describe_data]);
  const [step, setStep] = useState(1);
  const [renderData, setRenderData] = useState(describeUserData.slice(0, 1));

  const navigate = useNavigate();

  const {state ,dispatch} = useDescribeInfoContext();

  const handleRenderComponent = async (data) => {


    if (step > describeUserData.length) {
        await  dispatch({ type: "ADD_USER_DESCRIBE_DATA", payload: userDescDetails });
        navigate('/');
 
    }
    await setStep((step) => {
      return step + 1;
    });
    await setUserDescDetails((prevState) => {
      return [...prevState, data];
    });


    await setRenderData(describeUserData.slice(step, step + 1));

 
  };

  console.log(userDescDetails);
  return (
    <>
      {renderData.map((data, index) => {
  
        return (
          <>
            {data.input_type === "input_field" ? (
              <InputDataFromUser
                data={data}
                handleRenderComponent={handleRenderComponent}
                key={index}
                question={data.ques}
                helperText={data.helper_text}
              />
            ) : data.input_type === "select" ? (
              <InputTypeSelect
                question={data.ques}
                helperText={data.helper_text}
             
                handleRenderComponent={handleRenderComponent}
              />
            ) : (
              <UserSym
                setStep={setStep}
                question={data.ques}
                options={data.options}
                facet={data.facet_tip}
                option_type={data.option_type}
                input_type={data.input_type}
                handleRenderComponent={handleRenderComponent}
              />
            )}
          </>
        );
      })}
    </>
  );
}
