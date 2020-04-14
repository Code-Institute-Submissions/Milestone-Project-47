var map, places, infoWindow;
var markers = [];
var autocomplete;
var countryRestrict = { 'country': 'morocco' };
var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
var hostnameRegexp = new RegExp('^https?://.+?/')

var countries = {
    center: { lat: 31.889901, lng: -6.285022 },
    zoom: 6
};

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: countries.zoom,
        center: countries.center,
        mapTypeControl: false
    });
}