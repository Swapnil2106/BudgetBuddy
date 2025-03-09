
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
    'index.csr.html': {size: 6145, hash: '6d1e4808331d31e6377835518a16ccf28faf27297ebe86949915ad2ce5609d09', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1305, hash: '18c5933c96e10466c267b727ed812e01b5abeb00493daac3a185a7aab4d2c251', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 42950, hash: '45b350dc7fdcd407de003bc46ecc2dd9a45598b3f61e74ddc054cacc4caf5943', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 42981, hash: '5aa48b5cbb47652f261865346328b670a6d2efca7eed499d7b16617ae0892947', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'addNew/index.html': {size: 28494, hash: '1e14674911fa3153eb0145579bc3dfe056fa835a1d96f42c35639301fa1be854', text: () => import('./assets-chunks/addNew_index_html.mjs').then(m => m.default)},
    'report/index.html': {size: 19049, hash: 'd4a1e494bfce9a2e58e77f663994be6d8152566bb42b1c7ddf933c3aa41da593', text: () => import('./assets-chunks/report_index_html.mjs').then(m => m.default)},
    'budget/index.html': {size: 31078, hash: '910ad999f5570da7241ada785eece405a1b1afafe110d9a962f61d07ad38c099', text: () => import('./assets-chunks/budget_index_html.mjs').then(m => m.default)},
    'styles-PTGHSCCS.css': {size: 310693, hash: 'HzA9Vdbxvus', text: () => import('./assets-chunks/styles-PTGHSCCS_css.mjs').then(m => m.default)}
  },
};
