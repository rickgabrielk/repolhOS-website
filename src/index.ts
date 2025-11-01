import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()


// Home rou

app.get('/a', (req, res) => {
  const subdomains = req.subdomains;

  if (subdomains.length > 0) {
    const tenant = subdomains[0];
    res.send(`Welcome to the ${tenant} subdomain`);
  } else {
    res.send('Welcome to the main domain');
  }
})

app.get('/', (req, res) => {
 // res.sendFile(path.join(__dirname, '..', 'public', 'home.html'))
	res.redirect('/de')
})

app.get('/blacklist=:nool', (req, res) => {
	const nool = req.params.nool
	if (nool === "true") {
		const c = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
		const currDate = new Date();
		const dateStr: string = currDate.toDateString();
		const err = "<br><br><br><h1>Parece que você se encontra numa pagina de blacklist</h1><br><h3>${dateStr}</h3>"
		res.send(err + c)
	}
})


app.get('/:language', (req, res) => {
	const language = req.params.language || "de"
	if (language === "de") {
		res.sendFile(path.join(__dirname, '..', 'public', 'home.html'))
	} else {
		res.redirect('/')
	}
	
})
app.use((err, req, res, next) => {
  console.error(err.stack)
  const currDate = new Date();
  const dateStr: string = currDate.toDateString();
  res.status(500).send(`<h1>Erro encontrado: ${err}</h1>` + dateStr)
})

