//12-1 렉시컬과 클로저

const x = 1;
const y = 1;
const z = 1;

function func1 () {
  const y = 2;
  const z = 2;

  console.log('2', x, y, z);
  func2();
}

function func2 () {   //func2의 상위 스코프는 전역
  const z = 3;

  console.log('3', x, y, z);
}


console.log('1', x, y, z)
func1();



// const x = 1;
// const y = 1;
// const z = 1;

// function func1 () {
//   const y = 2;
//   const z = 2;

//   function func2 () {     //func2의 상위 스코프는 func1
//     const z = 3;

//     console.log('3', x, y, z);
//   }

//   console.log('2', x, y, z);
//   func2();
// }

// console.log('1', x, y, z)
// func1();


function createCounter (start) {
  let num = start;

  return function () {  //return 값을 함수로
    console.log(++start);
    return start;
  }
}

const count = createCounter(10); // count에는 함수가 반환됨



//12-2 this와 동적 바인딩

const korean = {
  favorite: '김치',
  makeStew: function (isHot, pots) {
    return `${isHot ? '매운' : '순한'} ${this.favorite}찌개 ${pots}냄비`;
  }
};

const italian = {
  favorite: '피자'
};


// 이탈리아인에게 한국인이 찌개 끓이는 법을 알려줌
italian.makeStew = korean.makeStew;  // 객체의 프로퍼티 할당
// this가 가리키는게 italian 객체이기때문에 김치찌개를 끓이는 법을 알려줬는데 피자찌개를 끓여버림..

//해결법

console.log(
  italian.makeStew.call(korean, false, 2)
); // call(this가 가리킬 객체, ...나머지 인자들)

console.log(
  italian.makeStew.apply(korean, [false, 2])
);


// ⭐ this가 바인딩된 새 함수를 만듦
italian.makeRightStew = korean.makeStew.bind(korean);
// this가 가리킬 객체 korean으로 고정
console.log(
  italian.makeRightStew(false, 2)
);


// 아예 바인딩하는 함수를 포함 시키기
const korean = {
  favorite: '김치',
  makeStew: function (isHot, pots) {
    return `${isHot ? '매운' : '순한'} ${this.favorite}찌개 ${pots}냄비`;
  },
  teachMakingStew: function () {
    return this.makeStew.bind(this);
  }
};

const italian = {
  favorite: '피자'
};



//12-3 정적 바인딩

function Korean () {
  this.favorite = '김치';

  this.makeStew = function (isHot) {
    return `${isHot ? '매운' : '순한'} ${this.favorite}찌개`;
  };
  this.fryRice = (isHot) => {
    return `${isHot ? '매운' : '순한'} ${this.favorite}볶음밥`;
  };
}

function Italian () {
  this.favorite = '피자';
}

const korean = new Korean();
const italian = new Italian();

console.log(korean.makeStew(true));
console.log(korean.fryRice(true));


italian.makeStew = korean.makeStew;
italian.fryRice = korean.fryRice;

console.log(italian.makeStew(false));
console.log(italian.fryRice(false)); // 화살표 함수는 this 정적 바인딩 즉, 처음 선언한 korea에서의 this인 '김치'를 가져옴





