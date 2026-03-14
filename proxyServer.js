const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const userRoutes = require('/home/simone/repos/dad-jokes-api/src/routes.js');
const db = require('/home/simone/repos/dad-jokes-api/db.js')

const allowedOrigins = ['http://localhost:5500']

app.use (cors({origin: allowedOrigins}))
app.use ('/', userRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  db.testDb().then((value) => {
  console.log("DB Handshake Successful:", value.rows[0]); // shows the timestamp
}).catch((err) => {
  console.error("DB Connection Failed:", err.message);    // shows the real error
})
});
