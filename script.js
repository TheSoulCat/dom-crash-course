//EXAMINE THE DOCUNENT OBJECT
//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.forms);

//GET ELEMENTS BY ID
//const headerTitle = document.getElementById('header-title');
//const header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'Goodbye';  
//headerTitle.innerHTML = "<h3>Hello</h3>";
//header.style.borderBottom = 'solid 5px black';

//GET ELEMENTS BY CLASSNAME
//const items = document.getElementsByClassName("list-group-item");
//console.log(items);
//console.log(items[1]);
//items[1].textContent = 'Hello Big Balls';
//items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'yellow';

//for(let i = 0; i < items.length; i++) {
//    items[i].style.backgroundColor = 'gray';
//}

//GET ELEMENTS BY TAGNAME
// const li = document.getElementsByTagName("li");
//console.log(li);
//console.log(li[1]);
//li[1].textContent = 'Hello Big Balls';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for(let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = 'gray';
// }

// QUERY SELECTOR //
// const header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// const input = document.querySelector('input');
// input.value = 'Hello World';

// const submit = document.querySelector('input[type="submit"]');
// submit.value = 'Send';

// const item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// const lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// const secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERY SELECTOR ALL //
// const titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

// const odd = document.querySelectorAll('li:nth-child(odd)');
// const even = document.querySelectorAll('li:nth-child(even)');

// for (let i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = 'yellow';
//     even[i].style.backgroundColor = 'green';
// }

// TRAVERSING THE DOM //
// const itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';

// childNodes
// console.log(itemList.childNodes);

// children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// firstChild
// console.log(itemList.firstChild);

// firstElementChild
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent = 'Hello Big Balls!';

// lastChild
// console.log(itemList.lastChild);

// lastElementChild
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent = 'Hello Sweet Tits!';

// nextSibling
// console.log(itemList.nextSibling);

// nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);

// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'blue';

//createElement
//const newDiv = document.createElement('div');
// Add Class
//newDiv.className = 'balls';
// Add ID
//newDiv.id = 'tits';
// Add Attribute
//newDiv.setAttribute('title', 'Sweet Tits');
// Create text node
// const newDivText = document.createTextNode('Hello World');
// Add text to div
// newDiv.appendChild(newDivText);
//newDiv.textContent = 'Hello World';

// Div placement in DOM
//const container = document.querySelector('header .container');
//const h1 = document.querySelector('header h1');
//newDiv.style.fontSize = '25px';
//container.insertBefore(newDiv, h1);

//Button Click Event
//const button = document.getElementById('button');
//button.addEventListener('click', buttonClick);

//function buttonClick(e) {
    //console.log('Button Clicked');
    // document.getElementById('header-title').textContent = 'Hey Sweet Tits!';
    // document.querySelector('#main').style.backgroundColor = "#f4f4f4";
    //console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);
    // console.log(e);

    // console.log(e.type);
//Mouse Position
    // console.log(e.clientX);
    // console.log(e.clientY);
    // console.log(e.offsetX);
    // console.log(e.offsetY);
    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);
//}

// const button = document.getElementById('button');
// const box = document.getElementById('box');
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

//Use on parent element
// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

//User on child elements within parent (if needed)
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

// const itemInput = document.querySelector('input[type="text"]');
// const form = document.querySelector('form');
// const select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('copy', runEvent);
// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);
// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);

// form.addEventListener('submit', runEvent);

// function runEvent(e) {
//     e.preventDefault();
//     console.log('EVENT TYPE: '+e.type);

    // console.log(e.target.value)

    // console.log(e.target.value);

    // output.innerHTML = '<h3>MouseX: '+ e.offsetX + '</h3><h3>MouseY: ' + e.offsetY + '</h3>';

    // box.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";
//}



