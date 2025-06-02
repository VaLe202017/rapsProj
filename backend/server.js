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

app.get("/api/hotels", async (req, res) => {
  try {
    const url =
      "https://api.vacationrenter.com/properties?page=1&per_page=30&user_language=hr&experiments=387%3AAD2GD20%2C383%3AAD2VRBO0%2C389%3AAD2RC0%2C386%3AAD2PRALRT0%2C385%3AAD2KYK56%2C390%3AAD2INTCMPE0%2C853%3AESPT1%2C486%3ACLTOLBUK1%2C513%3ABooking%2C500%3AVrbo%2C606%3ABooking%2C501%3ABooking%2C503%3ABooking%2C485%3ACLTOLBCA2%2C511%3AVrbo%2C514%3AVrbo%2C512%3AVrbo%2C855%3AMXPC1%2C504%3AVrbo%2C508%3AVrbo%2C746%3AFALLBHPT2%2C787%3ABRPT2%2C791%3ATWPT1%2C506%3AVrbo%2C510%3ABooking%2C509%3ABooking%2C505%3AVrbo%2C507%3ABooking%2C607%3ABooking%2C815%3ASRPNB2%2C499%3ABooking%2C818%3AFALLUSPC1%2C502%3ABooking%2C856%3ACAPT1%2C682%3ABooking%2C681%3ABooking%2C626%3AFMUC2%2C789%3AGRPT2%2C690%3APLHPC1%2C693%3APMU2%2C724%3ABooking%2C794%3ARSEM2%2C498%3AVrbo%2C680%3ABooking%2C725%3ABooking%2C795%3ASHQ2%2C817%3APCAF1%2C816%3AML2%2C721%3ABooking%2C487%3ACLTOLBAU1%2C770%3ASLUB1%2C769%3ASCUB2%2C768%3APAFSP1%2C771%3ANAHPC1%2C778%3AESHPT1%2C792%3ACNPT1%2C797%3AAUHPC1%2C799%3AFRHPT2%2C800%3AEUR1HPT2%2C679%3ABooking%2C763%3Ana%20ob%20o%201a%2C805%3ADEHPT1%2C793%3ASFOC1%2C810%3Aprime%20ob%20p2%2C711%3ABooking%2C808%3AASIA2HPT1%2C809%3ABRHPC1%2C712%3ABooking%2C723%3ABooking%2C813%3ALATAMHPT1%2C720%3ABooking%2C820%3APMNR1%2C716%3ABooking%2C812%3Aprime%20ob%20o2%2C764%3AMAP3%2C826%3AITHPC1%2C722%3ABooking%2C714%3ABooking%2C715%3ABooking%2C713%3ABooking%2C829%3ABooking%2C831%3ABooking%2C834%3AAgoda%2C835%3ABooking%2C830%3AHotelscom%2C832%3ABooking%2C836%3AHotelscom%2C837%3ABooking%2C833%3ABooking%2C839%3ABooking%2C838%3ABooking%2C841%3ABooking%2C717%3ABooking%2C719%3ABooking%2C857%3AHRPC1%2C840%3ABooking%2C497%3AVrbo%2C827%3AHotelscom%2C861%3AVCNC1%2C798%3AGBHPC1%2C801%3Ana%20ob%20p%20v3%2C862%3AVCBT1%2C863%3Aeu%20ob%20-%20p%20max%20ob%2C858%3AVUMW1%2C859%3AVCSC1%2C842%3AFALLBKPT2%2C843%3AHPL2%2C847%3AFRPT2%2C848%3ADEPT2%2C850%3APLPT2%2C851%3APTPC1%2C852%3AITPT1%2C865%3Aeu%20ob%20-%20o%20mid%20ob%2C849%3AGBPT2%2C854%3AAUPC1%2C845%3ACAMD3%2C846%3AVRRC_SRP2%2C868%3AINPT1%2C871%3ALATAMPC1%2C870%3ANDHPC1%2C869%3ANDPC1%2C867%3AMLSC2%2C860%3AVCUT1%2C872%3AJPPC1&currency=USD&locale=hr-hr&lob=hotel&traffic=SEO&guests=1&sw_lat=45.307442&sw_lng=14.331925&ne_lat=45.384048&ne_lng=14.530968&sort=ml_default&user_country=hr&user_region=21&search_term=Rijeka%2C%20Hrvatska&place_id=ChIJLb6qFyWhZEcRcLbLPThvPDc&geometry_enabled=false&sid=desktop-c200-98f2b8e1-82c5-a799-cb75-d3ae71fa0220&device_type=desktop&destination_label=Rijeka%2C%20Hrvatska&search_country=hr&boost_matching_guest_count=false&boost_non_hotel=false&bury_all_hotels=false&retrieve_place_name_from_bounds=false&vrbo_us_mobile_variant=";

    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error("Greška kod dohvaćanja hotela:", error);
    res.status(500).json({ error: "Greška pri dohvaćanju hotela." });
  }
});

app.listen(PORT, () => {
  console.log(`✅ API server radi na http://localhost:${PORT}`);
});
