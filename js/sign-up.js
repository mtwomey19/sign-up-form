
function checkName(element) {
    element.addEventListener('blur', (event) => {
    if (element.value === '') {
        element.style.border = "1px solid #D98880";
    }
    else {
        element.style.border = "1px solid #16A085"
    };
    });
}
function checkEmail() {}

function checkPhoneNum() {}

function checkPassword() {}

function comparePasswords() {}

const fName = document.getElementById('f-name');
const lName = document.getElementById('l-name');
checkName(fName);
checkName(lName);