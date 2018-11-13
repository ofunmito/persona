$(function () {

	$('#add').on('click', function(event) {
		event.preventDefault();
		
		const listTag = document.createElement('li');

		let textField = $('#textfield').val();

		listTag.append(textfield);

		$('#list').append(listTag);

	});

});

// function populate(){
// 	var wishList = document.createElement("LI");
// 	var textField = document.createTextNode(document.getElementById("textfield").value);

// 		wishList.appendChild(textField);

// 		document.getElementById('list').appendChild(wishList);

// }