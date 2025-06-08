
let map;
let markers = [];
let listings = document.querySelectorAll('.listing');

// Beispiel-Daten (normalerweise käme das aus einer Datenbank)
const locations = [
  { id: 'wrzeszcz', title: 'Wrzeszcz', position: { lat: 54.3849, lng: 18.5913 } },
  { id: 'oliwa', title: 'Oliwa', position: { lat: 54.4100, lng: 18.5600 } },
  { id: 'srodmiescie', title: 'Śródmieście', position: { lat: 54.3520, lng: 18.6466 } }
];

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 54.3721, lng: 18.6383 }
  });

  locations.forEach(loc => {
    const marker = new google.maps.Marker({
      position: loc.position,
      map,
      title: loc.title,
      icon: {
        url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
        scaledSize: new google.maps.Size(32, 32)
      }
    });
    marker._id = loc.id;
    markers.push(marker);

    marker.addListener("mouseover", () => highlightListing(loc.id));
    marker.addListener("mouseout", () => unhighlightListing(loc.id));
  });

  listings.forEach(listing => {
    const id = listing.dataset.id;
    listing.addEventListener("mouseover", () => highlightMarker(id));
    listing.addEventListener("mouseout", () => unhighlightMarker(id));
  });
}

function highlightMarker(id) {
  const marker = markers.find(m => m._id === id);
  if (marker) marker.setIcon({
    url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
    scaledSize: new google.maps.Size(48, 48)
  });
}

function unhighlightMarker(id) {
  const marker = markers.find(m => m._id === id);
  if (marker) marker.setIcon({
    url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
    scaledSize: new google.maps.Size(32, 32)
  });
}

function highlightListing(id) {
  const el = document.querySelector(`.listing[data-id='${id}']`);
  if (el) el.classList.add("highlight");
}

function unhighlightListing(id) {
  const el = document.querySelector(`.listing[data-id='${id}']`);
  if (el) el.classList.remove("highlight");
}
