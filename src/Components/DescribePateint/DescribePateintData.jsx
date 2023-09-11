export const describe_data =[
    {
        id:21,

        input_type:"input_field",
        
        ques:"What is your current height and weight?",
        helper_text :"This Setp is optional - you can continue without completing this  question",
        
        input_field :[
            {field1:"Height"},
            {field2:"Weight"}
        ]

    },
    {
        id:21,

        input_type:"select",
        
        ques:"If you have measurements for blood pressure or heart rate taken within the past month, please provide them:",
        helper_text :"This Setp is optional - you can continue without completing this  question",
        
    
    },

    {
        id:1,
        option_type:"singal_option",
        ques:"What is your self-identified gen",
        options:[

           {
            id:1,
            option:"Male/Man",
           },
           {
            id:2,
            option:"Female/Woman",
           }
           ,
           {
            id:3,
            option:"Non-binary/ Genderqueer",
           }
           ,
           {
            id:4,
            option:"Other",
           }
           ,
           {
            id:5,
            option:"Prefer not to say",
           }

        ],
        facet_tip: {
            id: 1,
            text: "Facet providers are committed to delivering hight quality, inclusive care to all of our patients",
          },

    },
    {
        id:2,
        option_type:"singal_option",
        ques:"Which of the following descrives your race?",
        options:[

           {
            id:1,
            option:"White",
           },
           {
            id:2,
            option:"Black or African American",
           }
           ,
           {
            id:3,
            option:"Asian",
           }
           ,
           {
            id:4,
            option:"Native Hawaiian or Other Pacific Islander",
           }
           ,
           {
            id:5,
            option:"Prefer not to say",
           }

        ],
        facet_tip: {
            id: 1,
            text: "Facet providers are committed to delivering hight quality, inclusive care to all of our patients",
          },

    },
    {
        id:3,
        option_type:"singal_option",
        ques:"Which of the following describes your ethnicity?",
        options:[

           {
            id:1,
            option:"Hisoanic or Latino",
           },
           {
            id:2,
            option:"Non- Hispanic or Latino",
           }
           ,
           {
            id:3,
            option:"Prefer not to say",
           }
           ,
           {
            id:4,
            option:"Other",
           }
           

        ],
        facet_tip: {
            id: 1,
            text: "Facet providers are committed to delivering hight quality, inclusive care to all of our patients",
          },

    },


]