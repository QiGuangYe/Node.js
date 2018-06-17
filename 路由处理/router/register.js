var router = require("express").Router();


router.get("/", (res, rep, next) => {

    console.log(res);
    console.log(rep);
    console.log(next);
    rep.send("注册说明");

});



module.exports = router;