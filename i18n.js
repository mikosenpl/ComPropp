module.exports = {
  locales: ['pl', 'en'], // Array with the languages that you want to use
  defaultLocale: 'pl', // Default language of your website
  pages: {
    '*': ['common'], // Namespaces that you want to import per page (we stick to one namespace for all the application in this tutorial)
  },
};