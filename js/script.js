function print(text) {
	document.write('<p>' + text + '</p>');
}

function printList(list) {
	var st = "<ol>";
	for(var i = 0; i < list.length; i++) {
		st += '<li>' + list[i] + '</li>';
	}
	st += "</ol>";
	print(st);
}
