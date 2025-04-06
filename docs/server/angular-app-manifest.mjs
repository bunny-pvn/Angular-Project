
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Angular-Project/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Angular-Project"
  },
  {
    "renderMode": 2,
    "route": "/Angular-Project/AddExpense"
  },
  {
    "renderMode": 2,
    "route": "/Angular-Project/login"
  },
  {
    "renderMode": 2,
    "route": "/Angular-Project/viewexpense"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 514, hash: '0407674a1c08b63e74cb3e7bcf505a063d1d5520cadb7f734573fd1626c896bf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '5e9d91b1884dcdc3d6116440f8d2f7cfd78ab916cefda67d206752b36a8bd1a3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4885, hash: '8c5d006ea41022ffb03794da561dd05e25f203aaf12369e71c30c7a1a5180c41', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'viewexpense/index.html': {size: 6762, hash: '7b50cb65edd0855907d7d0f278eb443c13a33cba21a78f71db558651459b30ab', text: () => import('./assets-chunks/viewexpense_index_html.mjs').then(m => m.default)},
    'AddExpense/index.html': {size: 6762, hash: '7b50cb65edd0855907d7d0f278eb443c13a33cba21a78f71db558651459b30ab', text: () => import('./assets-chunks/AddExpense_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 6762, hash: '7b50cb65edd0855907d7d0f278eb443c13a33cba21a78f71db558651459b30ab', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
