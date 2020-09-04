//Crear en JSBIN una promesa que resuelva en tres segundos un array de objetos de tipo producto. Al resolver, imprimirlos en consola
//{ id: string, name: string, description: string, stock: number }
//Tiempo: 15 minutos

const task = new Promise((resolve, reject) => {
  //Tarea Síncrona
  setTimeout(() => {
    const data = [
      {id: 'string', name: 'string', description: 'string', stock: 4},
      {id: 'string', name: 'string', description: 'string', stock: 4},
      {id: 'string', name: 'string', description: 'string', stock: 4}
    ]
    resolve(data);
  }, 3000);
});

task.then((result) => {
  console.log(result);
});

const products = [
  {id: '1', name: 'producto1'},
  {id: '2', name: 'producto2'},
  {id: '3', name: 'producto3'}
];

const objectsNames = products.map((product) => product.name);
console.log(objectsNames);