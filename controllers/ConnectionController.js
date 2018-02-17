const ConnectionController = function(mongoose){

    //connect to db
    mongoose.connect('mongodb://<your_db_address>');

    //check established connection
    mongoose.connection.once('open',()=>{
        console.log('connection has been made');
    }).on('error', ()=>{
        console.log(error);
    });
}

module.exports = ConnectionController;
