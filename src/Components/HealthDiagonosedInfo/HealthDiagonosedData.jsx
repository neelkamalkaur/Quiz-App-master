
// for check_box


export const diagonosed_choice = [
  {
    id: 1,
    question: "Have you been diagnosed with any health condition?",
    helper_text:
      "Certain medications cannot be safely prescribed with certain conditions so this is important for your medical provider to know.",
    option_type:"singal_option",
    options: [
      {
        id: 1,
        option: "Yes",
      },
      {
        id: 2,
        option: "NO",
      },
    ],
  },
  {
    id: 2,
    question: "Please seleted any and all health conditions you have been diagnosed with",
    helper_text:
      "If they aren’t listed, you’ll have a change to add them in the next question.",
    input_type: "select",
  },
  {
    id: 3,
    question:
      "Please explain when you were diagnosed and how, if at all, you are actively treating your condition. Please also list any health conditions that were not included in the previous list.",
    helper_text: "",
    input_type:"text_area",
   
  },

  {
    id: 4,
    question:
      "Has anyone in your immediate family (brothers, sisters, mother or father) been diagnosed with any health conditions?",
    
    option_type: "singal_option",

    options: [
      {
        id: 1,
        option: "Yes",
      },
      {
        id: 2,
        option: "No",
      },
    ],
  },
  {
    id: 5,
    question:
      "Please seleted any and all health conditions you have been diagnosed with",
    
    input_type:"select",
    helper_text: "If they aren’t listed, you’ll have a change to add them in the next question.",
  },

  {
    id:6,
    question:"Please explain when you were diagnosed and how, if at all, you are actively treating your condition. Please also list any health conditions that were not included in the previous list.",
    input_type:"text_area",
  },
  {
    id:7,
    question:"Has anyone in your immediate family (brothers, sisters, mother or father) been diagnosed with any health conditions?",
    option_type:"singal_option",
    options:[
        {
            id:1,
            option:"Yes",

        }
        ,
        {
            id:2,
            option:"No",
        }
    ]
  },
  {
    id: 8,
    question:
      "Please select any and all health conditions your immediate family (brothers, sisters, mother and father) have been diagnosed with.",
    
    input_type:"select",
    
  },
  {
    id:9,
    question:"Have you had previous surgeries fo procedures?",
    option_type:"singal_option",
    options:[
        {
            id:1,
            option:"Yes",

        }
        ,
        {
            id:2,
            option:"No",
        }
    ]
  },

  {
    id:9,
    question:"List surgery(s) or procedure(s) and the year in which they occurred. If there were any complications, please expand upon your experience here.",
    input_type:"text_area",
  },



];
