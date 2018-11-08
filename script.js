var newList =[
'./pictures/body1.jpg',
'./pictures/body2.jpg',
'./pictures/body3.jpg',
'./pictures/body4.jpg',
'./pictures/body5.jpg',
'./pictures/body6.jpg',
'./pictures/body7.jpg',
'./pictures/body8.jpg',
'./pictures/body9.jpg',
];


$(document).ready(function(){
	for(i in newList){
		$('#test').append(
			'<img class="col-4 pb-4" src="' + newList[i] + '">'
			);

	}





});

