
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/report"
  },
  {
    "renderMode": 2,
    "route": "/budget"
  },
  {
    "renderMode": 2,
    "route": "/addNew"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1806, hash: '186ee7170452dc243bcd20843c84d16100b9be7bd04c25845af4076ca2584f2d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1237, hash: '9c46b68e05b95141c4489e8b48ba32db462dc17393a04ac9d203f1051aa90095', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'report/index.html': {size: 6279, hash: '14a1eb480e55f5f3bb807d75001eea94e9696036fb339d47ebc0a238221395bc', text: () => import('./assets-chunks/report_index_html.mjs').then(m => m.default)},
    'index.html': {size: 16266, hash: '20c56b8729f59426cb9980d75b1fbd8652ff43cf7b191b64688acb4ae1d7c4b3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 16297, hash: '09f9924d204beae1615d117fb693e4573fad14576c18a23c44db0ec5d3c6d0b4', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'addNew/index.html': {size: 9088, hash: '0082f1650fb8b487eae0c7b4052b79fc2c21beb51588eebb1f5521730c982bb0', text: () => import('./assets-chunks/addNew_index_html.mjs').then(m => m.default)},
    'budget/index.html': {size: 9293, hash: '7c98f39d15f4365732a4ad3d825115c04e1d3b53d54882a0700b92c886283c7f', text: () => import('./assets-chunks/budget_index_html.mjs').then(m => m.default)},
    'styles-JGX4B2HB.css': {size: 73701, hash: 'Gx2aouZVGDY', text: () => import('./assets-chunks/styles-JGX4B2HB_css.mjs').then(m => m.default)}
  },
};
