# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Environment <a name="Environment" id="@robhan-cdk-lib/aws_mwaa.Environment"></a>

#### Initializers <a name="Initializers" id="@robhan-cdk-lib/aws_mwaa.Environment.Initializer"></a>

```typescript
import { Environment } from '@robhan-cdk-lib/aws_mwaa'

new Environment(scope: Construct, id: string, props: EnvironmentProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.Initializer.parameter.props">props</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentProps">EnvironmentProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@robhan-cdk-lib/aws_mwaa.Environment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@robhan-cdk-lib/aws_mwaa.Environment.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@robhan-cdk-lib/aws_mwaa.Environment.Initializer.parameter.props"></a>

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentProps">EnvironmentProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@robhan-cdk-lib/aws_mwaa.Environment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@robhan-cdk-lib/aws_mwaa.Environment.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@robhan-cdk-lib/aws_mwaa.Environment.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.fromEnvironmentAttributes">fromEnvironmentAttributes</a></code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.isEnvironment">isEnvironment</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@robhan-cdk-lib/aws_mwaa.Environment.isConstruct"></a>

```typescript
import { Environment } from '@robhan-cdk-lib/aws_mwaa'

Environment.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@robhan-cdk-lib/aws_mwaa.Environment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@robhan-cdk-lib/aws_mwaa.Environment.isOwnedResource"></a>

```typescript
import { Environment } from '@robhan-cdk-lib/aws_mwaa'

Environment.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@robhan-cdk-lib/aws_mwaa.Environment.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@robhan-cdk-lib/aws_mwaa.Environment.isResource"></a>

```typescript
import { Environment } from '@robhan-cdk-lib/aws_mwaa'

Environment.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@robhan-cdk-lib/aws_mwaa.Environment.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromEnvironmentAttributes` <a name="fromEnvironmentAttributes" id="@robhan-cdk-lib/aws_mwaa.Environment.fromEnvironmentAttributes"></a>

```typescript
import { Environment } from '@robhan-cdk-lib/aws_mwaa'

Environment.fromEnvironmentAttributes(scope: Construct, id: string, attrs: EnvironmentAttributes)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@robhan-cdk-lib/aws_mwaa.Environment.fromEnvironmentAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@robhan-cdk-lib/aws_mwaa.Environment.fromEnvironmentAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@robhan-cdk-lib/aws_mwaa.Environment.fromEnvironmentAttributes.parameter.attrs"></a>

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes">EnvironmentAttributes</a>

---

##### `isEnvironment` <a name="isEnvironment" id="@robhan-cdk-lib/aws_mwaa.Environment.isEnvironment"></a>

```typescript
import { Environment } from '@robhan-cdk-lib/aws_mwaa'

Environment.isEnvironment(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@robhan-cdk-lib/aws_mwaa.Environment.isEnvironment.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.airflowConfigurationOptions">airflowConfigurationOptions</a></code> | <code>{[ key: string ]: string}</code> | A list of key-value pairs containing the Airflow configuration options for your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.environmentArn">environmentArn</a></code> | <code>string</code> | The ARN for the Amazon MWAA environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.name">name</a></code> | <code>string</code> | The name of your Amazon MWAA environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.airflowVersion">airflowVersion</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.AirflowVersion">AirflowVersion</a></code> | The version of Apache Airflow to use for the environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.celeryExecutorQueue">celeryExecutorQueue</a></code> | <code>string</code> | The queue ARN for the environment's Celery Executor. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.dagS3Path">dagS3Path</a></code> | <code>string</code> | The relative path to the DAGs folder on your Amazon S3 bucket. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.databaseVpcEndpointService">databaseVpcEndpointService</a></code> | <code>string</code> | The VPC endpoint for the environment's Amazon RDS database. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.endpointManagement">endpointManagement</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.EndpointManagement">EndpointManagement</a></code> | Defines whether the VPC endpoints configured for the environment are created, and managed, by the customer or by Amazon MWAA. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.environmentClass">environmentClass</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentClass">EnvironmentClass</a></code> | The environment class type. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.executionRole">executionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The execution role in IAM that allows MWAA to access AWS resources in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The AWS Key Management Service (KMS) key to encrypt and decrypt the data in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.LoggingConfiguration">LoggingConfiguration</a></code> | The Apache Airflow logs being sent to CloudWatch Logs. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.loggingConfigurationDagProcessingLogsCloudWatchLogGroupArn">loggingConfigurationDagProcessingLogsCloudWatchLogGroupArn</a></code> | <code>string</code> | The ARN for the CloudWatch Logs group where the Apache Airflow DAG processing logs are published. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.loggingConfigurationSchedulerLogsCloudWatchLogGroupArn">loggingConfigurationSchedulerLogsCloudWatchLogGroupArn</a></code> | <code>string</code> | The ARN for the CloudWatch Logs group where the Apache Airflow Scheduler logs are published. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.loggingConfigurationTaskLogsCloudWatchLogGroupArn">loggingConfigurationTaskLogsCloudWatchLogGroupArn</a></code> | <code>string</code> | The ARN for the CloudWatch Logs group where the Apache Airflow task logs are published. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.loggingConfigurationWebserverLogsCloudWatchLogGroupArn">loggingConfigurationWebserverLogsCloudWatchLogGroupArn</a></code> | <code>string</code> | The ARN for the CloudWatch Logs group where the Apache Airflow Web server logs are published. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.loggingConfigurationWorkerLogsCloudWatchLogGroupArn">loggingConfigurationWorkerLogsCloudWatchLogGroupArn</a></code> | <code>string</code> | The ARN for the CloudWatch Logs group where the Apache Airflow Worker logs are published. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.maxWebservers">maxWebservers</a></code> | <code>number</code> | The maximum number of web servers that you want to run in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.maxWorkers">maxWorkers</a></code> | <code>number</code> | The maximum number of workers that you want to run in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.minWebservers">minWebservers</a></code> | <code>number</code> | The minimum number of web servers that you want to run in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.minWorkers">minWorkers</a></code> | <code>number</code> | The minimum number of workers that you want to run in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.NetworkConfiguration">NetworkConfiguration</a></code> | The VPC networking components used to secure and enable network traffic between the AWS resources for your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.pluginsS3ObjectVersion">pluginsS3ObjectVersion</a></code> | <code>string</code> | The version of the plugins.zip file on your Amazon S3 bucket. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.pluginsS3Path">pluginsS3Path</a></code> | <code>string</code> | The relative path to the plugins.zip file on your Amazon S3 bucket. For example, plugins.zip. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.requirementsS3ObjectVersion">requirementsS3ObjectVersion</a></code> | <code>string</code> | The version of the requirements.txt file on your Amazon S3 bucket. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.requirementsS3Path">requirementsS3Path</a></code> | <code>string</code> | The relative path to the requirements.txt file on your Amazon S3 bucket. For example, requirements.txt. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.schedulers">schedulers</a></code> | <code>number</code> | The number of schedulers that you want to run in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.sourceBucket">sourceBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The Amazon S3 bucket where your DAG code and supporting files are stored. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.startupScriptS3ObjectVersion">startupScriptS3ObjectVersion</a></code> | <code>string</code> | The version of the startup shell script in your Amazon S3 bucket. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.startupScriptS3Path">startupScriptS3Path</a></code> | <code>string</code> | The relative path to the startup shell script in your Amazon S3 bucket. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.webserverAccessMode">webserverAccessMode</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.WebserverAccessMode">WebserverAccessMode</a></code> | The Apache Airflow Web server access mode. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.webserverUrl">webserverUrl</a></code> | <code>string</code> | The URL of your Apache Airflow UI. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.webserverVpcEndpointService">webserverVpcEndpointService</a></code> | <code>string</code> | The VPC endpoint for the environment's web server. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.Environment.property.weeklyMaintenanceWindowStart">weeklyMaintenanceWindowStart</a></code> | <code>string</code> | The day and time of the week to start weekly maintenance updates of your environment in the following format: DAY:HH:MM. |

---

##### `node`<sup>Required</sup> <a name="node" id="@robhan-cdk-lib/aws_mwaa.Environment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@robhan-cdk-lib/aws_mwaa.Environment.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@robhan-cdk-lib/aws_mwaa.Environment.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `airflowConfigurationOptions`<sup>Required</sup> <a name="airflowConfigurationOptions" id="@robhan-cdk-lib/aws_mwaa.Environment.property.airflowConfigurationOptions"></a>

```typescript
public readonly airflowConfigurationOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A list of key-value pairs containing the Airflow configuration options for your environment.

For example, core.default_timezone: utc.

---

##### `environmentArn`<sup>Required</sup> <a name="environmentArn" id="@robhan-cdk-lib/aws_mwaa.Environment.property.environmentArn"></a>

```typescript
public readonly environmentArn: string;
```

- *Type:* string

The ARN for the Amazon MWAA environment.

---

##### `name`<sup>Required</sup> <a name="name" id="@robhan-cdk-lib/aws_mwaa.Environment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of your Amazon MWAA environment.

---

##### `airflowVersion`<sup>Optional</sup> <a name="airflowVersion" id="@robhan-cdk-lib/aws_mwaa.Environment.property.airflowVersion"></a>

```typescript
public readonly airflowVersion: AirflowVersion;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.AirflowVersion">AirflowVersion</a>

The version of Apache Airflow to use for the environment.

If no value is specified, defaults to the latest version.

If you specify a newer version number for an existing environment, the version update requires some service interruption before taking effect.

---

##### `celeryExecutorQueue`<sup>Optional</sup> <a name="celeryExecutorQueue" id="@robhan-cdk-lib/aws_mwaa.Environment.property.celeryExecutorQueue"></a>

```typescript
public readonly celeryExecutorQueue: string;
```

- *Type:* string

The queue ARN for the environment's Celery Executor.

Amazon MWAA uses a Celery Executor to distribute tasks across multiple workers.
When you create an environment in a shared VPC, you must provide access to the Celery Executor queue from your VPC.

---

##### `dagS3Path`<sup>Optional</sup> <a name="dagS3Path" id="@robhan-cdk-lib/aws_mwaa.Environment.property.dagS3Path"></a>

```typescript
public readonly dagS3Path: string;
```

- *Type:* string

The relative path to the DAGs folder on your Amazon S3 bucket.

For example, dags.

---

##### `databaseVpcEndpointService`<sup>Optional</sup> <a name="databaseVpcEndpointService" id="@robhan-cdk-lib/aws_mwaa.Environment.property.databaseVpcEndpointService"></a>

```typescript
public readonly databaseVpcEndpointService: string;
```

- *Type:* string

The VPC endpoint for the environment's Amazon RDS database.

---

##### `endpointManagement`<sup>Optional</sup> <a name="endpointManagement" id="@robhan-cdk-lib/aws_mwaa.Environment.property.endpointManagement"></a>

```typescript
public readonly endpointManagement: EndpointManagement;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.EndpointManagement">EndpointManagement</a>

Defines whether the VPC endpoints configured for the environment are created, and managed, by the customer or by Amazon MWAA.

If set to SERVICE, Amazon MWAA will create and manage the required VPC endpoints in your VPC.
If set to CUSTOMER, you must create, and manage, the VPC endpoints in your VPC.

---

##### `environmentClass`<sup>Optional</sup> <a name="environmentClass" id="@robhan-cdk-lib/aws_mwaa.Environment.property.environmentClass"></a>

```typescript
public readonly environmentClass: EnvironmentClass;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentClass">EnvironmentClass</a>

The environment class type.

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="@robhan-cdk-lib/aws_mwaa.Environment.property.executionRole"></a>

```typescript
public readonly executionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The execution role in IAM that allows MWAA to access AWS resources in your environment.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@robhan-cdk-lib/aws_mwaa.Environment.property.kmsKey"></a>

```typescript
public readonly kmsKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The AWS Key Management Service (KMS) key to encrypt and decrypt the data in your environment.

You can use an AWS KMS key managed by MWAA, or a customer-managed KMS key (advanced).

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="loggingConfiguration" id="@robhan-cdk-lib/aws_mwaa.Environment.property.loggingConfiguration"></a>

```typescript
public readonly loggingConfiguration: LoggingConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.LoggingConfiguration">LoggingConfiguration</a>

The Apache Airflow logs being sent to CloudWatch Logs.

---

##### `loggingConfigurationDagProcessingLogsCloudWatchLogGroupArn`<sup>Optional</sup> <a name="loggingConfigurationDagProcessingLogsCloudWatchLogGroupArn" id="@robhan-cdk-lib/aws_mwaa.Environment.property.loggingConfigurationDagProcessingLogsCloudWatchLogGroupArn"></a>

```typescript
public readonly loggingConfigurationDagProcessingLogsCloudWatchLogGroupArn: string;
```

- *Type:* string

The ARN for the CloudWatch Logs group where the Apache Airflow DAG processing logs are published.

