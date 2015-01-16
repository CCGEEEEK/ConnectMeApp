cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/plugin.google.maps/www/googlemaps-cdv-plugin.js",
        "id": "plugin.google.maps.phonegap-googlemaps-plugin",
        "clobbers": [
            "plugin.google.maps"
        ]
    },
    {
        "file": "plugins/plugin.http.request/www/http-request.js",
        "id": "plugin.http.request.phonegap-http-requst",
        "clobbers": [
            "cordova.plugins.http-request"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "android.support.v4": "21.0.1",
    "com.google.playservices": "21.0.0",
    "com.googlemaps.ios": "1.9.1",
    "plugin.google.maps": "1.2.4",
    "plugin.http.request": "1.0.0"
}
// BOTTOM OF METADATA
});