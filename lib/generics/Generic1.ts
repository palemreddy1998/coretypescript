export  class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
