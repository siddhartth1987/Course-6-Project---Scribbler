// Javascript code for header

const modalContainer = document.getElementById('modal-container');
const signUpModal = document.getElementById('modal-signup');
const signInModal = document.getElementById('modal-signin');

function SignUp() {
    modalContainer.style.display = 'block';
    signUpModal.style.display = 'block';
}

function SignIn() {
    modalContainer.style.display = 'block';
    signInModal.style.display = 'block';
}

function CloseSignUp() {
    modalContainer.style.display = 'none';
    signUpModal.style.display = 'none';
}

function CloseSignIn() {
    modalContainer.style.display = 'none';
    signInModal.style.display = 'none';
}
