let o = {
    name: '둘리',
    age : 10,
    isFemale: false
};

let f = function(){
    console.log('안녕');
}

let i = 10;
let n = new Number(10);

f();
console.log(o);

console.log("==================(객체object, function)의 확장 ==============");

o.another = {
    name: '마이콜',
    age : 30
}

console.log(o);

f.another = {
    name: "도치",
    age : 10,
    info: function(){
        console.log(this.name + ":" + this.age);
    }
}

console.log(f.another);
f.another.info();

console.log("========== 기본 타입 확장이 안된다!! ==============");
console.log(i);
i.another = {};
console.log(i.another);