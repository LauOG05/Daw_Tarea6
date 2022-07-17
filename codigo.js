


let listaPaises = ["Quatar", "Costa Rica", "Quatar", "Japon", "Rusia", "USA"]


function _switch(pais) {
  switch (pais) {
    case "Costa Rica":
      alert("Precio ticket de Costa Rica: $50");
      break;
    case "Qatar":
      alert("Precio ticket de Qatar: $100");
      break;
    case "Japon":
      alert("Precio ticket de Japo: $150");
      break;
    case "USA":
      alert("Precio ticket de USA: $100");
      break;
    case "Rusia":
      alert("Precio ticket de Rusia: $100");
      break;
    default:
      alert("No seleccionó ningún destino");
  }
}


function seleccion(pais) {
  if (pais.length === 0) {
    alert("No seleccionó ningun país")
  } else {
    alert("El pais seleccionado es: " + pais)
  }
}


function bucle() {
  for (let i = 0; i <= listaPaises.length; i++) {
    alert("Pais: " + listaPaises[i] + " , posicion: " + (i + 1));
  }
}


function formatearTexto(accion, texto, textbox) {
  switch (accion) {
    case 'Mayúscula':
      textbox.value = texto.toUpperCase();
      break;
    case 'Minúscula':
      textbox.value = texto.toLowerCase();
      break;
    case 'Tamaño':
      alert(`El string es de : ${texto.length} caracteres`);
      break;
  }
}


function objetos() {

  alert("Fecha de compra: " + new Date().toLocaleDateString());

}


function manejoError(num) {
  if (num === "" || num === 0)
  
    throw new Error("No ha digitado el numero de boletos a comprar");
    
  if (num == 0)
    throw new Error("El numero de boletos a comprar no pueden ser 0");
    
  if (num < 0)
    throw new Error("La cantidad de boletos no pueden ser meores a 1");
    
 
}

function Excepcion(num) {

  try {
    manejoError(num);
  } catch (error) {
    alert(error);
    return;
    
  }

  if(num>1)
  alert("La compra de " + num + " voletos, ha sido existosa");

  else
  alert("La compra de " + num + " voleto, ha sido existosa");
}


/*function verificar(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}

$('#passwordsNoMatchRegister').show();
$('#passwordsNoMatchRegister').hide();

if (new Date().getHours() < 18) {
  document.getElementById("demo").innerHTML = "Good day!";
}

try {
  nonExistentFunction();
} catch (error) {
  console.error(error);
  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser
}

switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}
  */

