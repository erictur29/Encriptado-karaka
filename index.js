// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

let palabra=prompt("escribe algo");
let palabraE

palabra=palabra.replaceAll("a",'1')
palabra=palabra.replaceAll("e",'2')
palabra=palabra.replaceAll("i",'3')
palabra=palabra.replaceAll("o",'4')
palabra=palabra.replaceAll("u",'5')



appDiv.innerHTML = `<h1>${palabra}</h1>`;
