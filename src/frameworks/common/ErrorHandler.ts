const ErrorHandler = (err, req, res, next) => {
    req.locals.message = err.message
    req.locals.error = req.app.get('env') === 'development' ? err : {}

    res.status(err.status || 500);
    res.json({ error: err.message });
}

module.exports = ErrorHandler