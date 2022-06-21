
function checkName(element) {
    element.addEventListener('blur', () => {
    if (element.value !== '') {
        element.style.border = "1px solid #16A085";
    }
    else {
        element.style.border = "1px solid #D98880";
    };
    });
}
function checkEmail(element) {
    element.addEventListener('blur', () => {
    if (element.value
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            element.style.border = "1px solid #16A085";
        } else {
            element.style.border = "1px solid #D98880";
        }
    });

}

function checkPhoneNum() {}

function checkPassword() {}

function comparePasswords() {}

const fName = document.getElementById('f-name');
const lName = document.getElementById('l-name');
const email = document.getElementById('email')

checkName(fName);
checkName(lName);
checkEmail(email);