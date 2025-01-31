import express from 'express';

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

const appointments = [];

// Directs inital reqest to home page
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`)
});

// Stores appointment data in appointment array
app.post('/submit', (req, res) => {
    // Create an appointment object
    const appointment = {
        fname: req.body.fname,
        lname: req.body.lname,
        date: req.body.date,
        time: req.body.time,
        timestamp: new Date()
    }

    // Add the appointement to the appoointments array
    appointments.push(appointment);

    // Log the new appointment to the console
    console.log(appointment);

    // Send the thank-you page back to the user
    res.sendFile(`${import.meta.dirname}/views/thank-you.html`);
});

// Set admin route
app.get('/admin/appointments', (req, res) => {
    res.send(appointments);
});

// Sets listening port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});