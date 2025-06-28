const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// 👉 Serve static frontend files (from Vite build)
app.use(express.static(path.join(__dirname, '../../frontend/task-app/dist')));

// 👉 API routes
app.use('/tasks', taskRoutes);

// 👉 Fallback to frontend for unknown routes (for React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/task-app/dist/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
