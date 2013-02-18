function get_bus_stop(hoge) {
/// innerHTML
    var time        =  document.getElementById('time');
    var destination = document.getElementById('destination');
//    var trash       = document.getElementById('trash');

///function get_bus_time(hoge) {
/// 現在時間の取得
    var Jikan    = new Date();
    var Hour     = Jikan.getHours();
    var Minute   = Jikan.getMinutes();
    var Day      = Jikan.getDay()
    var pre_time = Hour * 60 + Minute;

/// 出力用の変数設定
    var target_time = 23 * 60 + 59;
//    trash.innerHTML = hoge;

    var hour_length = hoge.length ;

/// 時刻表に登録されている「時間」ごとに
    for ( var h = 0; h < hour_length; h++ ) {
	var minute_length = hoge[h].length;

/// その「時間」にバスが無かった場合
	if ( minute_length == 1 ) {
///		    alert("No buses this hour");  この例外処理はいらない？
	    // next;みたいのないかな？
	}
	else {

/// 時刻表に登録されている「分」ごとに
            for ( var m = 1; m < minute_length; m++ ) {

/// バスの時間を計算しやすくするように変換
		var bus_time = hoge[h][0] * 60 + hoge[h][m];

/// バスの時間が現在時刻より遅い場合、
/// そしてtarget_timeより早い場合（一番近い時間）を求める
		if (  bus_time - pre_time > 0 ) {
		    if ( bus_time < target_time ) {
			target_time = bus_time;
		    }
		}
            }
	}
    }

/// 再び24時間表示にする
    target_h           = ( target_time - ( target_time % 60 ) ) / 60;
    target_m           = target_time % 60;
    if ( target_m < 10 ) {
	target_m = "0" + String(target_m);
    }
    pre_time_h         = ( pre_time - (pre_time % 60 ) ) / 60;
    pre_time_m         = pre_time % 60;
    if ( pre_time_m < 10 ) {
	pre_time_m = "0" + String(pre_time_m);
    }

    var diff = target_time - pre_time;


/// innerHTMLに出力
    var out;
    if ( target_time == 1439 ) {
	out = "<table class=\"class1\" border=\"0\" align=\"left\" style=\"table-layout: fixed;\"><tr width=\"200\"><td>Bus Arrival</td><td>=></td><td>Last bus has already departed</td></tr><tr width=\"50\"><td>Present time</td><td>=></td><td>" + pre_time_h + ":" + pre_time_m + "</td></tr><tr width=\"50\"><td>Time Left</td><td> =></td><td>NaN</td></tr></table>";
    }
    else if ( target_time - pre_time > 180 ) {
	out = "<table class=\"class1\" border=\"0\" align=\"left\" style=\"table-layout: fixed;\"><tr width=\"200\"><td>Bus Arrival</td><td>=></td><td>There are no buses in the next 3 hours</td></tr><tr width=\"50\"><td>Present time</td><td>=></td><td>" + pre_time_h + ":" + pre_time_m + "</td></tr><tr width=\"50\"><td>Time Left</td><td> =></td><td>NaN</td></tr></table>";
    }
    else {
	out = "<table class=\"class1\" border=\"0\" align=\"left\" style=\"table-layout: fixed;\" ><tr width=\"200\"><td>Bus Arrival</td><td>=></td><td>" + target_h + ":" + target_m + "</td></tr><tr width=\"50\"><td>Present time</td><td>=></td><td>" + pre_time_h + ":" + pre_time_m + "</td></tr><tr width=\"50\"><td>Time Left</td><td> =></td><td>" + diff + " min</td></tr></table>";
    }
    return out;
}

function bus_timeline(hoge) {
    // 出力用の変数。<table>で整形
    var out = "<table>";

    // その路線が存在する時間をfor分で
    var hour_length = hoge.length;
    for ( var h = 0; h < hour_length; h++ ) {
	out += "<tr>";

	var hour = hoge[h][0];
	// 一桁の数字を全て0をつけて二桁に
	if ( String(hour).length == 1 ) {
	    hour = "0"+String(hour);
	}
	out += "<td>" + hour + "</td><td>:</td>";

	// その時間でバスが一個も無かった場合
	var minute_length = hoge[h].length;
	if( minute_length == 1 ) {
	    out += "<td>x</td>";
	}
	else {
	    /// 時刻表に登録されている「分」ごとに
            for ( var m = 1; m < minute_length; m++ ) {
		// 一桁の数字を全て0をつけて二桁に
		var min = hoge[h][m];
		if ( String(min).length == 1 ) {
		    min = "0"+String(min);
		}
		out += "<td>" + min + ",</td>";
            }
	}
	out += "</tr>";
    }
    out += "</table>";
    // 出力
    return out;
}

