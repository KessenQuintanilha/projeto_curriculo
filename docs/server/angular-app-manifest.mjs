
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://KessenQuintanilha.github.io/projeto_curriculo/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/projeto_curriculo"
  },
  {
    "renderMode": 2,
    "route": "/projeto_curriculo/about-me"
  },
  {
    "renderMode": 2,
    "route": "/projeto_curriculo/experiences"
  },
  {
    "renderMode": 2,
    "route": "/projeto_curriculo/education"
  },
  {
    "renderMode": 2,
    "route": "/projeto_curriculo/skills"
  },
  {
    "renderMode": 2,
    "route": "/projeto_curriculo/projects"
  },
  {
    "renderMode": 2,
    "route": "/projeto_curriculo/certificates"
  },
  {
    "renderMode": 2,
    "redirectTo": "/projeto_curriculo",
    "route": "/projeto_curriculo/***"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24662, hash: '9ea20dcffcee2c1f3052fdbe92eed419d3dd64407c514f0103ef6b67bde05960', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17115, hash: '439f95e2caf544c5b7cc97ac4db5103ae08f1d11eb9c23d453adab7887755345', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'certificates/index.html': {size: 33644, hash: 'c467e8b40380a11068ba209e96614c0fc663565cc52fe003110441a9d2498348', text: () => import('./assets-chunks/certificates_index_html.mjs').then(m => m.default)},
    'education/index.html': {size: 33635, hash: '757b874f370deb74d25f5d8e897db6ac360d8a30e64d2378cc9237467c1be36c', text: () => import('./assets-chunks/education_index_html.mjs').then(m => m.default)},
    'experiences/index.html': {size: 33641, hash: '688df169a659c72c6e537a3130fabe92c009d0e68e7ce14a2d431221cfe7b0c6', text: () => import('./assets-chunks/experiences_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 33625, hash: 'e0c962578eb936c24f0a13480817c3c0c182fc7f3ec7023e9b8b339a200e90d6', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'index.html': {size: 0, hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 33632, hash: '8c3bc0bdd3c6cf2b80c5502fc31224469681083a8afcf05e6dba632af69d7788', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 33631, hash: '8b86907ccad68d939b71c13f39c3e0595b496bf6eee3053836cd651b8267ca31', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'styles-DTTV3AOM.css': {size: 8100, hash: 'jHWbwFO0LXY', text: () => import('./assets-chunks/styles-DTTV3AOM_css.mjs').then(m => m.default)}
  },
};
