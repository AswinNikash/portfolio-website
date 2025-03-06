document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const responseMessage = document.getElementById("response-message");

    if (name && email && message) {
        responseMessage.innerText = `Thank you for reaching out, ${name}! I will get back to you soon.`;
        responseMessage.style.color = "green";

        // Reset the form
        document.getElementById("contact-form").reset();
    } else {
        responseMessage.innerText = "Please fill in all fields.";
        responseMessage.style.color = "red";
    }
});
