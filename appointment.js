document.getElementById('btn2').addEventListener('click', addAppointments);

let patients = [];

class Patient{
    constructor(username, email, password){

        this.username = username;
        this.email = email;
        this.password = password;
       
        }
       
}

    
    
 function addAppointments(e){
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('psw').value;
    let password2 = document.getElementById('psw-repeat').value;

    if (name && email && password && password2) {
        if (password === password2){
            if (patients.length > 0) {
                for (let i = 0; i < patients.length; i++)  {
                    if (email === patients[i].email) {
                        alert(`User with email ${email} already registered.`);
                        return;
                    }
                }
                let patient = new Patient(name, email, password);
                patients.push(patient);
                document.getElementById("myForm").reset();
                window.location.replace("index5.html");  
            }
            else {
                let patient = new Patient(name, email, password);
                patients.push(patient);
                window.location.replace("index5.html");
            }
        }
        else
            alert("Error! Passwords do not match!");
    }
    console.dir(patients);   

 }