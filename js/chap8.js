// 8-1 객체의 프로퍼티

const obj = {
  x: 1,
  y: { a: 1 }
};

Object.freeze(obj);

obj.x++;            // 여기서의 x의 값은 바뀌지 않지만            
obj.y.a++;         //여기서 a의 값은 바뀜
// y가 가리키는 값(주소값)은 얼어있지만 대상은 freeze 돼있지 않음

console.log(obj);


//8-2