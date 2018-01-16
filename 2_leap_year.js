// ЗАДАНИЕ 
// Високосный год.
// Написать функцию, которая выводит true or false в ответ на введенный год
// И функцию, которая выводит все високосные годы в 21 веке

function leap_year(year) {
	if (year%4) {var answer = false}
		else {answer = true};
	return year +" год високосный? Ответ: "+ answer;
}

function all_leap_years() {
	var j=1;
	for (var i=2000; i<3000; i++){ 
			if (i%4==0) {console.log(`${j++} високосный год в 21 веке: ${i}`)}
		}
	return;
}

console.log(leap_year(2017));
all_leap_years()
