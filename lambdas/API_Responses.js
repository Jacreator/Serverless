const Responses = {
    _success(data = {}){
        return {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*'
            },
            statusCode: 200,
            body: JSON.stringify(data)
        }
    },
    // 400 this response
    _error(data = {}) {
        return {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*'
            },
            statusCode: 400,
            body: JSON.stringify(data)
        }
    }
};

module.exports = Responses;