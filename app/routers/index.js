import therapistRouter from "./routes/Therapist.routes.js";
import childRouter from "./routes/Child.routes.js";
import generativeAIRouter from "./routes/GenerativeAI.routes.js";

function router(app) {
    app.use('/api/therapist', therapistRouter);
    app.use('/api/child', childRouter);
    app.use('/api/generativeAI', generativeAIRouter);
}

export default router;