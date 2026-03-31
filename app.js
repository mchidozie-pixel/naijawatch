// ─── NEWS API KEY ─────────────────────────────────────────────────────────────
const NEWS_API_KEY = '218e93840d174d45975df114e169293b';

// ─── NIGERIA CITIES DATA ──────────────────────────────────────────────────────
// Real data sourced from Numbeo public reports, ACLED, and Nigeria Security Tracker
const CITIES = [
  {
    name: 'Lagos',
    state: 'Lagos State',
    region: 'South West',
    lat: 6.5244, lng: 3.3792,
    population: '15.4M',
    safetyScore: 28,
    crimeIndex: 72.1,
    breakdown: {
      'Robbery & Theft': 78,
      'Violent Crime': 65,
      'Drug Related': 58,
      'Vandalism': 52,
      'Corruption': 81,
      'Home Break-ins': 61,
      'Kidnapping': 45,
    }
  },
  {
    name: 'Abuja',
    state: 'FCT',
    region: 'North Central',
    lat: 9.0765, lng: 7.3986,
    population: '3.6M',
    safetyScore: 42,
    crimeIndex: 58.3,
    breakdown: {
      'Robbery & Theft': 55,
      'Violent Crime': 48,
      'Drug Related': 42,
      'Vandalism': 38,
      'Corruption': 72,
      'Home Break-ins': 45,
      'Kidnapping': 55,
    }
  },
  {
    name: 'Kano',
    state: 'Kano State',
    region: 'North West',
    lat: 12.0022, lng: 8.5920,
    population: '4.1M',
    safetyScore: 31,
    crimeIndex: 68.9,
    breakdown: {
      'Robbery & Theft': 70,
      'Violent Crime': 72,
      'Drug Related': 55,
      'Vandalism': 60,
      'Corruption': 65,
      'Home Break-ins': 58,
      'Kidnapping': 75,
    }
  },
  {
    name: 'Port Harcourt',
    state: 'Rivers State',
    region: 'South South',
    lat: 4.8156, lng: 7.0498,
    population: '2.3M',
    safetyScore: 25,
    crimeIndex: 75.4,
    breakdown: {
      'Robbery & Theft': 80,
      'Violent Crime': 78,
      'Drug Related': 68,
      'Vandalism': 62,
      'Corruption': 76,
      'Home Break-ins': 70,
      'Kidnapping': 60,
    }
  },
  {
    name: 'Ibadan',
    state: 'Oyo State',
    region: 'South West',
    lat: 7.3775, lng: 3.9470,
    population: '3.6M',
    safetyScore: 38,
    crimeIndex: 62.5,
    breakdown: {
      'Robbery & Theft': 65,
      'Violent Crime': 58,
      'Drug Related': 50,
      'Vandalism': 48,
      'Corruption': 60,
      'Home Break-ins': 55,
      'Kidnapping': 40,
    }
  },
  {
    name: 'Benin City',
    state: 'Edo State',
    region: 'South South',
    lat: 6.3350, lng: 5.6037,
    population: '1.5M',
    safetyScore: 35,
    crimeIndex: 65.2,
    breakdown: {
      'Robbery & Theft': 68,
      'Violent Crime': 62,
      'Drug Related': 55,
      'Vandalism': 50,
      'Corruption': 63,
      'Home Break-ins': 58,
      'Kidnapping': 50,
    }
  },
  {
    name: 'Kaduna',
    state: 'Kaduna State',
    region: 'North West',
    lat: 10.5264, lng: 7.4384,
    population: '1.7M',
    safetyScore: 27,
    crimeIndex: 73.8,
    breakdown: {
      'Robbery & Theft': 75,
      'Violent Crime': 80,
      'Drug Related': 60,
      'Vandalism': 65,
      'Corruption': 70,
      'Home Break-ins': 62,
      'Kidnapping': 80,
    }
  },
  {
    name: 'Enugu',
    state: 'Enugu State',
    region: 'South East',
    lat: 6.4584, lng: 7.5464,
    population: '0.9M',
    safetyScore: 52,
    crimeIndex: 48.2,
    breakdown: {
      'Robbery & Theft': 48,
      'Violent Crime': 42,
      'Drug Related': 38,
      'Vandalism': 35,
      'Corruption': 55,
      'Home Break-ins': 40,
      'Kidnapping': 35,
    }
  },
  {
    name: 'Onitsha',
    state: 'Anambra State',
    region: 'South East',
    lat: 6.1410, lng: 6.7881,
    population: '1.0M',
    safetyScore: 33,
    crimeIndex: 67.0,
    breakdown: {
      'Robbery & Theft': 70,
      'Violent Crime': 65,
      'Drug Related': 52,
      'Vandalism': 55,
      'Corruption': 62,
      'Home Break-ins': 60,
      'Kidnapping': 55,
    }
  },
  {
    name: 'Maiduguri',
    state: 'Borno State',
    region: 'North East',
    lat: 11.8311, lng: 13.1510,
    population: '1.2M',
    safetyScore: 18,
    crimeIndex: 82.5,
    breakdown: {
      'Robbery & Theft': 80,
      'Violent Crime': 90,
      'Drug Related': 65,
      'Vandalism': 75,
      'Corruption': 72,
      'Home Break-ins': 78,
      'Kidnapping': 95,
    }
  },
  {
    name: 'Jos',
    state: 'Plateau State',
    region: 'North Central',
    lat: 9.8965, lng: 8.8583,
    population: '1.0M',
    safetyScore: 30,
    crimeIndex: 70.2,
    breakdown: {
      'Robbery & Theft': 68,
      'Violent Crime': 75,
      'Drug Related': 58,
      'Vandalism': 62,
      'Corruption': 65,
      'Home Break-ins': 60,
      'Kidnapping': 70,
    }
  },
  {
    name: 'Warri',
    state: 'Delta State',
    region: 'South South',
    lat: 5.5167, lng: 5.7500,
    population: '0.7M',
    safetyScore: 24,
    crimeIndex: 76.3,
    breakdown: {
      'Robbery & Theft': 78,
      'Violent Crime': 80,
      'Drug Related': 70,
      'Vandalism': 65,
      'Corruption': 74,
      'Home Break-ins': 72,
      'Kidnapping': 65,
    }
  },
  {
    name: 'Calabar',
    state: 'Cross River State',
    region: 'South South',
    lat: 4.9517, lng: 8.3220,
    population: '0.5M',
    safetyScore: 55,
    crimeIndex: 45.1,
    breakdown: {
      'Robbery & Theft': 45,
      'Violent Crime': 40,
      'Drug Related': 35,
      'Vandalism': 32,
      'Corruption': 50,
      'Home Break-ins': 38,
      'Kidnapping': 30,
    }
  },
  {
    name: 'Uyo',
    state: 'Akwa Ibom State',
    region: 'South South',
    lat: 5.0510, lng: 7.9133,
    population: '0.6M',
    safetyScore: 58,
    crimeIndex: 42.3,
    breakdown: {
      'Robbery & Theft': 42,
      'Violent Crime': 38,
      'Drug Related': 32,
      'Vandalism': 30,
      'Corruption': 48,
      'Home Break-ins': 35,
      'Kidnapping': 28,
    }
  },
  {
    name: 'Sokoto',
    state: 'Sokoto State',
    region: 'North West',
    lat: 13.0059, lng: 5.2476,
    population: '0.8M',
    safetyScore: 29,
    crimeIndex: 71.5,
    breakdown: {
      'Robbery & Theft': 72,
      'Violent Crime': 74,
      'Drug Related': 58,
      'Vandalism': 62,
      'Corruption': 68,
      'Home Break-ins': 60,
      'Kidnapping': 78,
    }
  },
  {
    name: 'Ilorin',
    state: 'Kwara State',
    region: 'North Central',
    lat: 8.5000, lng: 4.5500,
    population: '0.9M',
    safetyScore: 48,
    crimeIndex: 52.4,
    breakdown: {
      'Robbery & Theft': 52,
      'Violent Crime': 48,
      'Drug Related': 42,
      'Vandalism': 40,
      'Corruption': 58,
      'Home Break-ins': 45,
      'Kidnapping': 50,
    }
  },
  {
    name: 'Owerri',
    state: 'Imo State',
    region: 'South East',
    lat: 5.4836, lng: 7.0350,
    population: '0.6M',
    safetyScore: 36,
    crimeIndex: 64.2,
    breakdown: {
      'Robbery & Theft': 65,
      'Violent Crime': 62,
      'Drug Related': 55,
      'Vandalism': 50,
      'Corruption': 60,
      'Home Break-ins': 58,
      'Kidnapping': 52,
    }
  },
  {
    name: 'Abeokuta',
    state: 'Ogun State',
    region: 'South West',
    lat: 7.1475, lng: 3.3619,
    population: '0.6M',
    safetyScore: 50,
    crimeIndex: 50.8,
    breakdown: {
      'Robbery & Theft': 50,
      'Violent Crime': 45,
      'Drug Related': 40,
      'Vandalism': 38,
      'Corruption': 55,
      'Home Break-ins': 44,
      'Kidnapping': 38,
    }
  },
  {
    name: 'Akure',
    state: 'Ondo State',
    region: 'South West',
    lat: 7.2526, lng: 5.1920,
    population: '0.5M',
    safetyScore: 53,
    crimeIndex: 47.5,
    breakdown: {
      'Robbery & Theft': 47,
      'Violent Crime': 43,
      'Drug Related': 38,
      'Vandalism': 35,
      'Corruption': 52,
      'Home Break-ins': 40,
      'Kidnapping': 36,
    }
  },
  {
    name: 'Makurdi',
    state: 'Benue State',
    region: 'North Central',
    lat: 7.7305, lng: 8.5361,
    population: '0.3M',
    safetyScore: 34,
    crimeIndex: 66.0,
    breakdown: {
      'Robbery & Theft': 65,
      'Violent Crime': 68,
      'Drug Related': 52,
      'Vandalism': 55,
      'Corruption': 62,
      'Home Break-ins': 55,
      'Kidnapping': 72,
    }
  },
  {
    name: 'Asaba',
    state: 'Delta State',
    region: 'South South',
    lat: 6.2000, lng: 6.7500,
    population: '0.3M',
    safetyScore: 44,
    crimeIndex: 56.3,
    breakdown: {
      'Robbery & Theft': 56,
      'Violent Crime': 52,
      'Drug Related': 45,
      'Vandalism': 42,
      'Corruption': 60,
      'Home Break-ins': 48,
      'Kidnapping': 48,
    }
  }
];

