google.load("maps", "2.x");

// 現在地表示
function initialize() {
    if (navigator.geolocation) {
        //Geolocation API を使った現在地の取得
        navigator.geolocation.getCurrentPosition(showPosition, handleError);
    }
}

//現在地の位置情報を表示する
//あとAPIを用いて付近の駅を検索する。
function showPosition(position) {
    document.getElementById("location").innerHTML = "(" + position.coords.latitude + ", " + position.coords.longitude + ")";

    postal(position.coords.longitude, position.coords.latitude);
}

function handleError(error) {
    document.getElementById("location").innerHTML = error.message;
}

google.setOnLoadCallback(initialize);


// 郵便番号変換
function postal(x,y) {
    var target = document.createElement('script');
    target.charset = 'utf-8';
    target.src = "http://express.heartrails.com/api/json"
        + "?method=getStations"
        + "&x=" + x
        + "&y=" + y
        + "&jsonp=callbackf";
    document.body.appendChild(target);
}
function callbackf(data) {
    var out = document.getElementById('out');
    var code = document.getElementById('code');

// Tableとして整形するため
//    out.innerHTML = "<table border=\"0\" align=\"left\" style=\"table-layout: fixed;\">";
    for( var i = 0; i < data.response.station.length; i++ ) {
	code.innerHTML +=  data.response.station[i].line + " " + data.response.station[i].name + " " + data.response.station[i].distance + "<br/>";

// Tableとして整形するため
//	out.innerHTML = "<tr width=\"200\"><td>data.response.station[i].line</td><td>data.response.station[i].name</td><td>data.response.station[i].distance</td><tr/>";

    }
// Tableとして整形するため
//    out.innerHTML = "</table>";
}
