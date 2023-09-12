const express = require('express');
const debug = require('debug')('films');
const path = require('path');
const app = express();
const axios = require('axios');
 
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
 


app.get('/films', async(req, res) => {

    try {
        const {data:films} = await axios.get('https://ghibliapi.vercel.app/films');
      
        debug(films.length);
        res.render('index', { films, nb:100 });

      } catch (error) {
        console.error(error);
      }

});
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
