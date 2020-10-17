const postRouter = require('koa-router')();

postRouter.get('/', async (ctx, next) => {
  ctx.response.body = '<h1>Index</h1>';
});

postRouter.get('/api/product/list', async (ctx, next) => {


  

  ctx.response.body = data
})

module.exports = postRouter.routes();
