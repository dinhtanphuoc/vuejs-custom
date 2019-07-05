const env = process.env || {};
const envVariables = [
  'API_URL'
];

const defaultValueConfig = {
  API_URL: 'http://jsonplaceholder.typicode.com'
};

const config = {};

envVariables.forEach((name) => {
  if (!env[name]) {
    console.warn(`Environment variable ${name} is missing, use default instead.`);
  }
  config[name] = env[name] || defaultValueConfig[name] || '';
});

export default config;