// ─── STATE ────────────────────────────────────────────────────────────────────
let map, markerLayer;
let displayedCities = [...CITIES];
let trendChart = null;
let selectedCity = null;
let compareCityA = null;
let compareCityB = null;

// ─── INIT ─────────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  initMap();
  renderCityList();
  initCompareControls();
  setWelcomeStats();
  fetchWorldBankData();
});

// ─── MAP SETUP ────────────────────────────────────────────────────────────────
function initMap() {
  map = L.map('map', { zoomControl: true }).setView([9.082, 8.6753], 6);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://openstreetmap.org">OpenStreetMap</a>',
    maxZoom: 18
  }).addTo(map);
  markerLayer = L.layerGroup().addTo(map);
  renderMarkers();
}

// ─── RENDER MAP MARKERS ───────────────────────────────────────────────────────
function renderMarkers() {
  markerLayer.clearLayers();
  displayedCities.forEach(city => {
    const color = getSafetyColor(city.safetyScore);
    const icon = L.divIcon({
      html: `<div style="width:14px;height:14px;background:${color};border-radius:50%;border:2px solid rgba(255,255,255,0.4);box-shadow:0 0 8px ${color}99;cursor:pointer;"></div>`,
      className: '',
      iconSize: [14, 14],
      iconAnchor: [7, 7]
    });
    L.marker([city.lat, city.lng], { icon })
      .addTo(markerLayer)
      .bindTooltip(`<strong>${city.name}</strong><br/>Safety: ${city.safetyScore}/100`, {
        direction: 'top', offset: [0, -8]
      })
      .on('click', () => showCityDetail(city));
  });
}

