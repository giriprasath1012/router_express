const { Router }=require("express");
const router=Router();

const acad_details=[
    {
        GiriPrasath :"/academic/giriprasath"
    },
    {
        AjayKrishna:"/academic/ajaykrishna"
    },
    {
        Mukilan:"/academic/mukilan"
    }
    
];

const acad_marks={
    giriprasath:[
        {
            Sem_1:"8.33 GPA",
            Sem_2:"8.41 GPA",
            Sem_3:"8.48 GPA" 
        }   
    ],
    ajaykrishna:[
        {
            Sem_1:"7.67 GPA",
            Sem_2:"7.9 GPA",
            Sem_3:"8.33 GPA"
        }
    ],
    mukilan:[
        {
            Sem_1:"7.75 GPA",
            Sem_2:"8.45 GPA",
            Sem_3:"8.45 GPA"
        }
    ]
};
    

router.get("/academic",(request,response)=>{

    response.send(acad_details);
});

router.get("/academic/:name",(request,response)=>{

    const {name}=request.params;
    console.log(name);
    response.send(acad_marks[name]);
});

router.post("/academic",(request,response)=>{
    acad_details.push(request.body);
    response.send(acad_details);
});



module.exports=router;