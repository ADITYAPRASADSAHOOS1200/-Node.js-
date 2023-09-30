
const fs = require('fs');

console.log('Read start');
// //asynch way to read file
// fs.readFile('INPUT.txt',function(err,data){
//     if(err){
//         console.log('Error:',err);
//         return err;
//     }
//     console.log("Data:",data.toString())
//     console.log('Read END');
//    return data;
// });

// console.log('other stuff');

//synchronous way
// let data=fs.readFileSync('INPUT.txt');

// console.log('data',data.toString());
// console.log('read end');
// console.log('other stuff');


//fs=>open+read

// const buf=new Buffer(1024)
// fs.open('INPUT.txt','r+',function(err,fd){
//    if(err){
//     console.log("error opening file");
//     return (err);
//    }
//    console.log("file open successfully");

//    fs.read(fd,buf,0,buf.length,0,function (err,bytes){
//     if(err){
//         console.log('error in reading file!',err)
//         return err;
//     }
//     console.log('Data:',bytes);
//     console.log('Data: ',buf.slice(0,bytes).toString());
//      })
//      fs.close(fd,function(err){
//         if(err){
//             console.log('error in closing file');

//         }else{
//             console.log('success in closing file');
//         }
//      })

// })


// fs.writeFile('INPUT.txt','pwskill is not so good',function (err){
//     if(err){
//         console.log('Error in writing file !');
//     }else{
//         console.log('successs in writing file');
//     } 
// });

// fs.appendFile('INPUT.txt','aditya  learn node js','utf8',function(err){
//     if(err){
//         console.log("Error :",err);
//         return err;
//     }
//     else{
//         console.log(" filesuccessfully  appending");
//     }
// })


//deleting file

// fs.unlink('INPUT.txt',function(err){
//   if(err){
//     console.log('error in deleting file',err);
//     return err;
//   }else{
//     console.log('success in deleting file');
//   }
// })