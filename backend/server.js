const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/weather', async (req, res) => {
    try {
        const response = await axios.get('http://api.weatherapi.com/v1/current.json', {
            params: {
                key: 'YOUR_API_KEY', //  Zamijeni s pravim API ključem
                q: 'Rijeka',
                aqi: 'yes'
            }
        });
        res.json(response.data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Greška pri dohvaćanju vremenskih podataka' });
    }
});

app.get('/api/water-level', async (req, res) => {
    try {
        //  Zamijeni sa stvarnim endpointom i ID-em stanice
        const response = await axios.get('https://api.pegelalarm.at/api/station/101100');
        res.json(response.data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Greška pri dohvaćanju podataka o razini vode' });
    }
});

app.get('/api/air-quality', async (req, res) => {
    try {
        const response = await axios.get('https://api.waqi.info/feed/rijeka/', {
            params: {
                token: 'YOUR_API_TOKEN' //  Zamijeni s pravim tokenom
            }
        });
        res.json(response.data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Greška pri dohvaćanju podataka o kvaliteti zraka' });
    }
});

app.get('/api/rijeka-open-data', async (req, res) => {
    try {
        //  Prilagodi točnim endpointima otvorenih podataka ako su dostupni
        const response = await axios.get('https://data.rijeka.hr/api/dataset/obrazovanje');
        res.json(response.data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Greška pri dohvaćanju gradskih podataka' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
