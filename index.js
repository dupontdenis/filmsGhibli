const express = require('express');
const debug = require('debug')('films');
const path = require('path');
const app = express();
const axios = require('axios');
 
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
 


app.get('/films', async(req, res) => {

    try {
        const {data:films} = await axios.get('https://ghibliapi.herokuapp.com/films');
      
        debug(films.length);
        res.render('index', { films, nb:5 });

      } catch (error) {
        console.error(error);
      }

});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
