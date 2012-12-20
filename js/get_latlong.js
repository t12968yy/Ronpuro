google.load("maps", "2.x");

// 最寄り駅検索
var zip_data = null;

function search(post) {
    var target = document.createElement('script');
    target.charset = 'utf-8';
    target.src = "http://geoapi.heartrails.com/api/json"
        + "?method=getStations"
        + "&postal=" + post
        + "&jsonp=callbackf";
    document.body.appendChild(target);
}

function callbackf(data) {
    var out = document.getElementById('codes');
    out.innerHTML += JSON.stringify(data);
}

// 郵便番号変換
var zip_data = null;

function postal(x,y) {
    var target = document.createElement('script2');
    target.charset = 'utf-8';
    target.src = "http://geoapi.heartrails.com/api/json"
        + "?method=searchByGeoLocation"
        + "&x=" + x
        + "&y=" + y
        + "&jsonp=callbackf";
    document.body.appendChild(target);
}

function callbackf(data) {
    var out = document.getElementById('codes');
    out.innerHTML += JSON.stringify(data);
}


// 現在地表示
function initialize() {
    if (navigator.geolocation) {
        //Geolocation API を使った現在地の取得
        navigator.geolocation.getCurrentPosition(showPosition, handleError);
    }
}

//現在地の位置情報を表示する
function showPosition(position) {
    document.getElementById("location").innerHTML = "(" + position.coords.latitude + ", " + position.coords.longitude + ")";

// postalに変換するのが必要
    document.getElementById("codes").innerHTML = search(position.coords.latitude, position.coords.longitude);


    showAddress(position.coords.latitude, position.coords.longitude);
}

function handleError(error) {
    document.getElementById("location").innerHTML = error.message;
}

google.setOnLoadCallback(initialize);



