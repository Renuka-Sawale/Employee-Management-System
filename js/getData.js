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
                        <img id="1" onclick="update(this)" alt="edit"  src="../assets/icons/create-black-18dp.svg">
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
