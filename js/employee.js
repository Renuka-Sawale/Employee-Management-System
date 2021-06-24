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



