const handler ={};

handler.notFound = (requestDetails, callback) => {
    callback(404, {
        message: "This route not found"
    })
}

module.exports = handler