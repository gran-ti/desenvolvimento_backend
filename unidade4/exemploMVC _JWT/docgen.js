const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./rotas/auth-rotas.js','./rotas/jogo-rotas.js']

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('./index.js')
})