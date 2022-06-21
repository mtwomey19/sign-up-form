let submitButton = document.getElementById('submit-button');

function checkName(element, errorElement) {
    element.addEventListener('blur', () => {
    if (element.value !== '') {
        element.style.border = "1px solid #16A085";
        errorElement.textContent = '';
        submitButton.disabled = false;
    }
    else {
        element.style.border = "1px solid #D98880";
        errorElement.textContent = 'I\'m sorry, I didn\'t catch your name';
        submitButton.disabled = true;
    };
    });
}
function checkEmail(element, errorElement) {
    element.addEventListener('blur', () => {
    if (element.value
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            element.style.border = "1px solid #16A085";
            errorElement.textContent = '';
            submitButton.disabled = false;
        } else {
            element.style.border = "1px solid #D98880";
            errorElement.textContent = 'I\'m having trouble validating your email';
            submitButton.disabled = true;
        }
    });

}

function checkPhoneNum(element, errorElement) {
    element.addEventListener('blur', () => {
        if (element.value
            .match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) {
                element.style.border = "1px solid #16A085";
                errorElement.textContent = '';
                submitButton.disabled = false;
            }
            else {
                element.style.border = "1px solid #D98880";
                errorElement.textContent = 'Can you try re-entering your number';
                submitButton.disabled = true;   
            }
    });
}

function checkPassword(element, errorElement) {
    element.addEventListener('blur', () => {
        if (element.value
            .match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
                element.style.border = "1px solid #16A085";
                errorElement.textContent = '';
                submitButton.disabled = false;
            } else {
                element.style.border = "1px solid #D98880";
                errorElement.textContent = 'Try a password with (at least 8 characters, 1 upper, 1 lower, 1 number, and 1 symbol)';
                submitButton.disabled = true;
            }
    });
}


function comparePasswords(element, errorElement) {
    element.addEventListener('blur', () => {
        let password = document.getElementById('password').value;
        if (element.value === password) {
            element.style.border = "1px solid #16A085";
            errorElement.textContent = '';
            submitButton.disabled = false;
        } else {
            element.style.border = "1px solid #D98880";
            errorElement.textContent = 'The passwords don\'t seem to match';
            submitButton.disabled = true;
        }
    });
}

function checkSubmissionOnEnter(element, passwordElement, confirmPasswordElement) {
    element.addEventListener('click', (e) => {
        if (passwordElement.value !== confirmPasswordElement.value) {
            e.preventDefault();
        }
    });
}

const fName = document.getElementById('f-name');
let fNameError = document.getElementById('fname-error');
const lName = document.getElementById('l-name');
let lNameError = document.getElementById('lname-error');
const email = document.getElementById('email');
let emailError = document.getElementById('email-error')
const phoneNum = document.getElementById('phone-num');
let phoneError = document.getElementById('phone-error');
const password = document.getElementById('password');
let passwordError = document.getElementById('password-error');
const confirmPassword = document.getElementById('confirm-password');
let confirmPasswordError = document.getElementById('confirm-password-error');

checkName(fName, fNameError);
checkName(lName, lNameError);
checkEmail(email, emailError);
checkPhoneNum(phoneNum, phoneError);
checkPassword(password, passwordError);
comparePasswords(confirmPassword, confirmPasswordError);
checkSubmissionOnEnter(submitButton, password, confirmPassword);