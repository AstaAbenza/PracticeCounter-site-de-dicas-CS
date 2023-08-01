import { Link } from 'react-router-dom'
import { Form, ButtonEnviar } from './styled'
import { FormEventHandler, useState, useContext } from 'react'
import { serviceClientes } from '../../services/clientes'
import { userContext } from '../../Context/user'


export default function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useContext(userContext)

    const logar: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault()
        
        try {
           const response = await serviceClientes.clienteLogin({
                email: email,
                senha: password,
            })  

            if (response.status == 200){
                alert("Login Efetuado")
            setEmail('')
            setPassword('')

            setUser({
                name: response.data.nome,
                email: response.data.email,
                token: response.data.token
            })

            }

        } catch (error) {
            alert("Login Invalido!")
        }
    }

    

    return (
        <Form onSubmit={logar}>
            <h1>Pratices<span>Counter</span></h1>
            <label>
                <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="E-MAIL"></input>
            </label>
            <label>
                <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="PASSWORD"></input>
            </label>
            <ButtonEnviar>Login account</ButtonEnviar>
            <Link to="/Cadastro" className='createConta'>Não possui conta?</Link>
        </Form>
    )
}