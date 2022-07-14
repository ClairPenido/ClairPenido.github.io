//* Pegar texto digitado no input "text-input" e colocar ele dentro da div da moldura "meme-text"

let getInput = document.getElementById('text-input');
let divMoldura = document.getElementById('meme-image-container');
let moduraText = document.getElementById('meme-text');


function enterPressed (event){
        let textMeme = getInput.value;
        moduraText.innerText = textMeme;
}
document.addEventListener('input', enterPressed); // https://www.javascripttutorial.net/javascript-dom/javascript-input-event/


//"meme-image" input id="meme-insert"

let image = document.getElementById('meme-image');
let insertImage = document.getElementById('meme-insert');
let getButtonSubmit = document.getElementById('button-submit');

function changeImage(event){
    // https://developer.mozilla.org/pt-BR/docs/Web/API/URL/createObjectURl
    image.src = URL.createObjectURL(event.target.files[0]); // https://www.codegrepper.com/code-examples/html/input+type%3D%22file%22+and+display+image
}

insertImage.addEventListener('change',changeImage);

// pegar os 3 tipos de style do css fire, water e earth 
// pegar os três botões
// quando o usuario clicar no botão correspondente, a borda do meme-image-container muda.

let getButtonFire = document.getElementById('fire');
let getButtonWater = document.getElementById('water');
let getButtonEarth = document.getElementById('earth');


function changeStyle (event){
if (event.target.id === 'fire'){
    divMoldura.style.border = "3px dashed red";
} else if (event.target.id === 'water') {
    divMoldura.style.border = "5px double blue"
} else if (event.target.id === 'earth') {
    divMoldura.style.border = "6px groove green";
}
}


getButtonFire.addEventListener('click', changeStyle);
getButtonWater.addEventListener('click', changeStyle);
getButtonEarth.addEventListener('click', changeStyle);

// 4 memes e assim que o usuario clicar, ele troca na imagem


let divMemes = document.getElementById('meme-templates');

function pickMeme (event){
    let memeImage = event.target;
    image.src = memeImage.src;

}

divMemes.addEventListener('click', pickMeme);

