//14-1 비동기 프로그램 : 빨래가 돌아갈 때 다른 집안일을 그동안 하는 것 처럼 특정 코드가 실행되는동안 다른 코드를 수행하는 것


//setTimeout 메서드

setTimeout(() => {
  console.log('타임아웃!');
}, 1000); // 1000밀리초 후에 첫번째 인자로 넣은 콜백 함수 실행

console.log('하나');

setTimeout(() => {
  console.log('둘');
}, 1000); // 💡 0으로 바꿔 다시 실행해 볼 것, setTimeout 내에 실행문은 따로 처리

console.log('셋');


// 자바스크립트의 동기코드는 싱글 스레드로 실행되나, 비동기 코드는 환경(web api, node js)으로 넘겨주어 멀티 스레드로 실행된다 

// 1초 ~ 1.5초 사이 무작위 시간 안에 도착
function doRace (num, name) {
  console.log(`👟 ${num}번 ${name} 출발`);

  setTimeout (() => {
    console.log(`🚩 ${num}번 ${name} 도착`);
  }, 1000 + Math.random() * 500);
}


'철수,영희,돌준,정아,길돈'
.split(',')
.forEach((itm, idx) => doRace(++idx, itm));

// 동기코드 먼저 실행되고 그 다음에 비동기 코드 실행

//14-2 프로미스

const borrow = 20;
// Promise 생성자로 인스턴스 생성
const payWith10perc = new Promise((resolve, reject) => {     // 여러 변수의 이름으로 인자를 받아올 수 있지만, 보통 성공했을때를 resolve, 실패했을때를 reject로 받아옴
  setTimeout(() => {
    if (Math.random() < 0.5) {
      // 💡 돈을 값을 수 없게 되었을 때
      reject('사업 망함'); // 보통 실패사유나 관련 설명을 넣음
    }
    resolve(borrow * 1.1);
  }, 1000); // 1초 후 갚겠음
});

// 생성자로 생성된 인스턴스는 resolve 되었을 때 실행되는 then메서드를 사용 가능 
payWith10perc
.then(result => {
  console.log(result + '만원');
}
// 💡 두 번째 인자로 reject를 받는 콜백을 넣을 수 있지만
// 아래처럼 catch로 진행하는 것이 더 깔끔함
)
.catch(msg => {
  console.error(msg);
})
.finally(() => {
  console.log('기한 종료');
});



// 빌린 금액으로 약속을 하는 함수
function moneyLend (borrow) { 
  return new Promise((resolve, reject) => {
    console.log(`채무 ${borrow}만원`);  // return 값으로 promise 인스턴스를 받아옴 

    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject('채무자 파산');
      }

      resolve(borrow * 1.1);
    }, 1000);
  });
}

moneyLend(20)
.then(result => moneyLend(result)) // resolve로 반환한 값을 인자로 받아오는데 이 인자 이름은 관례로 result로함 
.then(moneyLend) // 인자를 하나 받아서 그대로 쓰므로
.then(moneyLend) // 이렇게 줄여버릴 수 있음
.then(moneyLend)
.then(result => {
  console.log(`💰 반납 ${result}만원`);
})
.catch(msg => {
  console.error(msg);
})
.finally(() => {
  console.log('- - 대금업 종료 - -');
});


//14-3 프로미스의 병렬 진행


// 다섯 주자들이 동시에 질주
// 데드라인(밀리초) 안에 들어오지 못하면 탈락
let DEADLINE = 1450;

function getRunPromise (name) {
  return new Promise((resolve, reject) => {
    const time = 1000 + Math.random() * 500;

    setTimeout(() => {
      if (time < DEADLINE) {
        console.log(`🚩 ${name} 도착 - ${(time)/1000}초`);
        resolve({name, time});

      } else {
        reject((`${name} 시간초과`));
      }
    }, time);
  });
}

console.log(
  '철수,영희,돌준,정아,길돈'
  .split(',')
  .map(getRunPromise)
);

// all
// 한 명이라도 탈락하면 전체 탈락
Promise.all(
  '철수,영희,돌준,정아,길돈'
  .split(',')
  .map(getRunPromise)   //getRunPromise함수를 콜백함수로 받아와 map메서드를 이용해 배열로 반환 
)
.then(console.log) // 모두 성공해야 then 실행
.catch(console.error) // 한 명이라도 실패하면 catch 실행 (reject에 있는 것 반환 )
.finally(() => {
  console.log('- - 경기 종료 - -');
});



// allsettled
// 실패 유무 없이 then 실행 catch 실행x


// any 
// 제일 먼저 성공한 프로미스의 결과를 then으로 반환 
// 모두 실패시 오류 발생


//14-4 async & await


//14-5 예제
// fetch 메서드
// fetch는 프로미스의 인스턴스를 반환 => 따라서 then 사용 가능

const SERVER_URL = 'https://showcases.yalco.kr/javascript/mockserver/';

fetch(SERVER_URL + 'race-result')
.then(result => result.json())
.then(arry => {
  return arry.sort((a, b) => {
    return a.record - b.record
  })[0].runner_idx
})
.then(winnerIdx => {
  return fetch(`${SERVER_URL}runners/${winnerIdx}`)
})
.then(result => result.json())
.then(({school_idx}) => school_idx)
.then(schoolIdx => {
  return fetch(`${SERVER_URL}schools/${schoolIdx}`)
})
.then(result => result.json())
.then(console.log)
.catch(console.error);


