const extension = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';
module.exports = require(`./configureStore.${extension}`); // eslint-disable-line
