/*
변수의 데이터 타입

1-1.기본타입(primitve type), 유사객체
    1) undefined
    2) boolean
    3) string
    4) number
1-2. funtion 객체(Object) : 함수// new로 생성자로 만들어도 타입이 funtion임!
1-3. object 객체(Object): new 생성자 함수를 사용해서 객체를 생성

2. 자바스크립트 객체를 구분하는 또 다른 방법
2-1 내장객체(Built-In, Native) 객체: 자바스크립트 엔진에 미리 정의되어 있는 객체
Number, Boolean, Array, Date, String, Function, RegEx, ....와 같은 생성자 함수
ParseInt(), setTimeout(), setInterval(), ...와 같은 
전역객체(global, window)
2-2. 호스트 객체
    ex)호스트가 브라우저인 경우
        document, location, xmlHttpRequset
2-3. 사용자 객체
    자바스크립트 코드가 엔진에서 실행되면서 실행되는 런타임 객체
*/


var u;
var i = 10;
var b = true;
var s = "hello world";
var f = function () {}
var o = {};
var a = [1,2,3];
var n = null;

console.log(u+ ":" + typeof(u));
console.log(i+ ":" + typeof(i));
console.log(b+ ":" + typeof(b));
console.log(s+ ":" + typeof(s));
console.log(f+ ":" + typeof(f));
console.log(o+ ":" + typeof(o));
console.log(a+ ":" + typeof(a));
console.log(n+ ":" + typeof(n));

console.log("=============================================");

var i2 = new Number(10);
var b2 = new Boolean(false);
var s2 = new String("hello world");
var f2 = new Function("a","b","return a + b"); //
var o2 = new Object();
var a2 = new Array([1,2,3]);

console.log(i2+ ":" + typeof(i2) + ":" + (i2 instanceof Number));
console.log(b2+ ":" + typeof(b2) + ":" + (b2 instanceof Boolean));
console.log(s2+ ":" + typeof(s2) + ":" + (s2 instanceof String));
console.log(f2+ ":" + typeof(f2));
console.log(o2+ ":" + typeof(o2) + ":" + (o2 instanceof Object));
console.log(a2+ ":" + typeof(a2) + ":" + (a2 instanceof Array));


//원시타입과 원시타입을 wrapper 객체는 별 구분없이 연산 가능하다.
console.log(i+i2);
console.log(s+s2);

//원시 타입도 메소드 호출이 가능하다? 그 이유는 =>
//원시타입에 메소드가 호출 될 때 임시객체가 만들어 져서 메소드를 호출한 후 사라진다. : 유사객체
console.log(b.valueOf());
console.log(new Boolean(b).valueOf());