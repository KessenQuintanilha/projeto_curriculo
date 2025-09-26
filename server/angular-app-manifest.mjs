
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
    'index.csr.html': {size: 24670, hash: 'd7eea22df205e81e761d034e3cec2ccd89d9917fd49aee7094a6ac846a43a127', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17123, hash: 'c964a7ae896612df0f5fe1e867c44f24887813085f1a86d41aadae9a13f376db', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 0, hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 37840, hash: '5c8dc35c6078d331470572dd328e63e7fecc9be9c6430b99a53f2989ef157cdc', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 37125, hash: 'ffba40876f0a15b6a45c46ae8b7e21628c17bcd48d5c88c5b18454f0576dd861', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'certificates/index.html': {size: 37009, hash: '6477b7fe6d75a301591430890ed14b777fdc55ffb17fc95ae15662f7df96d829', text: () => import('./assets-chunks/certificates_index_html.mjs').then(m => m.default)},
    'education/index.html': {size: 37361, hash: '885446407ec99267baf9e16a15a9ca53da39de8237130040c1632864dd118468', text: () => import('./assets-chunks/education_index_html.mjs').then(m => m.default)},
    'experiences/index.html': {size: 39886, hash: 'cfcf4aa884a70c015af7c5d6cc9b0ce410443034b7f1072536564836c19932ab', text: () => import('./assets-chunks/experiences_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 81527, hash: 'edec087bcfe7a20837b46de27a362fb28c397993bb175043b571165060e740a9', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'styles-FFYBPRYA.css': {size: 8329, hash: '5evLMQF4I+o', text: () => import('./assets-chunks/styles-FFYBPRYA_css.mjs').then(m => m.default)}
  },
};
