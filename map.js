
function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: { lat: 54.3721, lng: 18.6383 } // Zentrum Danzig
  });

  const locations = [
    { title: 'Wrzeszcz', position: { lat: 54.3849, lng: 18.5913 } },
    { title: 'Oliwa', position: { lat: 54.4100, lng: 18.5600 } },
    { title: 'Śródmieście', position: { lat: 54.3520, lng: 18.6466 } }
  ];

  locations.forEach(loc => {
    new google.maps.Marker({
      position: loc.position,
      map,
      title: loc.title
    });
  });
}
