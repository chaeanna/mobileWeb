//배열 선언
let array = [52, 273, 32, 64, 72];

//forEach() 메서드
console.log('--- forEach() 메서드 ---');
array.forEach((item, index) => {
    console.log(`- ${index}번째 요소는 ${item}입니다.`);
});

//map() 메서드
console.log();
console.log('--- map() 메소드 ---');
let outputA = array.map((item, index) => {
    //배열의 모든 요소를 제곱하여 새로운 배열 생성
    return item * item;
});
console.log(outputA);

//filter() 메소드
console.log();
console.log('--- filter() 메소드 ---');
let outputB = array.filter((item, index) => {
    //짝수만
    return item % 2 == 0;
});

console.log(outputB);