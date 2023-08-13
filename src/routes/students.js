const { Router }=require("express");
const router=Router();

const stud_list=[
    {
        name:"Giri Prasath",
        dept:"Computer Science And Engineering",
        sec:1,
        year:"3rd year",
        Rollno:71762105017
    },
    {
        name:"Ajay Krishna",
        dept:"Computer Science And Engineering",
        sec:1,
        year:"3rd year",
        Rollno:71762105003
    },
    {
        name:"Mukilan",
        dept:"Computer Science And Engineering",
        sec:1,
        year:"3rd year",
        Rollno:71762105039
    }

]

router.get("/students",(request,response)=>{

    response.send(stud_list);
});

router.post("/students",(request,response)=>{
    stud_list.push(request.body);
    response.send(stud_list);
});

module.exports=router;