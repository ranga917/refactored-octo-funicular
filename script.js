function register(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let department = document.getElementById("department").value;
    document.getElementById("registerBtn").disabled = true;

    if (phone.length !== 10) {
        alert("Enter a valid 10 digit phone number");
        return;
    }

    if (department === "") {
        alert("Please select your department");
        return;
      
    }

    document.querySelector("button[type='submit']").disabled = true;

    document.getElementById("result").innerHTML =
        "Registration Successful!" +
        "<br>Name: " + name +
        "<br>Email: " + email +
        "<br>Phone: " + phone +
        "<br>Department: " + department;
}