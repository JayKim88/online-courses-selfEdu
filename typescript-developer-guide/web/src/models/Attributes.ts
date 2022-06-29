export class Attributes<T> {
  constructor(private data: T) {}

  // string can be a type
  // object key is string
  // thus, object key can be a type!
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };
  set(update: T): void {
    Object.assign(this.data, update);
  }
  getAll(): T {
    return this.data;
  }
}
