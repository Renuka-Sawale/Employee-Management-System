let valid= false;
submitData = (e) => {
    e.preventDefault()
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;
    let salary = document.getElementById("salary").value;

    if(valid) {
        let userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            contact: contact,
            salary: salary
        }
        addEmployee(userData)
    } else {
        return false;
    }
} 

addEmployee = (data) => {
    ajaxCalling('post','http://localhost:3000/employees',data )
}

ajaxCalling = (type, url, data) => {
    $.ajax({
        type = type,
        url: url,
        data: data,
        success: function (result) {
            console.log(result);
        },
        error: function (result) {
            console.log(result);
        }
    })
}
