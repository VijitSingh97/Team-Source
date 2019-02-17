// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-team-js": () => import("/home/vijit/Documents/projects/Team-Source/src/templates/team.js" /* webpackChunkName: "component---src-templates-team-js" */),
  "component---src-templates-general-js": () => import("/home/vijit/Documents/projects/Team-Source/src/templates/general.js" /* webpackChunkName: "component---src-templates-general-js" */),
  "component---cache-dev-404-page-js": () => import("/home/vijit/Documents/projects/Team-Source/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/home/vijit/Documents/projects/Team-Source/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/home/vijit/Documents/projects/Team-Source/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-products-index-js": () => import("/home/vijit/Documents/projects/Team-Source/src/pages/products/index.js" /* webpackChunkName: "component---src-pages-products-index-js" */),
  "component---src-pages-signin-index-js": () => import("/home/vijit/Documents/projects/Team-Source/src/pages/signin/index.js" /* webpackChunkName: "component---src-pages-signin-index-js" */),
  "component---src-pages-signup-index-js": () => import("/home/vijit/Documents/projects/Team-Source/src/pages/signup/index.js" /* webpackChunkName: "component---src-pages-signup-index-js" */),
  "component---src-pages-team-index-js": () => import("/home/vijit/Documents/projects/Team-Source/src/pages/team/index.js" /* webpackChunkName: "component---src-pages-team-index-js" */),
  "component---src-pages-user-index-js": () => import("/home/vijit/Documents/projects/Team-Source/src/pages/user/index.js" /* webpackChunkName: "component---src-pages-user-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/home/vijit/Documents/projects/Team-Source/.cache/data.json")

