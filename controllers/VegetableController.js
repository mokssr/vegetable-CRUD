//importing vegetable model
const Vegetable = require('../models/VegetableModel');

let VegetableController = function(app){

    //showing all vegetables
    app.get('/vegetables', (req,res)=>{
        Vegetable.find({}, (err, item)=>{
            if(err) throw err;
            res.json(item);
        });
    });

    //showing vegetable by name
    app.get('/vegetables/:name', (req, res)=>{
        Vegetable.find({name:req.params.name}, (err, item)=>{
            if(err){
                throw err;
            } 
            
            //verify result
            if(item.length === 0){
                res.send('no match');
            }else{
                res.json(item);
            } 
        });
    });

    //adding a new vegetable
    app.post('/vegetables/new', (req,res)=>{
        let newVegetable = new Vegetable({
            name: req.body.name,
            image:req.body.image
        });

        newVegetable.save().then(res.json(newVegetable));
    });

    //update vegetable
    app.put('/vegetables/update/:_id', (req,res)=>{

        let prevData ={};
        let newData = {
            _id:req.params._id,
            name : '',
            image :''
        }

        //reading data from database done inside a function 
        //so the result can be assigned to a variable
        let readData = function(id, callback){
            Vegetable.find({_id:id}, (err, item)=>{
                if(err){
                    callback(err, null);
                }else{
                    callback(null, item[0]);
                }
            })
        }

        readData(req.params._id, (err, item)=>{
            if(err) console.log(err);
            else{
                prevData = item;
                verifyData(prevData);
                console.log(newData);
                updateVegetable(newData);
            }
        });

        //verify empty data and assign the value to newData
        let verifyData = function(prevData){
            newData.name = req.body.name === null || req.body.name === undefined? prevData.name: req.body.name;
            newData.image = req.body.image === null || req.body.image === undefined? prevData.image: req.body.image;
        }

        //update using newData
        let updateVegetable = function(newData){
            Vegetable.findByIdAndUpdate(newData._id, newData).then(function(){
                Vegetable.find({_id:newData._id}, (err, result)=>{
                    if(err) throw err;
                    else{
                        res.json(result);
                    }
                });
            });
        }
    });

    //deleting data from list
    app.delete('/vegetables/delete/:_id', (req, res)=>{
        Vegetable.findByIdAndRemove(req.params._id).then(function(){
            res.json({message:'deleted'});
        });
    });
}

module.exports = VegetableController;