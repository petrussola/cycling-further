module.exports = {
  siteMetadata: {
    siteUrl: "https://www.cyclingfurther.com",
    title: "Cycling Further | The Book",
    description:
      "Two belgians cycling from Hungray to the Chinese border across Central Asia. There story now in a book.",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
