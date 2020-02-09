import { initEnvars } from '@cpmech/envars';

export const envars = {
  // state
  STAGE: '',

  // api
  AZCDK_API_URL: '',

  // cognito
  AZCDK_USER_POOL_ID: '',
  AZCDK_USER_POOL_CLIENT_ID: '',
  AZCDK_USER_POOL_DOMAIN_PREFIX: '',
  AZCDK_DEFAULT_USER_GROUP: '',
  AZCDK_TESTER_USER_PASSWORD: '',
  AZCDK_FACEBOOK_CLIENT_ID: '',
  AZCDK_FACEBOOK_CLIENT_SECRET: '',
  AZCDK_GOOGLE_CLIENT_ID: '',
  AZCDK_GOOGLE_CLIENT_SECRET: '',

  // emails
  AZCDK_EMAILS_SENDING_DOMAIN: '',
  AZCDK_EMAILS_RECEIVING_DOMAIN: '',
  AZCDK_EMAILS_RECEIVING_HOSTED_ZONE_ID: '',
  AZCDK_EMAILS_RECEIVING_CERT_ARN: '',
  AZCDK_EMAILS_QUEUE_URL: '',

  // website
  AZCDK_WEBSITE_DOMAIN: '',
  AZCDK_WEBSITE_HOSTED_ZONE_ID: '',
  AZCDK_WEBSITE_CERTIFICATE_ARN: '',
  AZCDK_WEBSITE_CLOUDFRONT_ID: '',
  AZCDK_APP_CLOUDFRONT_ID: '',

  // dynamo
  AZCDK_TABLE_USERS: '',

  // pipeline
  AZCDK_PIPELINE_NOTIFICATION_EMAILS: '',
};

initEnvars(envars);
