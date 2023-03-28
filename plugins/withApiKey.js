module.exports = function (config, { apiKey }) {
    // Ensure the objects exist
    if (!config.ios) {
      config.ios = {};
    }
    if (!config.ios.infoPlist) {
      config.ios.infoPlist = {};
    }
  
    // Append the apiKey
    config.ios.infoPlist['MY_CUSTOM_NATIVE_IOS_API_KEY'] = apiKey;
  
    return config;
  };
