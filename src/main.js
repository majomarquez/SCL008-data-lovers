/* Manejo del DOM */


// function for see all champions just small pictures :)
var images = ["Aatrox","Ahri","Akali","Alistar","Amumu","Anivia","Annie","Ashe","Aurelion Sol","Azir","Bard","Blitzcrank",
"Brand","Braum","Caitlyn","Camille","Cassiopeia","Cho'Gath","Corki","Darius","Diana","Draven","DrMundo","Ekko",
"Elise","Evelynn","Ezreal","Fiddlesticks","Fiora","Fizz","Galio","Gangplank","Garen","Gnar","Gragas","Graves","Hecarim",
"Heimerdinger","Illaoi","Irelia","Ivern","Janna","Jarvan IV","Jax","Jayce","Jhin","Jinx","Kalista","Karma","Karthus",
"Kassadin","Katarina","Kayle","Kennen","KhaZix","Kindred","Kled","KogMaw","LeBlanc","Lee Sin","Leona","Lissandra",
"Lucian","Lulu","Lux","Malphite","Malzahar","Maokai","MasterYi","MissFortune","Wukong","Mordekaiser","Morgana","Nami",
"Nasus","Nautilus","Nidalee","Nocturne","Nunu","Olaf","Orianna","Pantheon","Poppy","Quinn","Rammus","Rek'Sai","Renekton",
"Rengar","Riven","Rumble","Ryze","Sejuani","Shaco","Shen","Shyvana","Singed","Sion","Sivir","Skarner","Sona","Soraka",
"Swain","Syndra","TahmKench","Taliyah","Talon","Taric","Teemo","Thresh","Tristana","Trundle","Tryndamere","TwistedFate",
"Twitch","Udyr","Urgot","Varus","Vayne","Veigar","VelKoz","Vi","Viktor","Vladimir","Volibear","Warwick","Xerath",
"XinZhao","Yasuo","Yorick","Zac","Zed","Ziggs","Zilean"];

    var row = document.getElementsByClassName("champions");
	var html_to_insert = '';
	
	for (var i = 0; i < images.length-1; i++) {
		html_to_insert += '<div class="champion-wrapper"><a href="javascript:void(0)" onclick="champDetails(\''+images[i]+'\')">' +
		'<img src="https://www.masterypoints.com/assets/img/lol/champion_icons/'+images[i]+'.png" width="40" height="40"></a>'+
		'</div>';
	}
	
	row[0].insertAdjacentHTML('beforeend', html_to_insert);
	
	function champDetails(champName) {
		if (champName != '') {
			var details = document.getElementsByClassName("champ-details");
			var champDesc = '<span class="champ-name">' + champName + '</span>'+
				'<img src="'+LOL.data[champName].splash+'" alt="Big Picture" class="imagen" />'+
				'<p class="descripcion">'+LOL.data[champName].blurb+'</p>'+
				'<a href="javascript:void(0)" onclick="backToChampions()" class="boton_de_volver">Back to champ list</a>';
			details[0].innerHTML = champDesc;
			var champs = document.getElementsByClassName("champions");
			champs[0].style.display = 'none';
		}
	}
	// para sacar el id del boton adc
	//Filtrado !!
const data = LOL  // de donde voy a sacar la data
const rowOrganization= document.getElementById("organizationBox");// voy a mostrar  la data
const organization=  document.getElementById('adc');// llamando al boton adc

organization.addEventListener("click",()=> { //llamando a constante organizacion y le doy el evento escuchar el link
	let condition = organization.value; //rescatando el valor se pasa a la condicion
	let filtering =filterTag (data, condition);// juntando data.js con el dom
	rowOrganization.innerHTML=""; //limpiar el div
	filtering.forEach(element => {
		rowOrganization.innerHTML +=`
		<div class ="organizationList">
		<p>${element.name}</p>
		<p>${element.title}</p>
		</div>
		`// name y title son lo que necesito
	});
})

	//Fin Filtrado !!