// template_w3we91r
// service_7zr24kf
// yrJCFJpnEuTeBXgjR
/*
function contact(event) {
    event.preventDefault();
    emailjs
        .sendForm(
            'service_7zr24kf',
            'template_w3we91r',
            event.target,
            'yrJCFJpnEuTeBXgjR'
    ).then(() => {
        console.log('it worked 1')
    })
} */

    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " .modal__overlay--visible";
    setTimeout(() => {
        loading.classList.remove(".modal__overlay--visible");
        success.classList += " .modal__overlay--visible";
        console.log('it worked 1')
    }, 1000);