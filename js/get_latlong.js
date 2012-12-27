google.load("maps", "2.x");

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



