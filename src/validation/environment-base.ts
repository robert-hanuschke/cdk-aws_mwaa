import { validateArrayLength, validateNumberRange, validateObjectAttributes, validateRegExp, validateStringLength } from '@robhan-cdk-lib/utils';
import { EnvironmentProps } from '../environment';
import { EnvironmentClass, LoggingConfiguration, ModuleLoggingConfiguration, NetworkConfiguration } from '../environment-base';

export function validateName(name: any): string[] {
  const errors: string[] = [];

  if (typeof name !== 'string') {
    errors.push('must be a string');
    return errors; // No need to check further if not a string
  }

  errors.push(...validateStringLength({
    value: name,
    min: 1,
    max: 80,
  }));

  errors.push(...validateRegExp({
    regExp: /^[a-zA-Z][0-9a-zA-Z-_]*$/,
    value: name,
  }));

  return errors;
}

export function validateAirflowConfigurationOptions(airflowConfigurationOptions: any): string[] {
  const errors: string[] = [];

  if (typeof airflowConfigurationOptions !== 'object') {
    errors.push('must be an object');
    return errors; // No need to check further if not an object
  }

  for (const [key, value] of Object.entries(airflowConfigurationOptions)) {
    errors.push(...validateStringLength({
      value: key,
      min: 1,
      max: 64,
      message: `key "${key}" must be between 1 and 64 characters long`,
    }));

    errors.push(...validateRegExp({
      regExp: /^[a-z]+([a-z0-9._]*[a-z0-9_]+)?$/,
      value: key,
      messagePrefix: `key "${key}" `,
    }));

    if (typeof value !== 'string') {
      errors.push(`value for key "${key}" must be a string`);
      continue; // No need to check further if not a string
    }

    errors.push(...validateStringLength({
      value: value,
      min: 1,
      max: 65536,
      message: `value for key "${key}" must be between 1 and 65536 characters long`,
    }));
  }

  return errors;
}

function validateModuleLoggingConfiguration(moduleLoggingConfiguration: any): string[] {
  const errors: string[] = [];

  if (typeof moduleLoggingConfiguration !== 'object') {
    errors.push('must be an object');
    return errors; // No need to check further if not an object
  }

  const moduleLoggingConfigurationObject = moduleLoggingConfiguration as ModuleLoggingConfiguration;
  errors.push(...validateObjectAttributes({
    inputObject: moduleLoggingConfigurationObject,
    mandatoryAttributes: [],
    optionalAttributes: ['cloudWatchLogGroup', 'enabled', 'logLevel'],
  }));

  if (moduleLoggingConfigurationObject.enabled !== undefined) {
    if (typeof moduleLoggingConfigurationObject.enabled !== 'boolean') {
      errors.push('enabled: must be a boolean');
    }
  }

  return errors;
}

export function validateLoggingConfiguration(loggingConfiguration: any): string[] {
  const errors: string[] = [];

  if (typeof loggingConfiguration !== 'object') {
    errors.push('must be an object');
    return errors; // No need to check further if not an object
  }

  const loggingConfigurationObject = loggingConfiguration as LoggingConfiguration;
  errors.push(...validateObjectAttributes({
    inputObject: loggingConfigurationObject,
    mandatoryAttributes: [],
    optionalAttributes: ['dagProcessingLogs', 'schedulerLogs', 'taskLogs', 'webServerLogs', 'workerLogs'],
  }));

  if (loggingConfigurationObject.dagProcessingLogs !== undefined) {
    errors.push(...validateModuleLoggingConfiguration(loggingConfigurationObject.dagProcessingLogs).map(error => `dagProcessingLogs: ${error}`));
  }

  if (loggingConfigurationObject.schedulerLogs !== undefined) {
    errors.push(...validateModuleLoggingConfiguration(loggingConfigurationObject.schedulerLogs).map(error => `schedulerLogs: ${error}`));
  }

  if (loggingConfigurationObject.taskLogs !== undefined) {
    errors.push(...validateModuleLoggingConfiguration(loggingConfigurationObject.taskLogs).map(error => `taskLogs: ${error}`));
  }

  if (loggingConfigurationObject.webServerLogs !== undefined) {
    errors.push(...validateModuleLoggingConfiguration(loggingConfigurationObject.webServerLogs).map(error => `webServerLogs: ${error}`));
  }

  if (loggingConfigurationObject.workerLogs !== undefined) {
    errors.push(...validateModuleLoggingConfiguration(loggingConfigurationObject.workerLogs).map(error => `workerLogs: ${error}`));
  }

  return errors;
}

export function validateNetworkConfiguration(networkConfiguration: any): string[] {
  const errors: string[] = [];

  if (typeof networkConfiguration !== 'object') {
    errors.push('must be an object');
    return errors; // No need to check further if not an object
  }

  const networkConfigurationObject = networkConfiguration as NetworkConfiguration;
  errors.push(...validateObjectAttributes({
    inputObject: networkConfigurationObject,
    mandatoryAttributes: [],
    optionalAttributes: ['securityGroups', 'subnets'],
  }));

  if (networkConfigurationObject.securityGroups !== undefined) {
    if (!Array.isArray(networkConfigurationObject.securityGroups)) {
      errors.push('securityGroups: must be an array');
    } else {
      errors.push(...validateArrayLength({
        value: networkConfigurationObject.securityGroups,
        min: 1,
        max: 5,
        messagePrefix: 'securityGroups: ',
      }));
    }
  }

  if (networkConfigurationObject.subnets !== undefined) {
    if (!Array.isArray(networkConfigurationObject.subnets)) {
      errors.push('subnets: must be an array');
    } else {
      errors.push(...validateArrayLength({
        value: networkConfigurationObject.subnets,
        min: 2,
        max: 2,
        messagePrefix: 'subnets: ',
      }));
    }
  }

  return errors;
}

