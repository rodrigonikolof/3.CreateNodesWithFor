const elements = [
    {tag: 'p', text: 'Phrase 1'},
    {tag: 'div', text: 'Phrase 2'},
    {tag: 'footer', text: 'Phrase 3'},
    {tag: 'section', text: 'Phrase 4'},   
];


for (i = 0; i < elements.length; i++) {

let tagg = document.createElement(elements[i].tag);
let container = document.querySelector('.container');
tagg.textContent = elements[i].text;
container.append(tagg);
}



// let container = document.querySelector('.container');
// let para = document.createElement('p');
// para.textContent = "This is text"
// container.append(para); 
