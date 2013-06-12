var fwk = require('fwk');
var config = fwk.baseConfig();

config['DATTSS_PUSH_PERIOD'] = 5 * 1000;
config['DATTSS_PERCENTILE'] = 0.1;

config['DATTSS_AUTH_KEY'] = 'dummy-env';
config['DATTSS_SERVER_HTTP_HOST'] = 'v2.dattss.com';
config['DATTSS_SERVER_HTTP_PORT'] = 3002;

config['DATTSS_DEBUG'] = false;

exports.config = config;
