// //배열의 선언법!
// var members = ['egoing', 'k8805', 'hoya'];
// console.log(members[1]); // k8805
// //객체의 선언법
// var roles = {
//   'programmer':'egoing',
//   'designer' : 'k8805',
//   'manager' : 'hoya'
// }
// console.log(roles.designer); //k8805

//<배열과 배열의 요소 반복문으로 가져오기>
var members = ['egoing', 'k8805', 'hoya'];
console.log(members[1]); // k8805
var i = 0;
while(i < members.length){
  console.log('array loop', members[i]);
  i = i + 1;
}

//<객체와 객체요소 반복문으로 가져오기>
var roles = {
  'programmer':'egoing',
  'designer' : 'k8805',
  'manager' : 'hoya'
}
console.log(roles.designer); //k8805
console.log(roles['designer']); //k8805
 
for(var n in roles){
  console.log('object => ', n, 'value => ', roles[n]);
  //그냥 변수 n은 객체의 키가 불러지게 되고, 배열 공식처럼
  //객체이름[객체의 키 변수] 이렇게 해줘야 안의 value값이 불러지게 됨.
}