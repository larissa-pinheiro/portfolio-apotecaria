document.addEventListener('DOMContentLoaded', function () {
  const messageTextarea = document.getElementById('message');
  const charCount = document.getElementById('char-count');
  const charCounter = document.getElementById('char-counter');
  const maxLength = 500;

  function updateCharCount() {
    const currentLength = messageTextarea.value.length;
    charCount.textContent = currentLength;

    charCounter.classList.remove('warning', 'danger');

    if (currentLength >= maxLength * 0.9) {
      charCounter.classList.add('danger');
    } else if (currentLength >= maxLength * 0.75) {
      charCounter.classList.add('warning');
    }
  }

  messageTextarea.addEventListener('input', updateCharCount);

  messageTextarea.addEventListener('paste', function () {
    setTimeout(updateCharCount, 10);
  });

  updateCharCount();
});
