const http =require('http');

const server =http.createServer((req,res)=>{
        if(req.url === '/'){
            res.write("<h1>hello_node_js</h1>");
        }else if(req.url == '/about'){
            res.write("<h1>about us </h1>")
        }

})

server.listen(4003);
console.log("the http running : 4000");