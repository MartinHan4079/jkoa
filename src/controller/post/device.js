const postRouter = require('koa-router')();

postRouter.get('/', async (ctx, next) => {
  ctx.response.body = '<h1>Index</h1>';
});

postRouter.get('/api/device/list', async (ctx, next) => {
  let data = {
    data: {
      list: [
        {
          id: 1,
          iotId: 2,
          productName: "test",
          productKey: "test",
          nodeType: "test",
          provider: "test",
          createdTime: "test",
        },
        {
          iotId: 3,
          id: 2,
          productName: "test1",
          productKey: "test2",
          nodeType: "test1",
          provider: "test2",
          createdTime: "test3",
        }
      ], 
      total: 2, 
      pageNum: 2
    }
  }
  ctx.response.body = data
})


postRouter.get('/api/batch/list', async (ctx, next) => {
  let data = {
    data: {
      list: [
        {
          id: 1,
          productName: "test",
          productKey: "test",
          nodeType: "test",
          provider: "test",
          createdTime: "test",
        },
        {
          id: 2,
          productName: "test1",
          productKey: "test2",
          nodeType: "test1",
          provider: "test2",
          createdTime: "test3",
        }
      ], 
      total: 2, 
      pageNum: 2
    }
  }
  ctx.response.body = data
})



postRouter.get('/api/deviceGroup/list', async (ctx, next) => {
  let data = {
    data: {
      list: [
        {
          id: 1,
          groupId: 3,
          productName: "test",
          productKey: "test",
          nodeType: "test",
          provider: "test",
          createdTime: "test",
        },
        {
          id: 2,
          groupId: 4,
          productName: "test1",
          productKey: "test2",
          nodeType: "test1",
          provider: "test2",
          createdTime: "test3",
        }
      ], 
      total: 2, 
      pageNum: 2
    }
  }
  ctx.response.body = data
})

module.exports = postRouter.routes();
