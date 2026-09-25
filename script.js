const form = document.querySelector('#lead-form');
const status = document.querySelector('#form-status');

form.addEventListener('submit', (event) => {
  

  const name = form.elements.name.value.trim();
  const phone = form.elements.phone.value.trim();
  const email = form.elements.email.value.trim();

  if (!name || !phone || !email) {
    status.textContent = 'Preencha seu nome, WhatsApp e e-mail para continuar.';
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    status.textContent = 'Confira se o e-mail foi digitado corretamente.';
    return;
  }

  status.textContent = `Tudo certo, ${name.split(' ')[0]}! Em breve entraremos em contato.`;
  form.reset();
});
