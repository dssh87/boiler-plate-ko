// 설치한 express 앱 가져옴
const express = require('express')
const app = express()
const port = 5000

const bodyParser = require("body-parser")
const config = require("./config/key")
const {User} = require("./models/User")

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

// appication/json
app.use(bodyParser.json());

const mongoose = require('mongoose');
console.log("config", config.mongoURI) 
mongoose.connect(config.mongoURI,{
}).then(()=> console.log('MongoDB Connected!!'))
  .catch(err => console.log(err))

// root 디렉토리 들어오면 'hello'
app.get('/', (req, res) => res.send('hello2'))

app.post('/register', (req,res) => {
  // 회원가입에 필요한 정보들을 client에서 가져오면 그것들을 DB에 넣는다
  
  const user = new User(req.body)
  user.save((err,userInfo)=>{
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    })
  })


})

// port 5000에서 앱을 실행
app.listen(port, () => console.log(`port ${port}`))

