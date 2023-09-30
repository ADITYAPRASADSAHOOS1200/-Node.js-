const { log } = require("console");
const path =require ("path");

// console.log(path.sep);//windows(\) mac or linux */

// console.log(process.env.PATH);

// console.log(path.delimiter);//(windows);

const filePath1 ='/public_html/home/index.html';


const currentFilepath =__filename;
console.log("current file path >",currentFilepath);
console.log("current directory name >",__dirname);

let basename=path.basename(currentFilepath);
console.log("file basename >",basename);

let basenaWithoutext=path.basename(currentFilepath,'.js');
console.log( "basenamewithoutextension  >",basenaWithoutext);


let dirname=path.dirname(currentFilepath);
console.log('dirname  >',dirname);

console.log('ext1 >',path.extname(currentFilepath));
console.log('ext2 >',path.extname('index.md.js'));


let pathTofile=path.format({ //it use to combine dir and base
    dir:'\public_html\home',
    base:'index.html'
})
console.log('pathtofile >',pathTofile);// it use split the path

 //which things are starts from root is an absolute path such as C:\\,D:\\ in widows and '/' on mac or linux

console.log('isAbsolute',path.isAbsolute(currentFilepath));
console.log('isAbsolute',path.isAbsolute('/index.js'));
console.log('isAbsolute',path.isAbsolute('.index/js'));
console.log('isAbsolute',path.isAbsolute('..index/js'));

let pathTodir=path.join('home','js','dist','index.js');//it joins the splitted path
console.log("pathTodir > ",pathTodir);

console.log('parse > ',path.parse(currentFilepath));

console.log('normalize >',path.normalize('/public_html/home\index.html'));

console.log('resolve >',path.resolve());

console.log('path relative >',path.relative('home/user/config','home/user/js'));