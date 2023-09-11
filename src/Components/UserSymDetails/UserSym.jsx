import React, { useState } from "react";

export default function UserSym({
 
  handleRenderComponent,
 
  question,
  options,
  option_type,
  facet,

  input_type,
  helperText,
 
}) {



  let isInputTypeText = false;

  if (input_type == "text_area") {
    isInputTypeText = true;
  }

  const [textAreaData, setTextAreaData] = useState({
    ques: "",
    ans: "",
  });

  const [checkedOptions, setCheckedOptions] = useState({});

  let radioValue = "";

  let isSingleOption = false;
  const [symInputData, setSymInputData] = useState({
    ques: "",
    checked_option: [],
  });

  if (option_type === "singal_option") {
    radioValue = symInputData.checked_option[0]?.option_name;

    isSingleOption = true;
  }
  const resetSymInputData = async () => {
    console.log("Resetting the state");
    await setSymInputData({
      ques: "",
      checked_option: [],
    });
    setCheckedOptions({});

    await setTextAreaData({
      ques: "",
      ans: "",
    })

  };

  const setSymData = async (e, question, option_type = "multi_option") => {
    if (option_type === "singal_option") {
      
      
      let data = {
        option_name: e.target.name,
        value: e.target.checked,
      };

      

      await setSymInputData({
        ...symInputData,
        ques: question,
        checked_option: [data],
      });
      setCheckedOptions((prevState) => ({
        ...prevState,
        [e.target.name]: !prevState[e.target.name],
      }));
    } else {
      if (!e.target.checked) {
        let newData = symInputData.checked_option.filter((data) => {
          return data.option_name != e.target.name;
        });

        await setSymInputData({
          ...symInputData,
          ques: question,
          checked_option: [...newData],
        });
        setCheckedOptions((prevState) => ({
          ...prevState,
          [e.target.name]: !prevState[e.target.name],
        }));
      } else {
        let data = { option_name: e.target.name, value: e.target.checked };

        await setSymInputData({
          ...symInputData,
          ques: question,
          checked_option: [...symInputData.checked_option, data],
        });
        setCheckedOptions((prevState) => ({
          ...prevState,
          [e.target.name]: !prevState[e.target.name],
        }));
      }
    }
  };

 
  return (
    <>
   
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12">
            <div class="quiz-header-title mb-5">
              <h4 class="mb-3">{question}</h4>
              <p>{helperText}</p>
            </div>

            {isInputTypeText ? (
              <div class="quiz-body">
                <div class="mb-4">
                  <textarea class="form-control" rows="5" 
                  value={textAreaData.ans}
                    onChange={async (e) => {
                      await setTextAreaData((prevState) => ({
                        ...prevState,

                        ques: question,
                        ans: e.target.value,
                      }));
                    }}
                  ></textarea>
                </div>
                <div class="d-grid mt-5">
                <button class="btn btn-block btn-black rounded-pill" 
                  onClick={async () => {
                    radioValue = null;

                    handleRenderComponent(textAreaData);
                  }}
                >
                  Next
                </button>
                </div>
              </div>
            ) : (
              <div class="quiz-body">
                <div class="mb-4">
                  <div class="col">
                    {!isSingleOption
                      ? options.map((data, index) => {
                          return (
                            <div class="check-box-wrap">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id={data.id}
                                name={data.option}
                                checked={checkedOptions[data.option]}
                                onChange={(e) =>
                                  setSymData(e, question, option_type)
                                }
                              />
                              <label class="form-check-label" htmlFor={data.id}>
                                {data.option}
                              </label>
                            </div>
                          );
                        })
                      : options.map((data) => {
                          return (
                            <div class="check-box-wrap">
                              <input
                                class="form-check-input"
                                type="radio"
                                checked={radioValue === data.option}
                                name={data.option}
                                onChange={(e) =>
                                  setSymData(e, question, option_type)
                                }
                              />
                              <label class="form-check-label">
                                {data.option}
                              </label>
                            </div>
                          );
                        })}
                  </div>
                </div>
                {facet && (
                  <div class="facetip mb-1">
                    <h4>
                      <span class="info-icon">
                        <i class="bi bi-info-circle-fill"></i>
                      </span>
                      Face Tip
                    </h4>
                    <p>{facet.text}</p>
                  </div>
                )}
                <div class="d-grid py-2 mt-5 ">
                  <button
                    class="btn btn-block btn-black rounded-pill py-2"
                    onClick={async () => {
                      radioValue = null;

                      // await resetSymInputData(); // Reset the state
                     handleRenderComponent(symInputData);

                    ;
                    }}
                  >
                    Button
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
