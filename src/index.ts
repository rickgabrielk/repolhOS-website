import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Home route - HTML
/*app.get('k', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'chat.html'))
})*/

app.get('/', (req, res) => {
  const text = req.params.text
  res.status(400).send(`<h1>📌 Nosso site está com problema ao carregar os textos.</h1>`)
})
// Criando api
app.get('/text/:text/:tw', (req, res) => {
 // Gdrando o texto 
  const text = req.params.text || "Sua mae!"
  const t = req.params.text
  // Removendo o - do texto
  const tex = text.replace(/-/g, " ").replace(/\?/g, "?").replace(/\!/g, "!").replace(/\./g, ".").replace(/,/g, ",")

  const a = t.replace(/-/g, " ").replace(/\?/g, "?").replace(/\!/g, "!").replace(/\./g, ".").replace(/,/g, ",")

  res.type('html').send(`<!DOCTYPE html>
  <html>
  <head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Meme</title>
  </head>
  <body>
	<header>Zuando e polemicando na internet de IA</header>
	<main>
		<h1>${tex}</h1>
		<p>${a}</p>
		<br>
		<p><strong>Todo conteúdo postado nessa pagina é da responsabilidade de quem postou e não minha, pois isso aqui é publico e qualquer um pode colocar merd aqui.</strong></p>
	</main>
	<style>
	h1 {
		color: #fffff1;
		font-size: 3.5rem;
		
	}
	p, footer {
		color: #7DFF31;
		font-size: 18px;
	}
	header {
		color: #000;
		font-size: 23px;
	}
	body {
		background-color: #62ABFF;
	}
	</style>
  </body>
  </html>`)
})
// Corrected language route
/*app.get('/hello/:text/lang=:id', (req, res) => {
  const text = req.params.text || 
  const id = req.params.id || "p// This was incorrectly set to req.params.text

  if (id === "pt") {
    res.send(`Seu texto: |${text}|`)
  } else if (id === "en") {
    res.send(`Text: |${text}|`)
  } else {
    res.status(400).send('<h1>Erro: Idioma não suportado</h1>')
  }
})
*/
/*
// About page - Uncomment if needed
app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'components', 'about.htm'))
})

// Example API endpoint - JSON
app.get('/api-data', (req, res) => {
  res.json({
    message: 'Here is some sample API data',
    items: ['apple', 'banana', 'cherry'],
  })
})

// Health check
app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() })
})
*/

export default app
