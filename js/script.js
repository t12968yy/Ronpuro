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
//	time.innerHTML =  " No More Buses Today 1" ;
	out =  "Bus Arrival =>  Last bus has already departed<br/>Present time => " + pre_time_h + ":" + pre_time_m + "<br/>Time Left => NaN";
    }
    else if ( target_time - pre_time > 180 ) {
//	time.innerHTML = " There are no buses in the near 3 hours.";
	out = " There are no buses in the near 3 hours.<br>";
    }
    else {
	out = "<table border=\"0\" align=\"left\" width=\"300\"><tr width=\"200\"><td>Bus Arrival</td><td>=></td><td>" + target_h + ":" + target_m + "</td></tr><tr width=\"50\"><td>Present time</td><td>=></td><td>" + pre_time_h + ":" + pre_time_m + "</td></tr><tr width=\"50\"><td>Time Left</td><td> =></td><td>" + diff + " min</td></tr></table><br/>";
    }
    return out;
}


function get_bus() {
// pulldownからバス停の情報取得
    var obj = document.bus.stop_name;
    var index = obj.selectedIndex;

// innerHTML用に情報取得
    var destination = document.getElementById('destination');
    var time        =  document.getElementById('time');

// 現在時間の取得
    var Jikan    = new Date();
    var Day      = Jikan.getDay()

// バス停の情報の明示化
    if (index != 0) {
	var stop = obj.options[index].value;
	destination.innerHTML = stop;

//データベースを増やしていけばok
	var bus_stop;

	if ( stop == "慶応大学/(急行)湘南台駅西口" ) {
            if ( Day == 0 ) { ///SUN
		time.innerHTML =  "No Buses on this line on Sundays";
            }
            else if ( Day == 6 ) { //SAT
		bus_stop =  get_bus_stop(keiouniv_syounandai_kyuukou_sat);
            }
            else {
		bus_stop =  get_bus_stop(keiouniv_syounandai_kyuukou_weekday);
            }
	}
	else if ( stop == "慶応大学/湘南台駅西口" ) {
            if ( Day == 0 ) { ///SUN
		bus_stop =  get_bus_stop(keiouniv_syounandai_norm_sun);
            }
            else if ( Day == 6 ) { //SAT
		bus_stop =  get_bus_stop(keiouniv_syounandai_norm_sat);
            }
            else {
		bus_stop =  get_bus_stop(keiouniv_syounandai_norm_weekday);
            }
	}
	else if ( stop == "慶応大学本館前/湘南台駅西口" ) {
            if ( Day == 0 ) {
		time.innerHTML = "No Buses on this line on Sundays";
            }
            else if ( Day == 6 ) {
		bus_stop =  get_bus_stop(keiomain_syounandai_norm_sat);
            }
            else {
		bus_stop =  get_bus_stop(keiomain_syounandai_norm_weekday);
            }
	}
	else if ( stop == "慶応大学本館前/辻堂駅北口" ) {
            if ( Day == 0 ) {
		time.innerHTML = "No Buses on this line on Sundays";
            }
            else if ( Day == 6 ) {
//		bus_stop =  get_bus_stop(keiomain_tujidou_sat) + " // " + stop;
		time.innerHTML = "No Buses on this line on Saturdays";
            }
            else {
		bus_stop =  get_bus_stop(keiomain_tujidou_weekday);
            }
	}
	else if ( stop == "公務員住宅入口/上永谷駅前" ) {
            if ( Day == 0 ) {
		time.innerHTML = "No Buses on this line on Sundays";
            }
            else if ( Day == 6 ) {
		time.innerHTML = "No Buses on this line on Saturdays";
            }
            else {
		bus_stop =  get_bus_stop(koumuinn_kaminagaya_weekday);
            }
	}
	else if ( stop == "公務員住宅入口/上大岡駅前" ) {
            if ( Day == 0 ) {
		time.innerHTML = "No Buses on this line on Sundays";
            }
            else if ( Day == 6 ) {
		time.innerHTML = "No Buses on this line on Saturdays";
            }
            else {
		bus_stop =  get_bus_stop(koumuinn_kamioooka_weekday);
            }
	}
	else if ( stop == "慶応大学本館前/(急行)湘南台駅西口" ) {
            if ( Day == 0 ) { ///SUN
		time.innerHTML =  "No Buses on this line on Sundays";
            }
            else if ( Day == 6 ) { //SAT
		bus_stop =  get_bus_stop(keiomain_syounandai_kyuukou_sat);
            }
            else {
		bus_stop =  get_bus_stop(keiomain_syounandai_kyuukou_weekday);
            }
	}
	else if ( stop == "湘南台駅西口/慶応大学中高部前" ) {
            if ( Day == 0 ) {
		time.innerHTML = "No Buses on this line on Sundays";
            }
            else if ( Day == 6 ) {
		time.innerHTML = "No Buses on this line on Saturdays";
            }
            else {
		bus_stop =  get_bus_stop(syounandai_keiomain_norm_weekday);
            }
	}
	else if ( stop == "湘南台駅西口/(急行)慶応大学中高部前" ) {
            if ( Day == 0 ) {
		time.innerHTML = "No Buses on this line on Sundays";
            }
            else if ( Day == 6 ) {
		time.innerHTML = "No Buses on this line on Saturdays";
            }
            else {
		bus_stop =  get_bus_stop(syounandai_keiomain_kyuukou_weekday);
            }
	}
    }
    time.innerHTML = bus_stop;
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
	    var stop = "keiomain_tujidou_weekday" ;
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
