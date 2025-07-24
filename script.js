document.getElementById('carbonForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const transport = parseFloat(document.getElementById('transport').value);
  const meat = parseFloat(document.getElementById('meat').value);
  const electricity = parseFloat(document.getElementById('electricity').value);

  const transportFootprint = transport * 0.12;       // kg CO2 per km
  const meatFootprint = meat * 7;                    // kg CO2 per meal
  const electricityFootprint = electricity * 0.5;    // kg CO2 per kWh

  const total = (transportFootprint + meatFootprint + electricityFootprint).toFixed(2);

  document.getElementById('result').innerText = 
    `Your weekly carbon footprint is approximately ${total} kg of CO₂. 🌍`;
});
