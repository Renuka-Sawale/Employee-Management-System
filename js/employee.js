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
        document.getElementById("email").innerText = ""
    }
    else {
        document.getElementById("emailError").innerText = " Email is not valid"
    }
}

document.getElementById("contact").oninput = function () {
    console.log(this.value);
    let regex = RegExp('^[0-9]{2}[0-9]{10}$');
    console.log(regex.test(this.value))
    if (regex.test(this.value)) {
        document.getElementById("contact").innerText = ""
    }
    else {
        document.getElementById("contactError").innerText = " Contact is not valid"
    }
}

// document.getElementById("salary").oninput = function () {
//     console.log(this.value);
//     let regex = RegExp('^[0-9]{2} [0-9]{10}$');
//     console.log(regex.test(this.value))
//     if (regex.test(this.value)) {
//         document.getElementById("salary").innerText = ""
//     }
//     else {
//         document.getElementById("salaryError").innerText = "Enter the valid salary"
//     }
// }

submit = () => {
    console.log("addEmployee");
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;
    let salary = document.getElementById("salary").value;

    validation(firstName, "firstNameError", "FirstName should be atleast 3 characters")
    validation(lastName, "lastNameError", "lastName should be atleast 3 characters")
    validation(email, "emailError", "Choose a email address")
    validation(contact, "contactError", "Contact should be atleast 10 digits")
    validation(salary, "salaryError", "Salary should be atleast 3 characters")


    validation = (value, id, message) => {
        if (value < 3) {
            document.getElementById("id").innerText = "message"
        }
        else {
            document.getElementById("id").innerText = ""
        }
    }
}



