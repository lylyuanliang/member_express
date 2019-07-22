/**
 * 默认路由处理器
 * @type {createApplication}
 */
let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'member' });
});

module.exports = router;
