var myRent;
var myIncome;
var percentage;

function rentCalc(){
	myRent = document.getElementById("myRent").value;
	myIncome = document.getElementById("myIncome").value;
	percentage = myRent / myIncome * 100;
	alert(percentage + " percent of your $" + myIncome + " in income is spent on rent!");
	//alert("The rent is $" + rent + " and your income is $" + income);
	rightRent();
}

function rightRent(){
	if (percentage > 35) {
		alert("The rent is too damn high!");
	} else {
		alert("Your rent to income ratio is just right!");
	}
}