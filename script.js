function getFormvalue(event) {
    // Prevent the form from actually submitting
    event.preventDefault();

    // Get the values of the first and last name fields
    let firstName = document.forms["form1"]["fname"].value;
    let lastName = document.forms["form1"]["lname"].value;

    // Display the values in an alert
    alert(firstName + " " + lastName);
}
