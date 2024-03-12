fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    users.forEach(user => {
      console.log('Nome de Usuário:', user.username);
      console.log('Senha:', user.website); // Note que aqui estou usando o website como exemplo de senha, mas em uma aplicação real você usaria um campo diferente
      console.log('---');
    });
  })
  .catch(error => console.error('Erro:', error));
