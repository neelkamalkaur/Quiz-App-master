export const prescription_choice = [
    {
      id: 20,
      question:
        "Please select any prescription or over-the-counter medications(s) you have tried in the past for your skin.",
      helper_text:
        "It's very important that you provide a complete list of medications you've taken to treat your skin. This will help your provider determine the right treatment plan for you.",
      input_type: "select",
      options: [
        {
          id: 1,
          option: "option_1",
        },
        {
          id: 2,
          option: "option_2",
        },
      ],
    },
    {
      id: 21,
      question: "What was your experience like with each medication?",
      helper_text:
        "Please include when you started and stopped, and why you stopped (including any side effects) each medication. Please also note if any of your past medications are ones you would like to take again, if recommended by your provider.",
      input_type: "text_area", 
    },
    {
      id: 22,
      question:
        "Are you currently using any prescription or over-the-counter medications for your skin?",
      helper_text: "",
      type: "checkbox",
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
      id: 23,
      question:
        "Please select any prescription or over-the-counter medications(s) you are currently using for your skin.",
      helper_text: "",
      option_type: "singal_option",
      input_type: "select",
      options: [
        {
          id: 1,
          option: "option_1",
        },
        {
          id: 2,
          option: "option_2",
        },
      ],
    },
  
    {
      id: 24,
      question:
        "Please select any prescription or over-the-counter medications(s) you are currently using for your skin.",
      helper_text: "",
      option_type: "singal_option",
      input_type: "select",
      options: [
        {
          id: 1,
          option: "option_1",
        },
        {
          id: 2,
          option: "option_2",
        },
      ],
    },
    {
      id: 25,
      question:
        "Do you take any other medications, vitamins, or supplements (not necessarily for your skin)?",
      helper_text: "Certain medications, vitamins, and supplements can interact with medications used to treat skin conditions, so this is important for your medical provider to know.",
      type: "checkbox",
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
      id: 26,
      question:
        "Please select any other medications, vitamins, or supplements you are currently taking (not necessarily for your skin).",
      helper_text: "If they aren't listed, you'll have a chance to add them in the next question.",
      option_type: "singal_option",
      input_type: "select",
      options: [
        {
          id: 1,
          option: "option_1",
        },
        {
          id: 2,
          option: "option_2",
        },
      ],
    },
    {
      id: 27,
      question: "Please list your medication, vitamin, or supplement dosages, frequencies, and if you take them for a certain condition. Include any products that were not included in the previous list.",
      helper_text:
        "", 
        input_type: "text_area",
    },
  ];