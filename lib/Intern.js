const Employee =require("./Employee")

class Intern extends Employee{
       constructor(name,id,email, GitHub){
           super(name,id,email)
           this.GitHub=GitHub 
       }

       getRole(){
         return 'Intern'
       }
}

module.exports=Intern