import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export function IsStartTime(validationOptions?: ValidationOptions) {
  return function (object, propertyName: string) {
    registerDecorator({
      name: 'isStartTime',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          // const dateMinutesSecondSplit = value.split(':');

          return Date.parse(value) > Date.now();
        },
      },
    });
  };
}

export function IsEndTime(
  property: string,
  validationOptions?: ValidationOptions
) {
  return function (object, propertyName: string) {
    registerDecorator({
      name: 'isEndTime',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const relatedValue = (args.object as any)[relatedPropertyName];
          return Date.parse(value) > Date.parse(relatedValue);
        },
      },
    });
  };
}
