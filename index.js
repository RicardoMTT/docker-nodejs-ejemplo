// Importamos `setTimeout` desde timers/promises (Node.js 16+)
import { setTimeout } from 'timers/promises';// Error si estamos en nodejs 14
import express from 'express'; //

// Crear una aplicación de Express
const app = express();

const PORT = 3000;

app.get('/', async(req, res) => {

    await ejecutarTarea();

    res.send('Hello World');
  });

  app.listen(PORT, ( ) => {
    console.log('server listening on port',PORT);
  })
async function ejecutarTarea() {
  console.log('Iniciando tarea modificado...');
  
  // Esperar 2 segundos usando `setTimeout` con promesas
  await setTimeout(2000);

  console.log('Tarea completada después de 2 segundos');
}

