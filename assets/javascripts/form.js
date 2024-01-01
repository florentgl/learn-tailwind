
const submit = document.getElementById('submit')




submit.addEventListener('click', () => {
    const nameLabel = document.getElementById('nameLabel')
    const mailLabel = document.getElementById('mailLabel')
    const messageLabel = document.getElementById('messageLabel')

    const nameInput = document.getElementById('nameInput')
    const mailInput = document.getElementById('mailInput')
    const messageInput = document.getElementById('messageInput')

    const name = document.getElementById('name')
    const mail = document.getElementById('mail')
    const message = document.getElementById('message')

    if (nameInput.value !== "") {
        console.log('yo');
    };
});