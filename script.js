var dateDiffInDays = function (date1, date2) {
	let d1=new Date(date1);
	let d2=new Date(date2);
	if(d1.getTime()===d2.getTime()){
		return 0;
	}
	else{
		return Math.floor((d2-d1)/1000*60*60*24);
	}
};

Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
