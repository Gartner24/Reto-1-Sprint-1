const btn_1 = document.getElementById('btn-1');
const btn_2 = document.getElementById('btn-2');
const btn_3 = document.getElementById('btn-3');
const btn_4 = document.getElementById('btn-4');
const btn_5 = document.getElementById('btn-5');
const btn_6 = document.getElementById('btn-6');
const btn_7 = document.getElementById('btn-7');


const box_1 = document.getElementById('box-1');
const box_2 = document.getElementById('box-2');
const box_3 = document.getElementById('box-3');

const content_1 = document.getElementById('content-1');
const content_2 = document.getElementById('content-2');
const content_3 = document.getElementById('content-3');
const content_4 = document.getElementById('content-4');

const arrow_1 = document.getElementById('arrow-1');
const arrow_2 = document.getElementById('arrow-2');
const arrow_3 = document.getElementById('arrow-3');
const arrow_4 = document.getElementById('arrow-4');

const $form = document.querySelector('form');
const $buttonMailto = document.getElementById('contact0')

document.addEventListener('DOMContentLoaded', () => {
    btn_1.classList.add('active');
    box_1.style.display = 'flex';
    box_2.style.display = 'none';
    box_3.style.display = 'none';
});

btn_1.addEventListener('click', () => {
    btn_1.classList.add('active');
    btn_2.classList.remove('active');
    btn_3.classList.remove('active');
    box_1.style.display = 'flex';
    box_2.style.display = 'none';
    box_3.style.display = 'none';
});

btn_2.addEventListener('click', () => {
    btn_1.classList.remove('active');
    btn_2.classList.add('active');
    btn_3.classList.remove('active');
    box_1.style.display = 'none';
    box_2.style.display = 'flex';
    box_3.style.display = 'none';
});

btn_3.addEventListener('click', () => {
    btn_1.classList.remove('active');
    btn_2.classList.remove('active');
    btn_3.classList.add('active');
    box_1.style.display = 'none';
    box_2.style.display = 'none';
    box_3.style.display = 'flex';
});

document.addEventListener('DOMContentLoaded', () => {
    btn_4.classList.add('FAQ');
    btn_5.classList.add('FAQ');
    btn_6.classList.add('FAQ');
    btn_7.classList.add('FAQ');
    content_1.style.display = 'none';
    content_2.style.display = 'none';
    content_3.style.display = 'none';
    content_4.style.display = 'none';
});

btn_4.addEventListener('click', () => {
    if (btn_4.classList.contains('FAQ-active')) {
        btn_4.classList.remove('FAQ-active');
        btn_4.classList.add('FAQ');
        content_1.style.display = 'none';
        arrow_1.innerHTML = '<img src="./images/icon-arrow.svg" alt="">';
    } else {
        btn_4.classList.add('FAQ-active');
        btn_4.classList.remove('FAQ');
        content_1.style.display = 'flex';
        content_1.classList.add('FAQ');
        arrow_1.innerHTML = '<img src="./images/icon-arrow-active.svg" alt="">';
    }
});

btn_5.addEventListener('click', () => {
    if (btn_5.classList.contains('FAQ-active')) {
        btn_5.classList.remove('FAQ-active');
        btn_5.classList.add('FAQ');
        content_2.style.display = 'none';
        arrow_2.innerHTML = '<img src="./images/icon-arrow.svg" alt="">';
    } else {
        btn_5.classList.add('FAQ-active');
        btn_5.classList.remove('FAQ');
        content_2.style.display = 'flex';
        content_2.classList.add('FAQ');
        arrow_2.innerHTML = '<img src="./images/icon-arrow-active.svg" alt="">';
    }
});

btn_6.addEventListener('click', () => {
    if (btn_6.classList.contains('FAQ-active')) {
        btn_6.classList.remove('FAQ-active');
        btn_6.classList.add('FAQ');
        content_3.style.display = 'none';
        arrow_3.innerHTML = '<img src="./images/icon-arrow.svg" alt="">';
    } else {
        btn_6.classList.add('FAQ-active');
        btn_6.classList.remove('FAQ');
        content_3.style.display = 'flex';
        content_3.classList.add('FAQ');
        arrow_3.innerHTML = '<img src="./images/icon-arrow-active.svg" alt="">';
    }
});

btn_7.addEventListener('click', () => {
    if (btn_7.classList.contains('FAQ-active')) {
        btn_7.classList.remove('FAQ-active');
        btn_7.classList.add('FAQ');
        content_4.style.display = 'none';
        arrow_4.innerHTML = '<img src="./images/icon-arrow.svg" alt="">';
    } else {
        btn_7.classList.add('FAQ-active');
        btn_7.classList.remove('FAQ');
        content_4.style.display = 'flex';
        content_4.classList.add('FAQ');
        arrow_4.innerHTML = '<img src="./images/icon-arrow-active.svg" alt="">';
    }
});

const emailInput = document.getElementById('email');

const validateEmail = (email) => {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailInput.value.match(mailFormat)) {
        return true;
    } else {
        return false;
    }
}

$form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateEmail(emailInput.value)) {
        emailInput.classList.remove('error');
        new FormData(this)
        $buttonMailto.setAttribute('href', `mailto:santiagovalencialeon@gmail.com?subject=¡Hola! Me gustaria contactar con ustedes.&body=Hola, Quiero hacer contacto con su empresa. Muchas Gracias.`)
        $buttonMailto.click()
    } else {
        emailInput.classList.add('error');
        alert('Por favor, ingrese un correo electrónico válido.');
        emailInput.focus();
    }
});


