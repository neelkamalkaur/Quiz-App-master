import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ConsultationInfo from "./Components/ConsultationInfo/ConsultationInfo";
import UserInputName from "./Components/UserDetails/UserInputName";
import UserConserns from "./Components/UserConcerns/UserConserns";
import UserConsernsMore from "./Components/UserConcernsMore/UserConsernsMore";
import UserInfo from "./Components/UserDetails/UserInfo/UserInfo";
import UserSymDetails from "./Components/UserSymDetails/UserSymDetails";
import DermatologyUserChoice from "./Components/DermatologyChoice/DermatologyUserChoice";
import UserInputPrescription from "./Components/Madication_Prescription/UserInputPrescription";
import CoverHistory from "./Components/CoverHistory/CoverHistory";
import UserAllergicInfo from "./Components/UserAlergicDetails/UserAllergicInfo";
import HealthDiagonosedInfo from "./Components/HealthDiagonosedInfo/HealthDiagonosedInfo";
import { Context1Provider } from "./GlobalContext/userInfoContext1";
import { Context2Provider } from "./GlobalContext/userSymContext2";
import { Context3Provider } from "./GlobalContext/userDermatologyContext3";
import { Context4Provider } from "./GlobalContext/userInputPrescription";
import { Context5Provider } from "./GlobalContext/userAllergicInfoContext";
import { Context6Provider } from "./GlobalContext/userHealthDiagonosedContext";
import DescribePateint from "./Components/DescribePateint/DescribePateint";
import { Context7Provider } from "./GlobalContext/userDescribeContext";

function App() {
  return (
    <>
      <Context1Provider>
        <Context2Provider>
          <Context3Provider>
          <Context4Provider>
          <Context5Provider>
          <Context6Provider>
            <Context7Provider>
          
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<ConsultationInfo />} />
                <Route path="/userinputname" element={<UserInputName />} />
                <Route path="/userconcerns" element={<UserConserns />} />
                <Route
                  path="/userconcernsmore"
                  element={<UserConsernsMore />}
                />
                <Route path="/userinfo" element={<UserInfo />} />
                {/*Context1Provider*/}
                <Route path="/usersymdetails" element={<UserSymDetails />} />
                {/*Context2Provider*/}
                <Route
                  path="/dermatologyuser"
                  element={<DermatologyUserChoice />}
                />
                {/*Context3Provider*/}
                <Route
                  path="/userinputprescription"
                  element={<UserInputPrescription />}
                />    {/*Context4Provider*/}
                <Route path="/coverhistory" element={<CoverHistory />} />
       
                <Route
                  path="/userallergicinfo"
                  element={<UserAllergicInfo />}
                />

                    {/*Context5Provider*/}
                <Route
                  path="/healthdiagonosedinfo"
                  element={<HealthDiagonosedInfo />}
                />

                <Route path="/describepatient" element={<DescribePateint/>} />
              </Routes>
            </BrowserRouter>
            </Context7Provider>
            </Context6Provider>
            </Context5Provider>
            </Context4Provider>
          </Context3Provider>
        </Context2Provider>
      </Context1Provider>
    </>
  );
}

export default App;
