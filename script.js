function displayContactInfo() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;
  
    var contactInfo = "First Name: " + firstName + "<br>" +
                      "Last Name: " + lastName + "<br>" +
                      "Phone Number: " + phoneNumber + "<br>" +
                      "Email: " + email;
  
    document.getElementById("contactInfo").innerHTML = contactInfo;
  }
  