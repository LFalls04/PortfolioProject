// template_8jr35k6
// service_7zr24kf
// yrJCFJpnEuTeBXgjR

function contact(event) {
    event.preventDefault();
    emailjs
        .sendForm(
            'service_7zr24kf',
            'template_8jr35k6',
            event.target,
            'yrJCFJpnEuTeBXgjR'
        ).then(() => {
            console.log('it worked1')
        })
}