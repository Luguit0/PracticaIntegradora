const socket = io();
const chatForm = document.querySelector("#sendMessage");
const chatbox = document.querySelector("#messages");

socket.on('messages', (all) => {
    let messages = '';

    all.forEach(log => {
        messages = messages + `<p><b>${log.user}</b>: ${log.message}</p>`
    });

    chatbox.innerHTML = messages;
})

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = {
        user: document.getElementById('user').value,
        message: document.getElementById('message').value
    }

    socket.emit('new_msg', data)

    document.getElementById('message').value = ''
})
