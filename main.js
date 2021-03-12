//<기본 main.js코드>//
/* var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
    console.log(__dirname + url);
    response.end(fs.readFileSync(__dirname + url));
    //주요코드 15줄: 사용자가 접근 할 때마다 우리가 읽어들여하는 파일을 만든다.
 
});
app.listen(3000);*/


//<UPDATE - URL로 입력된 값 사용하기>//
// var http = require('http');
// var fs = require('fs');
// var url = require('url');
 
// var app = http.createServer(function(request,response){
//     var _url = request.url;//url을 불러오기 위한 변수로 22번 줄에 url이라는 변수를 이미 썼기 때문에 아래 지역변수는 _ㅕ기fh dlfmadmf qurudgownsek.
//     var queryData = url.parse(_url, true).query;
//     console.log(queryData.id);//사용자가 접근하면  queryData에 존재하는 객체의 id를 콘솔에 출력해줌.
//     if(_url == '/'){
//       _url = '/index.html';
//     }
//     if(_url == '/favicon.ico'){
//       return response.writeHead(404);
//     }
//     response.writeHead(200);
//     response.end(queryData.id);//사용자가 접속한 url에 따라서 괄호 속의 데이터를 읽어주는 코드.
 
// });
// app.listen(3000);


//<UPDATE -파일을 이용해 본문 구현>//
// var http = require('http');
// var fs = require('fs');
// var url = require('url');
 
// var app = http.createServer(function(request,response){
//     var _url = request.url;
//     var queryData = url.parse(_url, true).query;
//     var title = queryData.id;
//     if(_url == '/'){
//       title = 'Welcome';
//     }
//     if(_url == '/favicon.ico'){
//       return response.writeHead(404);
//     }
//     response.writeHead(200);
//     var template = `
//     <!doctype html>
//     <html>
//     <head>
//       <title>WEB1 - ${title}</title> 
//       <meta charset="utf-8">
//     </head>
//     <body>
//       <h1><a href="/">WEB</a></h1>
//       <ul>
//         <li><a href="/?id=HTML">HTML</a></li>
//         <li><a href="/?id=CSS">CSS</a></li>
//         <li><a href="/?id=JavaScript">JavaScript</a></li>
//       </ul>
//       <h2>${title}</h2>
//       <p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 speicification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
//       <img src="coding.jpg" width="100%">
//       </p><p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.
//       </p>
//     </body>
//     </html>
//     `;
//     //위의 html코드 중에서 ${title}는 변수에서 선언 했듯이  var title = queryData.id; 이므로 ${queryData.id}와 같은 의미이고, 호출 할때 마다 id에 따른 페이지를 동적으로 가져오게 한다.
//     //${} 문법에 대한 설명은 literal.js에 해놓았다.
//     response.end(template);
 
// });
// app.listen(3000);

// var http = require('http');
// var fs = require('fs');
// var url = require('url');
 
// var app = http.createServer(function(request,response){
//     var _url = request.url;
//     var queryData = url.parse(_url, true).query;
//     var title = queryData.id;
//     if(_url == '/'){
//       title = 'Welcome';
//     }
//     if(_url == '/favicon.ico'){
//       return response.writeHead(404);
//     }
//     response.writeHead(200);
//     //readFile함수는 해당 함수의 인자로 쓰인 콜백함수인 function(err, description)에서 자동으로 err와 description을 가져오는 역할을 함.
//     fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
//       var template = `
//       <!doctype html>
//       <html>
//       <head>
//         <title>WEB1 - ${title}</title>
//         <meta charset="utf-8">
//       </head>
//       <body>
//         <h1><a href="/">WEB</a></h1>
//         <ul>
//           <li><a href="/?id=HTML">HTML</a></li>
//           <li><a href="/?id=CSS">CSS</a></li>
//           <li><a href="/?id=JavaScript">JavaScript</a></li>
//         </ul>
//         <h2>${title}</h2>
//         <p>${description}</p>
//       </body>
//       </html>
//       `;
//       //${description}자리에는 불러들인 페이지에 있는 본문의 내용이 출력될 거임.
//       response.end(template);
//     })
 
 
// });
// app.listen(3000);

// <UPDATE -404 NOT FOUND 오류 구현>
// var http = require('http');
// var fs = require('fs');
// var url = require('url');
 
// var app = http.createServer(function(request,response){
//     var _url = request.url;
//     var queryData = url.parse(_url, true).query;
//     var pathname = url.parse(_url, true).pathname;
//     var title = queryData.id;
 
//     if(pathname === '/'){
//       fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
//         var template = `
//         <!doctype html>
//         <html>
//         <head>
//           <title>WEB1 - ${title}</title>
//           <meta charset="utf-8">
//         </head>
//         <body>
//           <h1><a href="/">WEB</a></h1>
//           <ul>
//             <li><a href="/?id=HTML">HTML</a></li>
//             <li><a href="/?id=CSS">CSS</a></li>
//             <li><a href="/?id=JavaScript">JavaScript</a></li>
//           </ul>
//           <h2>${title}</h2>
//           <p>${description}</p>
//         </body>
//         </html>
//         `;
//         response.writeHead(200);
//         response.end(template);
//       });
//     } else {
//       response.writeHead(404);
//       response.end('Not found');
//     }
 
//     //'/'(root로 들어오는 경로를 의미)로 들어오면 if문을, 아니라면 404오류를 띄운다.
//     //404는 페이지를 찾을 수 없을 때 쓰는 약속의 숫자이니 바꾸지 말자.
 
 
// });
// app.listen(3000);

// <UPDATE - 홈페이지 구현>
var http = require('http');
var fs = require('fs');
var url = require('url');
 
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
      //queryData.id === undefined일때는 if문 속 코드가 실행됨.
      if(queryData.id === undefined){
        fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
          var title = 'Welcome';
          var description = 'Hello, Node.js';
          var template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            <ul>
              <li><a href="/?id=HTML">HTML</a></li>
              <li><a href="/?id=CSS">CSS</a></li>
              <li><a href="/?id=JavaScript">JavaScript</a></li>
            </ul>
            <h2>${title}</h2>
            <p>${description}</p>
          </body>
          </html>
          `;
          response.writeHead(200);
          response.end(template);
        });
      } else { //queryData.id === undefined가 아닐 때는 else문 속 코드가 실행됨.
        fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
          var title = queryData.id;
          var template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            <ul>
              <li><a href="/?id=HTML">HTML</a></li>
              <li><a href="/?id=CSS">CSS</a></li>
              <li><a href="/?id=JavaScript">JavaScript</a></li>
            </ul>
            <h2>${title}</h2>
            <p>${description}</p>
          </body>
          </html>
          `;
          response.writeHead(200);
          response.end(template);
        });
      }
    } else {
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(3000);