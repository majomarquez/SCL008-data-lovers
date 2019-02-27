
// function for see all champions just small pictures :)
var images = ["Aatrox","Ahri","Akali","Alistar","Amumu","Anivia","Annie","Ashe","Aurelion Sol","Azir","Bard","Blitzcrank",
"Brand","Braum","Caitlyn","Camille","Cassiopeia","Cho'Gath","Corki","Darius","Diana","Draven","Dr.Mundo","Ekko",
"Elise","Evelynn","Ezreal","Fiddlesticks","Fiora","Fizz","Galio","Gangplank","Garen","Gnar","Gragas","Graves","Hecarim",
"Heimerdinger","Illaoi","Irelia","Ivern","Janna","Jarvan IV","Jax","Jayce","Jhin","Jinx","Kalista","Karma","Karthus",
"Kassadin","Katarina","Kayle","Kennen","Kha'Zix","Kindred","Kled","Kog'Maw","LeBlanc","Lee Sin","Leona","Lissandra",
"Lucian","Lulu","Lux","Malphite","Malzahar","Maokai","Master Yi","Miss,”Fortune","Wukong","Mordekaiser","Morgana","Nami",
"Nasus","Nautilus","Nidalee","Nocturne","Nunu","Olaf","Orianna","Pantheon","Poppy","Quinn","Rammus","Rek'Sai","Renekton",
"Rengar","Riven","Rumble","Ryze","Sejuani","Shaco","Shen","Shyvana","Singed","Sion","Sivir","Skarner","Sona","Soraka",
"Swain","Syndra","TahmKench","Taliyah","Talon","Taric","Teemo","Thresh","Tristana","Trundle","Tryndamere","TwistedFate",
"Twitch","Udyr","Urgot","Varus","Vayne","Veigar","Vel'Koz","Vi","Viktor","Vladimir","Volibear","Warwick","Xerath",
"Xin Zhao","Yasuo","Yorick","Zac","Zed","Ziggs","Zilean"];

    var row = document.getElementsByClassName("row");
	var html_to_insert = '';
	
	for (var i = 0; i < images.length-1; i++) {
		html_to_insert += '<div class="champion-wrapper"><img src="https://www.masterypoints.com/assets/img/lol/champion_icons/'+images[i]+'.png" width="40" height="40"></div>';
	}
	
	row[0].insertAdjacentHTML('beforeend', html_to_insert);
