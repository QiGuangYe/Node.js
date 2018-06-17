const app = require("express")(); //实例化一个应用
const path = require("path"); //引入路径

var routeReg = require("./public/router.js");
var routerPath = path.join(__dirname, "./router");
routeReg(app, routerPath);

app.listen(3000, () => {

    console.log("app服务启动于3000端口");

})