export class Phone {
  private _value: string;

  get value(): string {
    return this._value;
  }

  constructor(value: string) {
    if (!value) throw new Error('Invalid phone');

    const regexString = '^\\d{11}$';
    const regexPhone = new RegExp(regexString);

    if (!regexPhone.test(value)) throw new Error('Invalid phone');

    this._value = value;
  }
}