---

##### `loggingConfigurationSchedulerLogsCloudWatchLogGroupArn`<sup>Optional</sup> <a name="loggingConfigurationSchedulerLogsCloudWatchLogGroupArn" id="@robhan-cdk-lib/aws_mwaa.Environment.property.loggingConfigurationSchedulerLogsCloudWatchLogGroupArn"></a>

```typescript
public readonly loggingConfigurationSchedulerLogsCloudWatchLogGroupArn: string;
```

- *Type:* string

The ARN for the CloudWatch Logs group where the Apache Airflow Scheduler logs are published.

---

##### `loggingConfigurationTaskLogsCloudWatchLogGroupArn`<sup>Optional</sup> <a name="loggingConfigurationTaskLogsCloudWatchLogGroupArn" id="@robhan-cdk-lib/aws_mwaa.Environment.property.loggingConfigurationTaskLogsCloudWatchLogGroupArn"></a>

```typescript
public readonly loggingConfigurationTaskLogsCloudWatchLogGroupArn: string;
```

- *Type:* string

The ARN for the CloudWatch Logs group where the Apache Airflow task logs are published.

---

##### `loggingConfigurationWebserverLogsCloudWatchLogGroupArn`<sup>Optional</sup> <a name="loggingConfigurationWebserverLogsCloudWatchLogGroupArn" id="@robhan-cdk-lib/aws_mwaa.Environment.property.loggingConfigurationWebserverLogsCloudWatchLogGroupArn"></a>

```typescript
public readonly loggingConfigurationWebserverLogsCloudWatchLogGroupArn: string;
```

- *Type:* string

The ARN for the CloudWatch Logs group where the Apache Airflow Web server logs are published.

---

##### `loggingConfigurationWorkerLogsCloudWatchLogGroupArn`<sup>Optional</sup> <a name="loggingConfigurationWorkerLogsCloudWatchLogGroupArn" id="@robhan-cdk-lib/aws_mwaa.Environment.property.loggingConfigurationWorkerLogsCloudWatchLogGroupArn"></a>

```typescript
public readonly loggingConfigurationWorkerLogsCloudWatchLogGroupArn: string;
```

- *Type:* string

The ARN for the CloudWatch Logs group where the Apache Airflow Worker logs are published.

---

##### `maxWebservers`<sup>Optional</sup> <a name="maxWebservers" id="@robhan-cdk-lib/aws_mwaa.Environment.property.maxWebservers"></a>

```typescript
public readonly maxWebservers: number;
```

- *Type:* number

The maximum number of web servers that you want to run in your environment.

Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for MaxWebservers when you interact with your Apache
Airflow environment using Apache Airflow REST API, or the Apache Airflow CLI. For example, in scenarios where your workload requires network
calls to the Apache Airflow REST API with a high transaction-per-second (TPS) rate, Amazon MWAA will increase the number of web servers up to
the number set in MaxWebserers. As TPS rates decrease Amazon MWAA disposes of the additional web servers, and scales down to the number set in
MinxWebserers.

Valid values: For environments larger than mw1.micro, accepts values from 2 to 5. Defaults to 2 for all environment sizes except mw1.micro,
which defaults to 1.

---

##### `maxWorkers`<sup>Optional</sup> <a name="maxWorkers" id="@robhan-cdk-lib/aws_mwaa.Environment.property.maxWorkers"></a>

```typescript
public readonly maxWorkers: number;
```

- *Type:* number

The maximum number of workers that you want to run in your environment.

MWAA scales the number of Apache Airflow workers up to the number you specify in the MaxWorkers field. For example, 20. When there are no more
tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or
the number you specify in MinWorkers.

---

##### `minWebservers`<sup>Optional</sup> <a name="minWebservers" id="@robhan-cdk-lib/aws_mwaa.Environment.property.minWebservers"></a>

```typescript
public readonly minWebservers: number;
```

- *Type:* number

The minimum number of web servers that you want to run in your environment.

Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for MaxWebservers when you interact with your Apache
Airflow environment using Apache Airflow REST API, or the Apache Airflow CLI. As the transaction-per-second rate, and the network load,
decrease, Amazon MWAA disposes of the additional web servers, and scales down to the number set in MinxWebserers.

Valid values: For environments larger than mw1.micro, accepts values from 2 to 5. Defaults to 2 for all environment sizes except mw1.micro,
which defaults to 1.

---

##### `minWorkers`<sup>Optional</sup> <a name="minWorkers" id="@robhan-cdk-lib/aws_mwaa.Environment.property.minWorkers"></a>

```typescript
public readonly minWorkers: number;
```

- *Type:* number

The minimum number of workers that you want to run in your environment.

MWAA scales the number of Apache Airflow workers up to the number you
specify in the MaxWorkers field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving
the worker count you specify in the MinWorkers field. For example, 2.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@robhan-cdk-lib/aws_mwaa.Environment.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: NetworkConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.NetworkConfiguration">NetworkConfiguration</a>

The VPC networking components used to secure and enable network traffic between the AWS resources for your environment.

---

##### `pluginsS3ObjectVersion`<sup>Optional</sup> <a name="pluginsS3ObjectVersion" id="@robhan-cdk-lib/aws_mwaa.Environment.property.pluginsS3ObjectVersion"></a>

```typescript
public readonly pluginsS3ObjectVersion: string;
```

- *Type:* string

The version of the plugins.zip file on your Amazon S3 bucket.

---

##### `pluginsS3Path`<sup>Optional</sup> <a name="pluginsS3Path" id="@robhan-cdk-lib/aws_mwaa.Environment.property.pluginsS3Path"></a>

```typescript
public readonly pluginsS3Path: string;
```

- *Type:* string

The relative path to the plugins.zip file on your Amazon S3 bucket. For example, plugins.zip.

---

##### `requirementsS3ObjectVersion`<sup>Optional</sup> <a name="requirementsS3ObjectVersion" id="@robhan-cdk-lib/aws_mwaa.Environment.property.requirementsS3ObjectVersion"></a>

```typescript
public readonly requirementsS3ObjectVersion: string;
```

- *Type:* string

The version of the requirements.txt file on your Amazon S3 bucket.

---

##### `requirementsS3Path`<sup>Optional</sup> <a name="requirementsS3Path" id="@robhan-cdk-lib/aws_mwaa.Environment.property.requirementsS3Path"></a>

```typescript
public readonly requirementsS3Path: string;
```

- *Type:* string

The relative path to the requirements.txt file on your Amazon S3 bucket. For example, requirements.txt.

---

##### `schedulers`<sup>Optional</sup> <a name="schedulers" id="@robhan-cdk-lib/aws_mwaa.Environment.property.schedulers"></a>

```typescript
public readonly schedulers: number;
```

- *Type:* number

The number of schedulers that you want to run in your environment.

Valid values:
v2 - For environments larger than mw1.micro, accepts values from 2 to 5.
     Defaults to 2 for all environment sizes except mw1.micro, which defaults to 1.
v1 - Accepts 1.

---

##### `sourceBucket`<sup>Optional</sup> <a name="sourceBucket" id="@robhan-cdk-lib/aws_mwaa.Environment.property.sourceBucket"></a>

```typescript
public readonly sourceBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

The Amazon S3 bucket where your DAG code and supporting files are stored.

---

##### `startupScriptS3ObjectVersion`<sup>Optional</sup> <a name="startupScriptS3ObjectVersion" id="@robhan-cdk-lib/aws_mwaa.Environment.property.startupScriptS3ObjectVersion"></a>

```typescript
public readonly startupScriptS3ObjectVersion: string;
```

- *Type:* string

The version of the startup shell script in your Amazon S3 bucket.

You must specify the version ID that Amazon S3 assigns to the file every time you update the script.
Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long.

The following is an example:
     3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo

---

##### `startupScriptS3Path`<sup>Optional</sup> <a name="startupScriptS3Path" id="@robhan-cdk-lib/aws_mwaa.Environment.property.startupScriptS3Path"></a>

```typescript
public readonly startupScriptS3Path: string;
```

- *Type:* string

The relative path to the startup shell script in your Amazon S3 bucket.

For example, s3://mwaa-environment/startup.sh.
Amazon MWAA runs the script as your environment starts, and before running the Apache Airflow process.
You can use this script to install dependencies, modify Apache Airflow configuration options, and set environment variables.

---

##### `webserverAccessMode`<sup>Optional</sup> <a name="webserverAccessMode" id="@robhan-cdk-lib/aws_mwaa.Environment.property.webserverAccessMode"></a>

```typescript
public readonly webserverAccessMode: WebserverAccessMode;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.WebserverAccessMode">WebserverAccessMode</a>

The Apache Airflow Web server access mode.

---

##### `webserverUrl`<sup>Optional</sup> <a name="webserverUrl" id="@robhan-cdk-lib/aws_mwaa.Environment.property.webserverUrl"></a>

```typescript
public readonly webserverUrl: string;
```

- *Type:* string

The URL of your Apache Airflow UI.

---

##### `webserverVpcEndpointService`<sup>Optional</sup> <a name="webserverVpcEndpointService" id="@robhan-cdk-lib/aws_mwaa.Environment.property.webserverVpcEndpointService"></a>

```typescript
public readonly webserverVpcEndpointService: string;
```

- *Type:* string

The VPC endpoint for the environment's web server.

---

##### `weeklyMaintenanceWindowStart`<sup>Optional</sup> <a name="weeklyMaintenanceWindowStart" id="@robhan-cdk-lib/aws_mwaa.Environment.property.weeklyMaintenanceWindowStart"></a>

```typescript
public readonly weeklyMaintenanceWindowStart: string;
```

- *Type:* string

The day and time of the week to start weekly maintenance updates of your environment in the following format: DAY:HH:MM.

For example: TUE:03:30. You can specify a start time in 30 minute increments only.

Supported input includes the following:
     MON|TUE|WED|THU|FRI|SAT|SUN:([01]\\d|2[0-3]):(00|30)

---


### EnvironmentBase <a name="EnvironmentBase" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase"></a>

- *Implements:* <a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment">IEnvironment</a>

#### Initializers <a name="Initializers" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.Initializer"></a>

```typescript
import { EnvironmentBase } from '@robhan-cdk-lib/aws_mwaa'

new EnvironmentBase(scope: Construct, id: string, props?: ResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.ResourceProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.ResourceProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.isConstruct"></a>

```typescript
import { EnvironmentBase } from '@robhan-cdk-lib/aws_mwaa'

EnvironmentBase.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.isOwnedResource"></a>

```typescript
import { EnvironmentBase } from '@robhan-cdk-lib/aws_mwaa'

EnvironmentBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.isResource"></a>

```typescript
import { EnvironmentBase } from '@robhan-cdk-lib/aws_mwaa'

EnvironmentBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.airflowConfigurationOptions">airflowConfigurationOptions</a></code> | <code>{[ key: string ]: string}</code> | A list of key-value pairs containing the Airflow configuration options for your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.environmentArn">environmentArn</a></code> | <code>string</code> | The ARN for the Amazon MWAA environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.name">name</a></code> | <code>string</code> | The name of your Amazon MWAA environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.airflowVersion">airflowVersion</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.AirflowVersion">AirflowVersion</a></code> | The version of Apache Airflow to use for the environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.celeryExecutorQueue">celeryExecutorQueue</a></code> | <code>string</code> | The queue ARN for the environment's Celery Executor. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.dagS3Path">dagS3Path</a></code> | <code>string</code> | The relative path to the DAGs folder on your Amazon S3 bucket. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.databaseVpcEndpointService">databaseVpcEndpointService</a></code> | <code>string</code> | The VPC endpoint for the environment's Amazon RDS database. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.endpointManagement">endpointManagement</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.EndpointManagement">EndpointManagement</a></code> | Defines whether the VPC endpoints configured for the environment are created, and managed, by the customer or by Amazon MWAA. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.environmentClass">environmentClass</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentClass">EnvironmentClass</a></code> | The environment class type. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.executionRole">executionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The execution role in IAM that allows MWAA to access AWS resources in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The AWS Key Management Service (KMS) key to encrypt and decrypt the data in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.LoggingConfiguration">LoggingConfiguration</a></code> | The Apache Airflow logs being sent to CloudWatch Logs. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.loggingConfigurationDagProcessingLogsCloudWatchLogGroupArn">loggingConfigurationDagProcessingLogsCloudWatchLogGroupArn</a></code> | <code>string</code> | The ARN for the CloudWatch Logs group where the Apache Airflow DAG processing logs are published. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.loggingConfigurationSchedulerLogsCloudWatchLogGroupArn">loggingConfigurationSchedulerLogsCloudWatchLogGroupArn</a></code> | <code>string</code> | The ARN for the CloudWatch Logs group where the Apache Airflow Scheduler logs are published. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.loggingConfigurationTaskLogsCloudWatchLogGroupArn">loggingConfigurationTaskLogsCloudWatchLogGroupArn</a></code> | <code>string</code> | The ARN for the CloudWatch Logs group where the Apache Airflow task logs are published. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.loggingConfigurationWebserverLogsCloudWatchLogGroupArn">loggingConfigurationWebserverLogsCloudWatchLogGroupArn</a></code> | <code>string</code> | The ARN for the CloudWatch Logs group where the Apache Airflow Web server logs are published. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.loggingConfigurationWorkerLogsCloudWatchLogGroupArn">loggingConfigurationWorkerLogsCloudWatchLogGroupArn</a></code> | <code>string</code> | The ARN for the CloudWatch Logs group where the Apache Airflow Worker logs are published. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.maxWebservers">maxWebservers</a></code> | <code>number</code> | The maximum number of web servers that you want to run in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.maxWorkers">maxWorkers</a></code> | <code>number</code> | The maximum number of workers that you want to run in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.minWebservers">minWebservers</a></code> | <code>number</code> | The minimum number of web servers that you want to run in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.minWorkers">minWorkers</a></code> | <code>number</code> | The minimum number of workers that you want to run in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.NetworkConfiguration">NetworkConfiguration</a></code> | The VPC networking components used to secure and enable network traffic between the AWS resources for your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.pluginsS3ObjectVersion">pluginsS3ObjectVersion</a></code> | <code>string</code> | The version of the plugins.zip file on your Amazon S3 bucket. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.pluginsS3Path">pluginsS3Path</a></code> | <code>string</code> | The relative path to the plugins.zip file on your Amazon S3 bucket. For example, plugins.zip. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.requirementsS3ObjectVersion">requirementsS3ObjectVersion</a></code> | <code>string</code> | The version of the requirements.txt file on your Amazon S3 bucket. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.requirementsS3Path">requirementsS3Path</a></code> | <code>string</code> | The relative path to the requirements.txt file on your Amazon S3 bucket. For example, requirements.txt. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.schedulers">schedulers</a></code> | <code>number</code> | The number of schedulers that you want to run in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.sourceBucket">sourceBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The Amazon S3 bucket where your DAG code and supporting files are stored. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.startupScriptS3ObjectVersion">startupScriptS3ObjectVersion</a></code> | <code>string</code> | The version of the startup shell script in your Amazon S3 bucket. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.startupScriptS3Path">startupScriptS3Path</a></code> | <code>string</code> | The relative path to the startup shell script in your Amazon S3 bucket. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.webserverAccessMode">webserverAccessMode</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.WebserverAccessMode">WebserverAccessMode</a></code> | The Apache Airflow Web server access mode. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.webserverUrl">webserverUrl</a></code> | <code>string</code> | The URL of your Apache Airflow UI. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.webserverVpcEndpointService">webserverVpcEndpointService</a></code> | <code>string</code> | The VPC endpoint for the environment's web server. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.weeklyMaintenanceWindowStart">weeklyMaintenanceWindowStart</a></code> | <code>string</code> | The day and time of the week to start weekly maintenance updates of your environment in the following format: DAY:HH:MM. |

---

##### `node`<sup>Required</sup> <a name="node" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `airflowConfigurationOptions`<sup>Required</sup> <a name="airflowConfigurationOptions" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.airflowConfigurationOptions"></a>

```typescript
public readonly airflowConfigurationOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A list of key-value pairs containing the Airflow configuration options for your environment.

For example, core.default_timezone: utc.

---

##### `environmentArn`<sup>Required</sup> <a name="environmentArn" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.environmentArn"></a>

```typescript
public readonly environmentArn: string;
```

- *Type:* string

The ARN for the Amazon MWAA environment.

---

##### `name`<sup>Required</sup> <a name="name" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of your Amazon MWAA environment.

---

##### `airflowVersion`<sup>Optional</sup> <a name="airflowVersion" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.airflowVersion"></a>

```typescript
public readonly airflowVersion: AirflowVersion;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.AirflowVersion">AirflowVersion</a>

The version of Apache Airflow to use for the environment.

If no value is specified, defaults to the latest version.

If you specify a newer version number for an existing environment, the version update requires some service interruption before taking effect.

---

##### `celeryExecutorQueue`<sup>Optional</sup> <a name="celeryExecutorQueue" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.celeryExecutorQueue"></a>

```typescript
public readonly celeryExecutorQueue: string;
```

- *Type:* string

The queue ARN for the environment's Celery Executor.

Amazon MWAA uses a Celery Executor to distribute tasks across multiple workers.
When you create an environment in a shared VPC, you must provide access to the Celery Executor queue from your VPC.

---

##### `dagS3Path`<sup>Optional</sup> <a name="dagS3Path" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.dagS3Path"></a>

```typescript
public readonly dagS3Path: string;
```

- *Type:* string

The relative path to the DAGs folder on your Amazon S3 bucket.

For example, dags.

---

##### `databaseVpcEndpointService`<sup>Optional</sup> <a name="databaseVpcEndpointService" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.databaseVpcEndpointService"></a>

```typescript
public readonly databaseVpcEndpointService: string;
```

- *Type:* string

The VPC endpoint for the environment's Amazon RDS database.

---

##### `endpointManagement`<sup>Optional</sup> <a name="endpointManagement" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.endpointManagement"></a>

```typescript
public readonly endpointManagement: EndpointManagement;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.EndpointManagement">EndpointManagement</a>

Defines whether the VPC endpoints configured for the environment are created, and managed, by the customer or by Amazon MWAA.

If set to SERVICE, Amazon MWAA will create and manage the required VPC endpoints in your VPC.
If set to CUSTOMER, you must create, and manage, the VPC endpoints in your VPC.

---

##### `environmentClass`<sup>Optional</sup> <a name="environmentClass" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.environmentClass"></a>

```typescript
public readonly environmentClass: EnvironmentClass;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentClass">EnvironmentClass</a>

The environment class type.

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.executionRole"></a>

```typescript
public readonly executionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The execution role in IAM that allows MWAA to access AWS resources in your environment.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.kmsKey"></a>

```typescript
public readonly kmsKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The AWS Key Management Service (KMS) key to encrypt and decrypt the data in your environment.

You can use an AWS KMS key managed by MWAA, or a customer-managed KMS key (advanced).

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="loggingConfiguration" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.loggingConfiguration"></a>

```typescript
public readonly loggingConfiguration: LoggingConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.LoggingConfiguration">LoggingConfiguration</a>

The Apache Airflow logs being sent to CloudWatch Logs.

---

##### `loggingConfigurationDagProcessingLogsCloudWatchLogGroupArn`<sup>Optional</sup> <a name="loggingConfigurationDagProcessingLogsCloudWatchLogGroupArn" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.loggingConfigurationDagProcessingLogsCloudWatchLogGroupArn"></a>

```typescript
public readonly loggingConfigurationDagProcessingLogsCloudWatchLogGroupArn: string;
```

- *Type:* string

The ARN for the CloudWatch Logs group where the Apache Airflow DAG processing logs are published.

---

##### `loggingConfigurationSchedulerLogsCloudWatchLogGroupArn`<sup>Optional</sup> <a name="loggingConfigurationSchedulerLogsCloudWatchLogGroupArn" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.loggingConfigurationSchedulerLogsCloudWatchLogGroupArn"></a>

```typescript
public readonly loggingConfigurationSchedulerLogsCloudWatchLogGroupArn: string;
```

- *Type:* string

The ARN for the CloudWatch Logs group where the Apache Airflow Scheduler logs are published.

---

##### `loggingConfigurationTaskLogsCloudWatchLogGroupArn`<sup>Optional</sup> <a name="loggingConfigurationTaskLogsCloudWatchLogGroupArn" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.loggingConfigurationTaskLogsCloudWatchLogGroupArn"></a>

```typescript
public readonly loggingConfigurationTaskLogsCloudWatchLogGroupArn: string;
```

- *Type:* string

The ARN for the CloudWatch Logs group where the Apache Airflow task logs are published.

---

##### `loggingConfigurationWebserverLogsCloudWatchLogGroupArn`<sup>Optional</sup> <a name="loggingConfigurationWebserverLogsCloudWatchLogGroupArn" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.loggingConfigurationWebserverLogsCloudWatchLogGroupArn"></a>

```typescript
public readonly loggingConfigurationWebserverLogsCloudWatchLogGroupArn: string;
```

- *Type:* string

The ARN for the CloudWatch Logs group where the Apache Airflow Web server logs are published.

---

##### `loggingConfigurationWorkerLogsCloudWatchLogGroupArn`<sup>Optional</sup> <a name="loggingConfigurationWorkerLogsCloudWatchLogGroupArn" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.loggingConfigurationWorkerLogsCloudWatchLogGroupArn"></a>

```typescript
public readonly loggingConfigurationWorkerLogsCloudWatchLogGroupArn: string;
```

- *Type:* string

The ARN for the CloudWatch Logs group where the Apache Airflow Worker logs are published.

---

##### `maxWebservers`<sup>Optional</sup> <a name="maxWebservers" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.maxWebservers"></a>

```typescript
public readonly maxWebservers: number;
```

- *Type:* number

The maximum number of web servers that you want to run in your environment.

Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for MaxWebservers when you interact with your Apache
Airflow environment using Apache Airflow REST API, or the Apache Airflow CLI. For example, in scenarios where your workload requires network
calls to the Apache Airflow REST API with a high transaction-per-second (TPS) rate, Amazon MWAA will increase the number of web servers up to
the number set in MaxWebserers. As TPS rates decrease Amazon MWAA disposes of the additional web servers, and scales down to the number set in
MinxWebserers.

Valid values: For environments larger than mw1.micro, accepts values from 2 to 5. Defaults to 2 for all environment sizes except mw1.micro,
which defaults to 1.

---

##### `maxWorkers`<sup>Optional</sup> <a name="maxWorkers" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.maxWorkers"></a>

```typescript
public readonly maxWorkers: number;
```

- *Type:* number

The maximum number of workers that you want to run in your environment.

MWAA scales the number of Apache Airflow workers up to the number you specify in the MaxWorkers field. For example, 20. When there are no more
tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or
the number you specify in MinWorkers.

---

##### `minWebservers`<sup>Optional</sup> <a name="minWebservers" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.minWebservers"></a>

```typescript
public readonly minWebservers: number;
```

- *Type:* number

The minimum number of web servers that you want to run in your environment.

Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for MaxWebservers when you interact with your Apache
Airflow environment using Apache Airflow REST API, or the Apache Airflow CLI. As the transaction-per-second rate, and the network load,
decrease, Amazon MWAA disposes of the additional web servers, and scales down to the number set in MinxWebserers.

Valid values: For environments larger than mw1.micro, accepts values from 2 to 5. Defaults to 2 for all environment sizes except mw1.micro,
which defaults to 1.

---

##### `minWorkers`<sup>Optional</sup> <a name="minWorkers" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.minWorkers"></a>

```typescript
public readonly minWorkers: number;
```

- *Type:* number

The minimum number of workers that you want to run in your environment.

MWAA scales the number of Apache Airflow workers up to the number you
specify in the MaxWorkers field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving
the worker count you specify in the MinWorkers field. For example, 2.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: NetworkConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.NetworkConfiguration">NetworkConfiguration</a>

The VPC networking components used to secure and enable network traffic between the AWS resources for your environment.

---

##### `pluginsS3ObjectVersion`<sup>Optional</sup> <a name="pluginsS3ObjectVersion" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.pluginsS3ObjectVersion"></a>

```typescript
public readonly pluginsS3ObjectVersion: string;
```

- *Type:* string

The version of the plugins.zip file on your Amazon S3 bucket.

---

##### `pluginsS3Path`<sup>Optional</sup> <a name="pluginsS3Path" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.pluginsS3Path"></a>

```typescript
public readonly pluginsS3Path: string;
```

- *Type:* string

The relative path to the plugins.zip file on your Amazon S3 bucket. For example, plugins.zip.

---

##### `requirementsS3ObjectVersion`<sup>Optional</sup> <a name="requirementsS3ObjectVersion" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.requirementsS3ObjectVersion"></a>

```typescript
public readonly requirementsS3ObjectVersion: string;
```

- *Type:* string

The version of the requirements.txt file on your Amazon S3 bucket.

---

##### `requirementsS3Path`<sup>Optional</sup> <a name="requirementsS3Path" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.requirementsS3Path"></a>

```typescript
public readonly requirementsS3Path: string;
```

- *Type:* string

The relative path to the requirements.txt file on your Amazon S3 bucket. For example, requirements.txt.

---

##### `schedulers`<sup>Optional</sup> <a name="schedulers" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.schedulers"></a>

```typescript
public readonly schedulers: number;
```

- *Type:* number

The number of schedulers that you want to run in your environment.

Valid values:
v2 - For environments larger than mw1.micro, accepts values from 2 to 5.
     Defaults to 2 for all environment sizes except mw1.micro, which defaults to 1.
v1 - Accepts 1.

---

##### `sourceBucket`<sup>Optional</sup> <a name="sourceBucket" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.sourceBucket"></a>

```typescript
public readonly sourceBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

