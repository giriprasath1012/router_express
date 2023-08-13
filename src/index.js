const express=require("express");
const app=express();
const PORT=3005;

const students=require("./routes/students");
const attendence=require("./routes/attendence");
const academic=require("./routes/academic");

app.use(express.json());
app.use(students);
app.use(attendence);
app.use(academic);

const details=[
    {
        Students_List:"/students"
    },
    {
        Attendence_details:"/attendence"
    },
    {
        Academic_details:"/academic"
    }

]

app.listen(PORT,()=>{
    console.log(`Server is Running On Port ${PORT}`);
}
);

app.get("/",(request,response)=>{
    response.send(details);
});

