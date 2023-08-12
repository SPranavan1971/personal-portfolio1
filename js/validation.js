function checknicno(){
    var nicno = document.getElementById("txtnicno").value;
    var nicnoError = document.getElementById("nicnoerror");

    if (/^\d{9}(V|E)?$/.test(nicno) || /^\d{12}$/.test(nicno)) {
        nicnoError.innerHTML = "";
    } else {
        nicnoError.innerHTML = "NIC NO must be 9 digits followed by V or E, or 12 digits.";
        document.getElementById("txtnicno").focus();
    }
}


function checkname() {
    const nameInput = document.getElementById('txtname');
    const nameError = document.getElementById('nameError');
    const txtname = nameInput.value;

    if (/^[A-Za-z\s]+$/.test(txtname)) {
        nameError.textContent = '';
    } else {
        nameError.textContent = 'Name must contain only letters and spaces.';
        document.getElementById("txtname").focus();
    }
}

 
function validateEmail() {
    const emailInput = document.getElementById('txtemail');
    const emailError = document.getElementById('emailError');
    const txtemail = emailInput.value;

    if (/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(txtemail)) {
        emailError.textContent = '';
    } else {
        emailError.textContent = 'Invalid email format. Example: john@example.com';
        document.getElementById("txtemail").focus();
    }
}




function checkmessage() {
    const messageInput = document.getElementById('txtmessage');
    const messageError = document.getElementById('messageError');
    const txtmessage = messageInput.value;

    if (/<[^>]+>/i.test(txtmessage)) {
        messageError.textContent = 'Message cannot contain HTML tags.';
        document.getElementById("txtmessage").focus();
    } else {
        messageError.textContent = '';
    }
}


