// 설치한 express 앱 가져옴
const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://seok:seok1234@cluster0.jangt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
}).then(()=> console.log('MongoDB Connected!!'))
  .catch(err => console.log(err))

// root 디렉토리 들어오면 'hello'
app.get('/', (req, res) => res.send('hello'))

// port 5000에서 앱을 실행
app.listen(port, () => console.log(`port ${port}`))

