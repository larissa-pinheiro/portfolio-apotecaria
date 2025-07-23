document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('formulario');
  const campoNome = document.getElementById('name');
  const campoEmail = document.getElementById('email');
  const campoSubject = document.getElementById('subject');
  const campoMessage = document.getElementById('message');

  const txtNome = document.getElementById('txtNome');
  const txtEmail = document.getElementById('txtEmail');
  const txtSubject = document.getElementById('txtSubject');
  const charCount = document.getElementById('char-count');
  const charCounter = document.getElementById('char-counter');

  const maxLength = 500;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function updateCharCount() {
    const currentLength = campoMessage.value.length;
    charCount.textContent = currentLength;

    charCounter.classList.remove('warning', 'danger');

    if (currentLength >= maxLength * 0.9) {
      charCounter.classList.add('danger');
    } else if (currentLength >= maxLength * 0.75) {
      charCounter.classList.add('warning');
    }
  }

  campoMessage.addEventListener('input', updateCharCount);
  campoMessage.addEventListener('paste', () => setTimeout(updateCharCount, 10));
  updateCharCount();

  formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;

    if (campoNome.value.trim().length < 3) {
      txtNome.textContent = 'O Nome deve ter no mínimo 3 caracteres.';
      campoNome.focus();
      isValid = false;
    } else {
      txtNome.textContent = '';
    }

    if (!campoEmail.value.match(emailRegex)) {
      txtEmail.textContent = 'Digite um E-mail válido.';
      if (isValid) campoEmail.focus();
      isValid = false;
    } else {
      txtEmail.textContent = '';
    }

    if (campoSubject.value.trim().length < 5) {
      txtSubject.textContent = 'O Assunto deve ter no mínimo 5 caracteres.';
      if (isValid) campoSubject.focus();
      isValid = false;
    } else {
      txtSubject.textContent = '';
    }

    if (isValid) {
      alert("Formulário Enviado com Sucesso!");
      formulario.reset();
      updateCharCount();
    }
  });
});