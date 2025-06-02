const express = require("express");
const axios = require("axios");
const cors = require("cors");
const fetch = require("node-fetch");
const xml2js = require("xml2js");

const https = require("https");
const path = require("path");
const { parse } = require("csv-parse");
const nuiteeLiteApi = require("@api/nuitee-lite-api");

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "X-API-Key": "sand_07faec88-e4ba-4ae7-9b52-7e64f4585a63",
  },
};

const app = express();
const PORT = 3000;

app.use(cors());

const BASE_URL =
  "https://www.gastronaut.hr/api/restoran/?active=True&county=PGZ&grad=Rijeka&format=json";

//RESTORANI
app.get("/api/restaurants", async (req, res) => {
  const { type } = req.query;

  try {
    const response = await axios.get(BASE_URL);
    let results = response.data.results;

    if (type) {
      results = results.filter(
        (r) => (r.type?.name || "").toLowerCase() === type.toLowerCase()
      );
    }

    const formatted = results.map((r) => ({
      name: r.name,
      type: r.type?.name || "Nepoznato",
      link: "https://www.gastronaut.hr" + r.get_absolute_url,
    }));

    res.json(formatted);
  } catch (err) {
    console.error("Greška kod API poziva:", err.message);
    res.status(500).json({ error: "Neuspješan dohvat podataka." });
  }
});

//TIPOVI RESTORANA
app.get("/api/types", async (req, res) => {
  try {
    const response = await axios.get(BASE_URL);
    const allTypes = response.data.results
      .map((r) => r.type?.name?.trim())
      .filter(Boolean);

    const uniqueTypes = [...new Set(allTypes)].sort();
    res.json(uniqueTypes);
  } catch (err) {
    console.error("Greška kod dohvaćanja tipova:", err.message);
    res.status(500).json({ error: "Neuspješan dohvat tipova." });
  }
});

//PARKING
app.get("/api/parking", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.rijeka-plus.hr/parking/parking.csv",
      { responseType: "stream" }
    );

    const results = [];
    response.data
      .pipe(
        parse({
          columns: true,
          delimiter: ";",
          skip_empty_lines: true,
        })
      )
      .on("data", (row) => {
        results.push(row);
      })
      .on("end", () => {
        res.json(results);
      })
      .on("error", (err) => {
        console.error("Greška parsiranja CSV:", err);
        res.status(500).json({ error: "Greška parsiranja CSV-a." });
      });
  } catch (error) {
    console.error("Greška kod dohvaćanja CSV datoteke:", error);
    res.status(500).json({ error: "Greška pri dohvaćanju CSV datoteke." });
  }
});

app.get("/api/vrijeme", async (req, res) => {
  try {
    const { data } = await axios.get("https://vrijeme.hr/hrvatska1_n.xml");
    const parsed = await xml2js.parseStringPromise(data, {
      explicitArray: false,
    });

    const gradovi = parsed.Hrvatska.Grad;
    const rijeka = Array.isArray(gradovi)
      ? gradovi.find((g) => g.GradIme === "Rijeka")
      : gradovi;

    const prognoza = {
      grad: rijeka.GradIme,
      lat: rijeka.Lat,
      lon: rijeka.Lon,
      temperatura: rijeka.Podatci.Temp.trim(),
      vlaga: rijeka.Podatci.Vlaga,
      tlak: rijeka.Podatci.Tlak,
      vjetarSmjer: rijeka.Podatci.VjetarSmjer,
      vjetarBrzina: rijeka.Podatci.VjetarBrzina,
      vrijeme: rijeka.Podatci.Vrijeme,
    };

    res.json(prognoza);
  } catch (error) {
    console.error("Greška kod dohvaćanja prognoze:", error.message);
    res.status(500).json({ error: "Neuspješno dohvaćanje prognoze" });
  }
});

// Dohvati temperaturu mora za Rijeku
// MORE – detaljno po terminima
app.get("/api/more", async (req, res) => {
  try {
    const { data } = await axios.get("https://vrijeme.hr/more_n.xml");
    const parsed = await xml2js.parseStringPromise(data, {
      explicitArray: false,
    });

    const podaci = parsed.Temperature_mora.Podatci;

    // Prva stavka je zaglavlje (termini), preskoči
    const temperature = podaci.slice(1).map((p) => {
      const lokacija = p.Postaja;
      const termini = Array.isArray(p.Termin) ? p.Termin : [p.Termin];

      return {
        lokacija,
        termini: {
          "07": termini[0] || "-",
          "08": termini[1] || "-",
          11: termini[2] || "-",
          14: termini[3] || "-",
          15: termini[4] || "-",
          17: termini[5] || "-",
        },
      };
    });

    res.json(temperature);
  } catch (error) {
    console.error("Greška kod dohvaćanja temperature mora:", error.message);
    res.status(500).json({ error: "Neuspješno dohvaćanje temperature mora" });
  }
});

app.listen(PORT, () => {
  console.log(`API server radi na http://localhost:${PORT}`);
});