The Amazon S3 bucket where your DAG code and supporting files are stored.

---

##### `startupScriptS3ObjectVersion`<sup>Optional</sup> <a name="startupScriptS3ObjectVersion" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.startupScriptS3ObjectVersion"></a>

```typescript
public readonly startupScriptS3ObjectVersion: string;
```

- *Type:* string

The version of the startup shell script in your Amazon S3 bucket.

You must specify the version ID that Amazon S3 assigns to the file every time you update the script.
Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long.

The following is an example:
     3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo

---

##### `startupScriptS3Path`<sup>Optional</sup> <a name="startupScriptS3Path" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.startupScriptS3Path"></a>

```typescript
public readonly startupScriptS3Path: string;
```

- *Type:* string

The relative path to the startup shell script in your Amazon S3 bucket.

For example, s3://mwaa-environment/startup.sh.
Amazon MWAA runs the script as your environment starts, and before running the Apache Airflow process.
You can use this script to install dependencies, modify Apache Airflow configuration options, and set environment variables.

---

##### `webserverAccessMode`<sup>Optional</sup> <a name="webserverAccessMode" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.webserverAccessMode"></a>

```typescript
public readonly webserverAccessMode: WebserverAccessMode;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.WebserverAccessMode">WebserverAccessMode</a>

The Apache Airflow Web server access mode.

---

##### `webserverUrl`<sup>Optional</sup> <a name="webserverUrl" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.webserverUrl"></a>

```typescript
public readonly webserverUrl: string;
```

- *Type:* string

The URL of your Apache Airflow UI.

---

##### `webserverVpcEndpointService`<sup>Optional</sup> <a name="webserverVpcEndpointService" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.webserverVpcEndpointService"></a>

```typescript
public readonly webserverVpcEndpointService: string;
```

- *Type:* string

The VPC endpoint for the environment's web server.

---

##### `weeklyMaintenanceWindowStart`<sup>Optional</sup> <a name="weeklyMaintenanceWindowStart" id="@robhan-cdk-lib/aws_mwaa.EnvironmentBase.property.weeklyMaintenanceWindowStart"></a>

```typescript
public readonly weeklyMaintenanceWindowStart: string;
```

- *Type:* string

The day and time of the week to start weekly maintenance updates of your environment in the following format: DAY:HH:MM.

For example: TUE:03:30. You can specify a start time in 30 minute increments only.

Supported input includes the following:
     MON|TUE|WED|THU|FRI|SAT|SUN:([01]\\d|2[0-3]):(00|30)

---


## Structs <a name="Structs" id="Structs"></a>

### EnvironmentAttributes <a name="EnvironmentAttributes" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes"></a>

Properties for importing an Amazon Managed Workflows for Apache Airflow Environment.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.Initializer"></a>

```typescript
import { EnvironmentAttributes } from '@robhan-cdk-lib/aws_mwaa'

const environmentAttributes: EnvironmentAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.airflowConfigurationOptions">airflowConfigurationOptions</a></code> | <code>{[ key: string ]: string}</code> | A list of key-value pairs containing the Airflow configuration options for your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.environmentArn">environmentArn</a></code> | <code>string</code> | The ARN for the Amazon MWAA environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.name">name</a></code> | <code>string</code> | The name of your Amazon MWAA environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.airflowVersion">airflowVersion</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.AirflowVersion">AirflowVersion</a></code> | The version of Apache Airflow to use for the environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.celeryExecutorQueue">celeryExecutorQueue</a></code> | <code>string</code> | The queue ARN for the environment's Celery Executor. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.dagS3Path">dagS3Path</a></code> | <code>string</code> | The relative path to the DAGs folder on your Amazon S3 bucket. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.databaseVpcEndpointService">databaseVpcEndpointService</a></code> | <code>string</code> | The VPC endpoint for the environment's Amazon RDS database. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.endpointManagement">endpointManagement</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.EndpointManagement">EndpointManagement</a></code> | Defines whether the VPC endpoints configured for the environment are created, and managed, by the customer or by Amazon MWAA. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.environmentClass">environmentClass</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentClass">EnvironmentClass</a></code> | The environment class type. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.executionRole">executionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The execution role in IAM that allows MWAA to access AWS resources in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The AWS Key Management Service (KMS) key to encrypt and decrypt the data in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.LoggingConfiguration">LoggingConfiguration</a></code> | The Apache Airflow logs being sent to CloudWatch Logs. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.loggingConfigurationDagProcessingLogsCloudWatchLogGroupArn">loggingConfigurationDagProcessingLogsCloudWatchLogGroupArn</a></code> | <code>string</code> | The ARN for the CloudWatch Logs group where the Apache Airflow DAG processing logs are published. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.loggingConfigurationSchedulerLogsCloudWatchLogGroupArn">loggingConfigurationSchedulerLogsCloudWatchLogGroupArn</a></code> | <code>string</code> | The ARN for the CloudWatch Logs group where the Apache Airflow Scheduler logs are published. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.loggingConfigurationTaskLogsCloudWatchLogGroupArn">loggingConfigurationTaskLogsCloudWatchLogGroupArn</a></code> | <code>string</code> | The ARN for the CloudWatch Logs group where the Apache Airflow task logs are published. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.loggingConfigurationWebserverLogsCloudWatchLogGroupArn">loggingConfigurationWebserverLogsCloudWatchLogGroupArn</a></code> | <code>string</code> | The ARN for the CloudWatch Logs group where the Apache Airflow Web server logs are published. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.loggingConfigurationWorkerLogsCloudWatchLogGroupArn">loggingConfigurationWorkerLogsCloudWatchLogGroupArn</a></code> | <code>string</code> | The ARN for the CloudWatch Logs group where the Apache Airflow Worker logs are published. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.maxWebservers">maxWebservers</a></code> | <code>number</code> | The maximum number of web servers that you want to run in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.maxWorkers">maxWorkers</a></code> | <code>number</code> | The maximum number of workers that you want to run in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.minWebservers">minWebservers</a></code> | <code>number</code> | The minimum number of web servers that you want to run in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.minWorkers">minWorkers</a></code> | <code>number</code> | The minimum number of workers that you want to run in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.NetworkConfiguration">NetworkConfiguration</a></code> | The VPC networking components used to secure and enable network traffic between the AWS resources for your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.pluginsS3ObjectVersion">pluginsS3ObjectVersion</a></code> | <code>string</code> | The version of the plugins.zip file on your Amazon S3 bucket. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.pluginsS3Path">pluginsS3Path</a></code> | <code>string</code> | The relative path to the plugins.zip file on your Amazon S3 bucket. For example, plugins.zip. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.requirementsS3ObjectVersion">requirementsS3ObjectVersion</a></code> | <code>string</code> | The version of the requirements.txt file on your Amazon S3 bucket. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.requirementsS3Path">requirementsS3Path</a></code> | <code>string</code> | The relative path to the requirements.txt file on your Amazon S3 bucket. For example, requirements.txt. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.schedulers">schedulers</a></code> | <code>number</code> | The number of schedulers that you want to run in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.sourceBucket">sourceBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The Amazon S3 bucket where your DAG code and supporting files are stored. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.startupScriptS3ObjectVersion">startupScriptS3ObjectVersion</a></code> | <code>string</code> | The version of the startup shell script in your Amazon S3 bucket. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.startupScriptS3Path">startupScriptS3Path</a></code> | <code>string</code> | The relative path to the startup shell script in your Amazon S3 bucket. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.webserverAccessMode">webserverAccessMode</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.WebserverAccessMode">WebserverAccessMode</a></code> | The Apache Airflow Web server access mode. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.webserverUrl">webserverUrl</a></code> | <code>string</code> | The URL of your Apache Airflow UI. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.webserverVpcEndpointService">webserverVpcEndpointService</a></code> | <code>string</code> | The VPC endpoint for the environment's web server. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.weeklyMaintenanceWindowStart">weeklyMaintenanceWindowStart</a></code> | <code>string</code> | The day and time of the week to start weekly maintenance updates of your environment in the following format: DAY:HH:MM. |

---

##### `airflowConfigurationOptions`<sup>Required</sup> <a name="airflowConfigurationOptions" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.airflowConfigurationOptions"></a>

```typescript
public readonly airflowConfigurationOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A list of key-value pairs containing the Airflow configuration options for your environment.

For example, core.default_timezone: utc.

---

##### `environmentArn`<sup>Required</sup> <a name="environmentArn" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.environmentArn"></a>

```typescript
public readonly environmentArn: string;
```

- *Type:* string

The ARN for the Amazon MWAA environment.

---

##### `name`<sup>Required</sup> <a name="name" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of your Amazon MWAA environment.

---

##### `airflowVersion`<sup>Optional</sup> <a name="airflowVersion" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.airflowVersion"></a>

```typescript
public readonly airflowVersion: AirflowVersion;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.AirflowVersion">AirflowVersion</a>

The version of Apache Airflow to use for the environment.

If no value is specified, defaults to the latest version.

If you specify a newer version number for an existing environment, the version update requires some service interruption before taking effect.

---

##### `celeryExecutorQueue`<sup>Optional</sup> <a name="celeryExecutorQueue" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.celeryExecutorQueue"></a>

```typescript
public readonly celeryExecutorQueue: string;
```

- *Type:* string

The queue ARN for the environment's Celery Executor.

Amazon MWAA uses a Celery Executor to distribute tasks across multiple workers.
When you create an environment in a shared VPC, you must provide access to the Celery Executor queue from your VPC.

---

##### `dagS3Path`<sup>Optional</sup> <a name="dagS3Path" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.dagS3Path"></a>

```typescript
public readonly dagS3Path: string;
```

- *Type:* string

The relative path to the DAGs folder on your Amazon S3 bucket.

For example, dags.

---

##### `databaseVpcEndpointService`<sup>Optional</sup> <a name="databaseVpcEndpointService" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.databaseVpcEndpointService"></a>

```typescript
public readonly databaseVpcEndpointService: string;
```

- *Type:* string

The VPC endpoint for the environment's Amazon RDS database.

---

##### `endpointManagement`<sup>Optional</sup> <a name="endpointManagement" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.endpointManagement"></a>

```typescript
public readonly endpointManagement: EndpointManagement;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.EndpointManagement">EndpointManagement</a>

Defines whether the VPC endpoints configured for the environment are created, and managed, by the customer or by Amazon MWAA.

If set to SERVICE, Amazon MWAA will create and manage the required VPC endpoints in your VPC.
If set to CUSTOMER, you must create, and manage, the VPC endpoints in your VPC.

---

##### `environmentClass`<sup>Optional</sup> <a name="environmentClass" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.environmentClass"></a>

```typescript
public readonly environmentClass: EnvironmentClass;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentClass">EnvironmentClass</a>

The environment class type.

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.executionRole"></a>

```typescript
public readonly executionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The execution role in IAM that allows MWAA to access AWS resources in your environment.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.kmsKey"></a>

```typescript
public readonly kmsKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The AWS Key Management Service (KMS) key to encrypt and decrypt the data in your environment.

You can use an AWS KMS key managed by MWAA, or a customer-managed KMS key (advanced).

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="loggingConfiguration" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.loggingConfiguration"></a>

