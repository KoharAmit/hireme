//client side js
function confirmDelete() {
    return confirm('Are you sure do you want to delete this?')
}

function comparePasswords() {
    let pw1 = document.getElementById('password').value;
    let pw2 = document.getElementById('confirm').value;
    let pwMsg = document.getElementById('pwMsg');

    if (pw1 != pw2) {
        pwMsg.innerText = "Password do not match";
        pwMsg.className = 'text-danger';

    } else {
        pwMsg.innerText = "";
        pwMsg.className = '';
        return true;
    }
}

function showHide() {

    let pw = document.getElementById('password');
    let img = document.getElementById('imgShowHide');

    if (pw.type == 'password') {
        pw.type = 'text';
        img.src = '/images/hide.png'
    } else {
        pw.type = 'password';
        img.src = '/images/show.png'
    }
}