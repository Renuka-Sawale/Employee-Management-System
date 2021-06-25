addEmployee = (data) => {
    ajaxCalling('post','http://localhost:3000/employees',data )
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
}
