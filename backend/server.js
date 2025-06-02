const express = require("express");
const axios = require("axios");
const cors = require("cors");
const https = require("https");
const path = require("path");
const { parse } = require("csv-parse");

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
/*
app.get("/api/parking", async (req, res) => {
  const csvUrl = "https://www.rijeka-plus.hr/parking/parking.csv";

  https
    .get(csvUrl, (response) => {
      let csvData = "";

      response.on("data", (chunk) => {
        csvData += chunk;
      });

      response.on("end", () => {
        parse(
          csvData,
          { columns: true, delimiter: ";", skip_empty_lines: true },
          (err, records) => {
            if (err) {
              console.error("Greška kod parsiranja CSV-a:", err.message);
              return res
                .status(500)
                .json({ error: "Greška kod parsiranja CSV-a." });
            }

            const locations = records
              .filter((r) => r["LAT"] && r["LON"])
              .map((r) => ({
                name: r["NAZIV"] || "Nepoznato",
                lat: parseFloat(r["LAT"]),
                lng: parseFloat(r["LON"]),
                info: `Zona: ${r["ZONA"] || "?"}, Mjesta: ${
                  r["UKUPNO"] || "?"
                }`,
              }));

            res.json(locations);
          }
        );
      });
    })
    .on("error", (err) => {
      console.error("Greška kod dohvaćanja CSV-a:", err.message);
      res.status(500).json({ error: "Greška kod dohvaćanja parking CSV-a." });
    });
});*/

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

app.listen(PORT, () => {
  console.log(`✅ API server radi na http://localhost:${PORT}`);
});
