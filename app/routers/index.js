import personRouter from "./routes/Person.routes.js"

function router(app) {
    app.use('/api/person', personRouter)
}

export default router