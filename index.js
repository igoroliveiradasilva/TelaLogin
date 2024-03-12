document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio do formulário

        // Obter os valores dos campos de nome de usuário e senha
        var nomeUsuario = document.getElementById('loginNome').value;
        var senha = document.getElementById('loginSenha').value;

        // Verificar as credenciais
        if (nomeUsuario === 'usuario' && senha === 'senha') {
            // Credenciais corretas, redirecionar ou exibir uma mensagem de sucesso
            alert('Login bem-sucedido');
        } else {
            // Credenciais incorretas, exibir uma mensagem de erro
            alert('Credenciais incorretas');
        }
    });
});