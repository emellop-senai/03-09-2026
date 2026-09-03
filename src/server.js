import express from 'express'

const app = express()
const port = 3000

// Ler o json trafegado na aplicação
app.use(express.json())

app.get("/", (_req, res) => {
    res.json("Hello World")
})

app.listen(port, () => {
    console.log(`API rodando em: http://localhost:${port}`);
})