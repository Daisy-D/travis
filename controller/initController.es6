import index from './indexController'
const initController = {
  init(app, router) {
    app.use(router(function (_) {
      _.get('/index', index.index());
      _.get('/api/update', index.update());
      _.get('*', index.error());
    }));
  }
}
export default initController