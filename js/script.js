const URL = 'http://jsonplaceholder.typicode.com';
const usersBox = document.querySelector('.users-box');
const selectUsers = document.querySelector('.select-users');
const rightTopBox = document.querySelector('.right-top-box');
const leftBox = document.querySelector('.left-box');
let centreMap;
let usersObj;

fetch(URL + '/users')
	.then(answer => answer.json())
	.then(fillData);

function fillData(data) {
	if (!data.length){
		return null;
	}
	usersObj = data;
	data.map(function (user) {
		parseOb(user)
		selectUsers.innerHTML += `<option value="${user.id}">${user.name}</option>`;
		usersBox.innerHTML += `<a href="#${user.id}" data-id="${user.id}">${user.name}</a><br>`;
	});
}

function parseOb(obj) {
	var value;
	for (var key in obj) {
		if (key === 'id' ){
			rightTopBox.innerHTML += `<br><h2 id="${obj[key]}" style="font-size: 14px; font-weight: bold; text-align: center">---- ${obj.name} ----</h2>`
		}
		value = obj[key];
		if (typeof value !== 'object') {
			//console.log(key + ' : ' + value + '\r');
			rightTopBox.innerHTML += `<p style="font-size: 12px">${key + ' : ' + value}</p>`;
		} else if (typeof value === 'object') {
			//console.log(key + ': \r');
			rightTopBox.innerHTML += `<p style="font-size: 13px"><strong>${key + ' : '}</strong></p>`;
			parseOb(value);
		}
	}
}

selectUsers.addEventListener('change', function () {
	let selectedId = this.value;
	location.hash = `${selectedId}`;//переход по ссылке
	let latU = Number(usersObj[selectedId].address.geo.lat);
	let lngU = Number(usersObj[selectedId].address.geo.lng);
	centreMap = {lat:latU, lng:lngU};
	initMap(centreMap);
},false);

leftBox.addEventListener('click', function (el) {
	let userID = el.target.getAttribute('data-id');
	if (!userID){
		return;
	}
	let latU = Number(usersObj[userID].address.geo.lat);
	let lngU = Number(usersObj[userID].address.geo.lng);
	centreMap = {lat:latU, lng:lngU};
	initMap(centreMap);
},false);

//==========GOOGLE-MAP===========
var map;
function initMap(centreMap) {
	if (!centreMap){
		return false;
	}
	map = new google.maps.Map(document.querySelector('.right-bottom-box'), {
		center: centreMap,
		zoom: 3
	});
	const marker = new google.maps.Marker({
		position: centreMap,
		map: map,
		title: 'User Home',
		icon: 'img/location.png'
	})
}
