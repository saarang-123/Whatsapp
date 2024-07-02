document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-btn');
    const chatMessages = document.querySelector('.chat-messages');

    sendButton.addEventListener('click', function() {
        const messageText = messageInput.value.trim();
        if (messageText !== '') {
            appendMessage('You', messageText);
            // Here you could add functionality to send the message via backend/API
            // For WhatsApp Business API, you'd typically use AJAX/fetch to send messages
            // and receive responses asynchronously.
            messageInput.value = '';
        }
    });

    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
