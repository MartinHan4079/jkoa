const postRouter = require('koa-router')();

postRouter.get('/', async (ctx, next) => {
  ctx.response.body = '<h1>Index</h1>';
});

postRouter.get('/save/post', async (ctx, next) => {
  let data = {'name':'jk'};
  ctx.response.body = data
})

module.exports = postRouter.routes();