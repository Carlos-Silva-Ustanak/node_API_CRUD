const validateBody = (request, response, next) => {

    const { body } = request;

    if (body.title  === '') {
        return response.status(400).json({ message: '"title" can not be empty!' })
    }
    if (body.title  === undefined) {
        return response.status(400).json({ message: 'field "title" is necessary!' })
    }

    next()
}


const validateStatus = (request, response, next) => {

    const { body } = request;

    if (body.status  === '') {
        return response.status(400).json({ message: '"title" can not be empty!' })
    }
    if (body.status  === undefined) {
        return response.status(400).json({ message: 'field "title" is necessary!' })
    }

    next()
}
module.exports = {
    validateBody, 
    validateStatus
}