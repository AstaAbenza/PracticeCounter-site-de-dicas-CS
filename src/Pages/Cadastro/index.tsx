import { Link } from 'react-router-dom'
import { Form, ButtonEnviar } from './styled'
import { FormEventHandler, useState } from 'react'
import { serviceClientes } from '../../services/clientes'

export default function Cadastro(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')
    const [apresentacao, setApresentacao] = useState('')


    const cadastrar: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault()
        
        try {
           const response = await serviceClientes.clienteCadastro({
                nome: name,
                email: email,
                senha: password,
                apresentacao: apresentacao
            })

            if (response.status == 201){
                alert("Usuario Cadastrado")

            setName('')
            setEmail('')
            setPassword('')
            setCheckPassword('')
            }

        } catch (error) {
            alert("Usuario Error")
        }
    }

    return (
        <Form onSubmit={cadastrar}>
            <h1>Pratices<span>Counter</span></h1>
            <label>
                <input type='text' value={name} onChange={(e)=> setName(e.target.value)} placeholder="NICKNAME"></input>
            </label>
            <label>
                <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="E-MAIL"></input>
            </label>
            <label>
                <input type='text' value={apresentacao} onChange={(e)=> setApresentacao(e.target.value)} placeholder="APRESENTE-SE"></input>
            </label>
            <label>
                <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="NEW PASSWORD"></input>
            </label>
            <label>
                <input type='password' value={checkPassword} onChange={(e)=> setCheckPassword(e.target.value)} placeholder="REPEAT PASSWORD"></input>
            </label>
            <ButtonEnviar>Create account</ButtonEnviar>
            <Link to="/Login" className='createConta'>Possui uma conta?</Link>
        </Form>
    )
}