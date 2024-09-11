
const http= require("http")
const fs=require("fs")
const myServer=http.createServer((req,res)=>{
    console.log(`${Date.now()}: ${req.url} New Requset\n`);
    console.log(req.headers);
    const log=`${Date.now()}: New Request Received\n`
    fs.appendFile('log.txt',log,(err,data)=>{

        res.end("Hello From Server")
    })
    // fs.appendFile('./log.txt',(err,data)=>{
    //     switch(req.url){
    //         case '/':
    //         res.end("HomePage")
    //         break;
    //         case '/about':
    //         res.end("About")
    //         break;
    //     }
    // })
    
})
myServer.listen(8000, () => console.log("Server Started!"));
