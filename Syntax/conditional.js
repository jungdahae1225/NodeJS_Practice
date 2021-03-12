// console.log('A');
// console.log('B');
// if(false){
//   console.log('C1');
// } else {
//   console.log('C2');
// }
// //이제 저 조건문의 조건 부분을 조작해서 웹을 효율적으로 만드는 게 프로그래머의 일.
// console.log('D');

var args = process.argv;//nodejs 요소는 console에 input하는 모듈
console.log(args[2]);
console.log('A');
console.log('B');
if(args[2] === '1'){
  console.log('C1');
} else {
  console.log('C2');
}
console.log('D');