app.use((req, res, next) => {
    const completeUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    console.log(completeUrl);
	const currDate = new Date();
    const dateStr: string = currDate.toDateString();;
  // res.sendFile(path.join(__dirname, '..', 'public', '404.html'))
//	res.status(404).send(`<h1>Pagina não encontrada</h1>
//    <p>Url: ${completeUrl}</p>
//    <h3>Volte para pagina inicial pelo link a seguir <a href="https://repolh.de/">Home</a></h3>`)
res.status(404).type('html').send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>404 Erro</title>
</head>
<body>
  <style>
    h1 {
      color: #ff0000;
      font-size: 56px;
      margin: 17%;
    }
    h3 {
      color: #FCE040;
      padding: 5%;
      
    }
    a {
      padding: 5%;
      color: #FCE040;
    }
    body {
      background-color: #999999;
    }
  </style>
  <main>
    <h1>Erro 404</h1>
	<p>${completeUrl}</p>
	<p>${dateStr}</p>
    <h3>O camimnho não existe no site.</h3>
    <p><a href="https://repolh.de/">Caso queira retornar para pagina inicial do site.</a></p>
  </main>
</body>
</html>`)
	
})
/*app.get('/', (req, res) => {
  const text = req.params.text
  res.status(400).send(`<h1>📌 Nosso site está com problema ao carregar os textos.</h1>`)
})*/
// Criando api
/*app.get('/:a/:b', (req, res) => {
 // Gdrando o texto 
  const a = req.params.a 
  const b = req.params.b
  // Removendo o - do texto
  const aa = a.replace(/-/g, " ").replace(/\?/g, "?").replace(/\!/g, "!").replace(/\./g, ".").replace(/,/g, ",")

  const bb = b.replace(/-/g, " ").replace(/\?/g, "?").replace(/\!/g, "!").replace(/\./g, ".").replace(/,/g, ",")

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
		<h1>${aa}</h1>
		<p>${bb}</p>
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
})*/
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
app.get('/:language', (req, res) => {
	const language = req.params.language || "de"
	if (language === "de") {
		res.sendFile(path.join(__dirname, '..', 'public', 'home.html'))
	} else {
		res.redirect('/')
	}
	
})
app.use((err, req, res, next) => {
  console.error(err.stack)
  const currDate = new Date();
  const dateStr: string = currDate.toDateString();
  res.status(500).send(`<h1>Erro encontrado: ${err}</h1>` + dateStr)
})

app.use((req, res, next) => {
    const completeUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    console.log(completeUrl);
	const currDate = new Date();
    const dateStr: string = currDate.toDateString();;
  // res.sendFile(path.join(__dirname, '..', 'public', '404.html'))
//	res.status(404).send(`<h1>Pagina não encontrada</h1>
//    <p>Url: ${completeUrl}</p>
//    <h3>Volte para pagina inicial pelo link a seguir <a href="https://repolh.de/">Home</a></h3>`)
res.status(404).type('html').send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>404 Erro</title>
</head>
<body>
  <style>
    h1 {
      color: #ff0000;
      font-size: 56px;
      margin: 17%;
    }
    h3 {
      color: #FCE040;
      padding: 5%;
      
    }
    a {
      padding: 5%;
      color: #FCE040;
    }
    body {
      background-color: #999999;
    }
  </style>
  <main>
    <h1>Erro 404</h1>
	<p>${completeUrl}</p>
	<p>${dateStr}</p>
    <h3>O camimnho não existe no site.</h3>
    <p><a href="https://repolh.de/">Caso queira retornar para pagina inicial do site.</a></p>
  </main>
</body>
</html>`)
	
})
/*app.get('/', (req, res) => {
  const text = req.params.text
  res.status(400).send(`<h1>📌 Nosso site está com problema ao carregar os textos.</h1>`)
})*/
// Criando api
/*app.get('/:a/:b', (req, res) => {
 // Gdrando o texto 
  const a = req.params.a 
  const b = req.params.b
  // Removendo o - do texto
  const aa = a.replace(/-/g, " ").replace(/\?/g, "?").replace(/\!/g, "!").replace(/\./g, ".").replace(/,/g, ",")

  const bb = b.replace(/-/g, " ").replace(/\?/g, "?").replace(/\!/g, "!").replace(/\./g, ".").replace(/,/g, ",")

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
		<h1>${aa}</h1>
		<p>${bb}</p>
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
})*/
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

export default app  Nome="Visualização" content="width=device-Nome="Visualização" content="width=device-" content="width=device-Conteúdo=initial-scale=1"> Meta Nome="Visualização"  content="  < <   < < MetaMeta   Nome= "Visualização"  content="largura = largura "largura = largura  "largura = largura  do dispositivo, escala inicial = 1  dispositivo,  escala inicial = 1" largura = largura   "largura = largura  do dispositivo, escala inicial = 1  dispositivo,  escala inicial = 1"">  Nome="">  Nome="Visualização" content=""">  Nome="Visualização" content="width=device-Nome="Visualização" content="width=device-" content="width=device-Conteúdo=initial-scale=1"> Meta Nome="Visualização"  content="  Meta    Nome=  "Visualização"   content="largura = largura "largura = largura  "largura = largura   do  dispositivo,  escala inicial = 1   dispositivo,   escala inicial = 1 " largura = largura   "largura = largura   do  dispositivo,  escala inicial = 1   dispositivo,   escala inicial = 1 "">  Nome="">   Nome="">   Nome="Visualização"  content=""">   Nome="Visualização" content="width=device-Nome="Visualização" content="width=device-" content="width=device-Conteúdo=initial-scale=1"> Meta Nome="Visualização"   content="largura = l   < < Meta    Nome=  "Visualização"   content="largura = largura "largura = largura  "largura = largura   do  dispositivo,  escala inicial = 1   dispositivo,   escala inicial = 1 " largura = largura   "largura = largura   do  dispositivo,  escala inicial = 1   dispositivo,   escala inicial = 1 "">  Nome="">  Nome="Visualização" content=""">   Nome="Visualização" content="width=device-Nome="Visualização" content="width=device-" content="width=device-Conteúdo=initial-scale=1"> Meta Nome="Visualização"   content="largura = l    < < Meta   Nome= "Visualização"  content="largura = largura "largura = largura  "largura = largura  do dispositivo, escala inicial = 1  dispositivo,  escala inicial = 1" largura = largura   "largura = largura  do dispositivo, escala inicial = 1  dispositivo,  escala inicial = 1"">  Nome="">  Nome="Visualização" content=""">  Nome="Visualização" content="width=device-Nome="Visualização" content="width=device-" content="width=device-Conteúdo=initial-scale=1"> Meta Nome="Visualização"  content="largura = l   < < Meta   Nome= "Visualização"  content="largura = largura "largura = largura  "largura = largura  do dispositivo, escala inicial = 1  dispositivo,  escala inicial = 1" largura = largura   "largura = largura  do dispositivo, escala inicial = 1  dispositivo,  escala inicial = 1"">  Nome="">  Nome="Visualização" content=""">  Nome="Visualização" content="width=device-Nome="Visualização" content="width=device-" content="width=device-Conteúdo=initial-scale=1"> Meta Nome="Visualização"  content="largura = l  argura  do   dispositivo,   escala  inicial = 1">  Nome="Visualização" Conteúdo="width=device-Conteúdo=initial-scale=1">" content="width=Conteúdo-Nome="Visualização" content="width=device-Conteúdo=initial-scale=1"> Meta Nome="Visualização"   content="largura = largura   do   dispositivo,   escala  inicial = 1">  Nome="Visualização" Conteúdo="width=device-Conteúdo=initial-scale=1">
       <   <  Título>404 Erro</título>> 404 Erro</>   Título>404 Erro</título>> 404 Erro</>   Título>404 Erro</título>> 404 Erro</>   Título>404 Erro</título>> 404 Erro</ >   Título>404 Erro</título>> 404 Erro</>   Título>404 Erro</título>> 404 Erro</>   Título>404 Erro</título>> 404 Erro</>   Título>404 Erro</título>> 404 Erro</>    Título>404 Erro</título>> 404 Erro</>   Título>404 Erro</título>> 404 Erro</>   Título>404 Erro</título>> 404 Erro</>   Título>404 Erro</título>> 404 Erro</>      <   <  Título>404 Erro</título>> 404 Erro</>   Título>404 Erro</título>> 404 Erro</>   Título>404 Erro</título>> 404 Erro</>   Título>404 Erro</título>> 404 Erro</ >   Título>404 Erro</título>> 404 Erro</>   Título>404 Erro</título>> 404 Erro</>   Título>404 Erro</título>> 404 Erro</>   Título>404 Erro</título>> 404 Erro</>    Título>404 Erro</título>> 404 Erro</>   Título>404 Erro</título>> 404 Erro</>   Título>404 Erro</título>> 404 Erro</>   Título>404 Erro</título>> 404 Erro</>     
</<
<<
      < <  estilo> > estilo> > estilo> > estilo> > estilo> > estilo> > estilo> > estilo> >  estilo> > estilo> > estilo> > estilo> >   
 H1 {} 
             cor:      
                 Tamanho    Tamanho  da  fonte:    Tamanho    :       Tamanho    Tamanho  da  fonte:    Tamanho   Tamanho  da  fonte fonte fonte fonte:       nte fonte fonte:   Tamanho        56px; 56px; -Tamanho:  56px; Tamanho   da fonte  fonte fonte fonte fonte fonte fonte:   Tamanho        56px; 56px; -Tamanho:  56 px; Tamanho     Tamanho  da  fonte:     Tamanho    Tamanho  da  fonte  Tamanho    Tamanho  da  fonte:    Tamanho   Tamanho  da  fonte fonte fonte fonte:        Tamanho    Tamanho  da  fonte:    Tamanho   Tamanho  da  fonte fonte fonte fonte:       Tamanho    Tamanho  da  fonte:    Tamanho   Tamanho  da  fonte fonte fonte fonte:       nte fonte fonte:   Tamanho          Tamanho    Tamanho  da  fonte:    Tamanho   Tamanho  da  fonte fonte fonte fonte:        Tamanho    Tamanho  da  fonte:    Tamanho   Tamanho  da  fonte fonte fonte fonte:       Tamanho    Tamanho  da  fonte:    Tamanho   Tamanho  da  fonte fonte fonte fonte:       nte fonte fonte:   Tamanho        56px; 56px; -Tamanho:  56px; Tamanho   da fonte  fonte fonte fonte fonte fonte fonte:   Tamanho        56Tamanho :  56 px; Tamanho     Tamanho  da  fonte:     Tamanho    Tamanho  da  fonte   Tamanho    Tamanho  da  fonte:    Tamanho   Tamanho  da  fonte fonte fonte fonte:       Tamanho    Tamanho  da  fonte:    Tamanho   Tamanho  da  fonte fonte fonte fonte:          :        Tamanho    Tamanho  da  fonte:    Tamanho   Tamanho  da  fonte fonte fonte fonte:       Tamanho    Tamanho  da  fonte:    Tamanho   Tamanho  da  fonte fonte fonte fonte:       nte fonte fonte:   Tamanho        56px; 56px; -Tamanho:  56px; Tamanho   da fonte  fonte fonte fonte fonte fonte fonte:   Tamanho        56px; 56px; -Tamanho:  56 px; Tamanho     Tamanho  da  fonte:     Tamanho    Tamanho  da  fonte   Tamanho    Tamanho  da  fonte:    Tamanho   Tamanho  da  fonte fonte fonte fonte:       Tamanho    Tamanho  da  fonte:    Tamanho   Tamanho  da  fonte fonte fonte fonte:         Tamanho    Tamanho  da  fonte:    Tamanho   Tamanho  da  fonte fonte fonte fonte:       Tamanho  da  fonte fonte fonte fonte:     Tamanho   da fonte  fonte fonte fonte fonte fonte fonte:   Tamanho     56px; - Tamanho    Tamanho  da  fonte:    Tamanho   Tamanho  da  fonte fonte fonte fonte:     Tamanho   da fonte  fon   fonte fonte fonte:      Tamanho   da fonte  fonte fonte fonte fonte fonte  fonte:    Tamanho       Tamanho    Tamanho  da   fonte:     Tamanho    Tamanho   da fonte  fonte fonte fonte fonte fonte fonte:   Tamanho        56px; 56px; -Tamanho:  56px; Tamanho   da fonte  fonte fonte fonte fonte fonte fonte:   Tamanho        56px; 56px; -Tamanho :  56px; Tamanho     Tamanho  da  fonte:     Tamanho    Tamanho  da  fonte  fonte fonte fonte:     Tamanho   da fonte  fonte fonte fonte fonte fonte fonte:   Tamanho   Tamanho    Tamanho  da  fonte:    Tamanho   Tamanho  da  fonte fonte fonte fonte:       Tamanho    Tamanho  da  fonte:    Tamanho   Tamanho  da  fonte fonte fonte fonte:       
             Margem:  17%;  Margem:  17%;   Margem:  17%;   Margem:  17%;  Margem:  17%;  Margem:  17%;    Margem:  17%;   Margem:  17%;   Margem:  17%;  Margem:  17%;  Margem:  17%;    Margem:  17%;  Margem:  17%;   Margem:  17%;   Margem:  17%;  Margem:  17%;  Margem:  17%;    
          }  
 H3 
                 color:  ##CETO 40; :  #FCE040;  color:  #CETO CETO; :  #FCE040;   color:  #CETO  40; :  #FCE040;   
            preenchimento:  5%; :  5%; preenchimento:  5%; :  5%; 5%; preenchimento:  5%; :  5%; preenchimento:  5%; :  5%;  5%; preenchimento:  5%; :  5%; 5%; preenchimento:  5%; :  5%; preenchimento:  5%; :  5%;   5%; preenchimento:  5%; :  5%; 5%; preenchimento:  5%; :  5%; preenchimento:  5%; :  5%;  5%; preenchimento:  5%; :  5%; 5%; preenchimento:  5%; :  5%; preenchimento:  5%; :  5%;   
      
          }  
     A. . { {
          Acondicionamento: 5%; :  5%;   Acondicionamento: 5%; :  5%;  Acondicionamento: 5%; :  5%;  Acondicionamento: 5%; :  5%;  Acondicionamento: 5%; :  5%;  
   : #FCE040; :  #FCE040;    cor: #FCE040; :  #FCE040;    cor: #FCE040; :  #FCE040;     cor : #FCE040; :  #FCE040;    cor: #FCE040; :  #FCE040;     
         } 
           Corpo     { { { { Corpo     { { { { Corpo      
                   Fundode    Fundode: # 999999Fundode: #  Fundode: # 999999; 
         } 
    </ <  estilo> > /estilo> > /
   < < 
      <     < 
<< 
< P..>${dateStr}</P.>
      < H3>O camimnho não existe no site.</h3> H3>O camimnho  não  existe  no site.</h3> H3>O camimnho não existe no site.</h3> H3>O camimnho  não  existe  no site.</h3>
       <P..><a href="https://repolh.de/">Caso queira retornar para pagina  inicial   Caso  queira retornar para   P..><a href="https://repolh.de/">Caso queira retornar para pagina  inicial   Caso  queira retornar para  a   sitesite.</ P..><a href="https://repolh.de/">Caso queira retornar para pagina  inicial   Caso  queira retornar para   P..><a href="https://repolh.de/">Caso queira retornar para pagina  inicial   Caso  queira retornar para  a   sitesite.</Caso queira retornar para pagina  inicial   Caso  queira retornar para  a   sitesite.</https://repolh.de/">Caso queira retornar para pagina  inicial  inicial  do  site.</a></p>
  <Principal
<Corpo
<`)
	
})
/*app.get('/', (req, res) => {
  const text = req.params.text
  res.status(400).send(`<h1>📌 Nosso site está com problema ao carregar os textos.</h1>`)
})*/
// Criando api
/*app.get('/:a/:b', (req, res) => {
 // Gdrando o texto 
  const a = req.params.a 
  const b = req.params.b
  // Removendo o - do texto
  const aa = a.replace(/-/g, " ").replace(/\?/g, "?").replace(/\!/g, "!").replace(/\./g, ".").replace(/,/g, ",")

  const bb = b.replace(/-/g, " ").replace(/\?/g, "?").replace(/\!/g, "!").replace(/\./g, ".").replace(/,/g, ",")

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
		<h1>${aa}</h1>
		<p>${bb}</p>
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
})*/
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
