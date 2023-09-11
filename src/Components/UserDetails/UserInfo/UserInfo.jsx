import React, { useState } from 'react'
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Step4 from './Steps/Step4';
import { useInfoContext } from '../../../GlobalContext/userInfoContext1';
import { useNavigate } from 'react-router-dom';


export default function UserInfo() {

    const { state, dispatch } = useInfoContext();
    const navigate = useNavigate();



    const [step, setStep] = useState(1);

    const [userInfo, setUserInfo] = useState(
        {
            firstname: "",
            lastname: "",
            email: '',
            country: "",
            password: "",
            sex: "",
            dob: "",
        }
    )

    const setUserInfoData = async()=>{
        console.log('Set User Info');

      await   dispatch({ type: 'ADD_USERINFO_DATA', payload: userInfo });


        navigate("/usersymdetails")

    }

    console.log(userInfo);

    return (

        <div class="">

            <div class="">
                {/*First step 1 */}

                {
                    step == 1 &&
                    <Step1 setStep={setStep} setUserInfo={setUserInfo} />
                }


            </div>
            <div>
                {
                    step === 2 && <Step2 setStep={setStep} setUserInfo={setUserInfo} />
                }
            </div>
            <div>
                {
                    step === 3 && <Step3 setStep={setStep} setUserInfo={setUserInfo}/>
                }


            </div>

            <div>
                {
                    step === 4 && <Step4 setStep={setStep} setUserInfo={setUserInfo} setUserInfoData={setUserInfoData}/>
                }

            </div>

        </div>

    )
}
