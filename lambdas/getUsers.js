const Responses = require("./API_Responses");

exports.handler = async event => {
    console.log(JSON.stringify(event, null, 2));

    if(!event.pathParameters || !event.pathParameters.ID) {
        // failed due to no ID specified
        return Responses._error({ message: 'Invalid ID from the path parameters'});
    }

    let ID = event.pathParameters.ID;

    if(data[ID]) {
        // return data
        return Responses._success({ message: "Found", data: data[ID] });
    }

    // case of no id in data
    return Responses._error({ message: 'No ID specified'});
}

const data = {
    1234:{
        id:1234,
        name:"John",
        age:30,
    },
    5678:{
        id:5678,
        name:"Jack",
        age:30,
    },
    9012:{
        id:9012,
        name:"Jill",
        age:30,
    },
};