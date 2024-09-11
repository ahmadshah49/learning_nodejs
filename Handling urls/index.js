
const http= require("http")
const fs=require("fs");
const url=require('url')
const myServer=http.createServer((req,res)=>{
    // console.log(`${Date.now()}: ${req.url} New Requset\n`);
    // console.log(req.headers);
    // const log=`${Date.now()}: New Request Received\n`
    if (req.url ==='/favicon.ico') {
        return res.end()
    }
    const log=`${Date.now()}: ${req.url} New Requset Received\n`
    const myUrl=url.parse(req.url,true)
    console.log(myUrl);
    fs.appendFile('log.txt',log,(err,data)=>{


        // res.end("Hello From Server")
        // fs.appendFile('log.txt',myUrl,(err,data)=>{
            switch (myUrl.pathname) {
                case '/':
                    res.end('HomePage')
                    break;
            case '/about':
                const userName=myUrl.query.myName
                const userId=myUrl.query.userId
                const search = myUrl.query.search;
            res.end(`Hi, ${userName},${userId},${search}`);
            break;
                default:res.end('Not Found');
                //     break;
            }
        // })

    })

    
})
myServer.listen(8000, () => console.log("Server Started!"));
