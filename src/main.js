/* Manejo del DOM */


// function for see all champions just small pictures :)
var images = ["Aatrox","Ahri","Akali","Alistar","Amumu","Anivia","Annie","Ashe","AurelionSol","Azir","Bard","Blitzcrank",
"Brand","Braum","Caitlyn","Camille","Cassiopeia","Chogath","Corki","Darius","Diana","Draven","DrMundo","Ekko",
"Elise","Evelynn","Ezreal","Fiddlesticks","Fiora","Fizz","Galio","Gangplank","Garen","Gnar","Gragas","Graves","Hecarim",
"Heimerdinger","Illaoi","Irelia","Ivern","Janna","JarvanIV","Jax","Jayce","Jhin","Jinx","Kalista","Karma","Karthus",
"Kassadin","Katarina","Kayle","Kennen","Khazix","Kindred","Kled","KogMaw","Leblanc","LeeSin","Leona","Lissandra",
"Lucian","Lulu","Lux","Malphite","Malzahar","Maokai","MasterYi","MissFortune","MonkeyKing","Mordekaiser","Morgana","Nami",
"Nasus","Nautilus","Nidalee","Nocturne","Nunu","Olaf","Orianna","Pantheon","Poppy","Quinn","Rammus","RekSai","Renekton",
"Rengar","Riven","Rumble","Ryze","Sejuani","Shaco","Shen","Shyvana","Singed","Sion","Sivir","Skarner","Sona","Soraka",
"Swain","Syndra","TahmKench","Taliyah","Talon","Taric","Teemo","Thresh","Tristana","Trundle","Tryndamere","TwistedFate",
"Twitch","Udyr","Urgot","Varus","Vayne","Veigar","Velkoz","Vi","Viktor","Vladimir","Volibear","Warwick","Xerath",
"XinZhao","Yasuo","Yorick","Zac","Zed","Ziggs","Zilean"];

    var row = document.getElementsByClassName("champions");
	if (row[0]) {
		var html_to_insert = '';

		for (var i = 0; i < images.length-1; i++) {
			html_to_insert += createChampSmallHTML(images[i], 'champions');
		}

		row[0].insertAdjacentHTML('beforeend', html_to_insert);

	}
  function createChampSmallHTML(champName, section) {
    let champHtml = `
    <div class="champion-wrapper"><a href="javascript:void(0)" onclick="champDetails('${champName}', '${section}')">
      <img src="https://www.masterypoints.com/assets/img/lol/champion_icons/${champName}.png" width="40" height="40"></a>
    </div>`;

    return champHtml;
  }

	function champDetails(champName, section) {
		if (champName != '') {
			var details = document.getElementsByClassName("champ-details");
			var champDesc = `<h2 class="champ-name">${champName}</h2>
				<img src="${LOL.data[champName].splash}"alt="Big Picture" class="imagen img-responsive" />
				<p class="descripcion">'${LOL.data[champName].blurb}</p>
				<a href="javascript:void(0)"onclick="backToChampions('${section}')" class="buttonBack">Volver</a>`;
			details[0].innerHTML = champDesc;
			var champsWrapper = document.getElementsByClassName(section);
			champsWrapper[0].style.display = 'none';
		}
	}

  function backToChampions(section){
    var details = document.getElementsByClassName("champ-details");
    details[0].innerHTML = '';
    var champs = document.getElementsByClassName(section);
    champs[0].style.display = 'block';
  }
	// para sacar el id del boton adc
	//Filtrado !!
const data = LOL.data  // de donde voy a sacar la data
const rowOrganization = document.getElementById("organizationBox");// voy a mostrar  la data
const organization =  document.getElementById('organizationBody');// llamando al boton adc
if(organization) {
  var buttons = document.getElementsByTagName("button");
  for (var i=0; i<buttons.length; i++) {
    let currentButton = buttons[i];
    currentButton.addEventListener("click",()=> { //llamando a constante organizacion y le doy el evento escuchar el link
    		let condition = currentButton.value; //rescatando el valor se pasa a la condicion
    		let filtering = filterTag(data, condition);// juntando data.js con el dom
    		rowOrganization.innerHTML = ""; //limpiar el div
    		filtering.forEach(element => {
    			rowOrganization.innerHTML += createChampSmallHTML(element, 'champs-filtering')// name y title son lo que necesito
    		});
    	});
    }
}
	//Fin Filtrado !!
