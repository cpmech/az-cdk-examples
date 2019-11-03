import { App } from '@aws-cdk/core';
import { WebsitePipelineStack, ssmSecret } from '@cpmech/az-cdk';
import { envars } from './envars';
import { config } from './config';

const app = new App();

const githubSecret = ssmSecret(config.ssmParamGithub);

const stackName = `${config.appName}-${envars.STAGE}-website-pip`;

new WebsitePipelineStack(app, stackName, {
  githubRepo: config.githubRepo,
  githubUser: config.githubUser,
  websiteBucketName: `${envars.WEBSITE_DOMAIN}-website`,
  cloudfrontDistributionId: envars.WEBSITE_CLOUDFRONT_ID,
  notificationEmails: envars.PIPELINE_NOTIFICATION_EMAILS.split(','),
  assetsDir: 'public',
  githubSecret,
  envars,
});