const router = require("express").Router();

const routerInvoke = require("./routerInvoke");

router.use("/joyas", routerInvoke);

module.exports = router;
