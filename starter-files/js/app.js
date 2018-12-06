//agregamos el superagent
var request = superagent;
//ponemos el end point de la api
var api = "https://restcountries.eu/rest/v2/all";
//llamamos el contenedor donde pondremos la informacion llamandolo por su clase
//lo agregamos a una variable para poder manipularlo
var container = document.querySelector(".countries-container");
//llamamos a la informacion por el metodo get
request.get(api).then(function(resp) {
//con .body accedemos a la info de la api
var countries = resp.body;
//forEach nos sirve para iterar dentro del objeto y creamos una funcion
countries.forEach(function(country) {
//.name para acceder a la informacion en la pocicion name
var name = country.name;
//.flag para acceder a la informacion en la pocicion flag
var flag = country.flag;
//.name para acceder a la informacion en la pocicion capital
var capital = country.capital;
//creamos un div
var div = document.createElement("div");
//se agrega clase al div
div.setAttribute("class", "country-card");

container.appendChild(div);
//los resultados los concatenamos dentro de una variable
 var finalResult =
//concatenamos los resultado
  '<img class="country-flag" src="' + flag + '" alt="flag"></img>' +

  '<h4 class="country-name">' + name + "</h4>" +

  '<p class="country-capital">' + capital + "</p>";
//pintamos esa info en el dom
    div.innerHTML = finalResult;
  });
});
