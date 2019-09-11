const Koa = require('koa');
const app = new Koa();

//自定义的跨域头
const cors = require('./utils/cors');

//路由控制
const postRouter = require('./controller/post/save-post');

//设置跨域
app.use(cors);

//路由
app.use(postRouter);

//监听端口
app.listen(3000);
