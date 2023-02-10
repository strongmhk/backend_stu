// 4-1
// 기본적으로 함수도 객체임 따라서
// const subt = function (x, y) {
//   return x - y;
// }

// console.log(subt(7, 2));

// 이런식으로 상수에 대입가능

// 호이스팅(실행문 먼저 쓰고 함수 정의문 써도 실행문 실행됨)

//4-2
//일급객체

// let person = {
//   name : '김민형',
//   age : 24,
//   married : false,
//   introduce : function(){
//     return `저는 ${this.name}, ${this.age}살 이고, ` + `${this.married ? '기혼':'미혼'}입니다.`;
//   }
// }

// console.log(person.introduce());

// function getIntroFunc(name, formal){
//   return formal ? function(){console.log(`안녕하십니까, ${name}입니다`);} : function(){console.log(`안녕하세요~ ${name}이라고 해요~`);}
//}

//4-3


//4-4

