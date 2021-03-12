var name = 'k8805';
// String literals
//본래는 개행을 위해서 우리가 아는 \n을 써주는 것으로 했지만,
var letter = 'Dear '+name+'\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '+name+' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa egoing qui officia deserunt mollit anim id est laborum. '+name;
 
//최신 문법에서는 다음과 같이 문자열 시작과 말머리에 ` (작은 따온표 아님. ~표시버튼 아래 있는 것)을 써준 후
//'+name+' 이부분을 다음과 같이 ${name}이 형식으로 써주는 것이 최신 문법이다.
//${가져올 변수이름} 혹은 이 변수 이름 위치에 연산식을 넣어도 된다. ${1+1} => 2로 출력될 것이다. 
// Template literals
var letter = `Dear ${name}
 
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ${name} Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ${1+1} Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa egoing qui officia deserunt mollit anim id est laborum. ${name}`;
 
console.log(letter);