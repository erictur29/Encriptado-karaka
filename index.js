// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
const texto = document.querySelector('#texto');
const encriptar = document.querySelector('button');

encriptar.addEventListener('click', () => {
  let palabra = texto.value;
  palabra=palabra.replaceAll("a",'1');
  palabra=palabra.replaceAll("e",'2');
  palabra=palabra.replaceAll("i",'3');
  palabra=palabra.replaceAll("o",'4');
  palabra=palabra.replaceAll("u",'5');
  return palabra;
});


/*let palabra=texto;


console.log(palabra);



//let palabraE

/*palabra=palabra.replaceAll("a",'1')
palabra=palabra.replaceAll("e",'2')
palabra=palabra.replaceAll("i",'3')
palabra=palabra.replaceAll("o",'4')
palabra=palabra.replaceAll("u",'5')*/



//appDiv.innerHTML = `<h1>${palabra.textContent}</h1>`;
