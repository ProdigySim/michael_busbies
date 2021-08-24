// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const debug = process.env.NODE_ENV !== 'production'

module.exports = withPlugins([optimizedImages, {
  optimizeImagesInDev: true,
}], {
  assetPrefix: !debug ? '/' : '',
  images: {
    disableStaticImages: true,
  },
});
