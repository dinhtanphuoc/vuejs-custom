const env = process.env || {}; // eslint-disable-line no-process-env
const envVariables = [
  'BASE_URL'
];

const defaultValueConfig = {
  BASE_URL: 'https://google.com'
};

const config = {};

envVariables.forEach((name) => {
  if (!env[name]) {
    console.warn(`Environment variable ${name} is missing, use default instead.`);
  } else {
    config[name] = env[name] || defaultValueConfig[name] || '';
  }
});

export default config;
