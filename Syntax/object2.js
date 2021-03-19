//자바스크립트에서 함수는 구문(statement)이면서 동시에 값(value)이기도 함.


//따라서 함수를 변수에 넣는 것도 가능하다.
var f = function(){
    console.log(1+1);
    console.log(1+2);
  }
//그리고 함수를 배열의 원소를 넣는 것도 가능하다.
  var a = [f];
  a[0]();
   
  //함수는 객체의 원소로도 넣기가 가능하다.
  var o = {
    func:f
  }
  o.func();