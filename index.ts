const fs = require('fs');

const lerArquivo = ():unknown => {
return JSON.parse(fs.readFileSync('./bd.json')); 
}

const escreverArquivo = (dados: any):void=>{
    fs.writeFileSync('./bd.json', JSON.stringify(dados))
}

type Endereco = {
    cep: string,
    rua: string,
    complemento?: string,
    bairro: string,
    cidade: string
}

type Usuario = {
    nome:string,
    email:string,
    cpf: string,
    profissao?:string,
    endereco: Endereco | null
}


const cadastrarUsuario = (usuario: Usuario): Usuario =>{
    const bd = lerArquivo() as Usuario[];
    bd.push(usuario);
    escreverArquivo(bd);
    return usuario;
}

const listagemUsuarios = ():Usuario[] => {
    return lerArquivo() as Usuario[];
}
