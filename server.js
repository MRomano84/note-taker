//Dependencies
const express = require('express');
const path = require('path');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

// Sets up the Express App
const app = express();
var PORT = process.env.PORT || 3001;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Use static files
app.use(express.static(path.join(__dirname, "public")));


//Routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));