```typescript
public readonly loggingConfiguration: LoggingConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.LoggingConfiguration">LoggingConfiguration</a>

The Apache Airflow logs being sent to CloudWatch Logs.

---

##### `loggingConfigurationDagProcessingLogsCloudWatchLogGroupArn`<sup>Optional</sup> <a name="loggingConfigurationDagProcessingLogsCloudWatchLogGroupArn" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.loggingConfigurationDagProcessingLogsCloudWatchLogGroupArn"></a>

```typescript
public readonly loggingConfigurationDagProcessingLogsCloudWatchLogGroupArn: string;
```

- *Type:* string

The ARN for the CloudWatch Logs group where the Apache Airflow DAG processing logs are published.

---

##### `loggingConfigurationSchedulerLogsCloudWatchLogGroupArn`<sup>Optional</sup> <a name="loggingConfigurationSchedulerLogsCloudWatchLogGroupArn" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.loggingConfigurationSchedulerLogsCloudWatchLogGroupArn"></a>

```typescript
public readonly loggingConfigurationSchedulerLogsCloudWatchLogGroupArn: string;
```

- *Type:* string

The ARN for the CloudWatch Logs group where the Apache Airflow Scheduler logs are published.

---

##### `loggingConfigurationTaskLogsCloudWatchLogGroupArn`<sup>Optional</sup> <a name="loggingConfigurationTaskLogsCloudWatchLogGroupArn" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.loggingConfigurationTaskLogsCloudWatchLogGroupArn"></a>

```typescript
public readonly loggingConfigurationTaskLogsCloudWatchLogGroupArn: string;
```

- *Type:* string

The ARN for the CloudWatch Logs group where the Apache Airflow task logs are published.

---

##### `loggingConfigurationWebserverLogsCloudWatchLogGroupArn`<sup>Optional</sup> <a name="loggingConfigurationWebserverLogsCloudWatchLogGroupArn" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.loggingConfigurationWebserverLogsCloudWatchLogGroupArn"></a>

```typescript
public readonly loggingConfigurationWebserverLogsCloudWatchLogGroupArn: string;
```

- *Type:* string

The ARN for the CloudWatch Logs group where the Apache Airflow Web server logs are published.

---

##### `loggingConfigurationWorkerLogsCloudWatchLogGroupArn`<sup>Optional</sup> <a name="loggingConfigurationWorkerLogsCloudWatchLogGroupArn" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.loggingConfigurationWorkerLogsCloudWatchLogGroupArn"></a>

```typescript
public readonly loggingConfigurationWorkerLogsCloudWatchLogGroupArn: string;
```

- *Type:* string

The ARN for the CloudWatch Logs group where the Apache Airflow Worker logs are published.

---

##### `maxWebservers`<sup>Optional</sup> <a name="maxWebservers" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.maxWebservers"></a>

```typescript
public readonly maxWebservers: number;
```

- *Type:* number

The maximum number of web servers that you want to run in your environment.

Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for MaxWebservers when you interact with your Apache
Airflow environment using Apache Airflow REST API, or the Apache Airflow CLI. For example, in scenarios where your workload requires network
calls to the Apache Airflow REST API with a high transaction-per-second (TPS) rate, Amazon MWAA will increase the number of web servers up to
the number set in MaxWebserers. As TPS rates decrease Amazon MWAA disposes of the additional web servers, and scales down to the number set in
MinxWebserers.

Valid values: For environments larger than mw1.micro, accepts values from 2 to 5. Defaults to 2 for all environment sizes except mw1.micro,
which defaults to 1.

---

##### `maxWorkers`<sup>Optional</sup> <a name="maxWorkers" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.maxWorkers"></a>

```typescript
public readonly maxWorkers: number;
```

- *Type:* number

The maximum number of workers that you want to run in your environment.

MWAA scales the number of Apache Airflow workers up to the number you specify in the MaxWorkers field. For example, 20. When there are no more
tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or
the number you specify in MinWorkers.

---

##### `minWebservers`<sup>Optional</sup> <a name="minWebservers" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.minWebservers"></a>

```typescript
public readonly minWebservers: number;
```

- *Type:* number

The minimum number of web servers that you want to run in your environment.

Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for MaxWebservers when you interact with your Apache
Airflow environment using Apache Airflow REST API, or the Apache Airflow CLI. As the transaction-per-second rate, and the network load,
decrease, Amazon MWAA disposes of the additional web servers, and scales down to the number set in MinxWebserers.

Valid values: For environments larger than mw1.micro, accepts values from 2 to 5. Defaults to 2 for all environment sizes except mw1.micro,
which defaults to 1.

---

##### `minWorkers`<sup>Optional</sup> <a name="minWorkers" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.minWorkers"></a>

```typescript
public readonly minWorkers: number;
```

- *Type:* number

The minimum number of workers that you want to run in your environment.

MWAA scales the number of Apache Airflow workers up to the number you
specify in the MaxWorkers field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving
the worker count you specify in the MinWorkers field. For example, 2.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: NetworkConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.NetworkConfiguration">NetworkConfiguration</a>

The VPC networking components used to secure and enable network traffic between the AWS resources for your environment.

---

##### `pluginsS3ObjectVersion`<sup>Optional</sup> <a name="pluginsS3ObjectVersion" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.pluginsS3ObjectVersion"></a>

```typescript
public readonly pluginsS3ObjectVersion: string;
```

- *Type:* string

The version of the plugins.zip file on your Amazon S3 bucket.

---

##### `pluginsS3Path`<sup>Optional</sup> <a name="pluginsS3Path" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.pluginsS3Path"></a>

```typescript
public readonly pluginsS3Path: string;
```

- *Type:* string

The relative path to the plugins.zip file on your Amazon S3 bucket. For example, plugins.zip.

---

##### `requirementsS3ObjectVersion`<sup>Optional</sup> <a name="requirementsS3ObjectVersion" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.requirementsS3ObjectVersion"></a>

```typescript
public readonly requirementsS3ObjectVersion: string;
```

- *Type:* string

The version of the requirements.txt file on your Amazon S3 bucket.

---

##### `requirementsS3Path`<sup>Optional</sup> <a name="requirementsS3Path" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.requirementsS3Path"></a>

```typescript
public readonly requirementsS3Path: string;
```

- *Type:* string

The relative path to the requirements.txt file on your Amazon S3 bucket. For example, requirements.txt.

---

##### `schedulers`<sup>Optional</sup> <a name="schedulers" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.schedulers"></a>

```typescript
public readonly schedulers: number;
```

- *Type:* number

The number of schedulers that you want to run in your environment.

Valid values:
v2 - For environments larger than mw1.micro, accepts values from 2 to 5.
     Defaults to 2 for all environment sizes except mw1.micro, which defaults to 1.
v1 - Accepts 1.

---

##### `sourceBucket`<sup>Optional</sup> <a name="sourceBucket" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.sourceBucket"></a>

```typescript
public readonly sourceBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

The Amazon S3 bucket where your DAG code and supporting files are stored.

---

##### `startupScriptS3ObjectVersion`<sup>Optional</sup> <a name="startupScriptS3ObjectVersion" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.startupScriptS3ObjectVersion"></a>

```typescript
public readonly startupScriptS3ObjectVersion: string;
```

- *Type:* string

The version of the startup shell script in your Amazon S3 bucket.

You must specify the version ID that Amazon S3 assigns to the file every time you update the script.
Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long.

The following is an example:
     3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo

---

##### `startupScriptS3Path`<sup>Optional</sup> <a name="startupScriptS3Path" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.startupScriptS3Path"></a>

```typescript
public readonly startupScriptS3Path: string;
```

- *Type:* string

The relative path to the startup shell script in your Amazon S3 bucket.

For example, s3://mwaa-environment/startup.sh.
Amazon MWAA runs the script as your environment starts, and before running the Apache Airflow process.
You can use this script to install dependencies, modify Apache Airflow configuration options, and set environment variables.

---

##### `webserverAccessMode`<sup>Optional</sup> <a name="webserverAccessMode" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.webserverAccessMode"></a>

```typescript
public readonly webserverAccessMode: WebserverAccessMode;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.WebserverAccessMode">WebserverAccessMode</a>

The Apache Airflow Web server access mode.

---

##### `webserverUrl`<sup>Optional</sup> <a name="webserverUrl" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.webserverUrl"></a>

```typescript
public readonly webserverUrl: string;
```

- *Type:* string

The URL of your Apache Airflow UI.

---

##### `webserverVpcEndpointService`<sup>Optional</sup> <a name="webserverVpcEndpointService" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.webserverVpcEndpointService"></a>

```typescript
public readonly webserverVpcEndpointService: string;
```

- *Type:* string

The VPC endpoint for the environment's web server.

---

##### `weeklyMaintenanceWindowStart`<sup>Optional</sup> <a name="weeklyMaintenanceWindowStart" id="@robhan-cdk-lib/aws_mwaa.EnvironmentAttributes.property.weeklyMaintenanceWindowStart"></a>

```typescript
public readonly weeklyMaintenanceWindowStart: string;
```

- *Type:* string

The day and time of the week to start weekly maintenance updates of your environment in the following format: DAY:HH:MM.

For example: TUE:03:30. You can specify a start time in 30 minute increments only.

Supported input includes the following:
     MON|TUE|WED|THU|FRI|SAT|SUN:([01]\\d|2[0-3]):(00|30)

---

### EnvironmentProps <a name="EnvironmentProps" id="@robhan-cdk-lib/aws_mwaa.EnvironmentProps"></a>

Properties for creating an Amazon Managed Workflows for Apache Airflow Environment.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_mwaa.EnvironmentProps.Initializer"></a>

```typescript
import { EnvironmentProps } from '@robhan-cdk-lib/aws_mwaa'

const environmentProps: EnvironmentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.airflowConfigurationOptions">airflowConfigurationOptions</a></code> | <code>{[ key: string ]: string}</code> | A list of key-value pairs containing the Airflow configuration options for your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.name">name</a></code> | <code>string</code> | The name of your Amazon MWAA environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.airflowVersion">airflowVersion</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.AirflowVersion">AirflowVersion</a></code> | The version of Apache Airflow to use for the environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.dagS3Path">dagS3Path</a></code> | <code>string</code> | The relative path to the DAGs folder on your Amazon S3 bucket. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.endpointManagement">endpointManagement</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.EndpointManagement">EndpointManagement</a></code> | Defines whether the VPC endpoints configured for the environment are created, and managed, by the customer or by Amazon MWAA. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.environmentClass">environmentClass</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentClass">EnvironmentClass</a></code> | The environment class type. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.executionRole">executionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The execution role in IAM that allows MWAA to access AWS resources in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The AWS Key Management Service (KMS) key to encrypt and decrypt the data in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.LoggingConfiguration">LoggingConfiguration</a></code> | The Apache Airflow logs being sent to CloudWatch Logs. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.maxWebservers">maxWebservers</a></code> | <code>number</code> | The maximum number of web servers that you want to run in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.maxWorkers">maxWorkers</a></code> | <code>number</code> | The maximum number of workers that you want to run in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.minWebservers">minWebservers</a></code> | <code>number</code> | The minimum number of web servers that you want to run in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.minWorkers">minWorkers</a></code> | <code>number</code> | The minimum number of workers that you want to run in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.NetworkConfiguration">NetworkConfiguration</a></code> | The VPC networking components used to secure and enable network traffic between the AWS resources for your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.pluginsS3ObjectVersion">pluginsS3ObjectVersion</a></code> | <code>string</code> | The version of the plugins.zip file on your Amazon S3 bucket. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.pluginsS3Path">pluginsS3Path</a></code> | <code>string</code> | The relative path to the plugins.zip file on your Amazon S3 bucket. For example, plugins.zip. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.requirementsS3ObjectVersion">requirementsS3ObjectVersion</a></code> | <code>string</code> | The version of the requirements.txt file on your Amazon S3 bucket. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.requirementsS3Path">requirementsS3Path</a></code> | <code>string</code> | The relative path to the requirements.txt file on your Amazon S3 bucket. For example, requirements.txt. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.schedulers">schedulers</a></code> | <code>number</code> | The number of schedulers that you want to run in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.sourceBucket">sourceBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The Amazon S3 bucket where your DAG code and supporting files are stored. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.startupScriptS3ObjectVersion">startupScriptS3ObjectVersion</a></code> | <code>string</code> | The version of the startup shell script in your Amazon S3 bucket. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.startupScriptS3Path">startupScriptS3Path</a></code> | <code>string</code> | The relative path to the startup shell script in your Amazon S3 bucket. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.webserverAccessMode">webserverAccessMode</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.WebserverAccessMode">WebserverAccessMode</a></code> | The Apache Airflow Web server access mode. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.weeklyMaintenanceWindowStart">weeklyMaintenanceWindowStart</a></code> | <code>string</code> | The day and time of the week to start weekly maintenance updates of your environment in the following format: DAY:HH:MM. |

---

##### `airflowConfigurationOptions`<sup>Required</sup> <a name="airflowConfigurationOptions" id="@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.airflowConfigurationOptions"></a>

```typescript
public readonly airflowConfigurationOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A list of key-value pairs containing the Airflow configuration options for your environment.

For example, core.default_timezone: utc.

---

##### `name`<sup>Required</sup> <a name="name" id="@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of your Amazon MWAA environment.

---

##### `airflowVersion`<sup>Optional</sup> <a name="airflowVersion" id="@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.airflowVersion"></a>

```typescript
public readonly airflowVersion: AirflowVersion;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.AirflowVersion">AirflowVersion</a>

The version of Apache Airflow to use for the environment.

If no value is specified, defaults to the latest version.

If you specify a newer version number for an existing environment, the version update requires some service interruption before taking effect.

---

##### `dagS3Path`<sup>Optional</sup> <a name="dagS3Path" id="@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.dagS3Path"></a>

```typescript
public readonly dagS3Path: string;
```

- *Type:* string

The relative path to the DAGs folder on your Amazon S3 bucket.

For example, dags.

---

##### `endpointManagement`<sup>Optional</sup> <a name="endpointManagement" id="@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.endpointManagement"></a>

