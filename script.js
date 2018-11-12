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

	filterGrid('all');


});

	function filterGrid(group){
		$('#test').children('div').each(function(){
			if($(this).hasClass(group) == true) {
				$(this).addClass('show');
			}
			else{
				$(this).removeClass('show');
			}
		})
	};