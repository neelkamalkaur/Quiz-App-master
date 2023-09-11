import React ,{useState} from 'react'
import { user_allergic_data } from './UserAllergicData'
import { useNavigate } from 'react-router-dom';
import UserSym from '../UserSymDetails/UserSym';


import InputTypeSelect from '../Madication_Prescription/InputTypeSelect';
import { useAllergicInfoContext } from '../../GlobalContext/userAllergicInfoContext';


export default function UserAllergicInfo() {


  const [userAllergicDetails, setUserAllergicDetails] = useState([]);
  const [allergicData, setAllergicData] = useState([
    ...user_allergic_data,
  ]);
  const [step, setStep] = useState(1);
  const [renderData, setRenderData] = useState(allergicData.slice(0, 1));
  const navigate = useNavigate();
  const {state , dispatch} = useAllergicInfoContext();

  const getSymptumDetails = (e) => {};

  const handleRenderComponent = async (data) => {
    await setStep((step) => {
      return step + 1;
    });

    if(step>=allergicData.length){
      await   dispatch({ type: 'ADD_USER_ALLERGIC_INFO_DATA', payload:  userAllergicDetails});

        navigate('/healthdiagonosedinfo');
    }

    await setRenderData(allergicData.slice(step, step + 1));
    await setUserAllergicDetails((prevState) => {
      return [...prevState, data];
    });
  };

  console.log(userAllergicDetails);
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
                              helperText={data.helper_text}
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
  )
}
