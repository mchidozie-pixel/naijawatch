# 🇳🇬 NaijaWatch — Nigeria Safety Explorer

A web application that allows users to explore crime and safety data across 21 major Nigerian cities. Built with HTML, CSS, and JavaScript using real data from the World Bank API and NewsAPI no backend required.

---

## Purpose

NaijaWatch helps Nigerians and visitors make informed decisions about safety across different cities in Nigeria. Users can search, filter, sort, and compare cities by safety score, view detailed crime breakdowns including kidnapping rates, read live news headlines for each city, toggle between national and city-estimated crime trends, and export comparison data all powered by live World Bank and NewsAPI data.

---
 **Live Website:** https://mchidozie-pixel.github.io/naijawatch/
---

## Features

- Interactive map of Nigeria with 21 cities marked in green/yellow/red
- Search cities by name or state
- Filter by region (South West, South East, South South, North West, North East, North Central)
- Sort by most dangerous, safest, name A–Z, or population size
- Click any city to see:
  - Safety score and crime index with animated progress bars
  - Safety rank out of all 21 cities
  - Full crime breakdown: Robbery, Violent Crime, Drug Related, Vandalism, Corruption, Home Break-ins, and Kidnapping
- **Live News Headlines** — real-time news for each city powered by NewsAPI
- **City Comparison Tool** — compare any two cities side by side
- **Export as CSV** — download the comparison data as a spreadsheet
- **Crime Trend Chart** — toggle between Nigeria national data and city-level estimates
- Live homicide trend data from the World Bank API with automatic fallback if API is unavailable

---

## APIs & Libraries Used

### 1. NewsAPI (Primary External API)
- **URL:** https://newsapi.org/
- **Endpoint:** `https://newsapi.org/v2/everything?q={city}+Nigeria&language=en&sortBy=publishedAt&pageSize=5&apiKey={API_KEY}`
- **What it provides:** Live real-time news headlines for each Nigerian city
- **Cost:** Free tier (developer plan)
- **API Key:** Provided in submission comment section
- **Documentation:** https://newsapi.org/docs

### 2. World Bank API
- **URL:** https://api.worldbank.org/v2/
- **Endpoint:** `https://api.worldbank.org/v2/country/NG/indicator/VC.IHR.PSRC.P5?format=json&per_page=20&mrv=15`
- **What it provides:** Nigeria intentional homicide rates per 100,000 people over 15 years
- **Cost:** 100% free, no API key required
- **Documentation:** https://datahelpdesk.worldbank.org/knowledgebase/articles/889392

### 3. OpenStreetMap / Leaflet.js
- **URL:** https://www.openstreetmap.org/
- **What it provides:** Free interactive map tiles for the Nigeria map
- **Cost:** 100% free, no API key required
- **Documentation:** https://leafletjs.com/

### 4. Chart.js
- **URL:** https://www.chartjs.org/
- **What it provides:** Crime trend line chart rendering
- **Cost:** Free, open source
- **Documentation:** https://www.chartjs.org/docs/

### 5. Font Awesome
- **URL:** https://fontawesome.com/
- **What it provides:** Icons used in the UI (download button etc.)
- **Cost:** Free tier
- **Documentation:** https://fontawesome.com/docs

---

## Project Structure

```
naijawatch/
├── index.html      ← App structure, layout, and all HTML elements
├── style.css       ← All styling, animations, and responsive design
├── app.js          ← All JavaScript: API calls, filtering, comparison, CSV export
├── .gitignore      ← Files excluded from Git
└── README.md       ← This file
```

---

## How to Run Locally

1. Clone the repository:
```bash
git clone https://github.com/mchidozie-pixel/naijawatch.git
```

2. Navigate into the project folder:
```bash
cd naijawatch
```

3. Open `index.html` directly in your browser — that's it!

> No installation, no Node.js, no backend needed. The app runs entirely in the browser.

---

## Deployment Guide

### Prerequisites
- SSH access to Web01, Web02, and Lb01
- Nginx installed on all 3 servers
- Your server IP addresses ready

---

### Step 1 — Deploy to Web01

SSH into Web01:
```bash
ssh ubuntu@44.201.79.14
```

Install Nginx:
```bash
sudo apt update
sudo apt install nginx -y
```

Create the app directory and copy files:
```bash
sudo mkdir -p /var/www/naijawatch
sudo cp index.html style.css app.js /var/www/naijawatch/
sudo chown -R www-data:www-data /var/www/naijawatch
```

Create Nginx config:
```bash
sudo nano /etc/nginx/sites-available/naijawatch
```

Paste this:
```nginx
server {
    listen 80;
    server_name _;

    root /var/www/naijawatch;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

Enable the site and restart Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/naijawatch /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx
```

Test: Visit `http://44.201.79.14` in your browser.

---

### Step 2 — Deploy to Web02

Repeat the exact same steps on Web02:
```bash
ssh ubuntu@3.86.212.68
```

Run all the same commands as Web01.

Test: Visit `http://3.86.212.68` in your browser.

---

### Step 3 — Configure Load Balancer (Lb01)

SSH into Lb01:
```bash
ssh ubuntu@3.85.162.15
```

Install Nginx:
```bash
sudo apt update
sudo apt install nginx -y
```

Create load balancer config:
```bash
sudo nano /etc/nginx/sites-available/naijawatch-lb
```

Paste this:
```nginx
upstream naijawatch_backend {
    server 44.201.79.14;
    server 3.86.212.68;
}

server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://naijawatch_backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

Enable and restart:
```bash
sudo ln -s /etc/nginx/sites-available/naijawatch-lb /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx
```

Test: Visit `http://3.85.162.15` — the app loads and traffic is split between Web01 and Web02.

---

### Step 4 — Verify Load Balancing is Working

Check logs on both servers while refreshing the app:

On Web01:
```bash
sudo tail -f /var/log/nginx/access.log
```

On Web02:
```bash
sudo tail -f /var/log/nginx/access.log
```

Refresh the app several times — requests should appear on both servers confirming the load balancer is working correctly.

---

## Challenges & Solutions

| Challenge | Solution |
|---|---|
| No free live crime API exists for Nigeria | Used World Bank API for national data + public safety reports for city-level scores |
| Numbeo API is paid | Sourced city safety scores from Numbeo's publicly available website |
| World Bank API can be slow or unavailable | Built a fallback with static historical data so the chart always renders |
| City-level trend data unavailable | Built a city estimate feature that adjusts national data using each city's safety factor |
| CSV export needed without a backend | Used browser Blob API to generate and download CSV entirely client-side |
| NewsAPI CORS restriction on some browsers | Used direct fetch with API key in query string as per NewsAPI free tier documentation |

---

## Credits & Attribution

- **NewsAPI** — https://newsapi.org/ — Live news headlines
- **World Bank Open Data** — https://data.worldbank.org/
- **OpenStreetMap Contributors** — https://www.openstreetmap.org/copyright
- **Leaflet.js** — https://leafletjs.com/
- **Chart.js** — https://www.chartjs.org/
- **Font Awesome** — https://fontawesome.com/
- **Numbeo** — https://www.numbeo.com/ — Public city safety index reference
- **ACLED** — https://acleddata.com/ — Armed conflict data reference
- **Nigeria Security Tracker** — https://securitytracker.cfr.org/ — Security data reference
- **Google Fonts** — Space Grotesk & Inter typefaces

---

## Author

Built by Miracle Chidozie as part of a university assignment on API integration and web server deployment.
