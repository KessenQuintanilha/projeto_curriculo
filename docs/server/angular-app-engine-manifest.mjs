
export default {
  basePath: 'https://KessenQuintanilha.github.io/projeto_curriculo',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
