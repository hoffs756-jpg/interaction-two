function modifyElement(element, content, styles) {
  if (content !== null) element.textContent = content;
  if (styles) Object.assign(element.style, styles);
}

function setWeather(type) {
  const label = document.getElementById('weather-label');
  const iconEl = document.getElementById('icon-el');
  const temp = document.getElementById('stat-temp');

  iconEl.className = 'icon';

  if (type === 'rain') {
    iconEl.classList.add('drop');
    modifyElement(label, 'Rainy', { color: '#0C447C' });
    modifyElement(temp, '58°F', null);

  } else if (type === 'sun') {
    iconEl.classList.add('sun');
    modifyElement(label, 'Sunny', { color: '#f4a300' });
    modifyElement(temp, '74°F', null);

  } else if (type === 'cloud') {
    iconEl.classList.add('cloud');
    modifyElement(label, 'Cloudy', { color: '#555' });
    modifyElement(temp, '65°F', null);
  }
}