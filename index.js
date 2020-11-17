var express = require('express');                       // 설치한 express module을 불러와서 변수(express)에 담는다.
var app = express();                                    // express를 실행하여 app object를 초기화 한다.

/*
app.get('/', function(req, res) {                       // '/' 위치에 'get' 요청을 받는 경우,
    res.send('Hello World!');                           // "Hello World!"를 보낸다.
});

app.use(express.static(__dirname + '/public'));         // '__dirname'는 프로그램이 실행중인 파일의 위치를 나타내는 global variable
*/

app.set('view engine', 'ejs');                          // 'ejs'를 사용하기 위해서 express의 view engine에 ejs를 set한다.
app.use(express.static(__dirname + '/public'));

app.get('/hello', function(req, res){                    // query를 통해서 이름을 받는 코드, 모든 query들은 req.query에 저장된다.
    res.render('hello', {name: req.query.nameQuery});
});

app.get('/hello/:nameParam', function(req, res){         // route parameter를 통해 이름을 받는 코드, 콜론(:)으로 시작되는 route는 해당 부분에 입력되는 텍스트가 req.params에 저장된다.
    res.render('hello', {name: req.params.nameParam});  // 예를 들어 /hello/Kim을 입력하면 Kim이 req.params.nameParam으로 저장된다.
});

var port = 3000;                                        // 사용할 포트 번호를 port 변수에 담는다.
app.listen(port, function() {
    console.log('server on! http://localhost:' + port); // 서버가 실행되면 콘솔창에 표시될 메세지
});