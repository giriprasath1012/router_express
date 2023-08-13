const { Router }=require("express");
const router=Router();

const att_details=[
    {
        name:"Giri Prasath",
        Rollno:71762105017,
        Attendence_percentage:[
            {
                Sem_1:98
            },
            {
                Sem_2:90
            },
            {
                Sem_3:95
            },
            {
                Sem_4:91
            }
        ]
    },
    {
        name:"Ajay Krishna",
        Rollno:71762105003,
        Attendence_percentage:[
            {
                Sem_1:99
            },
            {
                Sem_2:95
            },
            {
                Sem_3:90
            },
            {
                Sem_4:93
            }
        ]
    },
    {
        name:"Mukilan",
        Rollno:71762105039,
        Attendence_percentage:[
            {
                Sem_1:98
            },
            {
                Sem_2:95
            },
            {
                Sem_3:94
            },
            {
                Sem_4:90
            }
        ]
    }
]

router.get("/attendence",(request,response)=>{

    response.send(att_details);
});

router.post("/attendence",(request,response)=>{
    att_details.push(request.body);
    response.send(att_details);
});

module.exports=router;
