import { App } from '@aws-cdk/core';
import { PipelineStack, ssmSecret } from '@cpmech/az-cdk';
import { initEnvars } from '@plabs/envars';
import { envars } from './envars';
import config from './config.json';

initEnvars(envars);

const app = new App();

const stackName = `${config.appName}-${envars.STAGE}-service-pip`;

new PipelineStack(app, stackName, {
  githubRepo: config.githubRepo,
  githubUser: config.githubUser,
  githubSecret: ssmSecret(config.ssmParamGithub),
  services: ['apigateway', 'lambda'],
  envars,
});
