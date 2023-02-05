//5-1
//객체를 다룰 때 객체나 배열을 key값으로 사용하면 안됨
// const person = {
//   name : '김민형',
//   age : 24,
//   form (formal){
//     return formal ? `안녕하십니까 ${this.name}입니다.` : `안녕하세요 ${this.name}이에요.`; 
//   }
// }
// console.log(person.form(true));


//5-2
// function Person(name, age, married){
//   this.name = name;         // 생성자 함수는 대문자로 시작(관례)
//   this.age = age;
//   this.married = married;
// }

// const p1 = new person('김민형', 24, false);
// console.log(p1);

// function mul(num){
//   return num * num;
// }

// function mulNum(func, number){
//   return func(number);
// }

// numNum(mul, 3);


//5-4
// class Employee {
//   #name = '';       //캡슐화
//   #age = 0;
//   constructor (name, age) {
//     this.#name = name;
//     this.#age = age;
//   }
//   get name () {
//     // [n]: n + 1 번째 글자를 반환
//     return this.#name[0] + '모씨';
//   }
//   get age () {
//     return this.#age - (this.#age % 10) + '대';
//   }
//   set age (age) {
//     if (typeof age === 'number' && age > 0) {     
//       this.#age = age;
//     };
//   }
//   getOlder(years) { this.#age += years; }
// }

// const emp1 = new Employee('김복동', 22);



// class Chicken {
//   #name = '';
//   #no = 0;
//   constructor(name, no){
//     this.#name = name;
//     this.#no = no;
//   }

//   get name (){
//     return 
//   }
// }

// class Person {
//   constructor(name, no){
//     this.name = name;
//     this.no = no;
//   }

//   introduce(){
//     return `안녕하세요 ${this.name}입니다!`;
//   }
  
// }

//5-5 상속
// class Bird {
//   wings = 2;
// }
// class eagle extends bird {
//   claws = 2;
// }


// class YalcoChicken {
//   no = 0;
//   menu = { '후라이드': 10000, '양념치킨': 12000 };

//   constructor (name, no) {
//     this.name = name;
//     if (no) this.no = no;
//   }
//   introduce () {
//     return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
//   }
//   order (name) {
//     return `${this.menu[name]}원입니다.`
//   }
// }

// class ConceptYalcoChicken extends YalcoChicken {
//   #word = '';
//   constructor (name, no, word) {
//     super(name, no);       --> 자식 클래스 constructor에서의 super는 부모클래스의 constructor를 의미함
//     this.#word = word;
//   }
//   introWithConcept () {
//     return super.introduce() + ' ' + this.#word;  --> 자식 클래스 메서드 내의 super는 부모클래스에서 만들 instance를 의미함
//   }                                                    따라서 super == YalcoChicken
//   order (name) {
//     return super.order(name) + ' ' + this.#word;
//   }
// }

// const pikaChain = new ConceptYalcoChicken('도봉', 50, '피카피카~');


//5-6

// 인자를 하나의 객체로 묶어 받음 

// function introduce(person) {
//   console.log(`제 이름은 ${person.name}, `
//     + `나이는 ${person.age}세구요. `
//     + `직업은 ${person.job}, `
//     + `${person.married ? '기혼' : '미혼'}입니다.`
//   )
// }

// // 가독성 좋음, 프로퍼티명만 제대로 입력하면 순서 무관
// const person1 = {
//   job: '개발자',
//   age: 28,
//   married: false,
//   name: '김철수',
//   blood: 'O' // 추가 인자 무관
// };

// introduce(person1);


// 디스트럭쳐링 (적절히 활용)
function introduce({age, married, job, name}) {
  // 순서 무관
  // 이 프로퍼티들을 갖는 객체를 인자로 받겠다는 의도 드러냄

  console.log(`제 이름은 ${name}, `
    + `나이는 ${age}세구요. `
    + `직업은 ${job}, `
    + `${married ? '기혼' : '미혼'}입니다.`
  )
}

const person1 = {
  job: '개발자',
  age: 28,
  married: false,
  name: '김철수',
  blood: 'O'
};

introduce(person1);