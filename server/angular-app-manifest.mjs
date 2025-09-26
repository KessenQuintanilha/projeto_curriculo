
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/projeto_curriculo/',
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
    'index.csr.html': {size: 24635, hash: '90625d167eb809e00506c319644d88dac2c77dd285d90c6d0970623073c8749c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17088, hash: '509b7001b951adab6af33f77d3108b053aa0b444546a90ab632c9d128d1f6551', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'certificates/index.html': {size: 36764, hash: '8244acf6b749e4aa16bf8c5cc44e5497ba68c2182934bac546d3f55946db13ab', text: () => import('./assets-chunks/certificates_index_html.mjs').then(m => m.default)},
    'index.html': {size: 0, hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'experiences/index.html': {size: 39641, hash: '469ad1f8a68d97533a4ea809b8722be6db334215858f75c03caa4ca1afb1c829', text: () => import('./assets-chunks/experiences_index_html.mjs').then(m => m.default)},
    'education/index.html': {size: 37116, hash: '22d694b61ccff9984490b19dca24e854128e154e5b362303e72d8027c04969cb', text: () => import('./assets-chunks/education_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 36880, hash: 'c65f2c955679acbd1a2ecf8a82ffc137347e1f93bd7b687f8b4eb88f956d8c05', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 81282, hash: 'b277de0dcd86783ae2e46dfd24c4128cecca5a2b61a7d98ad5da0625c9d40aac', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 37595, hash: '78844a5d7e54e55e94fc6f311ec45d981a8fc30634f0849f8fac8f3e39274b8a', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-FFYBPRYA.css': {size: 8329, hash: '5evLMQF4I+o', text: () => import('./assets-chunks/styles-FFYBPRYA_css.mjs').then(m => m.default)}
  },
};
