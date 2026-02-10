require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`
    ╔══════════════════════════════════════════╗
    ║  BFHL Challenge Server                  ║
    ║  Listening on port: ${PORT}                ║
    ║  Health Check: http://localhost:${PORT}/health ║
    ╚══════════════════════════════════════════╝
    `);
});