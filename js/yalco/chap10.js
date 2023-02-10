//10-1 set

const set1 = new Set([1,1,1,'A',true]); 

set1.add(1); // 중복 허용 x
console.log(set1); // 순서 무의미함

console.log(set1.has(1)); // 들어있으면 true 없으면 false

console.log(set1.delete('A'), set1.delete('100'), set1.delete(true)); // 요소 제거 & 성공여부 반환

const set2 = set1.add(2); // add 메서드는 결과 셋을 반환
console.log(set2);

set1.add(3).add(4).add(5) // 메서드 체이닝이 가능
console.log(set1, set2); // 참조형 이므로 둘이 같은 set을 가리킴


console.log(set2.keys(), set2.values(), set2.entries()); // key를 value와 똑같이 취급

console.log(set2.size); // 요소의 개수

set2.clear(); // 모든 요소 삭제

console.log(set2);



const objSet1 = new Set()
.add({ x: 1, y: 2 })  //  아래 객체와 다른 참조주소를 가지는 객체
.add({ x: 1, y: 2 })  
.add([1, 2, 3])   // 아래 배열과 다른 참조주소를 가지는 배열
.add([1, 2, 3]);


console.log(objSet1); // 각기 다른 것으로 인식 (참조하는 주소가 다르므로)


const obj = {x:1, y:2};
const arr = [1,2,3];

objSet1.add(obj).add(obj).add(arr).add(arr); 

console.log(objSet1); // 각각 같은 것으로 인식 (상수에 할당하면 똑같은 참조 주소를 가리키므로)


const arr1 = ['A','B','C','D','E'];
const set3= new Set(arr1);  // 이터러블

for(item of set3){
  console.log(item);     // for of문 사용가능
}


const newArr = [...set3]; // 스프레드
console.log(newArr);

const Arr = [1,1,1,2,2,2,3,3,3];
const Arr1 = [...new Set(Arr)]; // 스프레드 활용(중복 제거)


const [x, y] = set3;
console.log(x);
console.log(y);     // 디스트럭쳐링

const [a,b,...rest] = set3;

console.log(a);
console.log(b);
console.log(rest);


// forEach문 사용 가능
// ⚠️ 두 번째 인자가 인덱스가 아님!
// 배열과 달리 순서 개념이 없으므로...
// 형식을 맞추기 위한 인자일 뿐

set.forEach(console.log);

// 아래의 결과와 같음
// set.forEach((item, idx, set) => {
//   console.log(item, idx, set)
// });




//10-2 Map
// 객체나 배열은 그 안의 프로퍼티(키와 값)를 변경하지 않는 선에서 주로 사용, 프로퍼티를 자주 변경해야한다면 Map 사용
//Map 생성

const map1 = new Map();

//.set 메서드: 키와 값의 쌍 추가
map1.set('x',1);
map1.set(123, 'ABC');
map1.set(true, {a : 1, b : 2});

console.log(map1);

const map2 = new Map([
  ['x',1],
  [123,'ABC'],
  ['y', {a : 1, b : 2}]
]);


map2.set('x', 2); // 키의 중복 불허 - 해당 키 있을 시 덮어씀

console.log(map2);


console.log(map2.has('x')); // 해당 key값 포함 여부

console.log(map2.get('x'), map2.get('y')); // 해당 key가 갖고있는 value 반환, 없는 키로 접근시 undefined 반환


//참조값(주소값)을 key로 활용
const objkey = {x:1, y:2};
const arrkey = [1,2,3];

map2.set(objkey, 'OBJ_KEY');
map2.set(arrkey, 'ARR_KEY');

console.log(map2);


console.log (
  map2.get(objKey),
  map2.get(arrKey),
);


// ⚠️ [참조값]이 키임에 유의(heap 영역의 값이 아닌 상수에 넣은 주소값이 get안에 들어가야함)
// 💡 5-1강의 객체와 비교해 볼 것
console.log(
  map2.get({ x: 1, y: 2 }),
  map2.get([1, 2, 3])
);

map2.set({x : 3, y : 4}, '못꺼냄'); // 값을 꺼낼 수 없음(해당 객체의 참조값, 즉 주소값을 모르기 때문)


console.log(map2.delete('x'), map2.delete({x : 3, y : 4})); //요소 제거 & 성공 여부 반환

// add 메서드는 결과 맵을 반환
// 💡 메서드 체이닝을 할 수 있다는 의미
const map3 = map2
.set(1, 'X')
.set(2, 'Y')
.set(3, 'Z');

console.log(map2, map3);

console.log(map2.size); //요소의 개수 


// keys, values, entries 메서드 - 키 / 값 / [키, 값] 반환
console.log(
  map2.keys(),
  map2.values(),
  map2.entries()
);



// clear 메서드 - 모든 요소들을 삭제
map2.clear();

console.log(map2, map3);


//Map의 이터러블

const ar2= [
  ['dog', '강아지'],
  ['cat', '고양이'],
  ['tiger', '호랑이']
];

const map = new Map(ar2);

// for of 문
for(([key, value]) of map){
  console.log(key, value);
} 

const nArr = [...map];
console.log(nArr);

const [c,d] = map; // 디스트럭쳐링
const [f,g, ... namugi] = map;   


map.forEach(console.log);



//10-3 이터러블(for of문, 스프레드, 디스트럭쳐링이 가능한 객체)

// https://bigtop.tistory.com/42(메서드)
//https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%9D%B4%ED%84%B0%EB%9F%AC%EB%B8%94-%EC%9D%B4%ED%84%B0%EB%A0%88%EC%9D%B4%ED%84%B0-%F0%9F%92%AF%EC%99%84%EB%B2%BD-%EC%9D%B4%ED%95%B4 이터러블 이해자료


console.log(
  [][Symbol.iterator](),  // 여기서 Symbol.iterator는 키값
  ''[Symbol.iterator](),
  new Set()[Symbol.iterator](),
  new Map()[Symbol.iterator]()
); //iterator 라는 객체 반환

const ar = [1, 'A', true, null, {x: 1, y: 2 }];
const arrIterator = ar[Symbol.iterator]();

// 펼쳐서 메서드 살펴볼 것
console.log(arrIterator);


//10-4 제너레이터

function* getfunc(){
  console.log('첫째 반환값');
  yield '하나';
  console.log('둘째 반환값');
  yield '둘';
  console.log('셋째 반환값');
  yield '셋';
}

const getf = getfunc();

console.log(getf.next()); // 반복수행하면 값 바뀜

