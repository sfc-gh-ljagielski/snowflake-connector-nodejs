/*
 * Copyright (c) 2015-2019 Snowflake Computing Inc. All rights reserved.
 */

const Core = require('./../../../lib/core');
const MockHttpClient = require('./mock_http_client');

const clientInfo =
  {
    version: require('./../../../package.json').version,
    environment: process.versions
  };

// create a snowflake instance that operates in qa mode and is configured to
// use a mock http client
const snowflake = Core(
  {
    qaMode: true,
    httpClient: new MockHttpClient(clientInfo),
    loggerClass: require('./../../../lib/logger/node'),
    client: clientInfo,
    logLevel: 'trace'
  });

exports.snowflake = snowflake;

const connectionOptions =
  {
    accessUrl: 'http://fakeaccount.snowflakecomputing.com',
    username: 'fakeusername',
    password: 'fakepassword',
    account: 'fakeaccount'
  };

const connectionOptionsDeserialize =
  {
    accessUrl: 'http://fakeaccount.snowflakecomputing.com'
  };

const connectionOptionsWithServiceName =
  {
    accessUrl: 'http://fakeaccount.snowflakecomputing.com',
    username: 'fakeuserservicename',
    password: 'fakepassword',
    account: 'fakeaccount'
  };

const connectionOptionsWithClientSessionKeepAlive =
  {
    accessUrl: 'http://fakeaccount.snowflakecomputing.com',
    username: 'fakeusername',
    password: 'fakepassword',
    account: 'fakeaccount',
    clientSessionKeepAlive: true,
    clientSessionKeepAliveHeartbeatFrequency: 1800
  };

const connectionOptionsForSessionGone =
  {
    accessUrl: 'http://fakeaccount.snowflakecomputing.com',
    username: 'fakesessiongone',
    password: 'fakepassword',
    account: 'fakeaccount'
  };

const connectionOptionsForSessionExpired =
  {
    accessUrl: 'http://fakeaccount.snowflakecomputing.com',
    username: 'fakesessionexpired',
    password: 'fakepassword',
    account: 'fakeaccount'
  };

const connectionOptions504 =
  {
    accessUrl: 'http://fake504.snowflakecomputing.com',
    username: 'fake504user',
    password: 'fakepassword',
    account: 'fake504'
  };

const connectionOptionsWithTreatIntAsBigInt =
  {
    accessUrl: 'http://fakeaccount.snowflakecomputing.com',
    username: 'fakeusername',
    password: 'fakepassword',
    account: 'fakeaccount',
    jsTreatIntegerAsBigInt: true
  };

const connectionOptionsDefault =
{
  accessUrl: 'http://fakeaccount.snowflakecomputing.com',
  username: 'fakeusername',
  password: 'fakepassword',
  account: 'fakeaccount',
  authenticator: 'SNOWFLAKE'
};

const connectionOptionsExternalBrowser =
{
  accessUrl: 'http://fakeaccount.snowflakecomputing.com',
  username: 'fakeusername',
  account: 'fakeaccount',
  authenticator: 'EXTERNALBROWSER'
};

