console.log('Inicio de programa');

setTimeout(() => {
    console.log('primer Timeout');
}, 3000);

setTimeout(() => {
    console.log('Segundo Timeout');
}, 0);

setTimeout(() => {
    console.log('Tercer Timeout');
}, 0);


console.log('Fin de programas');