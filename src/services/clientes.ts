import api from "./api";
import { AxiosResponse } from "axios";

//Cadastro
export interface ClientesPayload {
    nome: string
    email: string
    senha: string
    apresentacao: string
}

async function clienteCadastro(payload:ClientesPayload): Promise<AxiosResponse> {
    try {
        const response = await api.post("/psicologos", payload)
        return response
    } catch (error) {
        throw error
    }
}

//Login
interface ClientesLoginPayload {
    email: string
    senha: string
}

async function clienteLogin(payload:ClientesLoginPayload): Promise<AxiosResponse> {
    try {
        const response = await api.post("/login", payload)
        return response
    } catch (error) {
        throw error
    }
}



// exportações das funçãos 
export const serviceClientes = {
    clienteCadastro,
    clienteLogin
}