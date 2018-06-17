var router = require("express").Router();


router.get("/", (res, rep, next) => {

    console.log(res);
    console.log(rep);
    console.log(next);
    rep.send("早安，世界");

});



module.exports = router;