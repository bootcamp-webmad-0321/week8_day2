module.exports = app => {

    // Base URLS
    app.use('/api/coasters', require('./coaster.routes'))
    app.use('/api/auth', require('./auth.routes'))
    app.use('/api/uploads', require('./uploads.routes'))
}