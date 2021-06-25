let firstName = document.getElementById("firstName").nodeValue;
let lastName = document.getElementById("lastName").nodeValue;
let email = document.getElementById("email").nodeValue;
let contact = document.getElementById("contact").nodeValue;
let salary = document.getElementById("salary").nodeValue;

let userData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    contact: contact,
    salary: salary
}

// addEmployee = (data) => {
//     ajaxCalling('post','http://localhost:3000/employees',data )
// }

// ajaxCalling = (type, url, data) => {
//     ajaxCalling('post','http://localhost:3000/employees',data)
// }

addEmployee = () => {
    $.ajax({
        type = 'post',
        url: 'http://localhost:3000/employees',
        data: userData,
        success: function (result) {
            console.log(result);
        },
        error: function (result) {
            console.log(result);
        }
    })
}
