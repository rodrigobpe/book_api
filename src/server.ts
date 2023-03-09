import { app } from "./app";

const port = process.env.PORT || 3000
const server = app;

server.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`);
})