```typescript
public readonly endpointManagement: EndpointManagement;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.EndpointManagement">EndpointManagement</a>

Defines whether the VPC endpoints configured for the environment are created, and managed, by the customer or by Amazon MWAA.

If set to SERVICE, Amazon MWAA will create and manage the required VPC endpoints in your VPC.
If set to CUSTOMER, you must create, and manage, the VPC endpoints in your VPC.

---

##### `environmentClass`<sup>Optional</sup> <a name="environmentClass" id="@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.environmentClass"></a>

```typescript
public readonly environmentClass: EnvironmentClass;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentClass">EnvironmentClass</a>

The environment class type.

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.executionRole"></a>

```typescript
public readonly executionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The execution role in IAM that allows MWAA to access AWS resources in your environment.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.kmsKey"></a>

```typescript
public readonly kmsKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The AWS Key Management Service (KMS) key to encrypt and decrypt the data in your environment.

You can use an AWS KMS key managed by MWAA, or a customer-managed KMS key (advanced).

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="loggingConfiguration" id="@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.loggingConfiguration"></a>

```typescript
public readonly loggingConfiguration: LoggingConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.LoggingConfiguration">LoggingConfiguration</a>

The Apache Airflow logs being sent to CloudWatch Logs.

---

##### `maxWebservers`<sup>Optional</sup> <a name="maxWebservers" id="@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.maxWebservers"></a>

```typescript
public readonly maxWebservers: number;
```

- *Type:* number

The maximum number of web servers that you want to run in your environment.

Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for MaxWebservers when you interact with your Apache
Airflow environment using Apache Airflow REST API, or the Apache Airflow CLI. For example, in scenarios where your workload requires network
calls to the Apache Airflow REST API with a high transaction-per-second (TPS) rate, Amazon MWAA will increase the number of web servers up to
the number set in MaxWebserers. As TPS rates decrease Amazon MWAA disposes of the additional web servers, and scales down to the number set in
MinxWebserers.

Valid values: For environments larger than mw1.micro, accepts values from 2 to 5. Defaults to 2 for all environment sizes except mw1.micro,
which defaults to 1.

---

##### `maxWorkers`<sup>Optional</sup> <a name="maxWorkers" id="@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.maxWorkers"></a>

```typescript
public readonly maxWorkers: number;
```

- *Type:* number

The maximum number of workers that you want to run in your environment.

MWAA scales the number of Apache Airflow workers up to the number you specify in the MaxWorkers field. For example, 20. When there are no more
tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or
the number you specify in MinWorkers.

---

##### `minWebservers`<sup>Optional</sup> <a name="minWebservers" id="@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.minWebservers"></a>

```typescript
public readonly minWebservers: number;
```

- *Type:* number

The minimum number of web servers that you want to run in your environment.

Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for MaxWebservers when you interact with your Apache
Airflow environment using Apache Airflow REST API, or the Apache Airflow CLI. As the transaction-per-second rate, and the network load,
decrease, Amazon MWAA disposes of the additional web servers, and scales down to the number set in MinxWebserers.

Valid values: For environments larger than mw1.micro, accepts values from 2 to 5. Defaults to 2 for all environment sizes except mw1.micro,
which defaults to 1.

---

##### `minWorkers`<sup>Optional</sup> <a name="minWorkers" id="@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.minWorkers"></a>

```typescript
public readonly minWorkers: number;
```

- *Type:* number

The minimum number of workers that you want to run in your environment.

MWAA scales the number of Apache Airflow workers up to the number you
specify in the MaxWorkers field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving
the worker count you specify in the MinWorkers field. For example, 2.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: NetworkConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.NetworkConfiguration">NetworkConfiguration</a>

The VPC networking components used to secure and enable network traffic between the AWS resources for your environment.

---

##### `pluginsS3ObjectVersion`<sup>Optional</sup> <a name="pluginsS3ObjectVersion" id="@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.pluginsS3ObjectVersion"></a>

```typescript
public readonly pluginsS3ObjectVersion: string;
```

- *Type:* string

The version of the plugins.zip file on your Amazon S3 bucket.

---

##### `pluginsS3Path`<sup>Optional</sup> <a name="pluginsS3Path" id="@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.pluginsS3Path"></a>

```typescript
public readonly pluginsS3Path: string;
```

- *Type:* string

The relative path to the plugins.zip file on your Amazon S3 bucket. For example, plugins.zip.

---

##### `requirementsS3ObjectVersion`<sup>Optional</sup> <a name="requirementsS3ObjectVersion" id="@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.requirementsS3ObjectVersion"></a>

```typescript
public readonly requirementsS3ObjectVersion: string;
```

- *Type:* string

The version of the requirements.txt file on your Amazon S3 bucket.

---

##### `requirementsS3Path`<sup>Optional</sup> <a name="requirementsS3Path" id="@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.requirementsS3Path"></a>

```typescript
public readonly requirementsS3Path: string;
```

- *Type:* string

The relative path to the requirements.txt file on your Amazon S3 bucket. For example, requirements.txt.

---

##### `schedulers`<sup>Optional</sup> <a name="schedulers" id="@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.schedulers"></a>

```typescript
public readonly schedulers: number;
```

- *Type:* number

The number of schedulers that you want to run in your environment.

Valid values:
v2 - For environments larger than mw1.micro, accepts values from 2 to 5.
     Defaults to 2 for all environment sizes except mw1.micro, which defaults to 1.
v1 - Accepts 1.

---

##### `sourceBucket`<sup>Optional</sup> <a name="sourceBucket" id="@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.sourceBucket"></a>

```typescript
public readonly sourceBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

The Amazon S3 bucket where your DAG code and supporting files are stored.

---

##### `startupScriptS3ObjectVersion`<sup>Optional</sup> <a name="startupScriptS3ObjectVersion" id="@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.startupScriptS3ObjectVersion"></a>

```typescript
public readonly startupScriptS3ObjectVersion: string;
```

- *Type:* string

The version of the startup shell script in your Amazon S3 bucket.

You must specify the version ID that Amazon S3 assigns to the file every time you update the script.
Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long.

The following is an example:
     3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo

---

##### `startupScriptS3Path`<sup>Optional</sup> <a name="startupScriptS3Path" id="@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.startupScriptS3Path"></a>

```typescript
public readonly startupScriptS3Path: string;
```

- *Type:* string

The relative path to the startup shell script in your Amazon S3 bucket.

For example, s3://mwaa-environment/startup.sh.
Amazon MWAA runs the script as your environment starts, and before running the Apache Airflow process.
You can use this script to install dependencies, modify Apache Airflow configuration options, and set environment variables.

---

##### `webserverAccessMode`<sup>Optional</sup> <a name="webserverAccessMode" id="@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.webserverAccessMode"></a>

```typescript
public readonly webserverAccessMode: WebserverAccessMode;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.WebserverAccessMode">WebserverAccessMode</a>

The Apache Airflow Web server access mode.

---

##### `weeklyMaintenanceWindowStart`<sup>Optional</sup> <a name="weeklyMaintenanceWindowStart" id="@robhan-cdk-lib/aws_mwaa.EnvironmentProps.property.weeklyMaintenanceWindowStart"></a>

```typescript
public readonly weeklyMaintenanceWindowStart: string;
```

- *Type:* string

The day and time of the week to start weekly maintenance updates of your environment in the following format: DAY:HH:MM.

For example: TUE:03:30. You can specify a start time in 30 minute increments only.

Supported input includes the following:
     MON|TUE|WED|THU|FRI|SAT|SUN:([01]\\d|2[0-3]):(00|30)

---

### LoggingConfiguration <a name="LoggingConfiguration" id="@robhan-cdk-lib/aws_mwaa.LoggingConfiguration"></a>

The type of Apache Airflow logs to send to CloudWatch Logs.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_mwaa.LoggingConfiguration.Initializer"></a>

```typescript
import { LoggingConfiguration } from '@robhan-cdk-lib/aws_mwaa'

const loggingConfiguration: LoggingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.LoggingConfiguration.property.dagProcessingLogs">dagProcessingLogs</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.ModuleLoggingConfiguration">ModuleLoggingConfiguration</a></code> | Defines the processing logs sent to CloudWatch Logs and the logging level to send. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.LoggingConfiguration.property.schedulerLogs">schedulerLogs</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.ModuleLoggingConfiguration">ModuleLoggingConfiguration</a></code> | Defines the scheduler logs sent to CloudWatch Logs and the logging level to send. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.LoggingConfiguration.property.taskLogs">taskLogs</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.ModuleLoggingConfiguration">ModuleLoggingConfiguration</a></code> | Defines the task logs sent to CloudWatch Logs and the logging level to send. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.LoggingConfiguration.property.webServerLogs">webServerLogs</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.ModuleLoggingConfiguration">ModuleLoggingConfiguration</a></code> | Defines the web server logs sent to CloudWatch Logs and the logging level to send. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.LoggingConfiguration.property.workerLogs">workerLogs</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.ModuleLoggingConfiguration">ModuleLoggingConfiguration</a></code> | Defines the worker logs sent to CloudWatch Logs and the logging level to send. |

---

##### `dagProcessingLogs`<sup>Optional</sup> <a name="dagProcessingLogs" id="@robhan-cdk-lib/aws_mwaa.LoggingConfiguration.property.dagProcessingLogs"></a>

```typescript
public readonly dagProcessingLogs: ModuleLoggingConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.ModuleLoggingConfiguration">ModuleLoggingConfiguration</a>

Defines the processing logs sent to CloudWatch Logs and the logging level to send.

---

##### `schedulerLogs`<sup>Optional</sup> <a name="schedulerLogs" id="@robhan-cdk-lib/aws_mwaa.LoggingConfiguration.property.schedulerLogs"></a>

```typescript
public readonly schedulerLogs: ModuleLoggingConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.ModuleLoggingConfiguration">ModuleLoggingConfiguration</a>

Defines the scheduler logs sent to CloudWatch Logs and the logging level to send.

---

##### `taskLogs`<sup>Optional</sup> <a name="taskLogs" id="@robhan-cdk-lib/aws_mwaa.LoggingConfiguration.property.taskLogs"></a>

```typescript
public readonly taskLogs: ModuleLoggingConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.ModuleLoggingConfiguration">ModuleLoggingConfiguration</a>

Defines the task logs sent to CloudWatch Logs and the logging level to send.

---

##### `webServerLogs`<sup>Optional</sup> <a name="webServerLogs" id="@robhan-cdk-lib/aws_mwaa.LoggingConfiguration.property.webServerLogs"></a>

```typescript
public readonly webServerLogs: ModuleLoggingConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.ModuleLoggingConfiguration">ModuleLoggingConfiguration</a>

Defines the web server logs sent to CloudWatch Logs and the logging level to send.

---

##### `workerLogs`<sup>Optional</sup> <a name="workerLogs" id="@robhan-cdk-lib/aws_mwaa.LoggingConfiguration.property.workerLogs"></a>

```typescript
public readonly workerLogs: ModuleLoggingConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.ModuleLoggingConfiguration">ModuleLoggingConfiguration</a>

Defines the worker logs sent to CloudWatch Logs and the logging level to send.

---

### ModuleLoggingConfiguration <a name="ModuleLoggingConfiguration" id="@robhan-cdk-lib/aws_mwaa.ModuleLoggingConfiguration"></a>

Defines the type of logs to send for the Apache Airflow log type (e.g. DagProcessingLogs).

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_mwaa.ModuleLoggingConfiguration.Initializer"></a>

```typescript
import { ModuleLoggingConfiguration } from '@robhan-cdk-lib/aws_mwaa'

const moduleLoggingConfiguration: ModuleLoggingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.ModuleLoggingConfiguration.property.cloudWatchLogGroup">cloudWatchLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch Logs log group for each type ofApache Airflow log type that you have enabled. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.ModuleLoggingConfiguration.property.enabled">enabled</a></code> | <code>boolean</code> | Indicates whether to enable the Apache Airflow log type (e.g. DagProcessingLogs) in CloudWatch Logs. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.ModuleLoggingConfiguration.property.logLevel">logLevel</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.LogLevel">LogLevel</a></code> | Defines the Apache Airflow logs to send for the log type (e.g. DagProcessingLogs) to CloudWatch Logs. |

---

##### `cloudWatchLogGroup`<sup>Optional</sup> <a name="cloudWatchLogGroup" id="@robhan-cdk-lib/aws_mwaa.ModuleLoggingConfiguration.property.cloudWatchLogGroup"></a>

```typescript
public readonly cloudWatchLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The CloudWatch Logs log group for each type ofApache Airflow log type that you have enabled.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@robhan-cdk-lib/aws_mwaa.ModuleLoggingConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

Indicates whether to enable the Apache Airflow log type (e.g. DagProcessingLogs) in CloudWatch Logs.

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@robhan-cdk-lib/aws_mwaa.ModuleLoggingConfiguration.property.logLevel"></a>

```typescript
public readonly logLevel: LogLevel;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.LogLevel">LogLevel</a>

