const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;
const MESSAGE = process.env.APP_MESSAGE || "Message par défaut";

// Fichiers statiques
app.use(express.static('public'));

// Route principale
app.get('/api/message', (req, res) => {
  res.json({ message: MESSAGE });
});

// Montage du PVC (volume avec images)
app.use('/data', express.static('/data'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

