// 13-1 프로토타입
// 객체는 모든 것의 조상

console.log(
  {}.__proto__
); // 프로토타입 접근 , 이제 곧 삭제될 기능

console.log(
  Object.getPrototypeOf({})
); // 이제는 위에 대신 이거 사용


console.log(
  {}.__proto__ === { x: 1, y: 2 }.__proto__
); // 같은 종류는 프로토타입 공유


function YalcoChicken (name, no) {
  this.name = name;
  this.no = no;
}

// 공통된 요소들은 프로토타입 프로퍼티로
YalcoChicken.prototype.titleEng = 'YalcoChicken';

YalcoChicken.prototype.introduce = function () {
  return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
}

YalcoChicken.prototype.introEng = function () {
  return `Welcome to ${this.titleEng} at ${this.name}!`;
}; // 메모리 최소화 하려면 각 인스턴스의 공통된 프로퍼티들은 prototype으로 선언해줘야함

//13-2 프로토타입의 상속



function Bird (name, sound) {
  this.name = name;
  this.sound = sound;
}
Bird.prototype.fly = function () {
  console.log(`${this.name} ${this.sound} 비행중`);
}

function Eagle (name, sound, prey) {
  this.name = name;
  this.sound = sound;
  this.prey = prey;
}

// ⚠️ 순서 주의! 상속을 먼저 받음
Eagle.prototype = Object.create(Bird.prototype);
// Eagle.prototype = Bird.prototype; // 💡 비교해 볼 것

// 상속 이후 자신의 프로토타입 작성
Eagle.prototype.hunt = function () {
  console.log(`${this.name} ${this.prey} 사냥중`);
}