/*
    배열(Array)
*/

console.log('========== 1. 생성 : 생성자 함수==========');
let a1 = new Array();
console.log(typeof(a1));

// 배열을 정의할 때, 크기 지정은 별 의미가 없다!
// 동적으로 배열은 늘어난다. 단 성능적으로 동적으로 계속 늘리는것보다는 지정하는게 좋다
let a2 = new Array(10);
console.log(a2.length);


a2[12] = 12;
console.log(a2.length);
//배열 요오세 값을 대입하지 않으면 undefined
console.log(a2[2], a2[3]); //null은 지정을 해줘야 null이 생김

console.log('========== 2. 생성 : 리터럴==========');

let a3 = [];
console.log(typeof(a3)+ ":" + a3.length);

// 다른 타입의 요소를 저장할 수 있다.
let a4 = [
    function(){
        console.log("함수맨 실행");
    }, 
    20, 
    "자바스크립트", 
    true, 
    {
    email: "enddl0121@naver.com",
    name: "김준호"
    }, 
    null, 
    undefined]

console.log(a4.length);
for(let i = 0; i < a4.length; i++){
    console.log(a4[i]);
}

a4.forEach(function(v){
    console.log(typeof(v));
});

//함수실행
a4[0]();


console.log('========== 2. Array vs Object==========');
a5 = [];
a5[0] = 0;
a5["1"] = 1;   //타입캐스팅이 자동으로 됨!
a5["name"] = "머지";
console.log(a5[0],a5["0"], a5[1], a5["1"], a5.name, a5.length);

o = {};
o[0] = 0;
o["1"] = 1;
// o.name= "안대혁";
o["name"] = "안대혁";
let s = "name";
console.log(o[s]);


console.log(o[0],o["0"], o[1], o["1"], o.length); // length는 안나옴

for(property in o){
    console.log(property + ":" + o[property]);
}