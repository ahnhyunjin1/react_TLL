const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');

const config = require('./config/key');

const { User } = require("./models/User");

//applicateon/www-form 데이터 가져오기! (폼 형태만)
app.use(bodyParser.urlencoded({extended: true}));
//json 타입 분석
app.use(bodyParser.json());


const mongoose = require("mongoose");
const connect = mongoose.connect(config.mongoURI)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));



app.get('/', (req, res) => res.send('Hello World! ~ 내일은 눈이 내린답니다.'))

app.post('/register', (req, res) => {
    //회원가입 할때 필요한 정보들을 client에서 가져오기
    // DB에 넣기

    const user = new User(req.body)

    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})





app.listen(port, () => console.log(`Examle app listening on port ${port}!`))