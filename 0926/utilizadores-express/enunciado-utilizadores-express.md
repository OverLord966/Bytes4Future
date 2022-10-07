O teu desafio esta semana vai ser criar um `backend` para um formulário de registo/login.

No total serão 3 os endpoints a desenvolver:
- `POST /signup`
- `POST /login`
- `GET  /user`


#### `POST /signup`

Neste endpoint, receberás como corpo um objeto com o seguinte formato:
```json
{
    "email": "teste@teste.com",
    "password": "A1b2C3d$",
    "passwordConfirmation": "A1b2C3d$",
    "acceptsTerms": true,
    "acceptsCommunications": false
}
```

Por questões de segurança, deves voltar a verificar se os dados são todos válidos, seguindo as regras indicadas mais abaixo. Deverás acrescentar também uma validação ao email para verificar se já existe um utilizador com o email introduzido.

Se existir algum erro, deves responder com o estado `400` e com um objeto que tenha 2 propriedades:
- `message` com o valor `Os dados introduzidos não são válidos.`;
- `errors` que deverá ser um objeto que tem apenas as propriedades que têm erro associadas à mensagem de erro respetiva. Deves utilizar as mesmas mensagens de erro que no desafio 5!

Um exemplo de resposta é:
```json
{
	"message": "Os dados introduzidos não são válidos.",
	"errors": {
		"email": "O endereço introduzido já está registado.",
		"passwordConfirmation": "As passwords não coincidem."
	}
}
```

Se todas as validações passarem, o objeto recebido deverá ser adicionado a um `array` de utilizadores que deve ser global no teu ficheiro. Neste caso, a resposta deve ter o estado `201` e o conteúdo: 
```json
{ "message": "Utilizador Criado com Sucesso!" }
```


#### `POST /login`

Neste endpoint receberás um objeto com duas propriedades: `email` e `password`.

Deverás começar por verificar se existe algum utilizador com o `email` recebido. Se não existir, deverá ser enviada a resposta com o estado `404` e com o conteúdo:

```json
{ "message": "O utilizador não foi encontrado!" }
```

De seguida deverás verificar se a `password` recebida é igual à password do utilizador encontrado com o `email` recebido. Se não for, deverá ser enviada a resposta com o estado `401` e com o conteúdo:

```json
{ "message": "A password introduzida é inválida!" }
```

Por fim, se o utilizador existir e a password estiver correta, deverás enviar uma resposta com o estado `200` e com um objeto com a propriedade `token` como corpo. Deverás ainda adicionar uma sessão com este token a um `array` de sessões.

O token deverá ser calculado a partir do email do utilizador com recurso à função abaixo:

```js
function generateToken(email) {
    return email
        .split('')
        .map((e, i) => String.fromCharCode(e.charCodeAt(0) + (i % 4 + 1) * 2))
        .join('')
}
```

Exemplo:
```json
{
	"token": "viy|gDzmuxk6ess"
}
```

#### `GET /user`

Neste endpoint deverás verificar o `header`: `Authorization` e verificar se existe alguma sessão com o `token` recebido nesse `header`.

Se o token não for recebido, deverás responder com o estado `401` e com o conteúdo:

```json
{ "message": "Não foi enviado o token de autenticação!" }
```


Se não existir uma sessão com o token recebido, deverás responder com o estado `403` e com o conteúdo:

```json
{ "message": "Não existe nenhuma sessão com o token indicado!" }
```

Caso contrário, deverás enviar uma resposta com o estado `200` e com um objeto com 3 propriedade:
- `email` - o email do utilizador;
- `acceptsTerms` - um `boolean` que indica se o utilizador aceitou ou não os termos e condições;
- `acceptsCommunications` - um `boolean` que indica se o utilizador aceitou ou não os receber comunicações;


## Avaliação

A avaliação deste desafio só tem uma componente que é a funcionalidade.

Deves ter em atenção que:
1. Deves utilizar `process.env.PORT` para obter a porta;
2. Deves ter o script no `package.json` que permite o `npm run start` correr o teu projeto;



## Validações

#### `email`

##### #1
**Erro**: email não enviado ou vazio;

**Mensagem**: Por favor introduza o seu endereço de email.

##### #2
**Erro**: email inválido (usar função abaixo);

**Mensagem**: Por favor introduza um endereço de email válido.

```js
function validateEmail(email) {
    // Esta expressão regular não garante que email existe, nem que é válido
    // No entanto deverá funcionar para a maior parte dos emails que seja necessário validar.
    const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return EMAIL_REGEX.test(email)
}
```

##### #3
**Erro**: já existe um utilizador com o email introduzido;

**Mensagem**: O endereço introduzido já está registado.


#### `password`

##### #1
**Erro**: password não enviada ou vazia;

**Mensagem**: Por favor introduza a sua password.

##### #2
**Erro**: o valor introduzido tem menos de 8 caracteres;

**Mensagem**: A sua password deve ter no mínimo 8 caracteres.

##### #3
**Erro**: o valor introduzido tem força inferior a 4 (ver função `checkPasswordStrength` abaixo);

**Mensagem**: A sua password deve ter pelo menos um número, uma mínuscula, uma maiúscula e um símbolo.

```js
function checkPasswordStrength(password) {
    if (password.length < 8) return 0;
    const regexes = [
        /[a-z]/,
        /[A-Z]/,
        /[0-9]/,
        /[~!@#$%^&*)(+=._-]/
    ]
    return regexes
        .map(re => re.test(password))
        .reduce((score, t) => t ? score + 1 : score, 0)
}
```

#### `passwordConfirmation`

##### #1
**Erro**: confirmação de password não enviada ou vazia;

**Mensagem**: Por favor introduza novamente a sua password.

##### #2
**Erro**: este campo é diferente do campo `password`;

**Mensagem**: As passwords não coincidem.


#### `acceptsTerms`

##### #1
**Erro**: valor é `false`;

**Mensagem**: Tem de aceitar os termos e condições para criar a sua conta.



#### `acceptsCommunications`
Não existem erros possíveis para este campo.