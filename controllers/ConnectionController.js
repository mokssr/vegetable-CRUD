const ConnectionController = function(mongoose){

    //connect to db
    mongoose.connect('mongodb://mokssr:sukma123@ds237808.mlab.com:37808/vegetables');

    //check established connection
    mongoose.connection.once('open',()=>{
        console.log('connection has been made');
    }).on('error', ()=>{
        console.log(error);
    });
}

module.exports = ConnectionController;