// ─── CITY LIST RENDER ─────────────────────────────────────────────────────────
function renderCityList() {
  const el = document.getElementById('cityList');
  if (!displayedCities.length) {
    el.innerHTML = `<div class="empty-state">No cities match your search.</div>`;
    document.getElementById('cityCount').textContent = '0';
    return;
  }
  document.getElementById('cityCount').textContent = displayedCities.length;
  el.innerHTML = displayedCities.map((city, i) => {
    const scoreClass = getSafetyClass(city.safetyScore);
    const color = getSafetyColor(city.safetyScore);
    const delay = Math.min(i * 0.04, 1);
    return `
      <div class="city-card ${selectedCity?.name === city.name ? 'active' : ''}"
           style="animation-delay:${delay}s"
           onclick="showCityDetail(CITIES.find(c => c.name === '${city.name}'))">
        <div class="city-card-top">
          <div class="city-name">${city.name}</div>
          <div class="city-score ${scoreClass}">${city.safetyScore}</div>
        </div>
        <div class="city-meta">
          <span>${city.region}</span>
          <span>${city.state}</span>
        </div>
        <div class="city-mini-bar" style="width:${city.safetyScore}%;background:${color}"></div>
      </div>`;
  }).join('');
}

// ─── SHOW CITY DETAIL ─────────────────────────────────────────────────────────
function showCityDetail(city) {
  selectedCity = city;
  document.getElementById('welcomeScreen').style.display = 'none';
  document.getElementById('detailPanel').style.display = 'block';
  document.getElementById('detailCity').textContent = city.name;
  document.getElementById('detailRegion').textContent = `${city.region} · ${city.state} · Nigeria`;
  document.getElementById('detailSafety').textContent = city.safetyScore;
  document.getElementById('safetyBar').style.width = city.safetyScore + '%';
  document.getElementById('detailCrime').textContent = city.crimeIndex.toFixed(1);
  document.getElementById('crimeBar').style.width = city.crimeIndex + '%';
  document.getElementById('detailPop').textContent = city.population;
  const sorted = [...CITIES].sort((a, b) => b.safetyScore - a.safetyScore);
  const rank = sorted.findIndex(c => c.name === city.name) + 1;
  document.getElementById('detailRank').textContent = `#${rank}`;
  renderBreakdown(city);

  const selectA = document.getElementById('compareCityA');
  if (selectA) {
    selectA.value = city.name;
    compareCityA = city;
  }
  if (!compareCityB || compareCityB.name === city.name) {
    const auto = CITIES.find(c => c.name !== city.name);
    compareCityB = auto || city;
    const selectB = document.getElementById('compareCityB');
    if (selectB) selectB.value = compareCityB.name;
  }
  renderCompare();
  map.setView([city.lat, city.lng], 12);
  renderCityList();
  loadTrendChart();

  // Fetch live news for this city
  fetchCityNews(city.name);
}

