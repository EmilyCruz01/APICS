const { app, server, io } = require('./config/server');
const routes = require('./routes');

app.use(express.json());

io.on('connection', (socket) => {
  console.log('Usuario conectado');

  socket.on('chat message', (msg) => {
    console.log('Mensaje recibido:', msg);
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('Usuario desconectado');
  });
});


app.use('/', routes);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
