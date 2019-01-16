// $(function () {

// 	$('#add').on('click', function(event) {
// 		event.preventDefault();
		
// 		const listTag = document.createElement('li');

// 		let textField = $('#textfield').contents();

// 		listTag.append(textfield);

// 		$('#list').append(listTag);

// 	});

// });

var buttonEl = document.getElementById('add');

buttonEl.addEventListener('click', function() {

	var wishList = document.createElement("LI");
	var textField = document.createTextNode(document.getElementById("textfield").value);

		wishList.appendChild(textField);

		document.getElementById('list').appendChild(wishList);


});