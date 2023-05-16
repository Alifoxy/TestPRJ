import { registerDecorator, ValidationOptions } from 'class-validator';

export const IsValid = (validationOption?: ValidationOptions) => {
    return (object, propertyName) => {
        registerDecorator({
            name: 'CountOfCars',
            target: object.constructor,
            propertyName,
            constraints: [],
            options: {
                message: 'You must have premium to post more than 1 advertisement !',
                ...validationOption,
            },
            validator: {
                validate(value: any) {
                    // regex day - maximum 365
                    const regex =
                        /^(?:\d\d?|[12]\d{2}|3[0-5]\d|36[0-6])\/(?:\d\d?|[12]\d{2}|3[0-5]\d|36[0-6])$/;
                    return typeof value === 'string' && regex.test(value);
                },
            },
        });
    };
};