const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-general-js": hot(preferDefault(require("C:\\Users\\Kelby\\Desktop\\Team-Source\\src\\templates\\general.js"))),
  "component---src-templates-team-js": hot(preferDefault(require("C:\\Users\\Kelby\\Desktop\\Team-Source\\src\\templates\\team.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\Kelby\\Desktop\\Team-Source\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\Kelby\\Desktop\\Team-Source\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\Kelby\\Desktop\\Team-Source\\src\\pages\\index.js"))),
  "component---src-pages-products-index-js": hot(preferDefault(require("C:\\Users\\Kelby\\Desktop\\Team-Source\\src\\pages\\products\\index.js"))),
  "component---src-pages-signin-index-js": hot(preferDefault(require("C:\\Users\\Kelby\\Desktop\\Team-Source\\src\\pages\\signin\\index.js"))),
  "component---src-pages-signup-index-js": hot(preferDefault(require("C:\\Users\\Kelby\\Desktop\\Team-Source\\src\\pages\\signup\\index.js"))),
  "component---src-pages-team-index-js": hot(preferDefault(require("C:\\Users\\Kelby\\Desktop\\Team-Source\\src\\pages\\team\\index.js")))
}

