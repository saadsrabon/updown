const handler ={};

handler.sampleHandler = (requestDetails, callback) => {
    callback(200, {
        message: "Hello world from sample handler"
    })
}
handler.about = (requestDetails, callback) => {
    callback(200, {
        message: "Hello world from about handler"
    })
}

module.exports = handler