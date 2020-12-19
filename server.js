const express = require('express');
const { static } = express;
const path = require('path');

const app = express();

app.use('/dist', static(path.join(__dirname, 'dist')));

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/users', async(req, res, next)=> {
  try {
    res.send(await User.findAll());
  }
  catch(ex){
    next(ex);
  }
});

app.get('/api/things', async(req, res, next)=> {
    try {
      res.send(await Thing.findAll());
    }
    catch(ex){
      next(ex);
    }
  });


const init = async()=> {
  try {
    await syncAndSeed();
    const port = process.env.PORT || 3000;
    app.listen(port, ()=> console.log(`listening on port ${port}`));
  }
  catch(ex){
    console.log(ex);
  }
};

const Sequelize = require('sequelize');
const { STRING } = Sequelize;
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:JerryPine@localhost/acme_db');

const User = conn.define('user', {
  name: STRING 
});
const Thing = conn.define('thing', {
    name: STRING 
  });
const syncAndSeed = async()=> {
  await conn.sync({ force: true });
  await Promise.all([
    User.create({ name: 'moe' }),
    User.create({ name: 'larry' }),
    User.create({ name: 'lucy' })
  ]);
  await Promise.all([
    Thing.create({ name: 'foo' }),
    Thing.create({ name: 'bazz' }),
    Thing.create({ name: 'bar' }),
    Thing.create({ name: 'quq' })
  ]);
};

init();