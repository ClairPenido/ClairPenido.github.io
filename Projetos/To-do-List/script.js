//Adicione um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar 
// o nome do item que deseja adicionar à lista

let getInput = document.querySelector('#texto-tarefa');
let getButton = document.querySelector('#criar-tarefa');


let list = document.querySelector('#lista-tarefas');

function pushtoList() {
    let item = document.createElement('li');
    item.innerText = getInput.value;
    list.appendChild(item);
    console.log('item')
    getInput.value = ''; // limpa o input

}
getButton.addEventListener('click', pushtoList);
//let listItem = document.getElementsByTagName('li');
//Clicar em um item da lista deve alterar a cor de fundo do item para cinza
let item = document.getElementsByTagName('li');

function selectGray(event) {
    for (let i = 0; i < item.length; i += 1) {
        if (item[i].classList.contains('color-gray')) {
            item[i].classList.remove('color-gray'); // toda vez que eu clicar, vai add a classe gray 
        }
    }
    event.target.classList.add('color-gray');

}

list.addEventListener('click', selectGray);


function riskItem(event) { // https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
    event.target.classList.toggle('completed'); // add e remove o risco
}

list.addEventListener('dblclick', riskItem);

// Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista
let buttonClear = document.getElementById('apaga-tudo');

function clearList() {
    for (let i = 0; i < item.length; i += 0) {
        list.removeChild(item[i]);
    }
}
buttonClear.addEventListener('click', clearList);

// Adicione um botão com id="remover-finalizados" que quando 
// clicado remove somente os elementos finalizados da sua lista
let buttonRemoveItemRisk = document.getElementById('remover-finalizados');

let itensRisk = document.querySelectorAll('.completed');

function removeItemRisk() {
    for (let i = 0; i < item.length; i += 1) {
        for (let j = 0; j < item.length; j++) {
            if (item[i].classList.contains('completed')) {
                list.removeChild(item[i]); // confere se tem a classe e remove 
            }

        }
        
    }
}
buttonRemoveItemRisk.addEventListener('click', removeItemRisk);
let buttonRemoveSelected = document.querySelector('#remover-selecionado');

function removeSelected() {
    for (let i = 0; i < item.length; i += 1) {
    if (item[i].classList.contains('color-gray')) {
        list.removeChild(item[i]); 
    }
    console.log(item);
}
}
buttonRemoveSelected.addEventListener('click', removeSelected);