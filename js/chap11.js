//11-1 에러 핸들링

// try catch문

console.log('에러 발생 전');

try {
  (3).split('');     // 오류가 있는지 검사할 구문
}

catch{
  console.error('에러!', e); // 오류 발생시 실행 할 구문
}

console.log('에러 발생 후');


//finally

function connect () { console.log('☀️', '통신 연결'); }
function disconnect () { console.log('🌙', '통신 연결 해제'); }
function sendArray (arr) { console.log('전송', arr); }

function sendStringAsArray (str) {
  connect();

  try {
    sendArray(str.split(''));
    return true;

  } catch (e) {
    console.error('🛑 에러!!', e);
    return false;

  } finally {
    // 💡 전송 성공 여부와 관계없이 연결은 끊어야 함
    disconnect();
    console.log('- - - - - - - -');
  }

  // ❓ 이곳에 넣는 것과 무엇이 다른가? -> 이곳에 넣으면 위의 try catch문은 return값을 반환하기 때문에 실행을 하지않음
  // 아래로 대체하여 실행해 볼 것
  // disconnect();
  // console.log('- - - - - - - -');
  // finally는 try문이 실패하던 성공하던 무조건 실행함
}

['ABC', '가나다', 123, '123'].forEach(i => {
  console.log(
    sendStringAsArray(i) 
    ? '[성공]' : '[실패]', '\n\n'
  );
});


//error 객체
const error = new Error('뭔가 잘못됐어'); // 기본 생성
console.log(error);

//의도적으로 에러 발생시키기
throw new Error('이유모를 에러 발생!');

//11-2 var을 쓰면 안되는 이유

notdecalered = 1; // 선언안하면 var타입으로 선언

// let q= 1;
// let q = 2; // ⚠️ 오류

// const t = 1;
// const t = 2; // ⚠️ 오류


var c = 1;
var c = 2; // 변수의 타입을 재선언해도 오류 x..


var num2 = 1;
{
  var num2 = 2;
  {
    var num2 = 3;
  }
}

console.log(num2); // 블록 스코프 무시 (3 출력)
// 즉 지역 변수가 전역에서도 사용이 됨..


//11-3 엄격모드

// ⚠️ 새로고침 후 실행해볼 것
// 선언되지 않은 변수 사용 금지
'use strict'; // 쌍따옴표도 가능

notDeclared = 1; // 오류 발생!

// 'use strict'를 문서 최상단에 써줘야함


//11-4 옵셔널 체이닝

