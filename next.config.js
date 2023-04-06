const nextTranslate = require('next-translate-plugin');

module.exports = nextTranslate({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
});
