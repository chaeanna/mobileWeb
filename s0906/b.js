//Number 타입으로만 이루어진 배열
let arr1 = [1,2,3,4,5];

//String 타입으로만 이루어진 배열
let arr2 = ["h", "e", "l", "l", "o"];

//Number 타입과 String 타입을 함꼐 사용한 배열
let arr3 = [1, "h", 2, "i"];

//다양한 자료형들을 함께 사용한 배열
let arr4 = [true, 1, undefined, false, "h", 2, null, "i" ];

console.log(arr1[0]);
console.log(arr2[1]);
console.log(arr3[2]);
console.log(arr4[3]+"\n");


//값으로 String 타입만을 사용한 객체
let obj1 = {a: "apple", b: "banana", c: "carrot"};

//값으로 Number 타입만을 사용한 객체
let obj2 = {a:1, b:2, c:2};

//값으로 다양한 자료형들을 함께 사용한 객체
let obj3 = {a:"hello", b:100, c:[1,2,3,4]};

//값으로 객체를 사용한 객체
let obj4 = {
    a: {a1: 1, a2: 2},
    b: {b1: 3, b2: 4},
    c: {c1: 5, c2: 6}
};

console.log(obj1['a']);
console.log(obj2.a);
console.log(obj3['c']);
console.log(obj4.c.c2);
