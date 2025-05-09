import './style.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'
import { useEffect, useState, useRef } from 'react' //React Hooks

function Home() {
  const [users, setUsers] = useState([]) //useState é um Hook do React que permite adicionar o estado a um componente funcional
  
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function getUsers() {
    const usersFromApi = await api.get('/usuarios')

    setUsers(usersFromApi.data)
  }

  async function createUsers() {
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })

    getUsers() // Atualiza a lista de usuários após o cadastro
  }

    async function deleteUsers(id) {
     await api.delete(`/usuarios/${id}`) // Deleta o usuário com o ID especificado
     
     getUsers() 
  }

  useEffect(() => { /* tudo aqui dentro é executado quando a página abrir */
   getUsers()
  }, [])

  return (
      <div className='container'>
        <form>
          <h1>Cadastro de Usuários</h1>
          <input name='nome' type='text' placeholder='Nome' ref={inputName}/>
          <input name='idade' type='number' placeholder='Idade' ref={inputAge}/>
          <input name='email' type='email' placeholder='Email' ref={inputEmail}/>
          <button type='button' onClick={createUsers}>Cadastrar</button>
        </form>

      {users.map((user) => (
        <div key={user.id} className='card'>
         <div> 
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
        </div>
        <button onClick={() => deleteUsers(user.id)}>
            <img src={Trash}/>
        </button>
        </div>
      ))}

      </div>
  )
}

export default Home
