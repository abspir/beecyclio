exports.handler = async function (event, context) {
    const req = JSON.parse(event.body)
    return {
        statusCode: 200,
        body: JSON.stringify({ message: req }),
    };
}