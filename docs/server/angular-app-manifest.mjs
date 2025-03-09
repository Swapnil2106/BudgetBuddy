
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
    'index.csr.html': {size: 6145, hash: '25762d096f51d49a1e2da862fcb1688b05bc92ac8f1675699078f4963ab9c23c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1305, hash: 'f75c4116e15803355a5a91ff970099c8402dc784def893f8b7fa1548c7c7503f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 16391, hash: 'a7375dd51036361f44ae96e2fe7b7f6b6c9abc605e0ffc4f01af5fc35496ada4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 16391, hash: 'a7375dd51036361f44ae96e2fe7b7f6b6c9abc605e0ffc4f01af5fc35496ada4', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'addNew/index.html': {size: 16620, hash: 'cf8c7f0e028d1bda041c852d6633bcfec4ce62c969696722b32737f443d75752', text: () => import('./assets-chunks/addNew_index_html.mjs').then(m => m.default)},
    'report/index.html': {size: 16604, hash: '19623dcf53516150fcf37b1a5d7881f3d77075993cefd31de2a8aaa10a2b140e', text: () => import('./assets-chunks/report_index_html.mjs').then(m => m.default)},
    'budget/index.html': {size: 16596, hash: '369d70b0c08ae16f7487881a0bb08bbb390c21d687f993e127b0f0cf20e59b9f', text: () => import('./assets-chunks/budget_index_html.mjs').then(m => m.default)},
    'styles-PTGHSCCS.css': {size: 310693, hash: 'HzA9Vdbxvus', text: () => import('./assets-chunks/styles-PTGHSCCS_css.mjs').then(m => m.default)}
  },
};
