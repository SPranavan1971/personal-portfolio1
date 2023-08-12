function togglePasswordVisibility(icon) {
    const passwordInput = icon.previousElementSibling;
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}







// document.addEventListener('DOMContentLoaded', function () {
//     const passwordInput = document.getElementById('password');
//     const showPasswordButton = document.getElementById('showPasswordButton');
    
//     showPasswordButton.addEventListener('click', function () {
//         if (passwordInput.type === 'password') {
//             passwordInput.type = 'text';
//             showPasswordButton.textContent = 'Hide Password';
//         } else {
//             passwordInput.type = 'password';
//             showPasswordButton.textContent = 'Show Password';
//         }
//     });
// });
