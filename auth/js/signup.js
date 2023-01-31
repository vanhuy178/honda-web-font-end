
const checkValidation = (e) => {
    // console.log('hi');
    e.preventDefault()

    let valid = true;
    let checkEmaiEmpty = checkEmpty('.input-signup-username', '.message-email', 'Email')
    let checkPassEmpty = checkEmpty('.input-signup-password', '.message-password', 'Password');
    // check rỗng ok tiếp theo là check mail hợp lệ
    valid = checkEmaiEmpty & checkPassEmpty

    // check mail có hợp lệ hay ko
    let checkValidMail = checkEmail('.input-signup-username', '.message-check-email')
    let checkValidPassword = checkPassword('.input-signup-password', '.message-check-pass');
    valid &= checkValidPassword;
    valid &= checkValidMail;


    if (valid) {
        window.location.href = '../../auth/login.html'
    }
    return valid
}

const checkEmpty = (value, element, name) => {
    let inputValue = document.querySelector(value).value;
    let elementInDom = document.querySelector(element)
    if (inputValue === '') {
        elementInDom.innerHTML = name + ' Không được bỏ trống';
        elementInDom.style.display = 'block'
        return false
    }
    else {
        elementInDom.innerHTML = '';
        elementInDom.style.display = 'none'
        return true
    }
}

const checkEmail = (value, element) => {
    const inputValue = document.querySelector(value).value;
    console.log(inputValue);
    const elementInDom = document.querySelector(element);

    const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (re.test(inputValue)) {
        elementInDom.innerHTML = '';
        elementInDom.style.display = 'none'
        return true
    }
    else {
        elementInDom.innerHTML = 'Email không hợp lệ'
        elementInDom.className = 'text-danger'
        elementInDom.style.display = 'block'
        return false
    }

}

const checkPassword = (value, element) => {
    const inputValue = document.querySelector(value).value;
    console.log(inputValue.length);
    const elementInDom = document.querySelector(element);
    if (inputValue.length < 8) {
        elementInDom.innerHTML = 'Password phải ít nhất 8 ký tự';
        elementInDom.className = 'text-danger';
        elementInDom.style.display = 'block'
        return false
    }
    else if (inputValue.length > 15) {
        elementInDom.innerHTML = 'Password không vượt quá 15 ký tự';
        elementInDom.className = 'text-danger';
        elementInDom.style.display = 'block'
        return false
    }

    else {
        elementInDom.innerHTML = '';
        elementInDom.style.display = 'none'
        return true;
    }
}

document.querySelector('.signup__signInButton').onclick = checkValidation;