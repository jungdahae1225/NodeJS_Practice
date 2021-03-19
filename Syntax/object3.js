//함수를 객체화 하면서 코드 중간중간 재정의 하고 값을 중복 정의 하며 생기는
//각종 버그들을 예방할 수 있고, 코드를 단순화 가능하다.
//참고문헌;https://opentutorials.org/course/3332/21146
var q = {
    v1:'v1',
    v2:'v2',
    f1:function (){
      console.log(this.v1);
    },
    f2:function(){
      console.log(this.v2);
    }
  }
   
  q.f1();
  q.f2();