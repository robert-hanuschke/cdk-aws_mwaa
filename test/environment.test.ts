import { Stack } from 'aws-cdk-lib';
import { SecurityGroup, Subnet } from 'aws-cdk-lib/aws-ec2';
import { Role } from 'aws-cdk-lib/aws-iam';
import { Key } from 'aws-cdk-lib/aws-kms';
import { LogGroup } from 'aws-cdk-lib/aws-logs';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { AirflowVersion, EndpointManagement, Environment, EnvironmentClass, EnvironmentProps, LogLevel, WebserverAccessMode } from '../src';

let stack: Stack;

beforeEach(() => {
  stack = new Stack(undefined, undefined, { env: { account: '123456789012', region: 'us-east-1' } });
});

describe('Environment', () => {
  describe('constructor', () => {
    test('should create a new Environment', () => {
      // specifying upper valid bounds for attribures where possible
      const environment = new Environment(stack, 'Environment', {
        airflowConfigurationOptions: {
          a123456789012345678901234567890123456789012345678901234567890123: 'a'.repeat(65536),
        },
        name: 'e'.repeat(80),
        airflowVersion: AirflowVersion.V3_0_6,
        dagS3Path: 'd'.repeat(1024),
        endpointManagement: EndpointManagement.CUSTOMER,
        environmentClass: EnvironmentClass.MW1_2LARGE,
        executionRole: Role.fromRoleArn(stack, 'ExecutionRole', 'arn:aws:iam::123456789012:role/ExecutionRole'),
        kmsKey: Key.fromKeyArn(stack, 'KmsKey', 'arn:aws:kms:us-east-1:123456789012:key/KmsKey'),
        loggingConfiguration: {
          dagProcessingLogs: {
            cloudWatchLogGroup: LogGroup.fromLogGroupArn(stack, 'DagProcessingCloudWatchLogGroup', 'arn:aws:logs:us-east-1:123456789012:log-group:CloudWatchLogGroup'),
            enabled: true,
            logLevel: LogLevel.DEBUG,
          },
          schedulerLogs: {
            cloudWatchLogGroup: LogGroup.fromLogGroupArn(stack, 'SchedulerCloudWatchLogGroup', 'arn:aws:logs:us-east-1:123456789012:log-group:CloudWatchLogGroup'),
            enabled: true,
            logLevel: LogLevel.DEBUG,
          },
          taskLogs: {
            cloudWatchLogGroup: LogGroup.fromLogGroupArn(stack, 'TaskCloudWatchLogGroup', 'arn:aws:logs:us-east-1:123456789012:log-group:CloudWatchLogGroup'),
            enabled: true,
            logLevel: LogLevel.DEBUG,
          },
          webServerLogs: {
            cloudWatchLogGroup: LogGroup.fromLogGroupArn(stack, 'WebServerCloudWatchLogGroup', 'arn:aws:logs:us-east-1:123456789012:log-group:CloudWatchLogGroup'),
            enabled: true,
            logLevel: LogLevel.DEBUG,
          },
          workerLogs: {
            cloudWatchLogGroup: LogGroup.fromLogGroupArn(stack, 'WorkerCloudWatchLogGroup', 'arn:aws:logs:us-east-1:123456789012:log-group:CloudWatchLogGroup'),
            enabled: true,
            logLevel: LogLevel.DEBUG,
          },
        },
        maxWebservers: 5,
        maxWorkers: 5,
        minWebservers: 5,
        minWorkers: 5,
        networkConfiguration: {
          securityGroups: [SecurityGroup.fromSecurityGroupId(stack, 'SecurityGroup', 'sg-12345678901234567')],
          subnets: [Subnet.fromSubnetId(stack, 'Subnet', 'subnet-12345678901234567'), Subnet.fromSubnetId(stack, 'Subnet2', 'subnet-12345678901234568')],
        },
        pluginsS3ObjectVersion: 'v'.repeat(1024),
        pluginsS3Path: 'p'.repeat(1024),
        requirementsS3ObjectVersion: 'v'.repeat(1024),
        requirementsS3Path: 'r'.repeat(1024),
        schedulers: 5,
        sourceBucket: Bucket.fromBucketArn(stack, 'SourceBucket', 'arn:aws:s3:::SourceBucket'),
        startupScriptS3ObjectVersion: 'v'.repeat(1024),
        startupScriptS3Path: 's'.repeat(1024),
        webserverAccessMode: WebserverAccessMode.PRIVATE_ONLY,
        weeklyMaintenanceWindowStart: 'MON:00:00',
      });
      expect(environment).toBeDefined();
    });
    test('should create an MW1_MICRO Environment', () => {
      const environment = new Environment(stack, 'Environment', {
        airflowConfigurationOptions: {},
        name: 'test',
        environmentClass: EnvironmentClass.MW1_MICRO,
        maxWebservers: 1,
        minWebservers: 1,
      });
      expect(environment).toBeDefined();
    });
    test('should create an Environment with minimal parameters', () => {
      const environment = new Environment(stack, 'Environment', {
        airflowConfigurationOptions: {},
        name: 'test',
      });
      expect(environment).toBeDefined();
    });
    test('should fail if props is not an object', () => {
      expect(() => {
        new Environment(stack, 'Environment', 'not an object' as unknown as EnvironmentProps);
      }).toThrow('Environment constructor properties must be an object');
    });
    test('should fail if name is not a string', () => {
      expect(() => {
        new Environment(stack, 'Environment', {
          airflowConfigurationOptions: {},
          name: 123 as unknown as string,
        });
      }).toThrow('name: must be a string');
    });
    test('should fail if airflowConfigurationOptions is not an object', () => {
      expect(() => {
        new Environment(stack, 'Environment', {
          airflowConfigurationOptions: 'not an object' as unknown as any,
          name: 'test',
        });
      }).toThrow('airflowConfigurationOptions: must be an object');
    });
    test('should fail if a value in airflowConfigurationOptions is not a string', () => {
      expect(() => {
        new Environment(stack, 'Environment', {
          airflowConfigurationOptions: {
            a: 123 as unknown as string,
          },
          name: 'test',
        });
      }).toThrow('airflowConfigurationOptions: value for key \"a\" must be a string');
    });
    test('should fail if loggingConfiguration is not an object', () => {
      expect(() => {
        new Environment(stack, 'Environment', {
          airflowConfigurationOptions: {},
          name: 'test',
          loggingConfiguration: 'not an object' as unknown as any,
        });
      }).toThrow('loggingConfiguration: must be an object');
    });
    test('should fail if moduleLoggingConfiguration is not an object', () => {
      expect(() => {
        new Environment(stack, 'Environment', {
          airflowConfigurationOptions: {},
          name: 'test',
          loggingConfiguration: {
            dagProcessingLogs: 'not an object' as unknown as any,
          },
        });
      }).toThrow('loggingConfiguration: dagProcessingLogs: must be an object');
    });
    test('should fail if moduleLoggingConfiguration.enabled is not a boolean', () => {
      expect(() => {
        new Environment(stack, 'Environment', {
          airflowConfigurationOptions: {},
          name: 'test',
          loggingConfiguration: {
            dagProcessingLogs: {
              enabled: 'not a boolean' as unknown as boolean,
            },
          },
        });
      }).toThrow('loggingConfiguration: dagProcessingLogs: enabled: must be a boolean');
    });
    test('should fail if networkConfiguration is not an object', () => {
      expect(() => {
        new Environment(stack, 'Environment', {
          airflowConfigurationOptions: {},
          name: 'test',
          networkConfiguration: 'not an object' as unknown as any,
        });
      }).toThrow('networkConfiguration: must be an object');
    });
    test('should fail if securityGroups is not an array', () => {
      expect(() => {
        new Environment(stack, 'Environment', {
          airflowConfigurationOptions: {},
          name: 'test',
          networkConfiguration: {
            securityGroups: 'not an array' as unknown as any,
          },
        });
      }).toThrow('networkConfiguration: securityGroups: must be an array');
    });
    test('should fail if subnets is not an array', () => {
      expect(() => {
        new Environment(stack, 'Environment', {
          airflowConfigurationOptions: {},
          name: 'test',
          networkConfiguration: {
            subnets: 'not an array' as unknown as any,
          },
        });
      }).toThrow('networkConfiguration: subnets: must be an array');
    });
    test('should fail if dagS3Path is not a string', () => {
      expect(() => {
        new Environment(stack, 'Environment', {
          airflowConfigurationOptions: {},
          name: 'test',
          dagS3Path: 123 as unknown as string,
        });
      }).toThrow('dagS3Path: must be a string');
    });
    test('should fail if maxWebservers is not a number', () => {
      expect(() => {
        new Environment(stack, 'Environment', {
          airflowConfigurationOptions: {},
          name: 'test',
          maxWebservers: 'not a number' as unknown as number,
        });
      }).toThrow('maxWebservers: must be a number');
    });
    test('should fail if maxWorkers is not a number', () => {
      expect(() => {
        new Environment(stack, 'Environment', {
          airflowConfigurationOptions: {},
          name: 'test',
          maxWorkers: 'not a number' as unknown as number,
        });
      }).toThrow('maxWorkers: must be a number');
    });
    test('should fail if minWebservers is not a number', () => {
      expect(() => {
        new Environment(stack, 'Environment', {
          airflowConfigurationOptions: {},
          name: 'test',
          minWebservers: 'not a number' as unknown as number,
        });
      }).toThrow('minWebservers: must be a number');
    });
    test('should fail if minWorkers is not a number', () => {
      expect(() => {
        new Environment(stack, 'Environment', {
          airflowConfigurationOptions: {},
          name: 'test',
          minWorkers: 'not a number' as unknown as number,
        });
      }).toThrow('minWorkers: must be a number');
    });
    test('should fail if pluginsS3ObjectVersion is not a string', () => {
      expect(() => {
        new Environment(stack, 'Environment', {
          airflowConfigurationOptions: {},
          name: 'test',
          pluginsS3ObjectVersion: 123 as unknown as string,
        });
      }).toThrow('pluginsS3ObjectVersion: must be a string');
    });
    test('should fail if pluginsS3Path is not a string', () => {
      expect(() => {
        new Environment(stack, 'Environment', {
          airflowConfigurationOptions: {},
          name: 'test',
          pluginsS3Path: 123 as unknown as string,
        });
      }).toThrow('pluginsS3Path: must be a string');
    });
    test('should fail if requirementsS3ObjectVersion is not a string', () => {
      expect(() => {
        new Environment(stack, 'Environment', {
          airflowConfigurationOptions: {},
          name: 'test',
          requirementsS3ObjectVersion: 123 as unknown as string,
        });
      }).toThrow('requirementsS3ObjectVersion: must be a string');
    });
    test('should fail if requirementsS3Path is not a string', () => {
      expect(() => {
        new Environment(stack, 'Environment', {
          airflowConfigurationOptions: {},
          name: 'test',
          requirementsS3Path: 123 as unknown as string,
        });
      }).toThrow('requirementsS3Path: must be a string');
    });
    test('should fail if schedulers is not a number', () => {
      expect(() => {
        new Environment(stack, 'Environment', {
          airflowConfigurationOptions: {},
          name: 'test',
          schedulers: 'not a number' as unknown as number,
        });
      }).toThrow('schedulers: must be a number');
    });
    test('should fail if startupScriptS3ObjectVersion is not a string', () => {
      expect(() => {
        new Environment(stack, 'Environment', {
          airflowConfigurationOptions: {},
          name: 'test',
          startupScriptS3ObjectVersion: 123 as unknown as string,
        });
      }).toThrow('startupScriptS3ObjectVersion: must be a string');
    });
    test('should fail if startupScriptS3Path is not a string', () => {
      expect(() => {
        new Environment(stack, 'Environment', {
          airflowConfigurationOptions: {},
          name: 'test',
          startupScriptS3Path: 123 as unknown as string,
        });
      }).toThrow('startupScriptS3Path: must be a string');
    });
    test('should fail if weeklyMaintenanceWindowStart is not a string', () => {
      expect(() => {
        new Environment(stack, 'Environment', {
          airflowConfigurationOptions: {},
          name: 'test',
          weeklyMaintenanceWindowStart: 123 as unknown as string,
        });
      }).toThrow('weeklyMaintenanceWindowStart: must be a string');
    });
  });
  describe('isEnvironment', () => {
    test('should return true for Environment', () => {
      const environment = new Environment(stack, 'Environment', {
        airflowConfigurationOptions: {},
        networkConfiguration: {
          securityGroups: [SecurityGroup.fromSecurityGroupId(stack, 'SecurityGroup', 'sg-12345678901234567')],
        },
        name: 'test',
      });
      expect(Environment.isEnvironment(environment)).toBe(true);
    });
  });
  describe('import from attributes', () => {
    test('should import from attributes', () => {
      const environment = Environment.fromEnvironmentAttributes(stack, 'Environment', {
        airflowConfigurationOptions: {},
        name: 'test',
        environmentArn: 'arn:aws:airflow:us-east-1:123456789012:environment/test',
        networkConfiguration: {
          subnets: [Subnet.fromSubnetId(stack, 'Subnet', 'subnet-12345678901234567')],

        },
      });
      expect(environment).toBeDefined();
    });
  });
});