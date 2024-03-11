const listHeadingElement = document.querySelector('#listHeading');
console.log(listHeadingElement);
listHeadingElement.style.color = 'red';

const titleElement = document.querySelector('#title');
console.log(titleElement);
titleElement.style.color = 'green';

console.log(`========== Removing a node ==================`);
const listEle = document.querySelector('#list');
const angularElement = document.querySelector('#angular');
listEle.removeChild(angularElement);