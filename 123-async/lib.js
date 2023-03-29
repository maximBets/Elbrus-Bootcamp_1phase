const fetchSync = require('sync-fetch');

module.exports.fetchSync = (url) => fetchSync(url).text();

module.exports.fetch = (url, callback = () => {}) => {
  fetch(url).then(
    (result) => result.text().then((x) => callback(null, x)),
    (error) => callback(error)
  );
};
