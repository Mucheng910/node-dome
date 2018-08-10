console.log("hello world");
var mystr="hello node.js";
console.log(mystr);
//





//阻塞性处理
function updb1() {
    var start=new Date().getTime();
    while (new Date().getTime()<start+3000);
}
updb1();
console.log("updb1 succeed");
console.log("123");


function updb2(done) {
    setTimeout(()=>{
        done();
    },3000);
}
updb2(function () {
    console.log("updb2 succeed .");
});
console.log("123"); //非阻塞性处理 (包含一个回调函数updb2)


//
//  //阻塞性处理
//  function updb1() {
//     var start=new Date().getTime();
//      while (new Date().getTime()<start+3000);
//  }
//  updb1();
// console.log("updb1 succeed");
// console.log("123");