/*
scope: 변수의 범위
1.정적 스코프: global, block, function
2. ES6 이전에는 block scope가 없었다.
3. function 안에서 var를 사용하면, function scope가 된다. var -> function scope
4. ES6에서는 let, const 키워들 사용해서 block scope를 만든다.

*/

i = 10;
f = function(){
    // i = 20;
    var i = 20;
    console.log("i="+i);
    j= 30;
    var k = 10;
    if( k == 10){
        var l = 10;
    }
    console.log("l=" +l); //블락레벨 변수가 아니고 함수scope이기 때문에 사용가능!!

}

f();
console.log(i);
console.log(j);
// error: undefined
// console.log(k);

console.log("=====================================");

{
    let x = 10000;
    const PI = 3.14;

    x = 100;
    // 상수이기 떄문에 오류
    // PI = 3.14270;
}

// block 레벨이기 떄문에 접근 안됌!
// console.log(x);
