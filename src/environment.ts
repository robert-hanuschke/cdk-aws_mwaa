import { validateObjectAttributes } from '@robhan-cdk-lib/utils';
import { IRole } from 'aws-cdk-lib/aws-iam';
import { IKey } from 'aws-cdk-lib/aws-kms';
import { CfnEnvironment, CfnEnvironmentProps } from 'aws-cdk-lib/aws-mwaa';
import { IBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { AirflowVersion, EndpointManagement, EnvironmentBase, EnvironmentClass, IEnvironment, LoggingConfiguration, NetworkConfiguration, WebserverAccessMode } from './environment-base';
import { validateAirflowConfigurationOptions, validateDagS3Path, validateLoggingConfiguration, validateMaxWebservers, validateMaxWorkers, validateMinWebservers, validateMinWorkers, validateName, validateNetworkConfiguration, validatePluginsS3ObjectVersion, validatePluginsS3Path, validateRequirementsS3ObjectVersion, validateRequirementsS3Path, validateSchedulers, validateStartupScriptS3ObjectVersion, validateStartupScriptS3Path, validateWeeklyMaintenanceWindowStart } from './validation/environment-base';

/**
 * Properties for creating an Amazon Managed Workflows for Apache Airflow Environment.
 */
export interface EnvironmentProps {
  /**
   * A list of key-value pairs containing the Airflow configuration options for your environment. For example, core.default_timezone: utc.
   */
  readonly airflowConfigurationOptions: { [key: string]: string };

  /**
   * The version of Apache Airflow to use for the environment. If no value is specified, defaults to the latest version.
   *
   * If you specify a newer version number for an existing environment, the version update requires some service interruption before taking effect.
   */
  readonly airflowVersion?: AirflowVersion;

  /**
   * The relative path to the DAGs folder on your Amazon S3 bucket. For example, dags.
   */
  readonly dagS3Path?: string;

  /**
   * Defines whether the VPC endpoints configured for the environment are created, and managed, by the customer or by Amazon MWAA.
   * If set to SERVICE, Amazon MWAA will create and manage the required VPC endpoints in your VPC.
   * If set to CUSTOMER, you must create, and manage, the VPC endpoints in your VPC.
   */
  readonly endpointManagement?: EndpointManagement;

  /**
   * The environment class type.
   */
  readonly environmentClass?: EnvironmentClass;

  /**
   * The execution role in IAM that allows MWAA to access AWS resources in your environment.
   */
  readonly executionRole?: IRole;

  /**
   * The AWS Key Management Service (KMS) key to encrypt and decrypt the data in your environment.
   * You can use an AWS KMS key managed by MWAA, or a customer-managed KMS key (advanced).
   */
  readonly kmsKey?: IKey;

  /**
   * The Apache Airflow logs being sent to CloudWatch Logs.
   */
  readonly loggingConfiguration?: LoggingConfiguration;

  /**
   * The maximum number of web servers that you want to run in your environment.
   * Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for MaxWebservers when you interact with your Apache
   * Airflow environment using Apache Airflow REST API, or the Apache Airflow CLI. For example, in scenarios where your workload requires network
   * calls to the Apache Airflow REST API with a high transaction-per-second (TPS) rate, Amazon MWAA will increase the number of web servers up to
   * the number set in MaxWebserers. As TPS rates decrease Amazon MWAA disposes of the additional web servers, and scales down to the number set in
   * MinxWebserers.
   *
   * Valid values: For environments larger than mw1.micro, accepts values from 2 to 5. Defaults to 2 for all environment sizes except mw1.micro,
   * which defaults to 1.
   */
  readonly maxWebservers?: number;

  /**
   * The maximum number of workers that you want to run in your environment.
   * MWAA scales the number of Apache Airflow workers up to the number you specify in the MaxWorkers field. For example, 20. When there are no more
   * tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or
   * the number you specify in MinWorkers.
   */
  readonly maxWorkers?: number;

  /**
   * The minimum number of web servers that you want to run in your environment.
   * Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for MaxWebservers when you interact with your Apache
   * Airflow environment using Apache Airflow REST API, or the Apache Airflow CLI. As the transaction-per-second rate, and the network load,
   * decrease, Amazon MWAA disposes of the additional web servers, and scales down to the number set in MinxWebserers.
   *
   * Valid values: For environments larger than mw1.micro, accepts values from 2 to 5. Defaults to 2 for all environment sizes except mw1.micro,
   * which defaults to 1.
   */
  readonly minWebservers?: number;

  /**
   * The minimum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you
   * specify in the MaxWorkers field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving
   * the worker count you specify in the MinWorkers field. For example, 2.
   */
  readonly minWorkers?: number;

  /**
   * The name of your Amazon MWAA environment.
   */
  readonly name: string;

  /**
   * The VPC networking components used to secure and enable network traffic between the AWS resources for your environment.
   */
  readonly networkConfiguration?: NetworkConfiguration;

  /**
   * The version of the plugins.zip file on your Amazon S3 bucket.
   */
  readonly pluginsS3ObjectVersion?: string;

  /**
   * The relative path to the plugins.zip file on your Amazon S3 bucket. For example, plugins.zip.
   */
  readonly pluginsS3Path?: string;

  /**
   * The version of the requirements.txt file on your Amazon S3 bucket.
   */
  readonly requirementsS3ObjectVersion?: string;

  /**
   * The relative path to the requirements.txt file on your Amazon S3 bucket. For example, requirements.txt.
   */
  readonly requirementsS3Path?: string;

  /**
   * The number of schedulers that you want to run in your environment.
   *
   * Valid values:
   * v2 - For environments larger than mw1.micro, accepts values from 2 to 5.
   *      Defaults to 2 for all environment sizes except mw1.micro, which defaults to 1.
   * v1 - Accepts 1.
   */
  readonly schedulers?: number;

  /**
   * The Amazon S3 bucket where your DAG code and supporting files are stored.
   */
  readonly sourceBucket?: IBucket;

  /**
   * The version of the startup shell script in your Amazon S3 bucket.
   * You must specify the version ID that Amazon S3 assigns to the file every time you update the script.
   * Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long.
   *
   * The following is an example:
   *      3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo
   */
  readonly startupScriptS3ObjectVersion?: string;

  /**
   * The relative path to the startup shell script in your Amazon S3 bucket.
   * For example, s3://mwaa-environment/startup.sh.
   * Amazon MWAA runs the script as your environment starts, and before running the Apache Airflow process.
   * You can use this script to install dependencies, modify Apache Airflow configuration options, and set environment variables.
   */
  readonly startupScriptS3Path?: string;

  /**
   * The Apache Airflow Web server access mode.
   */
  readonly webserverAccessMode?: WebserverAccessMode;

  /**
   * The day and time of the week to start weekly maintenance updates of your environment in the following format: DAY:HH:MM.
   * For example: TUE:03:30. You can specify a start time in 30 minute increments only.
   *
   * Supported input includes the following:
   *      MON|TUE|WED|THU|FRI|SAT|SUN:([01]\\d|2[0-3]):(00|30)
   */
  readonly weeklyMaintenanceWindowStart?: string;
}

/**
 * Properties for importing an Amazon Managed Workflows for Apache Airflow Environment.
 */
export interface EnvironmentAttributes {
  /**
   * A list of key-value pairs containing the Airflow configuration options for your environment. For example, core.default_timezone: utc.
   */
  readonly airflowConfigurationOptions: { [key: string]: string };

  /**
   * The version of Apache Airflow to use for the environment. If no value is specified, defaults to the latest version.
   *
   * If you specify a newer version number for an existing environment, the version update requires some service interruption before taking effect.
   */
  readonly airflowVersion?: AirflowVersion;

  /**
   * The relative path to the DAGs folder on your Amazon S3 bucket. For example, dags.
   */
  readonly dagS3Path?: string;

  /**
   * Defines whether the VPC endpoints configured for the environment are created, and managed, by the customer or by Amazon MWAA.
   * If set to SERVICE, Amazon MWAA will create and manage the required VPC endpoints in your VPC.
   * If set to CUSTOMER, you must create, and manage, the VPC endpoints in your VPC.
   */
  readonly endpointManagement?: EndpointManagement;

  /**
   * The environment class type.
   */
  readonly environmentClass?: EnvironmentClass;

  /**
   * The execution role in IAM that allows MWAA to access AWS resources in your environment.
   */
  readonly executionRole?: IRole;

  /**
   * The AWS Key Management Service (KMS) key to encrypt and decrypt the data in your environment.
   * You can use an AWS KMS key managed by MWAA, or a customer-managed KMS key (advanced).
   */
  readonly kmsKey?: IKey;

  /**
   * The Apache Airflow logs being sent to CloudWatch Logs.
   */
  readonly loggingConfiguration?: LoggingConfiguration;

  /**
   * The maximum number of web servers that you want to run in your environment.
   * Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for MaxWebservers when you interact with your Apache
   * Airflow environment using Apache Airflow REST API, or the Apache Airflow CLI. For example, in scenarios where your workload requires network
   * calls to the Apache Airflow REST API with a high transaction-per-second (TPS) rate, Amazon MWAA will increase the number of web servers up to
   * the number set in MaxWebserers. As TPS rates decrease Amazon MWAA disposes of the additional web servers, and scales down to the number set in
   * MinxWebserers.
   *
   * Valid values: For environments larger than mw1.micro, accepts values from 2 to 5. Defaults to 2 for all environment sizes except mw1.micro,
   * which defaults to 1.
   */
  readonly maxWebservers?: number;

  /**
   * The maximum number of workers that you want to run in your environment.
   * MWAA scales the number of Apache Airflow workers up to the number you specify in the MaxWorkers field. For example, 20. When there are no more
   * tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or
   * the number you specify in MinWorkers.
   */
  readonly maxWorkers?: number;

  /**
   * The minimum number of web servers that you want to run in your environment.
   * Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for MaxWebservers when you interact with your Apache
   * Airflow environment using Apache Airflow REST API, or the Apache Airflow CLI. As the transaction-per-second rate, and the network load,
   * decrease, Amazon MWAA disposes of the additional web servers, and scales down to the number set in MinxWebserers.
   *
   * Valid values: For environments larger than mw1.micro, accepts values from 2 to 5. Defaults to 2 for all environment sizes except mw1.micro,
   * which defaults to 1.
   */
  readonly minWebservers?: number;

  /**
   * The minimum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you
   * specify in the MaxWorkers field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving
   * the worker count you specify in the MinWorkers field. For example, 2.
   */
  readonly minWorkers?: number;

  /**
   * The name of your Amazon MWAA environment.
   */
  readonly name: string;

  /**
   * The VPC networking components used to secure and enable network traffic between the AWS resources for your environment.
   */
  readonly networkConfiguration?: NetworkConfiguration;

  /**
   * The version of the plugins.zip file on your Amazon S3 bucket.
   */
  readonly pluginsS3ObjectVersion?: string;

  /**
   * The relative path to the plugins.zip file on your Amazon S3 bucket. For example, plugins.zip.
   */
  readonly pluginsS3Path?: string;

  /**
   * The version of the requirements.txt file on your Amazon S3 bucket.
   */
  readonly requirementsS3ObjectVersion?: string;

  /**
   * The relative path to the requirements.txt file on your Amazon S3 bucket. For example, requirements.txt.
   */
  readonly requirementsS3Path?: string;

  /**
   * The number of schedulers that you want to run in your environment.
   *
   * Valid values:
   * v2 - For environments larger than mw1.micro, accepts values from 2 to 5.
   *      Defaults to 2 for all environment sizes except mw1.micro, which defaults to 1.
   * v1 - Accepts 1.
   */
  readonly schedulers?: number;

  /**
   * The Amazon S3 bucket where your DAG code and supporting files are stored.
   */
  readonly sourceBucket?: IBucket;

  /**
   * The version of the startup shell script in your Amazon S3 bucket.
   * You must specify the version ID that Amazon S3 assigns to the file every time you update the script.
   * Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long.
   *
   * The following is an example:
   *      3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo
   */
  readonly startupScriptS3ObjectVersion?: string;

  /**
   * The relative path to the startup shell script in your Amazon S3 bucket.
   * For example, s3://mwaa-environment/startup.sh.
   * Amazon MWAA runs the script as your environment starts, and before running the Apache Airflow process.
   * You can use this script to install dependencies, modify Apache Airflow configuration options, and set environment variables.
   */
  readonly startupScriptS3Path?: string;

  /**
   * The Apache Airflow Web server access mode.
   */
  readonly webserverAccessMode?: WebserverAccessMode;

  /**
   * The day and time of the week to start weekly maintenance updates of your environment in the following format: DAY:HH:MM.
   * For example: TUE:03:30. You can specify a start time in 30 minute increments only.
   *
   * Supported input includes the following:
   *      MON|TUE|WED|THU|FRI|SAT|SUN:([01]\\d|2[0-3]):(00|30)
   */
  readonly weeklyMaintenanceWindowStart?: string;

  /**
   * The ARN for the Amazon MWAA environment.
   */
  readonly environmentArn: string;

  /**
   * The queue ARN for the environment's Celery Executor. Amazon MWAA uses a Celery Executor to distribute tasks across multiple workers.
   * When you create an environment in a shared VPC, you must provide access to the Celery Executor queue from your VPC.
   */
  readonly celeryExecutorQueue?: string;

  /**
   * The VPC endpoint for the environment's Amazon RDS database.
   */
  readonly databaseVpcEndpointService?: string;

  /**
   * The ARN for the CloudWatch Logs group where the Apache Airflow DAG processing logs are published.
   */
  readonly loggingConfigurationDagProcessingLogsCloudWatchLogGroupArn?: string;

  /**
   * The ARN for the CloudWatch Logs group where the Apache Airflow Scheduler logs are published.
   */
  readonly loggingConfigurationSchedulerLogsCloudWatchLogGroupArn?: string;

  /**
   * The ARN for the CloudWatch Logs group where the Apache Airflow task logs are published.
   */
  readonly loggingConfigurationTaskLogsCloudWatchLogGroupArn?: string;

  /**
   * The ARN for the CloudWatch Logs group where the Apache Airflow Web server logs are published.
   */
  readonly loggingConfigurationWebserverLogsCloudWatchLogGroupArn?: string;

  /**
   * The ARN for the CloudWatch Logs group where the Apache Airflow Worker logs are published.
   */
  readonly loggingConfigurationWorkerLogsCloudWatchLogGroupArn?: string;

  /**
   * The URL of your Apache Airflow UI.
   */
  readonly webserverUrl?: string;

  /**
   * The VPC endpoint for the environment's web server.
   */
  readonly webserverVpcEndpointService?: string;
}

const IS_ENVIRONMENT = Symbol.for('@robhan-cdk-lib/aws_mwaa.Environment');

export class Environment extends EnvironmentBase {
  public static isEnvironment(x: any): x is Environment {
    return IS_ENVIRONMENT in x;
  }

  public static fromEnvironmentAttributes(scope: Construct, id: string, attrs: EnvironmentAttributes): IEnvironment {
    class Import extends EnvironmentBase {
      public readonly airflowConfigurationOptions: { [key: string]: string };
      public readonly airflowVersion?: AirflowVersion;
      public readonly dagS3Path?: string;
      public readonly endpointManagement?: EndpointManagement;
      public readonly environmentClass?: EnvironmentClass;
      public readonly executionRole?: IRole;
      public readonly kmsKey?: IKey;
      public readonly loggingConfiguration?: LoggingConfiguration;
      public readonly maxWebservers?: number;
      public readonly maxWorkers?: number;
      public readonly minWebservers?: number;
      public readonly minWorkers?: number;
      public readonly name: string;
      public readonly networkConfiguration?: NetworkConfiguration;
      public readonly pluginsS3ObjectVersion?: string;
      public readonly pluginsS3Path?: string;
      public readonly requirementsS3ObjectVersion?: string;
      public readonly requirementsS3Path?: string;
      public readonly schedulers?: number;
      public readonly sourceBucket?: IBucket;
      public readonly startupScriptS3ObjectVersion?: string;
      public readonly startupScriptS3Path?: string;
      public readonly webserverAccessMode?: WebserverAccessMode;
      public readonly weeklyMaintenanceWindowStart?: string;
      public readonly environmentArn: string;
      public readonly celeryExecutorQueue?: string;
      public readonly databaseVpcEndpointService?: string;
      public readonly loggingConfigurationDagProcessingLogsCloudWatchLogGroupArn?: string;
      public readonly loggingConfigurationSchedulerLogsCloudWatchLogGroupArn?: string;
      public readonly loggingConfigurationTaskLogsCloudWatchLogGroupArn?: string;
      public readonly loggingConfigurationWebserverLogsCloudWatchLogGroupArn?: string;
      public readonly loggingConfigurationWorkerLogsCloudWatchLogGroupArn?: string;
      public readonly webserverUrl?: string;
      public readonly webserverVpcEndpointService?: string;
      constructor(attributes: EnvironmentAttributes) {
        super(scope, id);

        this.airflowConfigurationOptions = attributes.airflowConfigurationOptions;
        this.airflowVersion = attributes.airflowVersion;
        this.dagS3Path = attributes.dagS3Path;
        this.endpointManagement = attributes.endpointManagement;
        this.environmentClass = attributes.environmentClass;
        this.executionRole = attributes.executionRole;
        this.kmsKey = attributes.kmsKey;
        this.loggingConfiguration = attributes.loggingConfiguration;
        this.maxWebservers = attributes.maxWebservers;
        this.maxWorkers = attributes.maxWorkers;
        this.minWebservers = attributes.minWebservers;
        this.minWorkers = attributes.minWorkers;
        this.name = attributes.name;
        this.networkConfiguration = attributes.networkConfiguration;
        this.pluginsS3ObjectVersion = attributes.pluginsS3ObjectVersion;
        this.pluginsS3Path = attributes.pluginsS3Path;
        this.requirementsS3ObjectVersion = attributes.requirementsS3ObjectVersion;
        this.requirementsS3Path = attributes.requirementsS3Path;
        this.schedulers = attributes.schedulers;
        this.sourceBucket = attributes.sourceBucket;
        this.startupScriptS3ObjectVersion = attributes.startupScriptS3ObjectVersion;
        this.startupScriptS3Path = attributes.startupScriptS3Path;
        this.webserverAccessMode = attributes.webserverAccessMode;
        this.weeklyMaintenanceWindowStart = attributes.weeklyMaintenanceWindowStart;
        this.environmentArn = attributes.environmentArn;
        this.celeryExecutorQueue = attributes.celeryExecutorQueue;
        this.databaseVpcEndpointService = attributes.databaseVpcEndpointService;
        this.loggingConfigurationDagProcessingLogsCloudWatchLogGroupArn = attributes.loggingConfigurationDagProcessingLogsCloudWatchLogGroupArn;
        this.loggingConfigurationSchedulerLogsCloudWatchLogGroupArn = attributes.loggingConfigurationSchedulerLogsCloudWatchLogGroupArn;
        this.loggingConfigurationTaskLogsCloudWatchLogGroupArn = attributes.loggingConfigurationTaskLogsCloudWatchLogGroupArn;
        this.loggingConfigurationWebserverLogsCloudWatchLogGroupArn = attributes.loggingConfigurationWebserverLogsCloudWatchLogGroupArn;
        this.loggingConfigurationWorkerLogsCloudWatchLogGroupArn = attributes.loggingConfigurationWorkerLogsCloudWatchLogGroupArn;
        this.webserverUrl = attributes.webserverUrl;
        this.webserverVpcEndpointService = attributes.webserverVpcEndpointService;
      }
    }
    return new Import(attrs);
  }

  /**
   * Validates all environment properties.
   *
   * @param props - The environment properties to validate
   * @returns An array of error messages if validation fails, or an empty array if valid
   *
   * This method aggregates validation results from all individual property validators.
   * It throws an error if props is not an object.
   */
  private static validateProps(props: unknown): string[] {
    const errors: string[] = [];

    if (!props || typeof props !== 'object') {
      throw new Error('Environment constructor properties must be an object');
    }

    errors.push(...validateObjectAttributes({
      inputObject: props,
      mandatoryAttributes: ['airflowConfigurationOptions', 'name'],
      optionalAttributes: [
        'airflowVersion',
        'dagS3Path',
        'endpointManagement',
        'environmentClass',
        'executionRole',
        'kmsKey',
        'loggingConfiguration',
        'maxWebservers',
        'maxWorkers',
        'minWebservers',
        'minWorkers',
        'networkConfiguration',
        'pluginsS3ObjectVersion',
        'pluginsS3Path',
        'requirementsS3ObjectVersion',
        'requirementsS3Path',
        'schedulers',
        'sourceBucket',
        'startupScriptS3ObjectVersion',
        'startupScriptS3Path',
        'webserverAccessMode',
        'weeklyMaintenanceWindowStart',
      ],
    }));

    const environmentProps = props as EnvironmentProps;

    if (environmentProps.airflowConfigurationOptions !== undefined) {
      errors.push(...validateAirflowConfigurationOptions(environmentProps.airflowConfigurationOptions).map((error) => `airflowConfigurationOptions: ${error}`));
    }

    if (environmentProps.dagS3Path !== undefined) {
      errors.push(...validateDagS3Path(environmentProps.dagS3Path).map((error) => `dagS3Path: ${error}`));
    }

    if (environmentProps.loggingConfiguration !== undefined) {
      errors.push(...validateLoggingConfiguration(environmentProps.loggingConfiguration).map((error) => `loggingConfiguration: ${error}`));
    }

    if (environmentProps.maxWebservers !== undefined) {
      errors.push(...validateMaxWebservers(environmentProps).map((error) => `maxWebservers: ${error}`));
    }

    if (environmentProps.maxWorkers !== undefined) {
      errors.push(...validateMaxWorkers(environmentProps.maxWorkers).map((error) => `maxWorkers: ${error}`));
    }

    if (environmentProps.minWebservers !== undefined) {
      errors.push(...validateMinWebservers(environmentProps).map((error) => `minWebservers: ${error}`));
    }

    if (environmentProps.minWorkers !== undefined) {
      errors.push(...validateMinWorkers(environmentProps.minWorkers).map((error) => `minWorkers: ${error}`));
    }

    if (environmentProps.name !== undefined) {
      errors.push(...validateName(environmentProps.name).map((error) => `name: ${error}`));
    }

    if (environmentProps.networkConfiguration !== undefined) {
      errors.push(...validateNetworkConfiguration(environmentProps.networkConfiguration).map((error) => `networkConfiguration: ${error}`));
    }

    if (environmentProps.pluginsS3ObjectVersion !== undefined) {
      errors.push(...validatePluginsS3ObjectVersion(environmentProps.pluginsS3ObjectVersion).map((error) => `pluginsS3ObjectVersion: ${error}`));
    }

    if (environmentProps.pluginsS3Path !== undefined) {
      errors.push(...validatePluginsS3Path(environmentProps.pluginsS3Path).map((error) => `pluginsS3Path: ${error}`));
    }

    if (environmentProps.requirementsS3ObjectVersion !== undefined) {
      errors.push(...validateRequirementsS3ObjectVersion(environmentProps.requirementsS3ObjectVersion).map((error) => `requirementsS3ObjectVersion: ${error}`));
    }

    if (environmentProps.requirementsS3Path !== undefined) {
      errors.push(...validateRequirementsS3Path(environmentProps.requirementsS3Path).map((error) => `requirementsS3Path: ${error}`));
    }

    if (environmentProps.schedulers !== undefined) {
      errors.push(...validateSchedulers(environmentProps.schedulers).map((error) => `schedulers: ${error}`));
    }

    if (environmentProps.startupScriptS3ObjectVersion !== undefined) {
      errors.push(...validateStartupScriptS3ObjectVersion(environmentProps.startupScriptS3ObjectVersion).map((error) => `startupScriptS3ObjectVersion: ${error}`));
    }

    if (environmentProps.startupScriptS3Path !== undefined) {
      errors.push(...validateStartupScriptS3Path(environmentProps.startupScriptS3Path).map((error) => `startupScriptS3Path: ${error}`));
    }

    if (environmentProps.weeklyMaintenanceWindowStart !== undefined) {
      errors.push(...validateWeeklyMaintenanceWindowStart(environmentProps.weeklyMaintenanceWindowStart).map((error) => `weeklyMaintenanceWindowStart: ${error}`));
    }

    return errors;
  }

  /**
   * A list of key-value pairs containing the Airflow configuration options for your environment. For example, core.default_timezone: utc.
   */
  public readonly airflowConfigurationOptions: { [key: string]: string };

  /**
   * The version of Apache Airflow to use for the environment. If no value is specified, defaults to the latest version.
   *
   * If you specify a newer version number for an existing environment, the version update requires some service interruption before taking effect.
   */
  public readonly airflowVersion?: AirflowVersion;

  /**
   * The relative path to the DAGs folder on your Amazon S3 bucket. For example, dags.
   */
  public readonly dagS3Path?: string;

  /**
   * Defines whether the VPC endpoints configured for the environment are created, and managed, by the customer or by Amazon MWAA.
   * If set to SERVICE, Amazon MWAA will create and manage the required VPC endpoints in your VPC.
   * If set to CUSTOMER, you must create, and manage, the VPC endpoints in your VPC.
   */
  public readonly endpointManagement?: EndpointManagement;

  /**
   * The environment class type.
   */
  public readonly environmentClass?: EnvironmentClass;

  /**
   * The execution role in IAM that allows MWAA to access AWS resources in your environment.
   */
  public readonly executionRole?: IRole;

  /**
   * The AWS Key Management Service (KMS) key to encrypt and decrypt the data in your environment.
   * You can use an AWS KMS key managed by MWAA, or a customer-managed KMS key (advanced).
   */
  public readonly kmsKey?: IKey;

  /**
   * The Apache Airflow logs being sent to CloudWatch Logs.
   */
  public readonly loggingConfiguration?: LoggingConfiguration;

  /**
   * The maximum number of web servers that you want to run in your environment.
   * Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for MaxWebservers when you interact with your Apache
   * Airflow environment using Apache Airflow REST API, or the Apache Airflow CLI. For example, in scenarios where your workload requires network
   * calls to the Apache Airflow REST API with a high transaction-per-second (TPS) rate, Amazon MWAA will increase the number of web servers up to
   * the number set in MaxWebserers. As TPS rates decrease Amazon MWAA disposes of the additional web servers, and scales down to the number set in
   * MinxWebserers.
   *
   * Valid values: For environments larger than mw1.micro, accepts values from 2 to 5. Defaults to 2 for all environment sizes except mw1.micro,
   * which defaults to 1.
   */
  public readonly maxWebservers?: number;

  /**
   * The maximum number of workers that you want to run in your environment.
   * MWAA scales the number of Apache Airflow workers up to the number you specify in the MaxWorkers field. For example, 20. When there are no more
   * tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or
   * the number you specify in MinWorkers.
   */
  public readonly maxWorkers?: number;

  /**
   * The minimum number of web servers that you want to run in your environment.
   * Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for MaxWebservers when you interact with your Apache
   * Airflow environment using Apache Airflow REST API, or the Apache Airflow CLI. As the transaction-per-second rate, and the network load,
   * decrease, Amazon MWAA disposes of the additional web servers, and scales down to the number set in MinxWebserers.
   *
   * Valid values: For environments larger than mw1.micro, accepts values from 2 to 5. Defaults to 2 for all environment sizes except mw1.micro,
   * which defaults to 1.
   */
  public readonly minWebservers?: number;

  /**
   * The minimum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you
   * specify in the MaxWorkers field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving
   * the worker count you specify in the MinWorkers field. For example, 2.
   */
  public readonly minWorkers?: number;

  /**
   * The name of your Amazon MWAA environment.
   */
  public readonly name: string;

  /**
   * The VPC networking components used to secure and enable network traffic between the AWS resources for your environment.
   */
  public readonly networkConfiguration?: NetworkConfiguration;

  /**
   * The version of the plugins.zip file on your Amazon S3 bucket.
   */
  public readonly pluginsS3ObjectVersion?: string;

  /**
   * The relative path to the plugins.zip file on your Amazon S3 bucket. For example, plugins.zip.
   */
  public readonly pluginsS3Path?: string;

  /**
   * The version of the requirements.txt file on your Amazon S3 bucket.
   */
  public readonly requirementsS3ObjectVersion?: string;

  /**
   * The relative path to the requirements.txt file on your Amazon S3 bucket. For example, requirements.txt.
   */
  public readonly requirementsS3Path?: string;

  /**
   * The number of schedulers that you want to run in your environment.
   *
   * Valid values:
   * v2 - For environments larger than mw1.micro, accepts values from 2 to 5.
   *      Defaults to 2 for all environment sizes except mw1.micro, which defaults to 1.
   * v1 - Accepts 1.
   */
  public readonly schedulers?: number;

  /**
   * The Amazon S3 bucket where your DAG code and supporting files are stored.
   */
  public readonly sourceBucket?: IBucket;

  /**
   * The version of the startup shell script in your Amazon S3 bucket.
   * You must specify the version ID that Amazon S3 assigns to the file every time you update the script.
   * Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long.
   *
   * The following is an example:
   *      3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo
   */
  public readonly startupScriptS3ObjectVersion?: string;

  /**
   * The relative path to the startup shell script in your Amazon S3 bucket.
   * For example, s3://mwaa-environment/startup.sh.
   * Amazon MWAA runs the script as your environment starts, and before running the Apache Airflow process.
   * You can use this script to install dependencies, modify Apache Airflow configuration options, and set environment variables.
   */
  public readonly startupScriptS3Path?: string;

  /**
   * The Apache Airflow Web server access mode.
   */
  public readonly webserverAccessMode?: WebserverAccessMode;

  /**
   * The day and time of the week to start weekly maintenance updates of your environment in the following format: DAY:HH:MM.
   * For example: TUE:03:30. You can specify a start time in 30 minute increments only.
   *
   * Supported input includes the following:
   *      MON|TUE|WED|THU|FRI|SAT|SUN:([01]\\d|2[0-3]):(00|30)
   */
  public readonly weeklyMaintenanceWindowStart?: string;

  /**
   * The ARN for the Amazon MWAA environment.
   */
  public readonly environmentArn: string;

  /**
   * The queue ARN for the environment's Celery Executor. Amazon MWAA uses a Celery Executor to distribute tasks across multiple workers.
   * When you create an environment in a shared VPC, you must provide access to the Celery Executor queue from your VPC.
   */
  public readonly celeryExecutorQueue?: string;

  /**
   * The VPC endpoint for the environment's Amazon RDS database.
   */
  public readonly databaseVpcEndpointService?: string;

  /**
   * The ARN for the CloudWatch Logs group where the Apache Airflow DAG processing logs are published.
   */
  public readonly loggingConfigurationDagProcessingLogsCloudWatchLogGroupArn?: string;

  /**
   * The ARN for the CloudWatch Logs group where the Apache Airflow Scheduler logs are published.
   */
  public readonly loggingConfigurationSchedulerLogsCloudWatchLogGroupArn?: string;

  /**
   * The ARN for the CloudWatch Logs group where the Apache Airflow task logs are published.
   */
  public readonly loggingConfigurationTaskLogsCloudWatchLogGroupArn?: string;

  /**
   * The ARN for the CloudWatch Logs group where the Apache Airflow Web server logs are published.
   */
  public readonly loggingConfigurationWebserverLogsCloudWatchLogGroupArn?: string;

  /**
   * The ARN for the CloudWatch Logs group where the Apache Airflow Worker logs are published.
   */
  public readonly loggingConfigurationWorkerLogsCloudWatchLogGroupArn?: string;

  /**
   * The URL of your Apache Airflow UI.
   */
  public readonly webserverUrl?: string;

  /**
   * The VPC endpoint for the environment's web server.
   */
  public readonly webserverVpcEndpointService?: string;

  /**
   * The underlying CloudFormation resource.
   */
  private readonly environment: CfnEnvironment;

  constructor(scope: Construct, id: string, props: EnvironmentProps) {
    super(scope, id);

    Object.defineProperty(this, IS_ENVIRONMENT, { value: true });

    const errors = Environment.validateProps(props);

    if (errors.length > 0) {
      throw new Error(`Invalid props:\n${errors.join('\n')}`);
    }

    this.airflowConfigurationOptions = props.airflowConfigurationOptions;
    this.airflowVersion = props.airflowVersion;
    this.dagS3Path = props.dagS3Path;
    this.endpointManagement = props.endpointManagement;
    this.environmentClass = props.environmentClass;
    this.executionRole = props.executionRole;
    this.kmsKey = props.kmsKey;
    this.loggingConfiguration = props.loggingConfiguration;
    this.maxWebservers = props.maxWebservers;
    this.maxWorkers = props.maxWorkers;
    this.minWebservers = props.minWebservers;
    this.minWorkers = props.minWorkers;
    this.name = props.name;
    this.networkConfiguration = props.networkConfiguration;
    this.pluginsS3ObjectVersion = props.pluginsS3ObjectVersion;
    this.pluginsS3Path = props.pluginsS3Path;
    this.requirementsS3ObjectVersion = props.requirementsS3ObjectVersion;
    this.requirementsS3Path = props.requirementsS3Path;
    this.schedulers = props.schedulers;
    this.sourceBucket = props.sourceBucket;
    this.startupScriptS3ObjectVersion = props.startupScriptS3ObjectVersion;
    this.startupScriptS3Path = props.startupScriptS3Path;
    this.webserverAccessMode = props.webserverAccessMode;
    this.weeklyMaintenanceWindowStart = props.weeklyMaintenanceWindowStart;

    let cfnEnvironmentProps: CfnEnvironmentProps = {
      name: this.name,
      airflowConfigurationOptions: this.airflowConfigurationOptions,
      airflowVersion: this.airflowVersion,
      dagS3Path: this.dagS3Path,
      endpointManagement: this.endpointManagement,
      environmentClass: this.environmentClass,
      executionRoleArn: this.executionRole?.roleArn,
      kmsKey: this.kmsKey?.keyArn,
      loggingConfiguration: this.loggingConfiguration,
      maxWebservers: this.maxWebservers,
      maxWorkers: this.maxWorkers,
      minWebservers: this.minWebservers,
      minWorkers: this.minWorkers,
      networkConfiguration: this.networkConfiguration ? {
        securityGroupIds: this.networkConfiguration.securityGroups?.map(sg => sg.securityGroupId),
        subnetIds: this.networkConfiguration.subnets?.map(subnet => subnet.subnetId),
      } : undefined,
      pluginsS3ObjectVersion: this.pluginsS3ObjectVersion,
      pluginsS3Path: this.pluginsS3Path,
      requirementsS3ObjectVersion: this.requirementsS3ObjectVersion,
      requirementsS3Path: this.requirementsS3Path,
      schedulers: this.schedulers,
      sourceBucketArn: this.sourceBucket?.bucketArn,
      startupScriptS3ObjectVersion: this.startupScriptS3ObjectVersion,
      startupScriptS3Path: this.startupScriptS3Path,
      webserverAccessMode: this.webserverAccessMode,
      weeklyMaintenanceWindowStart: this.weeklyMaintenanceWindowStart,
    };

    this.environment = new CfnEnvironment(this, 'Resource', cfnEnvironmentProps);
    this.node.defaultChild = this.environment;

    this.environmentArn = this.environment.attrArn;
    this.celeryExecutorQueue = this.environment.attrCeleryExecutorQueue;
    this.databaseVpcEndpointService = this.environment.attrDatabaseVpcEndpointService;
    this.loggingConfigurationDagProcessingLogsCloudWatchLogGroupArn = this.environment.attrLoggingConfigurationDagProcessingLogsCloudWatchLogGroupArn;
    this.loggingConfigurationSchedulerLogsCloudWatchLogGroupArn = this.environment.attrLoggingConfigurationSchedulerLogsCloudWatchLogGroupArn;
    this.loggingConfigurationTaskLogsCloudWatchLogGroupArn = this.environment.attrLoggingConfigurationTaskLogsCloudWatchLogGroupArn;
    this.loggingConfigurationWebserverLogsCloudWatchLogGroupArn = this.environment.attrLoggingConfigurationWebserverLogsCloudWatchLogGroupArn;
    this.loggingConfigurationWorkerLogsCloudWatchLogGroupArn = this.environment.attrLoggingConfigurationWorkerLogsCloudWatchLogGroupArn;
    this.webserverUrl = this.environment.attrWebserverUrl;
    this.webserverVpcEndpointService = this.environment.attrWebserverVpcEndpointService;
  }
}
