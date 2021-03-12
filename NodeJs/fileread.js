var fs = require('fs');//nodejs의 파일시스템 모듈 물러오기.

// fs.readFile('읽고싶은 파일이름.txt', 'utf8', function(err, data){
//     console.log(data);
//   });

fs.readFile('sample.txt', 'utf8', function(err, data){
  console.log(data);
});
 
//이렇게 하면 sample.txt파일에 있는 문서들이 console에 출력될거임.