const connectionOptionsKeyPair =
{
  accessUrl: 'http://fakeaccount.snowflakecomputing.com',
  username: 'fakeusername',
  account: 'fakeaccount',
  // pragma: allowlist nextline secret
  privateKey: `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCZz9mgSsfZxjMW
Z2daiF4N0If8sFxcVtsg2vcNNo+FR8droojFlNLXfIsklq0GoHK8kfv7JmCI2M93
jYRq410DseQTHQuZVmUZEfRGFjrOXl+1arQpEZgmQUUFkQbekOU2am+thoSBFWnL
A8wsQyjHAiolzkhVXP52mg7d4pWyJbtcnsoTunS9SvzqslD/pEPxtesHhDtG3qVO
fmMkc/ChkH9UfZcZoXyAPAz+nwHjOCJMHfiD085Sn9yb5mmHoe1M3Zn0m9eF9hfd
zopm2Q0p27qwN9pD8KXTxhY1aCWs2coit/6B7MQCemol7h3cRxePvPitnx4CprJd
h4Op4DsDAgMBAAECggEARgDq4ADY9300+C/kwrgI8omjsraDusUPI2N1CG76ICNc
mFjXnfFPiqKU43iuVDNHNRrOD+7WBcKDnjpq94j2Zv2aO7a+9jFzftcEkbeBWTZr
ofJn/78Ru+t94fwxH6/bmooTvOrZuLRJu4vFa6m/T9/k1eMOWceiytDwDj2XewXr
oPjBZqHWjfzU7Hbgb0dNSGamhquUb5PoEfyPHE8ya5+uXciNY/7vdyducaaNVxm2
eGheCdSi5mRAHt60kEJdy/8Np2hn3KoAaQ1CBUBhxWdQ/R6/XbrvX9cP7ld8i+Pj
9eN+dovQbW/wqUweLuU/T4QYyz74g5D1V60ch3Y+YQKBgQDHP/i2qpZU4cTQ7yrF
HvhrU5Ey4jQQWZ0nNtq5qoQZyO8HdF/zzp02X//5hG5JbUsBNhzJ9SKu+rAdI8Me
SFIdetuXrUevKpNnrUPsE/srQAPzmakuxhZOGI2m+I8q8p5ERId6sX8nIQbULFXN
jZwpgQLx/j87xsfbWgKpvkX8oQKBgQDFntT1tzCi6qXUbZPwzwPA92dnMgcJu120
9Cp8j1oxoqhcOOvnbR8ZdOHc1tg++/zDEfjeuDWIuuOnolcllAYBKLlqT0aab/n9
4kdhjudHwv81HC5kzO96Bn7Tzl0HfJebmeba9C1NkODfYoqoqEaa60ogcFHQgYpn
fCLW64gRIwKBgQCsA+Nxt/YPE9Z51nDjOyiWZ8/r0PPHxcXx696K+dYP+LO7iNGp
x49cOSbhQF6CT7O4OQJDrLkjvVM75Pr3ctJJlx5rZPKFHEmj8Sa5ckqd/ScsMFWq
BuOMyo/IPcBEAK94Gn2oBALVQiMGG7x7uCzAfBuR1cC7l5JFIgE4kAcV4QKBgQC9
IESu46KoR+hsZHIxA+2TvzI2kKorpiUICKSgkJDA7+owWElsMgKRWkrODs7leENu
bMTAYYraUAGPbM36KK+WbGMGWtg29PNLBkNKGnk9NGEJcu7ziS2mmpDGI7jkcVim
kaNd6FFy6jRLlQMeZe0sVgGbCeNCqLbMUwEErmSKAQKBgA3NDSFKTh1bCgm49T3J
2cpmjsagg6WJea+FxipowjiDQt3GZt8httfaDo0c+LsQ1I00kZVVxtmV+vVKSrRv
8YWp52q4JHNUkrrvyTIKeeY/VT8mVjtK8JqNXfV2td9xQyCQsUwdWqIjNRlMnSO1
LpkrQ8ZmIi1UxQBg712eQ2Rz
-----END PRIVATE KEY-----`,
  authenticator: 'SNOWFLAKE_JWT'
};

const connectionOptionsKeyPairPath =
{
  accessUrl: 'http://fakeaccount.snowflakecomputing.com',
  username: 'fakeusername',
  account: 'fakeaccount',
  privateKeyPath: 'fakeprivatekeypath',
  privateKeyPass: 'fakeprivatekeypass',
  authenticator: 'SNOWFLAKE_JWT'
};

const connectionOptionsOauth =
{
  accessUrl: 'http://fakeaccount.snowflakecomputing.com',
  username: 'fakeusername',
  account: 'fakeaccount',
  token: 'faketoken',
  authenticator: 'OAUTH'
};

const connectionOptionsOkta =
{
  accessUrl: 'http://fakeaccount.snowflakecomputing.com',
  username: 'fakeusername',
  account: 'fakeaccount',
  token: 'faketoken',
  getClientType: () => 'JavaScript',
  getClientVersion: () => '1.6.21',
  rawSamlResponse: '<form action="https://fakeaccount.snowflakecomputing.com/fed/login">',
  authenticator: 'https://dev-12345678.okta.com/',
  getAuthenticator: () => 'https://dev-12345678.okta.com/',
  getServiceName: () => '',
  getTimeout: () => 90,
  getRetryTimeout: () => 300,
  getRetrySfMaxLoginRetries: () => 7,
};

exports.connectionOptions =
  {
    default: connectionOptions,
    deserialize: connectionOptionsDeserialize,
    serviceName: connectionOptionsWithServiceName,
    clientSessionKeepAlive: connectionOptionsWithClientSessionKeepAlive,
    sessionGone: connectionOptionsForSessionGone,
    sessionExpired: connectionOptionsForSessionExpired,
    http504: connectionOptions504,
    treatIntAsBigInt: connectionOptionsWithTreatIntAsBigInt,
    authDefault: connectionOptionsDefault,
    authExternalBrowser: connectionOptionsExternalBrowser,
    authKeyPair: connectionOptionsKeyPair,
    authKeyPairPath: connectionOptionsKeyPairPath,
    authOauth: connectionOptionsOauth,
    authOkta: connectionOptionsOkta,
  };
