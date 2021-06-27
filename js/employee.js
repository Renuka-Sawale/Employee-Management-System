document.getElementById("firstName").oninput = function () {
    console.log(this.value);
     let regex = RegExp('^[A-Z]{1}[a-z]{2,}$')
    console.log(regex.test(this.value))
    if (regex.test(this.value)) {
        document.getElementById("firstNameError").innerText = ""
    }
    else {
        document.getElementById("firstNameError").innerText = "Name is not valid"
    }
}

document.getElementById("lastName").oninput = function () {
    console.log(this.value);
    let regex = RegExp('^[A-Z]{1}[a-z]{2,}$')
    console.log(regex.test(this.value))
    if (regex.test(this.value)) {
        document.getElementById("lastNameError").innerText = ""
    }
    else {
        document.getElementById("lastNameError").innerText = "Last name is not valid"
    }
}

document.getElementById("email").oninput = function () {
    console.log(this.value);
    let regex = RegExp('^[a-zA-Z0-9]+([._+-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$')
    console.log(regex.test(this.value))
    if (regex.test(this.value)) {
        document.getElementById("emailError").innerText = ""
    }
    else {
        document.getElementById("emailError").innerText = "Email is not valid"
    }
}

document.getElementById("contact").oninput = function () {
    console.log(this.value);
    let regex = RegExp('^[0-9]{2}[0-9]{10}$');
    console.log(regex.test(this.value))
    if (regex.test(this.value)) {
        document.getElementById("contactError").innerText = ""
    }
    else {
        document.getElementById("contactError").innerText = "Contact is not valid"
    }
}

document.getElementById("salary").oninput = function () {
    console.log(this.value);
    let regex = RegExp('[0-9][1-9.]*[0-9]+[1-9]*');
    console.log(regex.test(this.value))
    if (regex.test(this.value)) {
        document.getElementById("salaryError").innerText = ""
    }
    else {
        document.getElementById("salaryError").innerText = "Salary is not valid"
    }
}

submitData = (e) => {
    e.preventDefault()
    console.log("addEmployee");
    let firstName= document.getElementById("firstName").value;
    let lastName= document.getElementById("lastName").value;
    let email= document.getElementById("email").value;
    let contact= document.getElementById("contact").value;
    let salary= document.getElementById("salary").value;

    let firstNameResult= validation(firstName, "firstNameError", "Fill the FirstName")
    let lastNameResult= validation(lastName, "lastNameError", "Fill the LastName")
    let emailResult= validation(email, "emailError", "Fill a Email address")
    let contactResult= validation(contact, "contactError", "Fill the Contact")
    let salaryResult= validation(salary, "salaryError", "Fill the Salary")

    if(firstNameResult && lastNameResult && emailResult && contactResult && salaryResult) {
        let userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            contact: contact,
            salary: salary
        }
        addEmployee(userData)
    }
}

validation = (value, id, message) => {
    console.log(value.length,id,message)
    if (value.length < 3) {
        document.getElementById(id).innerText = message
        return false;
    }
    else {
        document.getElementById(id).innerText = ""
        return true;
    }
}











