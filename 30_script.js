

console.log('======= DOM API getElementById() ===========');
const elementTitle = document.getElementById('title');
console.log(elementTitle.innerHTML);

console.log('======= DOM API getElementsByTagName() ===========');
const elementH2 = document.getElementsByTagName('h2');
console.log(elementH2);
console.log(elementH2[0].innerHTML);
console.log(elementH2[1].innerHTML);

console.log('======= DOM API getElementsByClassName() ===========');
const elementsTechStack=document.getElementsByClassName('techStack');
console.log(elementsTechStack);
console.log(elementsTechStack[0].innerHTML);
console.log(elementsTechStack[1].innerHTML);
console.log('======= DOM API querySelector() ===========');
const h2Element = document.querySelector('h2'); // Selecting element by tag name or element name
console.log(h2Element.innerHTML);

console.log('Selecting an element by id');
const h2ElementTitle = document.querySelector('#title');
console.log(h2ElementTitle.innerHTML);

console.log('Selecting an element by class name');
const elementTechStack = document.querySelector('.techStack');
console.log(elementTechStack.innerHTML);

console.log('======= DOM API querySelectorAll() ===========');
const h2ElementAll = document.querySelectorAll('h2');
console.log(h2ElementAll[0].innerHTML);
console.log(h2ElementAll[1].innerHTML);

console.log('querySelectorAll() with class');
const elementAll = document.querySelectorAll('.techStack');
console.log(elementAll[0].innerHTML);
console.log(elementAll[1].innerHTML);

console.log(`========== Update or change the text of an element ==================`);
const titleElement = document.querySelector('#title');
titleElement.innerHTML = 'Learning API - Document Object Model';


const profileElement = document.querySelector('#profile');
profileElement.setAttribute('href','https://in.linkedin.com/');

const listHeadingElement = document.querySelector('#listHeading');
console.log(listHeadingElement);
listHeadingElement.style.color = 'red';

console.log("=======================creating a node=======================================");

const liElement = document.createElement('li');
console.log(liElement);

const textNode = document.createTextNode('Angular or React');
console.log(textNode);
liElement.appendChild(textNode);
console.log(textNode);

const listElement = document.querySelector('#list');
listElement.appendChild(liElement);
 
console.log(`========== Removing a node ==================`);
const listEle = document.querySelector('#list');
const gitElement = document.querySelector('#git');
listEle.removeChild(gitElement);

const btnElement = document.querySelector('#buttonClick');
btnElement.addEventListener('click', ()=> {
    console.log('I will hit you back');
    alert('Wait, you clicked me.. Let me hit you back ');
} );

const liJavaScript = document.querySelector('#JavaScript');
liJavaScript.addEventListener('mouseover', ()=>{
    liJavaScript.style.color = 'blue';
    liJavaScript.style.fontSize = '20px';
} );


function clicked(){
    alert('you clicked on button');
    console.log('you clicked on button');

}
function over(){
    alert('Hey..mouse is on me');
}










