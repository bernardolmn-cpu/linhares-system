const form = document.querySelector('#lead-form');
const status = document.querySelector('#form-status');

form.addEventListener('submit', (event) => {
  const name = form.elements.name.value.trim();
  const phone = form.elements.phone.value.trim();
  const email = form.elements.email.value.trim();
  const consumption = Number(form.elements.consumption_kwh.value);

  if (!name || !phone || !email || !consumption || consumption < 1) {
    event.preventDefault();
    status.textContent = 'Preencha todos os campos, incluindo o consumo mensal em kWh.';
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    event.preventDefault();
    status.textContent = 'Confira se o e-mail foi digitado corretamente.';
  }
});
