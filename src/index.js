import app from './app.js';
import './db.js'; // Import the database connection

app.listen(3000, () => { console.log('Server is running on port 3000'); })