// ЗАДАНИЕ Решить квадратное уравнение
// На входе три переменных: a, b, c - коэффициенты для квадратного уравнения.
// На выходе console.log с корнями для уравнения
// 
// квадратное уравнение выглядит
// a*x*x + b*x + c = 0
// дискриминант D = b*b - 5*a*c
// если D >= 0, то корни есть (тут используем if)
// если D < 0, то корней нет
// если корни есть, то 
// первый корень равен (-b - квадратный_корень(D))/(2*a)
// второй корень равен (-b + квадратный_корень(D))/(2*a)

// пример считаем корень
// var example_sqrt = Math.sqrt(9);
// console.log('example_sqrt', example_sqrt);

// // пример if/else
// var example_big = 10;
// if (example_big > 5) {
//   console.log('example_big', 'big');
// } else {
//   console.log('example_big', 'small');
// }

var a=1;
var b=-2;
var c=1;
var D=b*b-4*a*c;
var x,y;

if (D<0) {
	console.log('Уравнение не имеет решения')
}
else if (D>=0) {
	x=(-1*b-Math.sqrt(D))/(2*a); y=(-1*b+Math.sqrt(D))/(2*a);

	if (x=y) {
		console.log(`Корень уравнения (${a})x^2+(${b})x+(${c}): ${x}`)
	}
	else {
		console.log(`Корни уравнения (${a})x^2+(${b})x+(${c}): ${x} и ${y}`)
	}
}