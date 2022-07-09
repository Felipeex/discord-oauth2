## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- Express
- Axios

## 💻 Projeto

Api de autenticação, Para projeito simples. Sistema de register/login.

Instalar pacotes.

```sh
npm install
# or
yarn install
```

Iniciar projeto com Dev.

```sh
npm run dev
# or
yarn dev
```

Geração de dados de usuário através do token como paramentro.
~~~javascript
router.post("/user", getUser, (req, res) => {
  const { user } = req.body;
  res.json(user);
});

/* {
	"id": "430807377990647810",
	"username": "! Felipeex",
	"avatar": "923c2f55f68b945da3aa9cf2d6d7f9b6",
	"avatar_decoration": null,
	"discriminator": "6328",
	"public_flags": 64,
	"flags": 64,
	"banner": "a_f1e674b1967de18530309a6f9e47059b",
	"banner_color": "#19191d",
	"accent_color": 1644829,
	"locale": "pt-BR",
	"mfa_enabled": false,
	"premium_type": 2,
	"email": "felipeexx48@gmail.com",
	"verified": true
} */
~~~
