mapboxgl.accessToken = 'pk.eyJ1IjoibmNvY2FuYSIsImEiOiJjbHI3eW05czkyNXhtMmtudm8yMHcyemJxIn0.TBRnMMZpfBD_bAuwr_bUFQ';

function initMap(initialLng, initialLat) {
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [initialLng, initialLat], // starting position [lng, lat]
        zoom: 1, // starting zoom
    });

    const userMarker = new mapboxgl.Marker()
        .setLngLat([initialLng, initialLat])
        .addTo(map);

    // Initialize the history array from localStorage or create an empty array
    let locationHistory = JSON.parse(localStorage.getItem('locationHistory')) || [];

    // Add markers for each location in locationHistory
    locationHistory.forEach((location, index) => {
        const marker = new mapboxgl.Marker()
            .setLngLat([location.longitude, location.latitude])
            .setPopup(new mapboxgl.Popup().setHTML(`<p>Location ${index + 1}</p>`))
            .addTo(map);
    });

    function updateMap(position) {
        const { longitude, latitude } = position.coords;
        map.setCenter([longitude, latitude]);
        userMarker.setLngLat([longitude, latitude]);

        // Add the current location to the history array
        locationHistory.push({ longitude, latitude });

        // Keep only the last 5 locations in the history
        locationHistory = locationHistory.slice(-5);

        // // Save the updated history array to localStorage
        localStorage.setItem('locationHistory', JSON.stringify(locationHistory));

        // Add markers for each location in locationHistory
        locationHistory.forEach((location, index) => {
            const marker = new mapboxgl.Marker()
                .setLngLat([location.longitude, location.latitude])
                .setPopup(new mapboxgl.Popup().setHTML(`<p>Location ${index + 1}</p>`))
                .addTo(map);
        });
    }

    function handleLocationError(error) {
        console.error('Error getting location:', error);
    }

    // Watch for changes in geolocation
    const watchId = navigator.geolocation.watchPosition(updateMap, handleLocationError);
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
            initMap(pos.coords.longitude, pos.coords.latitude);
        }, (error) => {
            console.error('Error getting initial location:', error);
        });
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
}

getLocation();