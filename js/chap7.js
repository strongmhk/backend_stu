//7-1
// 배열 생성자

// const arr1 = new Array(1, 2, 3);
// const arr2 = new Array('ABC');
// const arr3 = new Array(true);

// console.log(arr1);
// console.log(arr2)
// console.log(arr3)

// 정적 메서드 from

// 배열, 이터러블 , 유사배열을 인자로 받아 배열 반환 
// 이터러블이란? (https://ko.javascript.info/iterable)

// const arr1 = Array.from([1, 2, 3]);
// const arr2 = Array.from('ABCDE');
// const arr3 = Array.from({
//   '0': true,
//   '1': false,
//   '2': null,
//   length: 3
// });

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);


//7-2

// 배열의 얕은 복사와 깊은 복사(https://bbangson.tistory.com/78)

//7-3

//콜백함수를 인자로 받음
//함수는 매개변수로 함수를 받을 수 있음.
// function job(n, func) {
// 	for (let i=0; i<=n; i++) func(i);
// }

// let printAll = function (num) {
// 	console.log(num);
// };

// let printEven = function (num) {
//     if(num % 2 == 0) console.log(num);
// };
// //반복 호출할 함수를 인수로 주입한다.
// job(5, printAll); // 0 1 2 3 4 5
// job(5, printEven); // 0 2 4


// 여기서 콜백함수는 매개변수로 전달해되는 함수(printAll, printEven)이고, 고차함수는 job처럼 콜백함수를 인자로 전달받는 함수이다.

//map메소드는 배열을 반환함

