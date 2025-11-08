import { IResource, Resource } from 'aws-cdk-lib';
import { ISecurityGroup, ISubnet } from 'aws-cdk-lib/aws-ec2';
import { IRole } from 'aws-cdk-lib/aws-iam';
import { IKey } from 'aws-cdk-lib/aws-kms';
import { ILogGroup } from 'aws-cdk-lib/aws-logs';
import { IBucket } from 'aws-cdk-lib/aws-s3';

export enum LogLevel {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
  CRITICAL = 'CRITICAL',
}

/**
 * Defines the type of logs to send for the Apache Airflow log type
 * (e.g. DagProcessingLogs).
 */
export interface ModuleLoggingConfiguration {
  /**
   * The CloudWatch Logs log group for each type ofApache Airflow log type that you have enabled.
   */
  readonly cloudWatchLogGroup?: ILogGroup;

  /**
   * Indicates whether to enable the Apache Airflow log type (e.g. DagProcessingLogs) in CloudWatch Logs.
   */
  readonly enabled?: boolean;

  /**
   * Defines the Apache Airflow logs to send for the log type (e.g. DagProcessingLogs) to CloudWatch Logs.
   */
  readonly logLevel?: LogLevel;
}

/**
 * The type of Apache Airflow logs to send to CloudWatch Logs.
 */
export interface LoggingConfiguration {
  /**
   * Defines the processing logs sent to CloudWatch Logs and the logging level to send.
   */
  readonly dagProcessingLogs?: ModuleLoggingConfiguration;

  /**
   * Defines the scheduler logs sent to CloudWatch Logs and the logging level to send.
   */
  readonly schedulerLogs?: ModuleLoggingConfiguration;

  /**
   * Defines the task logs sent to CloudWatch Logs and the logging level to send.
   */
  readonly taskLogs?: ModuleLoggingConfiguration;

  /**
   * Defines the web server logs sent to CloudWatch Logs and the logging level to send.
   */
  readonly webServerLogs?: ModuleLoggingConfiguration;

  /**
   * Defines the worker logs sent to CloudWatch Logs and the logging level to send.
   */
  readonly workerLogs?: ModuleLoggingConfiguration;
}

/**
 * The VPC networking components used to secure and enable network traffic between the AWS resources for your environment.
 */
export interface NetworkConfiguration {
  /**
   * A list of one or more security groups. Accepts up to 5 security groups. A security group must be attached to the same VPC as the subnets.
   */
  readonly securityGroups?: ISecurityGroup[];

  /**
   * A list of subnets. Required to create an environment. Must be private subnets in two different availability zones.
   * A subnet must be attached to the same VPC as the security group.
   */
  readonly subnets?: ISubnet[];
}

export enum AirflowVersion {
  V2_7_2 = '2.7.2',
  V2_8_1 = '2.8.1',
  V2_9_2 = '2.9.2',
  V2_10_1 = '2.10.1',
  V2_10_3 = '2.10.3',
  V3_0_6 = '3.0.6',
}

export enum EndpointManagement {
  CUSTOMER = 'CUSTOMER',
  SERVICE = 'SERVICE',
}

export enum EnvironmentClass {
  MW1_MICRO = 'mw1.micro',
  MW1_SMALL = 'mw1.small',
  MW1_MEDIUM = 'mw1.medium',
  MW1_LARGE = 'mw1.large',
  MW1_1LARGE = 'mw1.1large',
  MW1_2LARGE = 'mw1.2large',
}

export enum WebserverAccessMode {
  PRIVATE_ONLY = 'PRIVATE_ONLY',
  PUBLIC_ONLY = 'PUBLIC_ONLY',
}

export enum WorkerReplacementStrategy {
  FORCED = 'FORCED',
  GRACEFUL = 'GRACEFUL',
}


export interface IEnvironment extends IResource {
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

export abstract class EnvironmentBase extends Resource implements IEnvironment {
  /**
   * A list of key-value pairs containing the Airflow configuration options for your environment. For example, core.default_timezone: utc.
   */
  public abstract readonly airflowConfigurationOptions: { [key: string]: string };

  /**
   * The version of Apache Airflow to use for the environment. If no value is specified, defaults to the latest version.
   *
   * If you specify a newer version number for an existing environment, the version update requires some service interruption before taking effect.
   */
  public abstract readonly airflowVersion?: AirflowVersion;

  /**
   * The relative path to the DAGs folder on your Amazon S3 bucket. For example, dags.
   */
  public abstract readonly dagS3Path?: string;

  /**
   * Defines whether the VPC endpoints configured for the environment are created, and managed, by the customer or by Amazon MWAA.
   * If set to SERVICE, Amazon MWAA will create and manage the required VPC endpoints in your VPC.
   * If set to CUSTOMER, you must create, and manage, the VPC endpoints in your VPC.
   */
  public abstract readonly endpointManagement?: EndpointManagement;

  /**
   * The environment class type.
   */
  public abstract readonly environmentClass?: EnvironmentClass;

  /**
   * The execution role in IAM that allows MWAA to access AWS resources in your environment.
   */
  public abstract readonly executionRole?: IRole;

  /**
   * The AWS Key Management Service (KMS) key to encrypt and decrypt the data in your environment.
   * You can use an AWS KMS key managed by MWAA, or a customer-managed KMS key (advanced).
   */
  public abstract readonly kmsKey?: IKey;

  /**
   * The Apache Airflow logs being sent to CloudWatch Logs.
   */
  public abstract readonly loggingConfiguration?: LoggingConfiguration;

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
  public abstract readonly maxWebservers?: number;

