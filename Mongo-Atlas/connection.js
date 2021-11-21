const mongoose = require('mongoose')        //importing mongoose module

//setting up connetion to mongoDB using mongoose ODM

const Connection = (URI) => {
    return mongoose.connect(URI)
        .then(() => console.log('connected to @mongo-atlas >'))
}

module.exports = Connection;