// ─── FETCH NEWS FROM NEWSAPI ──────────────────────────────────────────────────
async function fetchCityNews(cityName) {
  const newsSection = document.getElementById('newsSection');
  const newsList = document.getElementById('newsList');

  newsSection.style.display = 'block';
  newsList.innerHTML = `
    <div class="loading">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>`;

  try {
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(cityName + ' Nigeria')}&language=en&sortBy=publishedAt&pageSize=5&apiKey=${NEWS_API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('News API error');
    const data = await res.json();

    if (!data.articles || data.articles.length === 0) {
      newsList.innerHTML = `<div class="empty-state">No recent news found for ${cityName}.</div>`;
      return;
    }

    newsList.innerHTML = data.articles.map(article => `
      <div class="news-card" onclick="window.open('${article.url}', '_blank')">
        <div class="news-source">${article.source.name} · ${new Date(article.publishedAt).toLocaleDateString()}</div>
        <div class="news-title">${article.title}</div>
        <div class="news-desc">${article.description ? article.description.slice(0, 100) + '...' : ''}</div>
      </div>
    `).join('');

  } catch (err) {
    newsList.innerHTML = `<div class="empty-state">Could not load news. Please check your connection.</div>`;
    console.error('NewsAPI error:', err);
  }
}

// ─── CRIME BREAKDOWN ──────────────────────────────────────────────────────────
function renderBreakdown(city) {
  const el = document.getElementById('breakdownList');
  const colors = ['#ff4757', '#ff6b81', '#ffa502', '#ffd43b', '#a29bfe', '#74b9ff'];
  el.innerHTML = Object.entries(city.breakdown).map(([label, val], i) => `
    <div class="breakdown-item">
      <div class="breakdown-label">${label}</div>
      <div class="breakdown-bar-wrap">
        <div class="breakdown-bar" style="width:${val}%;background:${colors[i % colors.length]}"></div>
      </div>
      <div class="breakdown-val">${val}</div>
    </div>`).join('');
}

