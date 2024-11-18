// Initialize the map
const map = L.map('map').setView([20, 0], 2); // Centered globally

// Add a tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '© OpenStreetMap contributors',
}).addTo(map);

// Define crocodile habitat data (20 habitats)
const habitats = [
  {
    name: 'Saltwater Crocodile',
    region: 'Northern Australia, Southeast Asia, India',
    coordinates: [-12.5, 130.6],
    info: 'Saltwater crocodiles are the largest living reptiles, known for their powerful bite.',
  },
  {
    name: 'Nile Crocodile',
    region: 'Africa',
    coordinates: [2.0, 30.0],
    info: 'Nile crocodiles are widely distributed across sub-Saharan Africa and are highly aggressive.',
  },
  {
    name: 'American Crocodile',
    region: 'Central America, Caribbean',
    coordinates: [15.0, -82.0],
    info: 'American crocodiles are found in tropical regions and prefer coastal waters.',
  },
  {
    name: 'Mugger Crocodile',
    region: 'South Asia',
    coordinates: [23.0, 78.0],
    info: 'Mugger crocodiles inhabit freshwater lakes, rivers, and marshes in India and Pakistan.',
  },
  {
    name: 'Orinoco Crocodile',
    region: 'Colombia, Venezuela',
    coordinates: [7.0, -67.0],
    info: 'Critically endangered, the Orinoco crocodile is found along the Orinoco River.',
  },
  {
    name: 'Freshwater Crocodile',
    region: 'Northern Australia',
    coordinates: [-16.0, 132.0],
    info: 'Freshwater crocodiles are smaller and less aggressive compared to saltwater crocodiles.',
  },
  {
    name: 'Morelet’s Crocodile',
    region: 'Mexico, Belize, Guatemala',
    coordinates: [17.0, -90.0],
    info: 'Morelet’s crocodiles inhabit freshwater systems like swamps, lakes, and rivers.',
  },
  {
    name: 'Siamese Crocodile',
    region: 'Southeast Asia',
    coordinates: [13.0, 104.0],
    info: 'The Siamese crocodile is critically endangered and found in slow-moving rivers and lakes.',
  },
  {
    name: 'Cuban Crocodile',
    region: 'Cuba',
    coordinates: [22.0, -80.0],
    info: 'The Cuban crocodile is an aggressive species found in freshwater swamps.',
  },
  {
    name: 'Philippine Crocodile',
    region: 'Philippines',
    coordinates: [12.0, 123.0],
    info: 'Critically endangered, the Philippine crocodile is found in freshwater habitats.',
  },
  {
    name: 'West African Crocodile',
    region: 'West Africa',
    coordinates: [11.0, -3.0],
    info: 'Often confused with the Nile crocodile, this species inhabits wetlands and rivers.',
  },
  {
    name: 'New Guinea Crocodile',
    region: 'New Guinea',
    coordinates: [-5.0, 141.0],
    info: 'This species lives in freshwater swamps and marshes in New Guinea.',
  },
  {
    name: 'Dwarf Crocodile',
    region: 'West Africa',
    coordinates: [5.0, -6.0],
    info: 'Dwarf crocodiles are small, shy species that prefer dense rainforests.',
  },
  {
    name: 'Slender-Snouted Crocodile',
    region: 'Central and West Africa',
    coordinates: [0.0, 12.0],
    info: 'This species has a long, slender snout and inhabits forested rivers.',
  },
  {
    name: 'False Gharial',
    region: 'Indonesia, Malaysia',
    coordinates: [1.5, 102.0],
    info: 'False gharials are rare crocodilians with long, narrow snouts found in peat swamps.',
  },
  {
    name: 'Johnstone’s Crocodile',
    region: 'Australia',
    coordinates: [-15.0, 145.0],
    info: 'A smaller species, Johnstone’s crocodiles prefer freshwater rivers and creeks.',
  },
  {
    name: 'Black Caiman',
    region: 'Amazon Basin',
    coordinates: [-3.0, -60.0],
    info: 'The black caiman is the largest predator in the Amazon rainforest.',
  },
  {
    name: 'Spectacled Caiman',
    region: 'South America, Central America',
    coordinates: [4.0, -72.0],
    info: 'Named for the bony ridge between its eyes, this species is widely distributed.',
  },
  {
    name: 'Yacare Caiman',
    region: 'South America',
    coordinates: [-18.0, -56.0],
    info: 'The Yacare caiman inhabits wetlands and is known for preying on piranhas.',
  },
  {
    name: 'Chinese Alligator',
    region: 'China (Yangtze River basin)',
    coordinates: [30.0, 117.0],
    info: 'One of the rarest crocodilians, the Chinese alligator is found in freshwater marshes.',
  },
];

// Add markers for each habitat
habitats.forEach((habitat) => {
  const marker = L.marker(habitat.coordinates).addTo(map);

  // Add a popup to the marker
  marker.bindPopup(`
    <strong>${habitat.name}</strong><br>
    <em>Region:</em> ${habitat.region}<br>
    <p>${habitat.info}</p>
  `);

  // Update info box on click
  marker.on('click', () => {
    document.getElementById('infoBox').innerHTML = `
      <h2>${habitat.name}</h2>
      <p><strong>Region:</strong> ${habitat.region}</p>
      <p>${habitat.info}</p>
    `;
  });
});
