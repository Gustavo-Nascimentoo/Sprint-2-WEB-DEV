document.querySelector('.btn-cadastro-login').addEventListener('click', () => {
    const email = document.querySelector('input[type="text"]').value.trim();
    const senha = document.querySelector('input[type="password"]').value.trim();

    if (!email) {
        alert('Por favor, preencha o campo de e-mail.');
        return;
    }

    if (!email.includes('@') || !email.includes('.com') || email.includes(' ')) {
        alert('Digite um e-mail válido. Ex: nome@email.com');
        return;
    }

    if (!senha) {
        alert('Por favor, preencha o campo de senha.');
        return;
    }

    if (senha.length < 8) {
        alert('A senha deve ter pelo menos 8 caracteres.');
        return;
    }

    alert(`Cadastro efetuado com sucesso! Bem-vindo ao OptiCam.`);
    console.log(`Email: ${email} | Senha: ${senha}`);
});