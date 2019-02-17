module.exports = {
  pathPrefix: "/gatsby-material-ui-business-starter",
  siteMetadata: {
    title: "TeamSource",
    contact: {
      phone: "503-555-1111",
      email: "hi@foxandgeese.com",
    },
    menuLinks: [
      {
        name: "Sign Up",
        link: "/signup",
      },
      {
        name: "Sign In",
        link: "/signin",
      },
    ],
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-stylus",
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
  ],
};
