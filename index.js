const surpriseBtn = document.getElementById('surprise-btn');

surpriseBtn.addEventListener('click', () => {
    const message = document.getElementById('message');
    message.textContent = 'I love you to the moon and back!';
    message.style.fontSize = '36px';
    message.style.color = '#ff69b4';

    const loveNote = document.querySelector('.love-note p');
    loveNote.textContent = 'You are my everything.';
    loveNote.style.fontSize = '36px';
    loveNote.style.color = '#4CAF50';
});