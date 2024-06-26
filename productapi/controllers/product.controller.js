var dbCon = require("../config/db_connection");

var connection = dbCon.getConnection();

connection.connect();
 var express = require("express");
 
 var router = express.Router();

 router.get("/",(req,res) => {
    connection.query("select * from product", (err,records,fields) =>{
        if(err){
            console.error("Error while fetching the data");
        }else{
            res.send(records);
        }
    })
 })

 router.get("/:id",(req,res) => {
    connection.query("select * from product where id="+req.params.id, (err,records,fields) =>{
        if(err){
            console.error("Error while fetching the data");
        }else{
            res.send(records);
        }
    })
 })

 router.post("/",(req,res) => {
    var id = req.body.id;
    var name = req.body.name;
    var description = req.body.description;
    var price = req.body.price;
    console.log("Inside POST process");
    connection.query("insert into product values("+id+",'"+name+"','"+description+"',"+price+")",(err,result) =>{
        if(err){
            console.error("Error while inserting the data"+err);
        }else{
            res.send({insert:"success"});
        }
    })
 })

 router.put("/",(req,res) => {
    var id = req.body.id;
    var name = req.body.name;
    var price = req.body.price;
    //console.log("update product set name='"+name+"', price="+price+"where id="+id);
    connection.query("update product set name='"+name+"', price="+price+" where id="+id ,
    (err,result) =>{
        if(err){
            console.error("Error while updating the data"+err);
        }else{
            res.send({update:"success"});
        }
    })
 })

 router.delete("/:id",(req,res) => {
    connection.query("delete from product where id="+req.params.id, 
    (err,records,fields) =>{
        if(err){
            console.error("Error while Deleting the data");
        }else{
            res.send({delete: "Deleted One Record Successfully"});
        }
    })
 })

 module.exports = router;