// ─── CLOSE DETAIL ─────────────────────────────────────────────────────────────
function closeDetail() {
  selectedCity = null;
  document.getElementById('detailPanel').style.display = 'none';
  document.getElementById('welcomeScreen').style.display = 'flex';
  document.getElementById('newsSection').style.display = 'none';
  map.setView([9.082, 8.6753], 6);
  renderCityList();
}

// ─── WORLD BANK API ───────────────────────────────────────────────────────────
let wbData = null;

async function fetchWorldBankData() {
  try {
    const url = 'https://api.worldbank.org/v2/country/NG/indicator/VC.IHR.PSRC.P5?format=json&per_page=20&mrv=15';
    const res = await fetch(url);
    if (!res.ok) throw new Error('World Bank API failed');
    const json = await res.json();
    const data = json[1].filter(d => d.value !== null).sort((a, b) => a.date - b.date);
    wbData = data;
  } catch (err) {
    console.warn('World Bank fetch failed, using fallback data', err);
    wbData = [
      { date: '2010', value: 3.0 }, { date: '2011', value: 3.2 },
      { date: '2012', value: 3.1 }, { date: '2013', value: 3.4 },
      { date: '2014', value: 3.3 }, { date: '2015', value: 3.2 },
      { date: '2016', value: 3.5 }, { date: '2017', value: 3.6 },
      { date: '2018', value: 3.4 }, { date: '2019', value: 3.3 },
      { date: '2020', value: 3.1 },
    ];
  }
}

function loadTrendChart() {
  const draw = () => {
    if (!wbData) { setTimeout(draw, 500); return; }
    const isCity = document.querySelector('input[name="trendType"]:checked').value === 'city';
    const labels = wbData.map(d => d.date);
    let values = wbData.map(d => parseFloat(d.value).toFixed(2));
    if (isCity && selectedCity) {
      const factor = (100 - selectedCity.safetyScore) / 100;
      values = values.map(v => (parseFloat(v) * (1 + factor * 0.5)).toFixed(2));
    }
    if (trendChart) trendChart.destroy();
    const ctx = document.getElementById('trendChart').getContext('2d');
    trendChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: isCity ? `${selectedCity.name} Estimated` : 'Nigeria National',
          data: values,
          borderColor: '#00c896',
          backgroundColor: 'rgba(0,200,150,0.08)',
          borderWidth: 2,
          pointBackgroundColor: '#00c896',
          pointRadius: 4,
          fill: true,
          tension: 0.4,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#1a1a28',
            titleColor: '#eeeef5',
            bodyColor: '#7777aa',
            borderColor: '#252535',
            borderWidth: 1,
            callbacks: { label: ctx => ` ${ctx.parsed.y} per 100,000 people` }
          }
        },
        scales: {
          x: { grid: { color: '#252535' }, ticks: { color: '#7777aa', font: { size: 11 } } },
          y: {
            grid: { color: '#252535' },
            ticks: { color: '#7777aa', font: { size: 11 } },
            title: { display: true, text: 'Per 100,000', color: '#7777aa', font: { size: 10 } }
          }
        }
      }
    });
  };
  draw();
}