  /**
   * The maximum number of workers that you want to run in your environment.
   * MWAA scales the number of Apache Airflow workers up to the number you specify in the MaxWorkers field. For example, 20. When there are no more
   * tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or
   * the number you specify in MinWorkers.
   */
  public abstract readonly maxWorkers?: number;

  /**
   * The minimum number of web servers that you want to run in your environment.
   * Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for MaxWebservers when you interact with your Apache
   * Airflow environment using Apache Airflow REST API, or the Apache Airflow CLI. As the transaction-per-second rate, and the network load,
   * decrease, Amazon MWAA disposes of the additional web servers, and scales down to the number set in MinxWebserers.
   *
   * Valid values: For environments larger than mw1.micro, accepts values from 2 to 5. Defaults to 2 for all environment sizes except mw1.micro,
   * which defaults to 1.
   */
  public abstract readonly minWebservers?: number;

  /**
   * The minimum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you
   * specify in the MaxWorkers field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving
   * the worker count you specify in the MinWorkers field. For example, 2.
   */
  public abstract readonly minWorkers?: number;

  /**
   * The name of your Amazon MWAA environment.
   */
  public abstract readonly name: string;

  /**
   * The VPC networking components used to secure and enable network traffic between the AWS resources for your environment.
   */
  public abstract readonly networkConfiguration?: NetworkConfiguration;

  /**
   * The version of the plugins.zip file on your Amazon S3 bucket.
   */
  public abstract readonly pluginsS3ObjectVersion?: string;

  /**
   * The relative path to the plugins.zip file on your Amazon S3 bucket. For example, plugins.zip.
   */
  public abstract readonly pluginsS3Path?: string;

  /**
   * The version of the requirements.txt file on your Amazon S3 bucket.
   */
  public abstract readonly requirementsS3ObjectVersion?: string;

  /**
   * The relative path to the requirements.txt file on your Amazon S3 bucket. For example, requirements.txt.
   */
  public abstract readonly requirementsS3Path?: string;

  /**
   * The number of schedulers that you want to run in your environment.
   *
   * Valid values:
   * v2 - For environments larger than mw1.micro, accepts values from 2 to 5.
   *      Defaults to 2 for all environment sizes except mw1.micro, which defaults to 1.
   * v1 - Accepts 1.
   */
  public abstract readonly schedulers?: number;

  /**
   * The Amazon S3 bucket where your DAG code and supporting files are stored.
   */
  public abstract readonly sourceBucket?: IBucket;

  /**
   * The version of the startup shell script in your Amazon S3 bucket.
   * You must specify the version ID that Amazon S3 assigns to the file every time you update the script.
   * Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long.
   *
   * The following is an example:
   *      3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo
   */
  public abstract readonly startupScriptS3ObjectVersion?: string;

  /**
   * The relative path to the startup shell script in your Amazon S3 bucket.
   * For example, s3://mwaa-environment/startup.sh.
   * Amazon MWAA runs the script as your environment starts, and before running the Apache Airflow process.
   * You can use this script to install dependencies, modify Apache Airflow configuration options, and set environment variables.
   */
  public abstract readonly startupScriptS3Path?: string;

  /**
   * The Apache Airflow Web server access mode.
   */
  public abstract readonly webserverAccessMode?: WebserverAccessMode;

  /**
   * The day and time of the week to start weekly maintenance updates of your environment in the following format: DAY:HH:MM.
   * For example: TUE:03:30. You can specify a start time in 30 minute increments only.
   *
   * Supported input includes the following:
   *      MON|TUE|WED|THU|FRI|SAT|SUN:([01]\\d|2[0-3]):(00|30)
   */
  public abstract readonly weeklyMaintenanceWindowStart?: string;

  /**
   * The ARN for the Amazon MWAA environment.
   */
  public abstract readonly environmentArn: string;

  /**
   * The queue ARN for the environment's Celery Executor. Amazon MWAA uses a Celery Executor to distribute tasks across multiple workers.
   * When you create an environment in a shared VPC, you must provide access to the Celery Executor queue from your VPC.
   */
  public abstract readonly celeryExecutorQueue?: string;

  /**
   * The VPC endpoint for the environment's Amazon RDS database.
   */
  public abstract readonly databaseVpcEndpointService?: string;

  /**
   * The ARN for the CloudWatch Logs group where the Apache Airflow DAG processing logs are published.
   */
  public abstract readonly loggingConfigurationDagProcessingLogsCloudWatchLogGroupArn?: string;

  /**
   * The ARN for the CloudWatch Logs group where the Apache Airflow Scheduler logs are published.
   */
  public abstract readonly loggingConfigurationSchedulerLogsCloudWatchLogGroupArn?: string;

  /**
   * The ARN for the CloudWatch Logs group where the Apache Airflow task logs are published.
   */
  public abstract readonly loggingConfigurationTaskLogsCloudWatchLogGroupArn?: string;

  /**
   * The ARN for the CloudWatch Logs group where the Apache Airflow Web server logs are published.
   */
  public abstract readonly loggingConfigurationWebserverLogsCloudWatchLogGroupArn?: string;

  /**
   * The ARN for the CloudWatch Logs group where the Apache Airflow Worker logs are published.
   */
  public abstract readonly loggingConfigurationWorkerLogsCloudWatchLogGroupArn?: string;

  /**
   * The URL of your Apache Airflow UI.
   */
  public abstract readonly webserverUrl?: string;

  /**
   * The VPC endpoint for the environment's web server.
   */
  public abstract readonly webserverVpcEndpointService?: string;
}