export function validateDagS3Path(dagS3Path: any): string[] {
  const errors: string[] = [];

  if (typeof dagS3Path !== 'string') {
    errors.push('must be a string');
    return errors; // No need to check further if not a string
  }

  errors.push(...validateStringLength({
    value: dagS3Path,
    min: 1,
    max: 1024,
  }));

  return errors;
}

export function validateMaxWebservers(props: EnvironmentProps): string[] {
  const errors: string[] = [];

  if (props.maxWebservers !== undefined) {
    if (typeof props.maxWebservers !== 'number') {
      return ['must be a number'];
    }

    if (props.environmentClass) {
      if (props.environmentClass === EnvironmentClass.MW1_MICRO) {
        errors.push(...validateNumberRange({
          value: props.maxWebservers,
          min: 1,
          max: 1,
        }));
      } else {
        errors.push(...validateNumberRange({
          value: props.maxWebservers,
          min: 2,
          max: 5,
        }));
      }
    }
  }

  return errors;
}

export function validateMaxWorkers(maxWorkers: any): string[] {
  const errors: string[] = [];

  if (
    typeof maxWorkers !== 'number'
  ) {
    return ['must be a number'];
  }

  errors.push(...validateNumberRange({
    value: maxWorkers,
    min: 1,
  }));

  return errors;
}

export function validateMinWebservers(props: EnvironmentProps): string[] {
  const errors: string[] = [];

  if (props.minWebservers !== undefined) {
    if (typeof props.minWebservers !== 'number') {
      return ['must be a number'];
    }

    if (props.environmentClass) {
      if (props.environmentClass === EnvironmentClass.MW1_MICRO) {
        errors.push(...validateNumberRange({
          value: props.minWebservers,
          min: 1,
          max: 1,
        }));
      } else {
        errors.push(...validateNumberRange({
          value: props.minWebservers,
          min: 2,
          max: 5,
        }));
      }
    }
  }

  return errors;
}

export function validateMinWorkers(minWorkers: any): string[] {
  const errors: string[] = [];

  if (
    typeof minWorkers !== 'number'
  ) {
    return ['must be a number'];
  }

  errors.push(...validateNumberRange({
    value: minWorkers,
    min: 1,
  }));

  return errors;
}

export function validatePluginsS3ObjectVersion(pluginsS3ObjectVersion: any): string[] {
  const errors: string[] = [];

  if (typeof pluginsS3ObjectVersion !== 'string') {
    errors.push('must be a string');
    return errors; // No need to check further if not a string
  }

  errors.push(...validateStringLength({
    value: pluginsS3ObjectVersion,
    min: 1,
    max: 1024,
  }));

  return errors;
}

export function validatePluginsS3Path(pluginsS3Path: any): string[] {
  const errors: string[] = [];

  if (typeof pluginsS3Path !== 'string') {
    errors.push('must be a string');
    return errors; // No need to check further if not a string
  }

  errors.push(...validateStringLength({
    value: pluginsS3Path,
    min: 1,
    max: 1024,
  }));

  return errors;
}

export function validateRequirementsS3ObjectVersion(requirementsS3ObjectVersion: any): string[] {
  const errors: string[] = [];

  if (typeof requirementsS3ObjectVersion !== 'string') {
    errors.push('must be a string');
    return errors; // No need to check further if not a string
  }

  errors.push(...validateStringLength({
    value: requirementsS3ObjectVersion,
    min: 1,
    max: 1024,
  }));

  return errors;
}

export function validateRequirementsS3Path(requirementsS3Path: any): string[] {
  const errors: string[] = [];

  if (typeof requirementsS3Path !== 'string') {
    errors.push('must be a string');
    return errors; // No need to check further if not a string
  }

  errors.push(...validateStringLength({
    value: requirementsS3Path,
    min: 1,
    max: 1024,
  }));

  return errors;
}

export function validateSchedulers(schedulers: any): string[] {
  const errors: string[] = [];

  if (
    typeof schedulers !== 'number'
  ) {
    return ['must be a number'];
  }

  errors.push(...validateNumberRange({
    value: schedulers,
    min: 1,
    max: 5,
  }));

  return errors;
}

export function validateStartupScriptS3ObjectVersion(startupScriptS3ObjectVersion: any): string[] {
  const errors: string[] = [];

  if (typeof startupScriptS3ObjectVersion !== 'string') {
    errors.push('must be a string');
    return errors; // No need to check further if not a string
  }

  errors.push(...validateStringLength({
    value: startupScriptS3ObjectVersion,
    min: 1,
    max: 1024,
  }));

  return errors;
}

export function validateStartupScriptS3Path(startupScriptS3Path: any): string[] {
  const errors: string[] = [];

  if (typeof startupScriptS3Path !== 'string') {
    errors.push('must be a string');
    return errors; // No need to check further if not a string
  }

  errors.push(...validateStringLength({
    value: startupScriptS3Path,
    min: 1,
    max: 1024,
  }));

  return errors;
}

export function validateWeeklyMaintenanceWindowStart(weeklyMaintenanceWindowStart: any): string[] {
  const errors: string[] = [];

  if (typeof weeklyMaintenanceWindowStart !== 'string') {
    errors.push('must be a string');
    return errors; // No need to check further if not a string
  }

  errors.push(...validateStringLength({
    value: weeklyMaintenanceWindowStart,
    min: 1,
    max: 9,
  }));

  errors.push(...validateRegExp({
    value: weeklyMaintenanceWindowStart,
    regExp: /^.*(MON|TUE|WED|THU|FRI|SAT|SUN):([01]\d|2[0-3]):(00|30).*$/,
  }));


  return errors;
}