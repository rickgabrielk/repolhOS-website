import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Home route - HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'chat.html'))
})

app.get('/:text', (req, res) => {
  const text = req.params.text
  res.status(400).send(`<h1 color="#ff0000">Route ${text}.html não existe`)
})
// Criando api
app.get('/strinf=:text', (req, res) => {
 // Gdrando o texto 
  const text = req.params.text || "Sua mae!"
  // Removendo o - do texto
  const tex = text.replace(/-/g, " ")
  
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
