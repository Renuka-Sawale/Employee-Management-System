addEmployee = (data) => {
    ajaxCalling('GET','http://localhost:3000/employees',data )
}

ajaxCalling = (type, url, data) => {
    $.ajax({
        type : type,
        url: url,
        data: data,
        success: function (result) {
            console.log(result);
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
                        <img id="1" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                        <img id="1" onclick="update(this)" alt="edit"  src="../assets/icons/create-black-18dp.svg">
                    </td>
                </tr>`;
            $('#table-display').append(row);
        }document.querySelector(".count").textContent = data.length;
    }
}
