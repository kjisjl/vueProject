const express = require('express');
const app=express();
app.listen('8082',()=>{
    console.log('success')
});
app.get('http://jl.com:8082/like',(res,req)=>{

})