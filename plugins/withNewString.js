const { AndroidConfig, withStringsXml } = require('@expo/config-plugins')

module.exports = function (expoConfig) {
    return withStringsXml(expoConfig, (modConfig) => {
      modConfig.modResults = AndroidConfig.Strings.setStringItem(
        [
          {
            _: 'true',
            $: {
              name: 'test_value',
              translatable: 'false'
            }
          }
        ],
        modConfig.modResults
      )
      return modConfig
    })
}