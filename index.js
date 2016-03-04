'use strict'

const Hapi = require('hapi');

function MyPlugin(server, options, next) {
    undefinedFunction()

    next()
}

MyPlugin.attributes = {
    name: 'my-plugin',
    version: '1.0.0'
};

const plugins = [
    MyPlugin
];

const server = new Hapi.Server();

server.connection({
    port: process.env.PORT || 3000,
    routes: {
        cors: true
    }
});

server.register(plugins)
    .then(() => server.start())
    .then(() => console.log('Server started', server.info))
    .catch(err => {
        console.log('Start error', err)
    });
