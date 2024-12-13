# Enums

Enums allow a developer to define a set of named constants. Makes it easier to document intent, distinct cases.

## Numeric Enums

Numbers are incremented, UP - 1, Down - 2, …. Attr -n +1

```
enum Direction{
	Up = 1,
    Down,
    Left,
    Right
}

enum HttpStatus {
	OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    NOT_FOUND = 404
}
```

## String Enums

Don't have auto increment behavior  each member has to be constant-initialized
String enums serialize well, debugging is easier as you have readable values

You can declare types using the enum name. You can just Access a member by referencing the  member as a property of the enum.

```
enum Direction {
	Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}
```
```
function respond (recipient: string, message: UserResponse): void {
	// ...
}

respond("Princess Caroline", UserResponse.Yes);
```

# Classes

·  	blueprint for creating objects with shared properties and methods
·  	encapsulate related data and behavior together
·  	to define a class in TypeScript, we use the class keyword
·  	Inside the class it define properties and methods that belong to that class
·  	Properties can have types, allows to catch type-related errors at compile-time instead of runtime.
·  	define access modifiers like public, private, and protected.
·  	TypeScript supports inheritance, reuse it’s methods and properties

```
class Person {
	name: String;
}

const Person = new Person();
Person.name = "Jane";
```
```
class Person {
	name: String;
    
    public constructor(name: string) {
    	this.name = name;
    }
    
    public getName(): string {
    	return this.name;
    }
}

const Person = new Person("Jane");
console.log(Person.getName());
```

# Basic Generics

Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.

Without Genertics
```
// specific type
function echo1(arg: number): number {
	return arg;
}
console.log(echo1(13));

// using any
function echo2(input: any): any {
	return input;
}
console.log(echo2(20));
console.log(echo2('hello'));
```
```
function echo3<T>(input: T): T {
	return input;
}
console.log(echo3<boolean>(true));
console.log(echo3<string>('cat'));

function createPair<S, T>(v1: S, v2: T): [S, T] {
	return [v1, v2];
}
console.log(createPair<string, number>('car', 42));
```

# Array Generics

Array generics use the same principle as basic generics, but are applied to an array of a type that can be defined later. Although this could be achieved by using the “any” keyword, generics will preserve what type is used after invoking the function, which allows enforcing type safety..

```
function genericArrayExample<T>(array: T[]): T {
	return array[2];
}

let numberArray = [1, 2, 3];
console.log("the third element of the number is " + genericArrayExample(numberArray));

let strArray = ["first", "second", "third"];
console.log("the third element of the string array is " + genericArrayExample(strArray));
```

# Utility Types
TypeScript utility types are built-in tools that help simplify working with types in TypeScript. They offer shortcuts for common type transformations like making properties optional, extracting certain properties, or filtering out specific types.

Partial: Partial changes all the properties in an object to be optional. Partial<T>
```
interface point {
	x: number;
    y: number;
}

let pointPart: Partial<point> = {} // partial allows x and y

console.log(pointPart);
```

Required: Required changes all the properties in an object to be required. Required<T>
```
interface Car {
	make: string;
    model: string;
    mileage?: number;
}

let myCar: Required<Car> = {
	make: 'Ford',
    model: 'Focus',
    mileage: 12000 // required forces mileage to be defined
}
```

Record: Record is a shortcut to defining an object type with a specific key type and value type. Read<T>
```
const nameAgeMap: Record<string, number> = {
	'Alice': 21;
    'Bob': 25;
}
```

Omit: Omit removes keys from an object type.
```
interface Person {
	name: string;
    age: number;
    location?: string;
}

const bob: Omit<Person, 'age' | 'location'> = {
	name: 'Bob';
};
console.log(bob);
```

Pick: Pick allows to select properties from an existing type.

Exclude: Exclude removes types from a union.
```
type value = string | number | boolean;
const myValue: Exclude<value, number> = "marie";
console.timeLog(myValue);
```

ReturnType:Constructs a type consisting of the return type of function Type.
```
type PointGenerator = () => {x: number, y: number; };
const point: ReturnType<PointGenerator> = {
	x: 10,
    y: 20
}
```

Parameters Type : takes the parameters or arguments of a function and create a new type based off them.
```
type PointPrinter = (p: {x: number, y: number; }) => void;
const point: Parameters<PointPrinter>[0] = {
	x: 10,
    y: 20
}
```

# Casting

Type Assertions:
  Syntax: either us the “as” keyword or specify datatype like this = <dataype> value
  Only works with assertions
  Type conversion with assertion will give an error
  Happens during runtime, therefore is more efficient

```
let num1 : unknown = false;

// making x = "false" would give an error
let y : number = x as number;
console.log((x as number) + 5);

console.log(typeof x);	// will give boolean not unknown
```

Type Conversion:
  Has to be done beforehand, therefore is less efficient.
```
let str : string = "123";
let num : number = Number.parseInt(str);
// will convert the string to number
```
