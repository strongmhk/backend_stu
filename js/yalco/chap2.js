// 자바스크립트 제일 중요한 3가지 : 실행 context(this, 스코프), 이벤트 루프() , 프로토타입


// 2-2
// 동적과 정적 자료형
// 동적 자료형은 파이썬, js와 같은 인터프리터 언어에서 사용, age = 17 변수의 type을 알아서 정해줌
// 정적 자료형은 c, c++, java와 같은 컴파일 언어에서 사용, int age = 17 변수의 type을 선언해야함
// 인터프리터 언어는 기계어로 번역해주는 과정없이 한 줄씩 실행함 -> 실행 속도 느림
// 컴파일 언어는 우리가 작성한 코드를 기계어로 번역하는 과정을 거친 후 기계어로 바뀐 파일은 한 번에 실행! -> 실행 속도 빠름



// 주어진 문자열을 대문자로 바꾸는 함수
// 다른 자료형에 대한 예외처리 없음
function getUpperCase(str) {
  return str.toUpperCase();
}

console.log(getUpperCase('hello'));
// ⚠️ 오류 발생!
console.log(getUpperCase(1));
// 함수를 정의하는 과정에서 int 형을 집어넣을수도 있기 때문에 이런 동적 자료형은 오류를 불러일으킬수있음


//2-3
// 텍스트 출력할 때 작은, 큰 따옴표없이 백틱 `을 사용해 출력할 수 있음.
// 백틱을 이용하면 문자열안에서 줄바꿈 
console.log(`일 더하기 이는 ${1+2} 입니다.`);
console.log(`안녕하세요 \n 김민형입니다.`);


//2-4
// ===은 type과 값 모두 비교하므로 등호 3개 사용 권장
// +=는 부수효과를 일으키므로 부수효과를 일으키지않는 방향으로 코딩하는게 안전함
// 그래서 let(변수)보다는 const(상수)를 사용하는게 좋움

// 2-6
// 0.1 + 0.2 != 0.3 컴퓨터는 이진법을 사용하므로 0.1 은 이진법으로 0.0001001001... 이런식으로 표현됨


//2-7
// a && b -> a가 false이면 a 출력, a가 true이면 b 출력
// a || b -> a가 true이면 a 출력, b가 false이면 b 출력

//2-8
// a ?? b -> a가 null이거나 undefined면 b출력, 아니면 a출력

//2-9
// 객체는 프로퍼티 (키 : 값)의 형태로 구성됨
// 배열 역시 하나의 객체임. 배열의 인덱스는 0부터 시작
// 객체에서 const로 선언해도 그 안의 값은 바꿀 수 있음. 다만 아예 객체를 새롭게 선언하는게 안됨.
// ex) const person1 = {
//  name : '김민형', age : 24, married : False
//}
// person1.age = 26 (ok), person1 = {name : '김민형'} (no)
// 배열이나 객체에서는 인덱싱 오류가 뜨지않고 undefined 반환


//2-10
// 일반 변수 (let)과 같은 경우는 원시타입
// 객체, 배열은 참조타입
// 참조타입은 call by reference(주소값 복사)
// 원시타입은 call by value(그냥 내부의 값 복사)
// ex) const person1 = {
//  name : '김민형', age : 24, married : False
//}
// 여기서 person1.age = 26; 이런 코드는 (person1 = true;) 와 같이 person1이 가리키는 주소값을 바꾸는게 아니고
// person1의 주소값(주머니)이 가리키는 age의 값을 바꾸는 것이기 때문에
// const여도 값을 바꿀 수 있는 것임.
