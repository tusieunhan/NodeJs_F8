const express = require('express');
const morgan = require('morgan');
const engine = require('express-handlebars');
const app = express();
const path = require('path');
const route = require('./routes');
const db = require('./config/db')
const methodOverride = require('method-override')
const port = 3000;


// connect bd
db.connect();

app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')));

// in ra log
app.use(morgan('combined'))

// lấy dữ liệu đc trong body (post)
app.use(express.urlencoded({
    expected : true
}));
app.use(express.json());


//template hbs
app.engine('hbs',engine({
    extname: '.hbs'
}
));
app.set('view engine','hbs');
app.set('views', path.join(__dirname,'resources','views'));

route(app);

app.listen(port, ()=> console.log(`listening on port: ${port}`));