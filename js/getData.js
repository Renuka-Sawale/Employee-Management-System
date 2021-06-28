function getEmployee () {
    ajaxCalling('GET','http://localhost:3000/employees')
}

ajaxCalling = (type, url) => {
    $.ajax({
        type : type,
        url: url,
        success: function (result) {
            insertTableData(result);
        },
        error: function (result) {
            console.log(result);
        }
    })
    insertTableData = (data) => {
        let row = "";
        for (let i = 0; i < data.length; i++) {
            row =
                `<tr>
                    <td>${data[i].firstName}</td>
                    <td>${data[i].lastName}</td>
                    <td>${data[i].email}</td>
                    <td>${data[i].contact}</td>
                    <td>${data[i].salary}</td>
                    <td>
                        <img id="1" onclick="remove(${data[i].id})" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                        <img id="submitBtn" src="../assets/icons/create-black-18dp.svg" type="button" onclick="displayModal('${data[i].firstName}','${data[i].lastName}','${data[i].email}','${data[i].contact}','${data[i].salary}')"> 
                    </td>
                </tr>`;
            $('#table-display').append(row);
        }
    }
}

const remove= (id)=> {
    $.ajax({
        type : 'delete',
        url: 'http://localhost:3000/employees/' +id,
        success: function (result) {
            window.location.reload();
        },
        error: function (result) {
            console.log(result);
        }
    })
}

// function postData() {
//     let firstName = document.getElementById("firstName").value;
//     let lastName = document.getElementById("lastName").value;
//     let email = document.getElementById("email").value;
//     let contact = document.getElementById("number").value;
//     let salary = document.getElementById("salary").value;

//     let putUserData = {
//         firstName: firstName,
//         lastName: lastName,
//         email: email,
//         contact: contact,
//         salary: salary
//     }

//     $.ajax({
//         type: 'POST',
//         url: 'http://localhost:3000/employees',
//         data: putUserData,
//         success: function (result) {
//             resetFields();
//             window.location.href = "../html/dashboard.html";
//         },
//         error: function (result) {
//             console.log(result);
//         }
//     });
// }

var modal = document.getElementById("employeeModal");
//var btn = document.getElementById("submitBtn");
// var btn = document.getElementById("submitBtn");
// btn.onclick = function() {
//     modal.style.display = "block";
// }

function displayModal(firstName, lastName, email, contact, salary) {
    modal.style.display = "block";

    document.getElementById("firstName").value = firstName;
    document.getElementById("lastName").value = lastName;
    document.getElementById("email").value = email;
    document.getElementById("contact").value = contact;
    document.getElementById("salary").value = salary;
}

function putData() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;
    let salary = document.getElementById("salary").value;
    
    let putEmpData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        contact: contact,
        salary: salary
    }

    $.ajax({
        type: 'PUT',
        url: 'http://localhost:3000/employees/' + id,
        data: putEmpData,
        success: function (result) {
            getEmployee();
        },
        error: function (result) {
            console.log(result);
        }
    });
}