Defines the Apache Airflow logs to send for the log type (e.g. DagProcessingLogs) to CloudWatch Logs.

---

### NetworkConfiguration <a name="NetworkConfiguration" id="@robhan-cdk-lib/aws_mwaa.NetworkConfiguration"></a>

The VPC networking components used to secure and enable network traffic between the AWS resources for your environment.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_mwaa.NetworkConfiguration.Initializer"></a>

```typescript
import { NetworkConfiguration } from '@robhan-cdk-lib/aws_mwaa'

const networkConfiguration: NetworkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.NetworkConfiguration.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | A list of one or more security groups. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.NetworkConfiguration.property.subnets">subnets</a></code> | <code>aws-cdk-lib.aws_ec2.ISubnet[]</code> | A list of subnets. |

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@robhan-cdk-lib/aws_mwaa.NetworkConfiguration.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]

A list of one or more security groups.

Accepts up to 5 security groups. A security group must be attached to the same VPC as the subnets.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@robhan-cdk-lib/aws_mwaa.NetworkConfiguration.property.subnets"></a>

```typescript
public readonly subnets: ISubnet[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISubnet[]

A list of subnets.

Required to create an environment. Must be private subnets in two different availability zones.
A subnet must be attached to the same VPC as the security group.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IEnvironment <a name="IEnvironment" id="@robhan-cdk-lib/aws_mwaa.IEnvironment"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#@robhan-cdk-lib/aws_mwaa.Environment">Environment</a>, <a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentBase">EnvironmentBase</a>, <a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment">IEnvironment</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.airflowConfigurationOptions">airflowConfigurationOptions</a></code> | <code>{[ key: string ]: string}</code> | A list of key-value pairs containing the Airflow configuration options for your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.environmentArn">environmentArn</a></code> | <code>string</code> | The ARN for the Amazon MWAA environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.name">name</a></code> | <code>string</code> | The name of your Amazon MWAA environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.airflowVersion">airflowVersion</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.AirflowVersion">AirflowVersion</a></code> | The version of Apache Airflow to use for the environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.celeryExecutorQueue">celeryExecutorQueue</a></code> | <code>string</code> | The queue ARN for the environment's Celery Executor. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.dagS3Path">dagS3Path</a></code> | <code>string</code> | The relative path to the DAGs folder on your Amazon S3 bucket. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.databaseVpcEndpointService">databaseVpcEndpointService</a></code> | <code>string</code> | The VPC endpoint for the environment's Amazon RDS database. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.endpointManagement">endpointManagement</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.EndpointManagement">EndpointManagement</a></code> | Defines whether the VPC endpoints configured for the environment are created, and managed, by the customer or by Amazon MWAA. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.environmentClass">environmentClass</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentClass">EnvironmentClass</a></code> | The environment class type. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.executionRole">executionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The execution role in IAM that allows MWAA to access AWS resources in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The AWS Key Management Service (KMS) key to encrypt and decrypt the data in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.LoggingConfiguration">LoggingConfiguration</a></code> | The Apache Airflow logs being sent to CloudWatch Logs. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.loggingConfigurationDagProcessingLogsCloudWatchLogGroupArn">loggingConfigurationDagProcessingLogsCloudWatchLogGroupArn</a></code> | <code>string</code> | The ARN for the CloudWatch Logs group where the Apache Airflow DAG processing logs are published. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.loggingConfigurationSchedulerLogsCloudWatchLogGroupArn">loggingConfigurationSchedulerLogsCloudWatchLogGroupArn</a></code> | <code>string</code> | The ARN for the CloudWatch Logs group where the Apache Airflow Scheduler logs are published. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.loggingConfigurationTaskLogsCloudWatchLogGroupArn">loggingConfigurationTaskLogsCloudWatchLogGroupArn</a></code> | <code>string</code> | The ARN for the CloudWatch Logs group where the Apache Airflow task logs are published. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.loggingConfigurationWebserverLogsCloudWatchLogGroupArn">loggingConfigurationWebserverLogsCloudWatchLogGroupArn</a></code> | <code>string</code> | The ARN for the CloudWatch Logs group where the Apache Airflow Web server logs are published. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.loggingConfigurationWorkerLogsCloudWatchLogGroupArn">loggingConfigurationWorkerLogsCloudWatchLogGroupArn</a></code> | <code>string</code> | The ARN for the CloudWatch Logs group where the Apache Airflow Worker logs are published. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.maxWebservers">maxWebservers</a></code> | <code>number</code> | The maximum number of web servers that you want to run in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.maxWorkers">maxWorkers</a></code> | <code>number</code> | The maximum number of workers that you want to run in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.minWebservers">minWebservers</a></code> | <code>number</code> | The minimum number of web servers that you want to run in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.minWorkers">minWorkers</a></code> | <code>number</code> | The minimum number of workers that you want to run in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.NetworkConfiguration">NetworkConfiguration</a></code> | The VPC networking components used to secure and enable network traffic between the AWS resources for your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.pluginsS3ObjectVersion">pluginsS3ObjectVersion</a></code> | <code>string</code> | The version of the plugins.zip file on your Amazon S3 bucket. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.pluginsS3Path">pluginsS3Path</a></code> | <code>string</code> | The relative path to the plugins.zip file on your Amazon S3 bucket. For example, plugins.zip. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.requirementsS3ObjectVersion">requirementsS3ObjectVersion</a></code> | <code>string</code> | The version of the requirements.txt file on your Amazon S3 bucket. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.requirementsS3Path">requirementsS3Path</a></code> | <code>string</code> | The relative path to the requirements.txt file on your Amazon S3 bucket. For example, requirements.txt. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.schedulers">schedulers</a></code> | <code>number</code> | The number of schedulers that you want to run in your environment. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.sourceBucket">sourceBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The Amazon S3 bucket where your DAG code and supporting files are stored. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.startupScriptS3ObjectVersion">startupScriptS3ObjectVersion</a></code> | <code>string</code> | The version of the startup shell script in your Amazon S3 bucket. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.startupScriptS3Path">startupScriptS3Path</a></code> | <code>string</code> | The relative path to the startup shell script in your Amazon S3 bucket. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.webserverAccessMode">webserverAccessMode</a></code> | <code><a href="#@robhan-cdk-lib/aws_mwaa.WebserverAccessMode">WebserverAccessMode</a></code> | The Apache Airflow Web server access mode. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.webserverUrl">webserverUrl</a></code> | <code>string</code> | The URL of your Apache Airflow UI. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.webserverVpcEndpointService">webserverVpcEndpointService</a></code> | <code>string</code> | The VPC endpoint for the environment's web server. |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.IEnvironment.property.weeklyMaintenanceWindowStart">weeklyMaintenanceWindowStart</a></code> | <code>string</code> | The day and time of the week to start weekly maintenance updates of your environment in the following format: DAY:HH:MM. |

---

##### `node`<sup>Required</sup> <a name="node" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `airflowConfigurationOptions`<sup>Required</sup> <a name="airflowConfigurationOptions" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.airflowConfigurationOptions"></a>

```typescript
public readonly airflowConfigurationOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A list of key-value pairs containing the Airflow configuration options for your environment.

For example, core.default_timezone: utc.

---

##### `environmentArn`<sup>Required</sup> <a name="environmentArn" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.environmentArn"></a>

```typescript
public readonly environmentArn: string;
```

- *Type:* string

The ARN for the Amazon MWAA environment.

---

##### `name`<sup>Required</sup> <a name="name" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of your Amazon MWAA environment.

---

##### `airflowVersion`<sup>Optional</sup> <a name="airflowVersion" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.airflowVersion"></a>

```typescript
public readonly airflowVersion: AirflowVersion;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.AirflowVersion">AirflowVersion</a>

The version of Apache Airflow to use for the environment.

If no value is specified, defaults to the latest version.

If you specify a newer version number for an existing environment, the version update requires some service interruption before taking effect.

---

##### `celeryExecutorQueue`<sup>Optional</sup> <a name="celeryExecutorQueue" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.celeryExecutorQueue"></a>

```typescript
public readonly celeryExecutorQueue: string;
```

- *Type:* string

The queue ARN for the environment's Celery Executor.

Amazon MWAA uses a Celery Executor to distribute tasks across multiple workers.
When you create an environment in a shared VPC, you must provide access to the Celery Executor queue from your VPC.

---

##### `dagS3Path`<sup>Optional</sup> <a name="dagS3Path" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.dagS3Path"></a>

```typescript
public readonly dagS3Path: string;
```

- *Type:* string

The relative path to the DAGs folder on your Amazon S3 bucket.

For example, dags.

---

##### `databaseVpcEndpointService`<sup>Optional</sup> <a name="databaseVpcEndpointService" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.databaseVpcEndpointService"></a>

```typescript
public readonly databaseVpcEndpointService: string;
```

- *Type:* string

The VPC endpoint for the environment's Amazon RDS database.

---

##### `endpointManagement`<sup>Optional</sup> <a name="endpointManagement" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.endpointManagement"></a>

```typescript
public readonly endpointManagement: EndpointManagement;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.EndpointManagement">EndpointManagement</a>

Defines whether the VPC endpoints configured for the environment are created, and managed, by the customer or by Amazon MWAA.

If set to SERVICE, Amazon MWAA will create and manage the required VPC endpoints in your VPC.
If set to CUSTOMER, you must create, and manage, the VPC endpoints in your VPC.

---

##### `environmentClass`<sup>Optional</sup> <a name="environmentClass" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.environmentClass"></a>

```typescript
public readonly environmentClass: EnvironmentClass;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentClass">EnvironmentClass</a>

The environment class type.

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.executionRole"></a>

```typescript
public readonly executionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The execution role in IAM that allows MWAA to access AWS resources in your environment.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.kmsKey"></a>

```typescript
public readonly kmsKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The AWS Key Management Service (KMS) key to encrypt and decrypt the data in your environment.

You can use an AWS KMS key managed by MWAA, or a customer-managed KMS key (advanced).

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="loggingConfiguration" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.loggingConfiguration"></a>

```typescript
public readonly loggingConfiguration: LoggingConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.LoggingConfiguration">LoggingConfiguration</a>

The Apache Airflow logs being sent to CloudWatch Logs.

---

##### `loggingConfigurationDagProcessingLogsCloudWatchLogGroupArn`<sup>Optional</sup> <a name="loggingConfigurationDagProcessingLogsCloudWatchLogGroupArn" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.loggingConfigurationDagProcessingLogsCloudWatchLogGroupArn"></a>

```typescript
public readonly loggingConfigurationDagProcessingLogsCloudWatchLogGroupArn: string;
```

- *Type:* string

The ARN for the CloudWatch Logs group where the Apache Airflow DAG processing logs are published.

---

##### `loggingConfigurationSchedulerLogsCloudWatchLogGroupArn`<sup>Optional</sup> <a name="loggingConfigurationSchedulerLogsCloudWatchLogGroupArn" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.loggingConfigurationSchedulerLogsCloudWatchLogGroupArn"></a>

```typescript
public readonly loggingConfigurationSchedulerLogsCloudWatchLogGroupArn: string;
```

- *Type:* string

The ARN for the CloudWatch Logs group where the Apache Airflow Scheduler logs are published.

---

##### `loggingConfigurationTaskLogsCloudWatchLogGroupArn`<sup>Optional</sup> <a name="loggingConfigurationTaskLogsCloudWatchLogGroupArn" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.loggingConfigurationTaskLogsCloudWatchLogGroupArn"></a>

```typescript
public readonly loggingConfigurationTaskLogsCloudWatchLogGroupArn: string;
```

- *Type:* string

The ARN for the CloudWatch Logs group where the Apache Airflow task logs are published.

---

##### `loggingConfigurationWebserverLogsCloudWatchLogGroupArn`<sup>Optional</sup> <a name="loggingConfigurationWebserverLogsCloudWatchLogGroupArn" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.loggingConfigurationWebserverLogsCloudWatchLogGroupArn"></a>

```typescript
public readonly loggingConfigurationWebserverLogsCloudWatchLogGroupArn: string;
```

- *Type:* string

The ARN for the CloudWatch Logs group where the Apache Airflow Web server logs are published.

---

##### `loggingConfigurationWorkerLogsCloudWatchLogGroupArn`<sup>Optional</sup> <a name="loggingConfigurationWorkerLogsCloudWatchLogGroupArn" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.loggingConfigurationWorkerLogsCloudWatchLogGroupArn"></a>

```typescript
public readonly loggingConfigurationWorkerLogsCloudWatchLogGroupArn: string;
```

- *Type:* string

The ARN for the CloudWatch Logs group where the Apache Airflow Worker logs are published.

---

##### `maxWebservers`<sup>Optional</sup> <a name="maxWebservers" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.maxWebservers"></a>

```typescript
public readonly maxWebservers: number;
```

- *Type:* number

The maximum number of web servers that you want to run in your environment.

Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for MaxWebservers when you interact with your Apache
Airflow environment using Apache Airflow REST API, or the Apache Airflow CLI. For example, in scenarios where your workload requires network
calls to the Apache Airflow REST API with a high transaction-per-second (TPS) rate, Amazon MWAA will increase the number of web servers up to
the number set in MaxWebserers. As TPS rates decrease Amazon MWAA disposes of the additional web servers, and scales down to the number set in
MinxWebserers.

Valid values: For environments larger than mw1.micro, accepts values from 2 to 5. Defaults to 2 for all environment sizes except mw1.micro,
which defaults to 1.

---

##### `maxWorkers`<sup>Optional</sup> <a name="maxWorkers" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.maxWorkers"></a>

```typescript
public readonly maxWorkers: number;
```

- *Type:* number

The maximum number of workers that you want to run in your environment.

MWAA scales the number of Apache Airflow workers up to the number you specify in the MaxWorkers field. For example, 20. When there are no more
tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or
the number you specify in MinWorkers.

---

##### `minWebservers`<sup>Optional</sup> <a name="minWebservers" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.minWebservers"></a>

```typescript
public readonly minWebservers: number;
```

- *Type:* number

The minimum number of web servers that you want to run in your environment.

Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for MaxWebservers when you interact with your Apache
Airflow environment using Apache Airflow REST API, or the Apache Airflow CLI. As the transaction-per-second rate, and the network load,
decrease, Amazon MWAA disposes of the additional web servers, and scales down to the number set in MinxWebserers.

Valid values: For environments larger than mw1.micro, accepts values from 2 to 5. Defaults to 2 for all environment sizes except mw1.micro,
which defaults to 1.

---

##### `minWorkers`<sup>Optional</sup> <a name="minWorkers" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.minWorkers"></a>

```typescript
public readonly minWorkers: number;
```

- *Type:* number

The minimum number of workers that you want to run in your environment.

MWAA scales the number of Apache Airflow workers up to the number you
specify in the MaxWorkers field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving
the worker count you specify in the MinWorkers field. For example, 2.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: NetworkConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.NetworkConfiguration">NetworkConfiguration</a>

The VPC networking components used to secure and enable network traffic between the AWS resources for your environment.

---

##### `pluginsS3ObjectVersion`<sup>Optional</sup> <a name="pluginsS3ObjectVersion" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.pluginsS3ObjectVersion"></a>

```typescript
public readonly pluginsS3ObjectVersion: string;
```

- *Type:* string

The version of the plugins.zip file on your Amazon S3 bucket.

---

##### `pluginsS3Path`<sup>Optional</sup> <a name="pluginsS3Path" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.pluginsS3Path"></a>

```typescript
public readonly pluginsS3Path: string;
```

- *Type:* string

The relative path to the plugins.zip file on your Amazon S3 bucket. For example, plugins.zip.

---

##### `requirementsS3ObjectVersion`<sup>Optional</sup> <a name="requirementsS3ObjectVersion" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.requirementsS3ObjectVersion"></a>

```typescript
public readonly requirementsS3ObjectVersion: string;
```

- *Type:* string

The version of the requirements.txt file on your Amazon S3 bucket.

---

##### `requirementsS3Path`<sup>Optional</sup> <a name="requirementsS3Path" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.requirementsS3Path"></a>

```typescript
public readonly requirementsS3Path: string;
```

- *Type:* string

The relative path to the requirements.txt file on your Amazon S3 bucket. For example, requirements.txt.

---

##### `schedulers`<sup>Optional</sup> <a name="schedulers" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.schedulers"></a>

```typescript
public readonly schedulers: number;
```

- *Type:* number

The number of schedulers that you want to run in your environment.

Valid values:
v2 - For environments larger than mw1.micro, accepts values from 2 to 5.
     Defaults to 2 for all environment sizes except mw1.micro, which defaults to 1.
v1 - Accepts 1.

---

##### `sourceBucket`<sup>Optional</sup> <a name="sourceBucket" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.sourceBucket"></a>

```typescript
public readonly sourceBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

The Amazon S3 bucket where your DAG code and supporting files are stored.

---

##### `startupScriptS3ObjectVersion`<sup>Optional</sup> <a name="startupScriptS3ObjectVersion" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.startupScriptS3ObjectVersion"></a>

```typescript
public readonly startupScriptS3ObjectVersion: string;
```

- *Type:* string

The version of the startup shell script in your Amazon S3 bucket.

You must specify the version ID that Amazon S3 assigns to the file every time you update the script.
Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long.

The following is an example:
     3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo

---

##### `startupScriptS3Path`<sup>Optional</sup> <a name="startupScriptS3Path" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.startupScriptS3Path"></a>

```typescript
public readonly startupScriptS3Path: string;
```

- *Type:* string

The relative path to the startup shell script in your Amazon S3 bucket.

For example, s3://mwaa-environment/startup.sh.
Amazon MWAA runs the script as your environment starts, and before running the Apache Airflow process.
You can use this script to install dependencies, modify Apache Airflow configuration options, and set environment variables.

---

##### `webserverAccessMode`<sup>Optional</sup> <a name="webserverAccessMode" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.webserverAccessMode"></a>

```typescript
public readonly webserverAccessMode: WebserverAccessMode;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_mwaa.WebserverAccessMode">WebserverAccessMode</a>

The Apache Airflow Web server access mode.

---

##### `webserverUrl`<sup>Optional</sup> <a name="webserverUrl" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.webserverUrl"></a>

```typescript
public readonly webserverUrl: string;
```

- *Type:* string

The URL of your Apache Airflow UI.

---

##### `webserverVpcEndpointService`<sup>Optional</sup> <a name="webserverVpcEndpointService" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.webserverVpcEndpointService"></a>

```typescript
public readonly webserverVpcEndpointService: string;
```

- *Type:* string

The VPC endpoint for the environment's web server.

---

##### `weeklyMaintenanceWindowStart`<sup>Optional</sup> <a name="weeklyMaintenanceWindowStart" id="@robhan-cdk-lib/aws_mwaa.IEnvironment.property.weeklyMaintenanceWindowStart"></a>

```typescript
public readonly weeklyMaintenanceWindowStart: string;
```

- *Type:* string

The day and time of the week to start weekly maintenance updates of your environment in the following format: DAY:HH:MM.

For example: TUE:03:30. You can specify a start time in 30 minute increments only.

Supported input includes the following:
     MON|TUE|WED|THU|FRI|SAT|SUN:([01]\\d|2[0-3]):(00|30)

---

## Enums <a name="Enums" id="Enums"></a>

### AirflowVersion <a name="AirflowVersion" id="@robhan-cdk-lib/aws_mwaa.AirflowVersion"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.AirflowVersion.V2_7_2">V2_7_2</a></code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.AirflowVersion.V2_8_1">V2_8_1</a></code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.AirflowVersion.V2_9_2">V2_9_2</a></code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.AirflowVersion.V2_10_1">V2_10_1</a></code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.AirflowVersion.V2_10_3">V2_10_3</a></code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.AirflowVersion.V3_0_6">V3_0_6</a></code> | *No description.* |

---

##### `V2_7_2` <a name="V2_7_2" id="@robhan-cdk-lib/aws_mwaa.AirflowVersion.V2_7_2"></a>

---


##### `V2_8_1` <a name="V2_8_1" id="@robhan-cdk-lib/aws_mwaa.AirflowVersion.V2_8_1"></a>

---


##### `V2_9_2` <a name="V2_9_2" id="@robhan-cdk-lib/aws_mwaa.AirflowVersion.V2_9_2"></a>

---


##### `V2_10_1` <a name="V2_10_1" id="@robhan-cdk-lib/aws_mwaa.AirflowVersion.V2_10_1"></a>

---


##### `V2_10_3` <a name="V2_10_3" id="@robhan-cdk-lib/aws_mwaa.AirflowVersion.V2_10_3"></a>

---


##### `V3_0_6` <a name="V3_0_6" id="@robhan-cdk-lib/aws_mwaa.AirflowVersion.V3_0_6"></a>

---


### EndpointManagement <a name="EndpointManagement" id="@robhan-cdk-lib/aws_mwaa.EndpointManagement"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EndpointManagement.CUSTOMER">CUSTOMER</a></code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EndpointManagement.SERVICE">SERVICE</a></code> | *No description.* |

---

##### `CUSTOMER` <a name="CUSTOMER" id="@robhan-cdk-lib/aws_mwaa.EndpointManagement.CUSTOMER"></a>

---


##### `SERVICE` <a name="SERVICE" id="@robhan-cdk-lib/aws_mwaa.EndpointManagement.SERVICE"></a>

---


### EnvironmentClass <a name="EnvironmentClass" id="@robhan-cdk-lib/aws_mwaa.EnvironmentClass"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentClass.MW1_MICRO">MW1_MICRO</a></code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentClass.MW1_SMALL">MW1_SMALL</a></code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentClass.MW1_MEDIUM">MW1_MEDIUM</a></code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentClass.MW1_LARGE">MW1_LARGE</a></code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentClass.MW1_1LARGE">MW1_1LARGE</a></code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.EnvironmentClass.MW1_2LARGE">MW1_2LARGE</a></code> | *No description.* |

---

##### `MW1_MICRO` <a name="MW1_MICRO" id="@robhan-cdk-lib/aws_mwaa.EnvironmentClass.MW1_MICRO"></a>

---


##### `MW1_SMALL` <a name="MW1_SMALL" id="@robhan-cdk-lib/aws_mwaa.EnvironmentClass.MW1_SMALL"></a>

---


##### `MW1_MEDIUM` <a name="MW1_MEDIUM" id="@robhan-cdk-lib/aws_mwaa.EnvironmentClass.MW1_MEDIUM"></a>

---


##### `MW1_LARGE` <a name="MW1_LARGE" id="@robhan-cdk-lib/aws_mwaa.EnvironmentClass.MW1_LARGE"></a>

---


##### `MW1_1LARGE` <a name="MW1_1LARGE" id="@robhan-cdk-lib/aws_mwaa.EnvironmentClass.MW1_1LARGE"></a>

---


##### `MW1_2LARGE` <a name="MW1_2LARGE" id="@robhan-cdk-lib/aws_mwaa.EnvironmentClass.MW1_2LARGE"></a>

---


### LogLevel <a name="LogLevel" id="@robhan-cdk-lib/aws_mwaa.LogLevel"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.LogLevel.DEBUG">DEBUG</a></code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.LogLevel.INFO">INFO</a></code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.LogLevel.WARNING">WARNING</a></code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.LogLevel.ERROR">ERROR</a></code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.LogLevel.CRITICAL">CRITICAL</a></code> | *No description.* |

---

##### `DEBUG` <a name="DEBUG" id="@robhan-cdk-lib/aws_mwaa.LogLevel.DEBUG"></a>

---


##### `INFO` <a name="INFO" id="@robhan-cdk-lib/aws_mwaa.LogLevel.INFO"></a>

---


##### `WARNING` <a name="WARNING" id="@robhan-cdk-lib/aws_mwaa.LogLevel.WARNING"></a>

---


##### `ERROR` <a name="ERROR" id="@robhan-cdk-lib/aws_mwaa.LogLevel.ERROR"></a>

---


##### `CRITICAL` <a name="CRITICAL" id="@robhan-cdk-lib/aws_mwaa.LogLevel.CRITICAL"></a>

---


### WebserverAccessMode <a name="WebserverAccessMode" id="@robhan-cdk-lib/aws_mwaa.WebserverAccessMode"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.WebserverAccessMode.PRIVATE_ONLY">PRIVATE_ONLY</a></code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.WebserverAccessMode.PUBLIC_ONLY">PUBLIC_ONLY</a></code> | *No description.* |

---

##### `PRIVATE_ONLY` <a name="PRIVATE_ONLY" id="@robhan-cdk-lib/aws_mwaa.WebserverAccessMode.PRIVATE_ONLY"></a>

---


##### `PUBLIC_ONLY` <a name="PUBLIC_ONLY" id="@robhan-cdk-lib/aws_mwaa.WebserverAccessMode.PUBLIC_ONLY"></a>

---


### WorkerReplacementStrategy <a name="WorkerReplacementStrategy" id="@robhan-cdk-lib/aws_mwaa.WorkerReplacementStrategy"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.WorkerReplacementStrategy.FORCED">FORCED</a></code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_mwaa.WorkerReplacementStrategy.GRACEFUL">GRACEFUL</a></code> | *No description.* |

---

##### `FORCED` <a name="FORCED" id="@robhan-cdk-lib/aws_mwaa.WorkerReplacementStrategy.FORCED"></a>

---


##### `GRACEFUL` <a name="GRACEFUL" id="@robhan-cdk-lib/aws_mwaa.WorkerReplacementStrategy.GRACEFUL"></a>

---

