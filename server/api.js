// node js로 실행하고 postman 들어가서 request 요청해보세용
const express = require('express');
const app = express();
const uuidAPIKey = require('uuid-apikey');
const key = require('./apikey.json')

const server = app.listen(3001, () => {
  console.log('Start Server : localhost:3001');
});

// console.log(uuidAPIKey.create()); 키 생성하는 용도


app.get('/api/users/:apikey/:type', async (req, res) => {
  let { apikey, type } = req.params;

  if (!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)) { // apikey 형식에 맞는지, apikey값과 일치하는지 확인
    res.send('apikey is not valid.');
  } else {
    if (type == 'seoul') {
      let data = [
        { name: '김민형', city: 'seoul' },
        { name: '서동현', city: 'seoul' },
      ];
      res.send(data);
    } else if (type == 'jeju') {
      let data = [
        { name: '박지성', city: 'jeju' },
        { name: '손흥민', city: 'jeju' },
      ];
      res.send(data);

    } else {
      res.send('Type is not correct.');
    }
  }


});


app.get('/api/sales/:apikey/:year', async (req, res) => {
  let { apikey, year } = req.params;
  if (!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)) { // apikey 형식에 맞는지, apikey값과 일치하는지 확인
    res.send('apikey is not valid.');
  } else {
    if (year == '2019') {
      let data = [
        { product: '반도체', amount: 38537 },
        { product: '냉장고', amount: 20485 },
      ];
      res.send(data);

    } else if (year == '2020') {
      let data = [
        { product: '반도체', amount: 23537 },
        { product: '냉장고', amount: 18262 },
      ];
      res.send(data);

    } else {
      res.send('year is not correct.');

    }
  }




});
