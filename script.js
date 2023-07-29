// Form

function response() {
    var nameInput = document.getElementById("name").value;
    var emailInput = document.getElementById("email").value;
    var numberInput = document.getElementById("contactnum").value;
    var titleInput = document.getElementById("titlewebsite").value;

    sessionStorage.setItem("name-data" , nameInput);
    sessionStorage.setItem("email-data" , emailInput);
    sessionStorage.setItem("number-data" , numberInput);
    sessionStorage.setItem("title-data" , titleInput);
}

function showResponse() {

    var showName = sessionStorage.getItem("name-data");
    var showEmail = sessionStorage.getItem("email-data");
    var showNumber = sessionStorage.getItem("number-data");
    var showTitle = sessionStorage.getItem("title-data");

    document.getElementById("name-response").innerText = showName;
    document.getElementById("email-response").innerText = showEmail;
    document.getElementById("number-response").innerText = showNumber;
    document.getElementById("title-response").innerText = showTitle;

}


// End of Form
