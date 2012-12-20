google.load("maps", "2.x");

function initialize() {
    if (navigator.geolocation) {
        //Geolocation API を使った現在地の取得
        navigator.geolocation.getCurrentPosition(showPosition, handleError);
    }
}

//現在地の位置情報を表示する
function showPosition(position) {
    document.getElementById("location").innerHTML = "(" + position.coords.latitude + ", " + position.coords.longitude + ")";
    showAddress(position.coords.latitude, position.coords.longitude);
}

function handleError(error) {
    document.getElementById("location").innerHTML = error.message;
}

//住所を表示する
function showAddress(latitude, longitude) {
    try {
        var gclient = new google.maps.ClientGeocoder();
        var pos = new google.maps.LatLng(latitude, longitude);
	
        //Google Map API を使って住所を取得
        gclient.getLocations(pos, function(response) {
            if (response && response.Status.code == 200) {
                document.getElementById("address").innerHTML = response.Placemark[0].address;
            }
        });
    }
    catch (e) {
        alert(e.message);
    }
}

google.setOnLoadCallback(initialize);
