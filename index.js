var express = require('express');                       // 설치한 express module을 불러와서 변수(express)에 담는다.
var app = express();                                    // express를 실행하여 app object를 초기화 한다.

/*
app.get('/', function(req, res) {                       // '/' 위치에 'get' 요청을 받는 경우,
    res.send('Hello World!');                           // "Hello World!"를 보낸다.
});
*/

app.use(express.static(__dirname + '/public'));         // '__dirname'는 프로그램이 실행중인 파일의 위치를 나타내는 global variable

var port = 3000;                                        // 사용할 포트 번호를 port 변수에 담는다.
app.listen(port, function() {
    console.log('server on! http://localhost:' + port); // 서버가 실행되면 콘솔창에 표시될 메세지
});