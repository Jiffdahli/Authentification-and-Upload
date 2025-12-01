import express from 'express';

const router = express.Router();

// (Hier können später Routen für Daten hinzugefügt werden)

// KORREKTUR: Ein Router muss als 'default' exportiert werden,
// damit er mit `import dataRouter from ...` in anderen Dateien (wie server.ts) importiert werden kann.
export default router;
