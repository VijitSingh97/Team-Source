// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-team-js": () => import("/Users/colbystauss/Documents/hackDFW/Team-Source/src/templates/team.js" /* webpackChunkName: "component---src-templates-team-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/colbystauss/Documents/hackDFW/Team-Source/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-templates-general-js": () => import("/Users/colbystauss/Documents/hackDFW/Team-Source/src/templates/general.js" /* webpackChunkName: "component---src-templates-general-js" */),
  "component---src-pages-404-js": () => import("/Users/colbystauss/Documents/hackDFW/Team-Source/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/colbystauss/Documents/hackDFW/Team-Source/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-products-index-js": () => import("/Users/colbystauss/Documents/hackDFW/Team-Source/src/pages/products/index.js" /* webpackChunkName: "component---src-pages-products-index-js" */),
  "component---src-pages-signin-index-js": () => import("/Users/colbystauss/Documents/hackDFW/Team-Source/src/pages/signin/index.js" /* webpackChunkName: "component---src-pages-signin-index-js" */),
  "component---src-pages-signup-index-js": () => import("/Users/colbystauss/Documents/hackDFW/Team-Source/src/pages/signup/index.js" /* webpackChunkName: "component---src-pages-signup-index-js" */),
  "component---src-pages-team-index-js": () => import("/Users/colbystauss/Documents/hackDFW/Team-Source/src/pages/team/index.js" /* webpackChunkName: "component---src-pages-team-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/colbystauss/Documents/hackDFW/Team-Source/.cache/data.json")

