import express from 'express'
import cors from 'cors' 
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient() // Cria uma instância do Prisma Client para interagir com o banco de dados.

const app = express()
app.use(express.json()) // Faz o express entender JSON no body da requisição. 
app.use(cors()) // Permite que o servidor aceite requisições de diferentes origens. Normalmente deve ser configurado para aceitar apenas as origens necessárias.


app.post('/usuarios', async (req, res) => {

    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age,
        }
    })

    res.status(201).json({ message: 'Usuário criado com sucesso!' }) // Retorna o status 201 (Created) e uma mensagem de sucesso.

})

app.get('/usuarios', async (req, res) => {
    let users = [] // Cria um array vazio para armazenar os usuários.

    if(req.query){
        users = await prisma.user.findMany({
            where: {
                 
                     name: req.query.name, // Filtra os usuários pelo nome.
                     email: req.query.email,  // Filtra os usuários pelo email.
                     age: req.query.age  // Filtra os usuários pela idade.
                
            }
        }) 
    } else {
        users = await prisma.user.findMany() // Busca todos os usuários cadastrados no banco de dados.
    }

    

    res.status(200).json(users) // Retorna todos os usuários cadastrados.)
})

app.put('/usuarios/:id', async (req, res) => {

    await prisma.user.update({
        where: {
            id: req.params.id // Identifica o usuário a ser atualizado pelo ID.
        },

        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age,
        }
    })

    res.status(201).json({ message: 'Usuário atualizado com sucesso!' })

})

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id // Identifica o usuário a ser deletado pelo ID.
        },
    })

    res.status(200).json({ message: 'Usuário deletado com sucesso!' }) 
})


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000...");
  });
  


/* 1. Criar nossa API de Usuários 
    - Criar um usuário
    - Listar todos os usuários
    - Editar um usuário
    - Deletar um usuário  
*/