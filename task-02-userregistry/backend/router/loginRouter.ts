import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
    // ... (login logic)
});

// KORREKTUR: Ein Router muss als 'default' exportiert werden,
// damit er mit `import loginRouter from ...` in anderen Dateien (wie server.ts) importiert werden kann.
export default router;
