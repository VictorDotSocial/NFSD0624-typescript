// 1. Decorador para registrar validaciones
function IsString(target: any, propertyKey: string) {
  if (!target.constructor.validations) {
    target.constructor.validations = [];
  }
  target.constructor.validations.push({
    propertyKey,
    validate: (value: any) => typeof value === "string",
    errorMessage: `${propertyKey} debe ser una cadena de texto.`,
  });
}

function IsPositive(target: any, propertyKey: string) {
  if (!target.constructor.validations) {
    target.constructor.validations = [];
  }
  target.constructor.validations.push({
    propertyKey,
    validate: (value: any) => typeof value === "number" && value > 0,
    errorMessage: `${propertyKey} debe ser un número positivo.`,
  });
}

function IsEmail(target: any, propertyKey: string) {
  if (!target.constructor.validations) {
    target.constructor.validations = [];
  }
  target.constructor.validations.push({
    propertyKey,
    validate: (value: any) =>
      typeof value === "string" && /\S+@\S+\.\S+/.test(value),
    errorMessage: `${propertyKey} debe ser un email válido.`,
  });
}

// 2. Decorador de clase para ejecutar validaciones
function Validate<T extends { new (...args: any[]): any }>(Constructor: T): T {
  return class extends Constructor {
    constructor(...args: any[]) {
      super(...args);

      // Obtenemos las reglas de validación de la clase
      const validations = (Constructor as any).validations || [];

      // Iteramos sobre cada regla de validación
      for (const { propertyKey, validate, errorMessage } of validations) {
        const value = this[propertyKey];
        if (!validate(value)) {
          throw new Error(errorMessage);
        }
      }
    }
  };
}

// 3. Clase de ejemplo que usa los decoradores
@Validate
class User {
  static validations?: Array<{
    propertyKey: string;
    validate: (value: any) => boolean;
    errorMessage: string;
  }>;

  @IsString
  name: string;

  @IsEmail
  email: string;

  @IsPositive
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
}

// 4. Ejecución del ejemplo
try {
  const user = new User("John Doe", "johndoe@example.com", 25);
  console.log("Usuario creado con éxito:", user);
} catch (error: any) {
  console.error(error.message);
}

try {
  const invalidUser = new User("Jane Doe", "not-an-email", -10);
  console.log("Usuario creado con éxito:", invalidUser);
} catch (error: any) {
  console.error(error.message);
}
