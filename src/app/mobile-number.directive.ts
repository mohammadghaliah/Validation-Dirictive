import { Directive } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  FormControl,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';

@Directive({
  selector: '[appMobileNumberdirective]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: MobileNumberDirective, multi: true },
  ],
})
export class MobileNumberDirective implements Validator {
  constructor() {}

  validate(c: FormControl): ValidationErrors | null {
    const value: string = c.value;
    var mobileRegex =
      /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/;

    if (!value) {
    }

    const message = {
      'mobile-number-validator': {
        message: 'validators.mobileNumbersOnlyAllowed',
      },
    };

    return mobileRegex.test(value) ? null : message;
  }
}
