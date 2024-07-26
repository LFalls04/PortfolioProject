let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
    document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm(
            'service_7zr24kf',
            'template_w3we91r',
            event.target,
            'yrJCFJpnEuTeBXgjR'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly at lathanfalls04@gmail.com"
        );
    })
}


function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
      return document.body.classList.remove("modal--open");
    }
    isModalOpen = !isModalOpen
    document.body.classList += " modal--open";
}