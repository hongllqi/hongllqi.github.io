const botao = document.getElementById('buttonEntrar');
const login = document.getElementById('login');
const senha = document.getElementById('senha');
botao.addEventListener('click', () => {
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Email ou senha inválidos.');
});

const agreementCheckbox = document.querySelector('#agreement');
const enableButtonEnviar = () => {
  const buttonEnviar = document.querySelector('#submit-btn');
  buttonEnviar.disabled = !buttonEnviar.disabled;
};
agreementCheckbox.addEventListener('click', enableButtonEnviar);
