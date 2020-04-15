var map, places, infoWindow;
var markers = [];
var autocomplete;
var countryRestrict = { 'country': 'ma' };
var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
var hostnameRegexp = new RegExp('^https?://.+?/')
var countries = {
    'ma': {
        center: { lat: 31.889901, lng: -6.285022 },
        zoom: 6
    }
};

function initMap() {
    mapOptions = new google.maps.Map(document.getElementById('map'), {
        zoom: countries['ma'].zoom,
        center: countries['ma'].center,
        mapTypeControl: false
    });

    //Creates a list of results
    infoWindow = new google.maps.InfoWindow({
        content: document.getElementById('info-content')
    });

    // Create the autocomplete object and associate it with the UI input control.
    // Restrict the search to the default country, and to place type "cities".
    autocomplete = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */(
            document.getElementById('autocomplete')), {
        types: ['(cities)'],
        componentRestrictions: countryRestrict
    });
    places = new google.maps.places.PlacesService(mapOptions);
    autocomplete.addListener('place_changed', onPlaceChanged);
}

// When the user selects a city, get the place details for the city and
// zoom the map in on the city.
function onPlaceChanged() {
    var place = autocomplete.getPlace();
    if (place.geometry) {
        mapOptions.panTo(place.geometry.location);
        mapOptions.setZoom(15);
        search();
    } else {
        document.getElementById('autocomplete').placeholder = 'Search...';
    }
}