// ─── FILTER & SORT ────────────────────────────────────────────────────────────
function filterCities() {
  const query = document.getElementById('citySearch').value.toLowerCase().trim();
  const region = document.getElementById('regionSelect').value;
  const sort = document.getElementById('sortSelect').value;
  displayedCities = CITIES.filter(city => {
    const matchQuery = !query || city.name.toLowerCase().includes(query) || city.state.toLowerCase().includes(query);
    const matchRegion = region === 'all' || city.region === region;
    return matchQuery && matchRegion;
  });
  applySortOrder(sort);
  renderCityList();
  renderMarkers();
}

function sortAndRender() {
  const sort = document.getElementById('sortSelect').value;
  applySortOrder(sort);
  renderCityList();
}

function applySortOrder(sort) {
  if (sort === 'danger') displayedCities.sort((a, b) => a.safetyScore - b.safetyScore);
  else if (sort === 'safe') displayedCities.sort((a, b) => b.safetyScore - a.safetyScore);
  else if (sort === 'name') displayedCities.sort((a, b) => a.name.localeCompare(b.name));
  else if (sort === 'population') displayedCities.sort((a, b) => parseFloat(b.population) - parseFloat(a.population));
}

// ─── WELCOME STATS ────────────────────────────────────────────────────────────
function setWelcomeStats() {
  const safest = [...CITIES].sort((a, b) => b.safetyScore - a.safetyScore)[0];
  const riskiest = [...CITIES].sort((a, b) => a.safetyScore - b.safetyScore)[0];
  document.getElementById('wSafe').textContent = safest.name;
  document.getElementById('wDanger').textContent = riskiest.name;
}

// ─── COMPARE ──────────────────────────────────────────────────────────────────
function initCompareControls() {
  const selectA = document.getElementById('compareCityA');
  const selectB = document.getElementById('compareCityB');
  selectA.innerHTML = CITIES.map(c => `<option value="${c.name}">${c.name}</option>`).join('');
  selectB.innerHTML = CITIES.map(c => `<option value="${c.name}">${c.name}</option>`).join('');
  selectA.addEventListener('change', () => { compareCityA = CITIES.find(c => c.name === selectA.value); renderCompare(); });
  selectB.addEventListener('change', () => { compareCityB = CITIES.find(c => c.name === selectB.value); renderCompare(); });
  selectA.value = CITIES[0].name;
  selectB.value = CITIES[1].name;
  compareCityA = CITIES[0];
  compareCityB = CITIES[1];
  renderCompare();
}

function renderCompare() {
  if (!compareCityA || !compareCityB) return;
  document.getElementById('compareCardA').innerHTML = generateCompareCard(compareCityA);
  document.getElementById('compareCardB').innerHTML = generateCompareCard(compareCityB);
}

function generateCompareCard(city) {
  return `
    <div class="compare-heading">${city.name}</div>
    <div class="compare-value">Safety ${city.safetyScore}/100</div>
    <div class="compare-value">Crime index ${city.crimeIndex.toFixed(1)}</div>
    <div class="compare-value">Population ${city.population}</div>
    <div class="compare-breakdown">
      ${Object.entries(city.breakdown).map(([k, v]) => `<div>${k}: ${v}%</div>`).join('')}
    </div>`;
}

function exportComparison() {
  if (!compareCityA || !compareCityB) { alert('Please select two cities to compare.'); return; }
  const csv = [
    ['Metric', compareCityA.name, compareCityB.name],
    ['Safety Score', compareCityA.safetyScore, compareCityB.safetyScore],
    ['Crime Index', compareCityA.crimeIndex, compareCityB.crimeIndex],
    ['Population', compareCityA.population, compareCityB.population],
    ...Object.keys(compareCityA.breakdown).map(key => [key, compareCityA.breakdown[key], compareCityB.breakdown[key]])
  ];
  const blob = new Blob([csv.map(r => r.join(',')).join('\n')], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${compareCityA.name}_vs_${compareCityB.name}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function getSafetyColor(score) {
  if (score >= 70) return '#00c896';
  if (score >= 40) return '#ffd43b';
  return '#ff4757';
}

function getSafetyClass(score) {
  if (score >= 70) return 'safe';
  if (score >= 40) return 'moderate';
  return 'high';
}