function get_bus() {
// pulldownからバス停の情報取得
    var obj = document.bus.stop_name;
    var index = obj.selectedIndex;

// innerHTML用に情報取得
    var destination = document.getElementById('destination');
    var time        =  document.getElementById('time');
    var timeline    = document.getElementById("Timeframe");

// 現在時間の取得
    var Jikan    = new Date();
    var Day      = Jikan.getDay()

// バス停の情報の明示化
    if (index != 0) {
	var stop = obj.options[index].value;
	destination.innerHTML = DATA["BusStopName"][stop] + " " + DATA["Express"][stop];

	if ( stop == "1" ) { /// 慶応大学/湘南台駅西口(急行)
            if ( Day == 0 ) { ///SUN
		bus_stop =  "<table border=\"0\" align=\"left\" style=\"table-layout: fixed;\" ><tr width=\"200\"><td>Bus Arrival</td><td>=></td><td>No Buses on this line on Sundays</td></tr><tr width=\"50\"><td>Present time</td><td>=></td><td>" + pre_time_h + ":" + pre_time_m + "</td></tr><tr width=\"50\"><td>Time Left</td><td> =></td><td>NaN</td></tr></table>";
            }
            else if ( Day == 6 ) { //SAT
		bus_stop = get_bus_stop(B1_sat);
		bus_time = bus_timeline(B1_sat);
            }
            else {
		bus_stop = get_bus_stop(B1_weekday);
		bus_time = bus_timeline(B1_weekday);
            }
	}
	else if ( stop == "2" ) {
            if ( Day == 0 ) { ///SUN
		bus_stop = get_bus_stop(B2_sun);
		bus_time = bus_timeline(B2_sun);
            }
            else if ( Day == 6 ) { //SAT
		bus_stop = get_bus_stop(B2_sat);
		bus_time = bus_timeline(B2_sat);
            }
            else {
		bus_stop = get_bus_stop(B2_weekday);
		bus_time = bus_timeline(B2_weekday);
            }
	}
	else if ( stop == "3" ) {
            if ( Day == 0 ) {
		bus_stop =  "<table border=\"0\" align=\"left\" style=\"table-layout: fixed;\" ><tr width=\"200\"><td>Bus Arrival</td><td>=></td><td>No Buses on this line on Sundays</td></tr><tr width=\"50\"><td>Present time</td><td>=></td><td>" + pre_time_h + ":" + pre_time_m + "</td></tr><tr width=\"50\"><td>Time Left</td><td> =></td><td>NaN</td></tr></table>";
            }
            else if ( Day == 6 ) {
		bus_stop = get_bus_stop(B3_sat);
		bus_time = bus_timelinep(B3_sat);
            }
            else {
		bus_stop = get_bus_stop(B3_weekday);
		bus_time = bus_timeline(B3_weekday);
            }
	}
	else if ( stop == "4" ) {
            if ( Day == 0 ) {
		bus_stop =  "<table border=\"0\" align=\"left\" style=\"table-layout: fixed;\" ><tr width=\"200\"><td>Bus Arrival</td><td>=></td><td>No Buses on this line on Sundays</td></tr><tr width=\"50\"><td>Present time</td><td>=></td><td>" + pre_time_h + ":" + pre_time_m + "</td></tr><tr width=\"50\"><td>Time Left</td><td> =></td><td>NaN</td></tr></table>";
            }
            else if ( Day == 6 ) {
		bus_stop =  "<table border=\"0\" align=\"left\" style=\"table-layout: fixed;\" ><tr width=\"200\"><td>Bus Arrival</td><td>=></td><td>No Buses on this line on Saturdays</td></tr><tr width=\"50\"><td>Present time</td><td>=></td><td>" + pre_time_h + ":" + pre_time_m + "</td></tr><tr width=\"50\"><td>Time Left</td><td> =></td><td>NaN</td></tr></table>";
            }
            else {
		bus_stop = get_bus_stop(B4_weekday);
		bus_time = bus_timeline(B4_weekday);
            }
	}
	else if ( stop == "5" ) {
            if ( Day == 0 ) {
		bus_stop =  "<table border=\"0\" align=\"left\" style=\"table-layout: fixed;\" ><tr width=\"200\"><td>Bus Arrival</td><td>=></td><td>No Buses on this line on Sundays</td></tr><tr width=\"50\"><td>Present time</td><td>=></td><td>" + pre_time_h + ":" + pre_time_m + "</td></tr><tr width=\"50\"><td>Time Left</td><td> =></td><td>NaN</td></tr></table>";
            }
            else if ( Day == 6 ) {
		bus_stop =  "<table border=\"0\" align=\"left\" style=\"table-layout: fixed;\" ><tr width=\"200\"><td>Bus Arrival</td><td>=></td><td>No Buses on this line on Saturdays</td></tr><tr width=\"50\"><td>Present time</td><td>=></td><td>" + pre_time_h + ":" + pre_time_m + "</td></tr><tr width=\"50\"><td>Time Left</td><td> =></td><td>NaN</td></tr></table>";
            }
            else {
		bus_stop = get_bus_stop(B5_weekday);
		bus_time = bus_timeline(B5_weekday);
            }
	}
	else if ( stop == "6" ) {
            if ( Day == 0 ) {
		bus_stop =  "<table border=\"0\" align=\"left\" style=\"table-layout: fixed;\" ><tr width=\"200\"><td>Bus Arrival</td><td>=></td><td>No Buses on this line on Sundays</td></tr><tr width=\"50\"><td>Present time</td><td>=></td><td>" + pre_time_h + ":" + pre_time_m + "</td></tr><tr width=\"50\"><td>Time Left</td><td> =></td><td>NaN</td></tr></table>";
            }
            else if ( Day == 6 ) {
		bus_stop =  "<table border=\"0\" align=\"left\" style=\"table-layout: fixed;\" ><tr width=\"200\"><td>Bus Arrival</td><td>=></td><td>No Buses on this line on Saturdays</td></tr><tr width=\"50\"><td>Present time</td><td>=></td><td>" + pre_time_h + ":" + pre_time_m + "</td></tr><tr width=\"50\"><td>Time Left</td><td> =></td><td>NaN</td></tr></table>";
            }
            else {
		bus_stop = get_bus_stop(B6_weekday);
		bus_time = bus_timeline(B6_weekday);
            }
	}
	else if ( stop == "7" ) {
            if ( Day == 0 ) { ///SUN
		bus_stop =  "<table border=\"0\" align=\"left\" style=\"table-layout: fixed;\" ><tr width=\"200\"><td>Bus Arrival</td><td>=></td><td>No Buses on this line on Sundays</td></tr><tr width=\"50\"><td>Present time</td><td>=></td><td>" + pre_time_h + ":" + pre_time_m + "</td></tr><tr width=\"50\"><td>Time Left</td><td> =></td><td>NaN</td></tr></table>";
            }
            else if ( Day == 6 ) { //SAT
		bus_stop = get_bus_stop(B7_sat);
		bus_time = bus_timeline(B7_sat);
            }
            else {
		bus_stop = get_bus_stop(B7_weekday);
		bus_time = bus_timeline(B7_weekday);
            }
	}
	else if ( stop == "8" ) {
            if ( Day == 0 ) {
		bus_stop =  "<table border=\"0\" align=\"left\" style=\"table-layout: fixed;\" ><tr width=\"200\"><td>Bus Arrival</td><td>=></td><td>No Buses on this line on Sundays</td></tr><tr width=\"50\"><td>Present time</td><td>=></td><td>" + pre_time_h + ":" + pre_time_m + "</td></tr><tr width=\"50\"><td>Time Left</td><td> =></td><td>NaN</td></tr></table>";
            }
            else if ( Day == 6 ) {
		bus_stop =  "<table border=\"0\" align=\"left\" style=\"table-layout: fixed;\" ><tr width=\"200\"><td>Bus Arrival</td><td>=></td><td>No Buses on this line on Saturdays</td></tr><tr width=\"50\"><td>Present time</td><td>=></td><td>" + pre_time_h + ":" + pre_time_m + "</td></tr><tr width=\"50\"><td>Time Left</td><td> =></td><td>NaN</td></tr></table>";
            }
            else {
		bus_stop = get_bus_stop(B8_weekday);
		bus_time = bus_timeline(B8_weekday);
            }
	}
	else if ( stop == "9" ) {
            if ( Day == 0 ) {
		bus_stop =  "<table border=\"0\" align=\"left\" style=\"table-layout: fixed;\" ><tr width=\"200\"><td>Bus Arrival</td><td>=></td><td>No Buses on this line on Sundays</td></tr><tr width=\"50\"><td>Present time</td><td>=></td><td>NA</td></tr><tr width=\"50\"><td>Time Left</td><td> =></td><td>NaN</td></tr></table>";
            }
            else if ( Day == 6 ) {
		bus_stop =  "<table border=\"0\" align=\"left\" style=\"table-layout: fixed;\" ><tr width=\"200\"><td>Bus Arrival</td><td>=></td><td>No Buses on this line on Saturdays</td></tr><tr width=\"50\"><td>Present time</td><td>=></td><td>NA</td></tr><tr width=\"50\"><td>Time Left</td><td> =></td><td>NaN</td></tr></table>";
            }
            else {
		bus_stop = get_bus_stop(B9_weekday);
		bus_time = bus_timeline(B9_weekday);
            }
	}
	else if ( stop == "10" ){
	    if ( Day == 0 ) {
		bus_stop =  "<table border=\"0\" align=\"left\" style=\"table-layout: fixed;\" ><tr width=\"200\"><td>Bus Arrival</td><td>=></td><td>No Buses on this line on Sundays</td></tr><tr width=\"50\"><td>Present time</td><td>=></td><td>NA</td></tr><tr width=\"50\"><td>Time Left</td><td> =></td><td>NaN</td></tr></table>";
	    }
	    else if ( Day == 6 ) {
		bus_stop =  "<table border=\"0\" align=\"left\" style=\"table-layout: fixed;\" ><tr width=\"200\"><td>Bus Arrival</td><td>=></td><td>No Buses on this line on Sundays</td></tr><tr width=\"50\"><td>Present time</td><td>=></td><td>NA</td></tr><tr width=\"50\"><td>Time Left</td><td> =></td><td>NaN</td></tr></table>";
	    }
	    else {
		bus_stop = get_bus_stop(B10_weekday);
		bus_time = bus_timeline(B10_weekday);
	    }
	}
	else if ( stop == "Origin" ) {
	    alert(stop);
	    bus_stop =  "<table border=\"0\" align=\"left\" style=\"table-layout: fixed;\" ><tr width=\"200\"><td>Bus Arrival</td><td>=></td><td>Not Selected</td></tr><tr width=\"50\"><td>Present time</td><td>=></td><td>Not Selected</td></tr><tr width=\"50\"><td>Time Left</td><td> =></td><td>NaN</td></tr></table>";
	}
    }
    time.innerHTML   = bus_stop;
    timeline.innerHTML = bus_time;
}
/*
function index_find() {
    var query = document.getElementById('index').value;
    var index_out = document.getElementById('index_result');

/// 登録されているバス停の取得
    var obj = document.bus.stop_name;
    var stop = [];
    stop_array = obj.options;

/// for文でまわして、正規表現で検索？
    for ( var i = 0; i < stop_array.length; i++ ) {
	var stop_jap = stop_array[i].value;

	rObj = new RegExp("&#24950;&#24540;&#22823;&#23398;&#26412;&#39208;&#21069;\/&#36795;&#22530;&#39365;&#21271;&#21475;"); // 慶応大学本館前/辻堂駅北口
	if ( stop_jap.match(rObj) ) { ///正規表現
	    var stop = "B4_weekday" ;
	    // 現在時間の取得
	    var Jikan    = new Date();
	    var Day      = Jikan.getDay()

	    if ( Day == 0 ) {
		index_out.innerHTML = "No Buses on this line on Sundays";
	    }
	    else if ( Day == 6 ) {
	        index_out.innerHTML = "No Buses on this line on Saturdays";	
	    }
	    else {
		var bus_stop =  get_bus(stop)
		index_out.innerHTML = bus_stop + "hoge";
	    }
	}
	else {
	    index_out.innerHTML = "The bus stop you indexed has not been registered";
	}
    }
}
*/
