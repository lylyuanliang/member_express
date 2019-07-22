/**
 * 业务路由处理器
 * @type {createApplication}
 */
let express = require('express');
let router = express.Router();
let FileService = require("../service/file_service/FileService");
let fileService = new FileService();
router.get('/', function(req, res) {
    res.send('respond with a resource');
}).get("/readFile", function (req, res) {
    let result = fileService.readFile(`/fileSave/workspace/web/member_express/public/json/file.json`);
    res.json(result);
}).post("/saveFile", function (req, res) {
    let data4Write = req.body;
    fileService.saveFile(`/fileSave/workspace/web/member_express/public/json/file.json`, data4Write.fileData);
    res.send("");
});

module.exports = router;
