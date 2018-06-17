/** 进阶版路由处理 
 * 引入文件系统fs,扫描router目录下的所有路由处理文件，并注册到app应用中。
 * 
 */
const path = require("path"); //引入路径
const fs = require("fs"); //引入路径
function routeReg(app, routeDir) {
    fs.readdir(routeDir, (err, files) => {
        if (err) {
            throw err;
        } else {
            if (files.length == 0) {
                console.log("无路由注册文件");
            } else {
                for (var i of files) {
                    var route = i.split(".")[0];
                    if (route === "index") {
                        app.use("/", require(routeDir + "/" + i));
                    } else {
                        console.log(i);
                        var xx = "/" + route;
                        console.log(xx);

                        app.use("/register", require(routeDir + "/" + i));
                    }
                }
            }
        }
    });
};
module.exports = routeReg;