import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Robert Hanuschke',
  authorAddress: 'robhan-cdk-lib@hanuschke.eu',
  autoApproveOptions: {
    allowedUsernames: ['robert-hanuschke'],
    secret: 'GITHUB_TOKEN',
  },
  autoApproveUpgrades: true,
  cdkVersion: '2.221.0',
  defaultReleaseBranch: 'main',
  deps: [
    '@robhan-cdk-lib/utils',
  ],
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve'],
    },
  },
  description: 'AWS CDK Construct Library for Amazon Managed Workflows for Apache Airflow',
  jsiiVersion: '~5.8.0',
  keywords: ['Airflow', 'Amazon Managed Workflows for Apache Airflow'],
  license: 'MIT',
  name: 'aws_mwaa',
  packageName: '@robhan-cdk-lib/aws_mwaa',
  packageManager: javascript.NodePackageManager.YARN_CLASSIC,
  projenrcTs: true,
  publishToGo: {
    moduleName: 'github.com/robert-hanuschke/robhan-cdk-lib-aws-mwaa',
  },
  publishToMaven: {
    javaPackage: 'io.github.roberthanuschke.cdk.aws.mwaa',
    mavenGroupId: 'io.github.robert-hanuschke',
    mavenArtifactId: 'cdk-aws-mwaa',
    mavenServerId: 'central-ossrh',
  },
  publishToNuget: {
    dotNetNamespace: 'Robhan.CdkLib',
    packageId: 'Robhan.CdkLib.AwsMwaa',
  },
  publishToPypi: {
    distName: 'robhan_cdk_lib.aws_mwaa',
    module: 'robhan_cdk_lib.aws_mwaa',
  },
  repositoryUrl: 'https://github.com/robert-hanuschke/cdk-aws_mwaa.git',
});

const releaseWorkflow = project.github?.tryFindWorkflow('release');

releaseWorkflow?.file!.addOverride(
  'jobs.release_npm.env.NPM_ACCESS_LEVEL',
  'public',
);

project.synth();
