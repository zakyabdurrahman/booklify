function errorHandler(error, req, res, next) {
    let status = 500;
    let message = `Internal server error`;

    if (error.name === 'Unauthorized') {
        status = 401;
        message = error.msg;
    }

    if (error.name === 'SequelizeValidationError') {
        status = 400;
        message = error.errors[0].message;
    }

    if (error.name === 'SequelizeUniqueConstraintError') {
        status = 400;
        message = error.errors[0].message;
    }

    res.status(status).json({
        message
    })
}

module.exports = errorHandler;