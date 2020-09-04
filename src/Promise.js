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
    return data;
  }, 3000);
  //reject('Mensaje de error');
});

task.then((res) => {
  //throw new Error('Oops!');
  console.log('Resolved: ' + res);
}, (err) => {
  console.log('Rejected: '+ err);
}).catch((err) => {
  console.log('Problema en lectura del resultado');
  //throw new Error()
  return 'default_value';
}).then((fallback) => {
  if(fallback === 'default_value') {
    alert("Ok ya estamos procesando los datos!");
  } else {
    return 'Éxito!!!';
  }
}).finally((final) => {
  console.log(final);
});

// 'Problema en lectura del resultado'
// 'default_value'