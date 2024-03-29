/**
 * @author:水痕
 * @time:2017-12-31 19:48
 * @email:332904234@qq.com
 * @version:1.0
 * @fileName:graphql
 * @describe:
 */

'use strict';
import Router from 'koa-router';
import {graphiqlKoa, graphqlKoa} from 'graphql-server-koa';
import schema from "../graphql/schema";

const router = new Router();

router.get('/graphql', async (ctx, next) => {
  console.log('enter get graphql')
  const result = await graphqlKoa({
    schema: schema
  })(ctx, next);
  ctx.body = result;
})

router.post('/graphql', async (ctx, next) => {
  console.log('enter post graphql')
  await graphqlKoa({
    schema: schema
  })(ctx, next);
})

// 这个仅仅是在方便在浏览器上查看的,项目上线后可以删除
router.get('/graphiql', async (ctx, next) => {
  await graphiqlKoa({
    endpointURL: '/graphql'
  })(ctx, next);
})

module.exports = router.routes();