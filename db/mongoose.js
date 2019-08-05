const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true
}).then(() => {
    console.log('DB started');
}).catch(error => {
    console.log({ error })
})