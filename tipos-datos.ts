//Desarrollo de archivo 
// 1. Tipos primitivos en TypeScript (string, number, boolean).
const myString: string = "Hola, soy un string";
const myNumber: number = 42;
const isBoolean: boolean = true;

// 2. Enumeraciones en TypeScript.
enum DaysOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const today: DaysOfWeek = DaysOfWeek.Saturday;
console.log("Today is:", DaysOfWeek[today]); // Imprimirá "Today is: Saturday"

// 3. Tipos any y unknown en TypeScript, cuáles son sus diferencias.
let anyType: any = "puedo ser cualquier cosa";
let unknownType: unknown = 42;

// Ejemplo de uso de tipos any y unknown:
let myValue: any = "Hola";
let myLength: number = (myValue as string).length;

// 4. Tipos de unión e intersección en TypeScript.
type StringOrNumber = string | number;
type NumberOrBoolean = number | boolean;

function displayData(data: StringOrNumber) {
  console.log("Data:", data);
}

displayData("Hola"); // Funciona con un string
displayData(42); // Funciona con un número

// 5. Tipos de colección en TypeScript (arrays, tuplas, sets, maps).

// Arrays
const myArray: number[] = [1, 2, 3, 4];
const myStringArray: string[] = ["a", "b", "c"];

// Tuplas
const myTuple: [string, number] = ["valor", 42];

// Sets
const mySet: Set<number> = new Set([1, 2, 3]);

// Maps
const myMap: Map<string, number> = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);



//buenas prácticas para el uso de tipos en Typescript y cómo se pueden aplicar en un proyecto real:
// Utilizar tipos explícitos en lugar de 'any' cuando sea posible.
function addNumbers(a: number, b: number): number {
    return a + b;
  }
  
  // Utilizar uniones e intersecciones para hacer que los tipos sean más flexibles pero seguros.
  type StringOrBoolean = string | boolean;
  type NumberOrStringArray = number[] | string[];
  
  // Hacer uso de las ventajas que brinda TypeScript para prevenir errores en tiempo de compilación.
  // Evitar usar 'any' a menos que sea estrictamente necesario, ya que elimina la verificación de tipos.

// Mantener los tipos actualizados y revisar regularmente los errores del compilador.

// Usar interfaces y types para definir estructuras de datos complejas y reutilizables.

// Evitar el uso excesivo de 'non-null assertion' (valor!) y 'any' para mantener la seguridad del código.