import { soma, subtracao } from './funcoes';
import axios from 'axios';

class list {
    constructor(){
        this.data = []
    }
    
    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends list {
    constructor(){
        super();
        this.usuario = 'Gustavo'
    }
    mostraUsuario() {
        console.log(this.usuario);
    }    
}
const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo Todo');
}

MinhaLista.mostraUsuario();

// Operadores rest/spread

const usuario = {
    nome: 'Gustavo',
    idade: 35,
    empresa: 'Shipinbox'
}

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

// Array
const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr

console.log(a, b, c)

function somaRest(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(somaRest(1,2,3,4,5,6));
console.log(somaRest(1,2,3,4));

// SPREAD Operator

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];

console.log(arr3)

const usuario1 = {
    nome: 'Gustavo',
    idade: 35,
    empresa: 'Shipinbox'
}

const usuario2 = {...usuario1, nome: 'Ricardo'}

console.log(usuario2);

// Template Literals

const nomeLiterals = 'Gustavo';
const idadeLiterals = 35;

console.log('Meu nome é '+nomeLiterals+' e tenho '+idadeLiterals+' anos.')
console.log(`Meu nome é ${nomeLiterals} e tenho ${idadeLiterals} anos.`)

console.log(soma(1,2));
console.log(subtracao(1,2));


// Async/Await

const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK')
    }, 2000);
})

minhaPromise().then(response => {
    console.log(response)
});

// ES8

async function executaPromise(){
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromise();

// Executando como Arrow Function

const executaPromiseArrowFunc = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromiseArrowFunc();

// Configurando o Axios

class Api {
    static async getUserInfo(username){
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch (err) {
            console.warn('Erro na API');
        }
    }
}

Api.getUserInfo('gustavobretassdfsdfsdf');
Api.getUserInfo('gustavobretas');