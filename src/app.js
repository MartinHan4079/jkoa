const Koa = require('koa');
const koaBody = require('koa-body');
const app = new Koa();

//自定义的跨域头
const cors = require('./utils/cors');

//路由控制
const postRouter = require('./controller/post/product');
const deviceRouter = require('./controller/post/device');

const uploadRouter = require('./controller/upload');

//设置跨域
app.use(cors);


app.use(koaBody({
 multipart: true,
 formidable: {
 maxFileSize: 20000*1024*1024 // 设置上传文件大小最大限制，默认2M
 }
}));

//路由
app.use(postRouter);
app.use(deviceRouter);
app.use(uploadRouter);

//监听端口
console.log("3000")
app.listen(3000);
