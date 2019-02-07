# EndPoints

## Institucional

**GET**:  /institucional
>Deve retornar os dados institucionais do site.

**response**:
~~~json
{
	facebook:  'https://www.facebook.com/NicoleLeifheitMakeup/',
	whatsApp:  'https://api.whatsapp.com/send?1=pt_BR&phone=5551997908803',
	instagram:  'https://www.instagram.com/nicole_leifheit_makeup/',
	phone:  '(51) 99790-8803',
	email:  'nicole.leifheit.makeup@gmail.com',
		location: {
			address:  'Bairro Guajuviras - Rua Trinta, Nº 07',
			city:  'Canoas RS',
			latitude:  '',
			longitude:  ''
		}
}
~~~

**PUT**:  /institucional
>Deve alterar os dados institucionais do site.

**request body**:
~~~json
{
	facebook:  'https://www.facebook.com/NicoleLeifheitMakeup/',
	whatsApp:  'https://api.whatsapp.com/send?1=pt_BR&phone=5551997908803',
	instagram:  'https://www.instagram.com/nicole_leifheit_makeup/',
	phone:  '(51) 99790-8803',
	email:  'nicole.leifheit.makeup@gmail.com',
		location: {
			address:  'Bairro Guajuviras - Rua Trinta, Nº 07',
			city:  'Canoas RS',
			latitude:  '',
			longitude:  ''
		}
}
~~~

## Galeria

**GET**:  /galeria
>Deve retornar todas as imagens da galeria do site.

**response**:
~~~json
[
	{
		id:  1,
		src:  'assets/images/g1.jpg',
		caption:  'Descrição da Imagem',
		thumb:  'assets/images/g1.jpg',
		order:  null,
		modelsList:  false
	},
	{
		id:  2,
		src:  'assets/images/g2.jpg',
		caption:  'Descrição da Imagem',
		thumb:  'assets/images/g2.jpg',
		order:  null,
		modelsList:  false
	},
	{
		id:  10,
		src:  'assets/images/m2.jpg'
		caption:  'Descrição da Imagem',
		thumb:  'assets/images/m2.jpg',
		order:  null,
		modelsList:  true
	},
	{
		id:  17,
		src:  'assets/images/m9.jpg',
		caption:  'Descrição da Imagem',
		thumb:  'assets/images/m9.jpg',
		order:  null,
		modelsList:  true
	}
]
~~~

**POST**:  /galeria
>Deve criar uma imagem na galeria, gerando thumb*.

**request body**:
~~~json
FormData: File
~~~

**PUT**:  /galeria/`${id}`
>Deve alterar uma imagem na galeria.

**request body**:
~~~json
{
	id:  number,
	src:  string,
	caption:  string,
	thumb:  string,
	order:  number,
	modelsList:  boolean
}
~~~

**DELETE**:  /galeria/`${id}`
>Deve deletar uma imagem na galeria.

## Modelos

**GET**:  /galeria/modelos
>deve retornar todas as imagens da galeria do site quando `modelList === true`.

**response**:
~~~json
[
	{
		id:  10,
		src:  'assets/images/m2.jpg'
		caption:  'Descrição da Imagem',
		thumb:  'assets/images/m2.jpg',
		order:  null,
		modelsList:  true
	},
	{
		id:  17,
		src:  'assets/images/m9.jpg',
		caption:  'Descrição da Imagem',
		thumb:  'assets/images/m9.jpg',
		order:  null,
		modelsList:  true
	}
]
~~~

**PUT**:  /galeria/modelos
>alterar a ordem de exibição das modelos

**request body**:
~~~json
[
	{
		id:  10,
		order:  0
	},
	{
		id:  17,
		order:  1
	}
]
~~~


