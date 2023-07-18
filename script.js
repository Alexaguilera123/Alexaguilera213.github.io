var btnClickHangdler = function(e){
	var el = e.target;
	$(e.target).html('hello')
	alert

$("example-btn").on("click", function(){
	alert('this button was pressed');
})

var handleReservation = function(){
	//Verify i clicked the comment
	console.log('i just clicked the button');

//Verify i clicked the comment
	// Get the values of the inputs
	var firstNameEl = $('/first-name');
	var nuOfPeopleEl = $('.num-of-people');

	console.log(firstnameEl);
	console.log(numOfPoepleEl);

	var firstNameElValue = firstNameEl.val();
	var numOfPeopleValue = numOfPeopleEl.val();

	console.log(firstnameElValue)
	console.log(numOfPeopleValue)

	var firstNameOutputEl = $(".first-name-output .result");
	var numOfPplOutputEl = $(".num-ofpeople-output .result");

	firstNameOutputEl.html(firstnameElValue);
	numOfPplOutputEl.html(numOfPeopleValue);

$('#submit-res').on("click",handleResrvation)

	//these are the same
	firstNameEl.val();
	$('.first-name').val();

	//these are the same
	firstNameEl.val();
	$('.num-of-people').val();

	var outputEl = $('.outputs');
	var bgColorOpacity = numOfPeopleValue / 100;
	var bgColor


}

$('#submit-res').on("click", handleReservation);
$('res-input').on("input", handleReservation);
