import * as Hapi from 'hapi';
import { routes } from './app/tasks/task.routes';

const server = Hapi.server({
    port: 3333,
    routes: {
        cors: true
    }
});

server.route(routes);

const init = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();