// URL 다루기
let url = "http://localhost:8080/mysite3/user?n=안대혁";

// 1. escape(x) : url를 전부 encoding, deprecated
let url2 = escape(url)
console.log(url2);

//2. encodeURL(O)
let url3 = encodeURI(url);
console.log(url3);

//3. encodeURIComponent
let url4 = encodeURIComponent(url);
console.log(url4);

//4. encodeUriComponent 사용 예

var o = {
    no: 10,
    name: '안대혁',
    email: 'kicksacr@gmail.com'
}

// url = 'http://localhost:8080/mysite/user?no=' + o.no + '&name=' + encodeURIComponent(o.name) + "&email=" + encodeURIComponent(o.email);
// console.log(url); 

url = "http://localhost:8080/mysite/user";
url += '?';
url += ("no=" + encodeURIComponent(o.no));
url += ("$name=" + encodeURIComponent(o.name));
url += ("$email=" + encodeURIComponent(o.email));
console.log(url);


let toQueryString = function(o){
    let qs = [];
    for(property in o){
        qs.push(property + "=" + encodeURIComponent(o[property]))
    }

    return qs.join('&');
}

url = "http://localhost:8080/mysite/user";
url += '?';
url += toQueryString(o);
console.log(url);

let asd = (Math.floor((Math.random())*1000));
console.log(asd);