/**
 * 分发请求
 * @param app
 */
module.exports = function(app){
    // 分发user模块，比如用户的注册和登录请求业务逻辑将会在/api/user.js中实现
    let indexRouter = require('./indexRouter');
    let busiRouter = require('./busiRouter');
    //默认路由
    app.use('/', indexRouter);
    //业务路由
    app.use('/member', busiRouter);
};
