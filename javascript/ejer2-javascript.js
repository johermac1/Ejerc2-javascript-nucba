/*  Utilizando métodos de array e iterando sobre el array de pizzas, realizar las siguientes actividades, imprimiendo en consola:

a)  Las pizzas que tengan un id impar.
b) Responder: ¿Hay alguna pizza que valga menos de $600?
c) El nombre de cada pizza con su respectivo precio.
d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.

TODAS  las respuestas deben ser USER-FRIENDLY. 
Si (como en el punto B), la respuesta es un booleano (true o false, hay o no hay), no imprimir el booleano , imprimir en consola una respuesta que toda persona pueda entender, sepa o no de programación (Es decir, no podemos imprimir un array o un objeto en consola, por ejemplo).

Manejemos cada respuesta, pensando en que un usuario promedio va a leer eso. 
 
Un ejemplo de lo que sería una repuesta "user-friendly": "La pizza X, tiene un valor de $XXXX”. 



a) Las pizzas que tengan un id impar: */

console.log("Pizzas con ID impar:");
pizzas.forEach((pizza) => {
  if (pizza.id % 2 !== 0) {
    console.log(`${pizza.nombre} - ID: ${pizza.id}`);
  }
});

/* b) ¿Hay alguna pizza que valga menos de $600? */

const pizzaBarata = pizzas.some((pizza) => pizza.precio < 600);
if (pizzaBarata) {
  console.log("Sí, hay al menos una pizza que cuesta menos de $600.");
} else {
  console.log("No, todas las pizzas tienen un precio igual o superior a $600.");
}

/* c) El nombre de cada pizza con su respectivo precio: */

console.log("Nombre y precio de cada pizza:");
pizzas.forEach((pizza) => {
  console.log(`${pizza.nombre} - Precio: $${pizza.precio}`);
});

/* d) Todos los ingredientes de cada pizza: */

console.log("Ingredientes de cada pizza:");
pizzas.forEach((pizza) => {
  console.log(
    `${pizza.nombre} - Ingredientes: ${pizza.ingredientes.join(", ")}`
  );
});
