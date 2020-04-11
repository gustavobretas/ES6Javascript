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

function soma(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(1,2,3,4,5,6));
console.log(soma(1,2,3,4));

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