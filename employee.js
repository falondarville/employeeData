$(document).ready(function(){

var config = {
    apiKey: "AIzaSyDYdtO35vQ0UCH2KFAQnnovcr4saEN4FCM",
    authDomain: "employeedata-a6dc3.firebaseapp.com",
    databaseURL: "https://employeedata-a6dc3.firebaseio.com",
    projectId: "employeedata-a6dc3",
    storageBucket: "",
    messagingSenderId: "210762251828"
};

firebase.initializeApp(config);

	var database = firebase.database();

	var employeeName = "";
	var role = "";
	var startDate = 0;
	var monthsWorked = 0;
	var monthlyRate = 0;
	var totalBilled = 0;

$("#addRows").on("click", function(){

	event.preventDefault();

	$("#employee-input").empty();
	$("#role-input").empty();
	$("#date-input").empty();
	$("#rate-input").empty();

	employeeName = $("#employee-input").val().trim();
	role = $("#role-input").val().trim();
	startDate = $("#date-input").val().trim();
	monthlyRate = $("#rate-input").val().trim();

	// Code in the logic for storing and retrieving the most recent user.
    database.ref().push({
    	employeeName: employeeName,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate
    });

	var newLine = $("<tr></tr>") 

	newLine.append('<td>' + employeeName + '</td>')
	newLine.append('<td>' + role + '</td>')
	newLine.append('<td>' + startDate + '</td>')
	newLine.append('<td>' + monthsWorked + '</td>')
	newLine.append('<td>' + monthlyRate + '</td>')
	newLine.append('<td>' + totalBilled + '</td>')

	$("#tbody").append(newLine)


});

// function(errorObject) {
// 	console.log("Errors handled: " + errorObject.code);
// }

//child_added
//clear fields

// database.ref().on("value", function(snapshot) {

// 	$("#employee-input").text(snapshot.val().name);
// 	$("#role-input").text(snapshot.val().email);
// 	$("#date-input").text(snapshot.val().age);
// 	$("#rate-input").text(snapshot.val().comment);
// });

});