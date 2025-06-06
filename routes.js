const {sampleHandler,about} = require('./handlers/routehandlers/SampleHandlers');
const routes ={
    'sample':sampleHandler,
    'about':about
}

module.exports = routes