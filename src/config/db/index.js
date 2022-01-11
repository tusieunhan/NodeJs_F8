const mongoose = require('mongoose');


async function connect() {
    try {
        await mongoose.connect('mongodb+srv://tusieunhan:Hoilamgi2000@cluster0.rfhmz.mongodb.net/f8_learn_dev?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            UseUnifiedTopology: true
        });
        console.log('connect succeeded');
    }
    catch (err) {
        console.log('connect failed', err);
    }
}

module.exports =  {
    connect
}