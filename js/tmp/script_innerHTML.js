function get_bus_stop(bus_stop) {
/// pulldownの情報を取得
    var obj   = document.bus.stop_name;
    var index = obj.selectedIndex;

/// innerHTML
    var time        =  document.getElementById('time');
    var destination = document.getElementById('destination');
/// 現在時間の取得
    var Jikan    = new Date();
    var Hour     = Jikan.getHours();
    var Minute   = Jikan.getMinutes();
    var Day      = Jikan.getDay()
    var pre_time = Hour * 60 + Minute;

/// 出力用の変数設定
    var target_time = 23 * 60 + 59;

/// その他の変数宣言
    var hoge = "";

    if (index != 0){
        var stop = obj.options[index].value;
	destination.innerHTML = stop;

/// 慶応大学本館前だった場合
        if ( stop == "慶応大学/湘南台駅西口(急行)" ) {
	    if ( Day == 0 ) { ///SUN
		time.innerText =  "No Bauses on this line on Sundays";
	    }
	    else if ( Day == 6 ) { //SAT
		time.innerText = "No Bauses on this line on Sundays";
	    }
	    else {
		hoge = keiouniv_syounandai_kyuukou_weekday;
	    }
///	    alert(stop);
	}
	else if ( stop == "慶応大学本館前/湘南台駅西口(急行)" ) {
	    if ( Day == 0 ) { ///SUN
		time.innerText =  "No Bauses on this line on Sundays";
	    }
            else if ( Day == 6 ) { //SAT
		hoge = keiomain_syounandai_kyuukou_sat;
            }
	    else {
		hoge = keiomain_syounandai_kyuukou_weekday;
	    }
///	    alert(stop);
	}
	else if ( stop = "慶応大学本館前/辻堂駅北口" ) {
	    if ( Day == 0 ) {
		time.innerText = "No Buses on this line on Sundays";
	    }
	    else if ( Day == 6 ) {
		time.innerHTML = "No Buses on this line on Sundays";
	    }
	    else {
		hoge = keiomain_tujidou_weekday;
	    }
///	    alert(stop);
	}
    }


    var hour_length = hoge.length ;

/// 時刻表に登録されている「時間」ごとに
    for ( var h = 0; h < hour_length; h++ ) {
	var minute_length = hoge[h].length;

/// その「時間」にバスが無かった場合
	if ( minute_length == 1 ) {
///		    alert("No buses this hour");  この例外処理はいらない？
	}
	else {

/// 時刻表に登録されている「分」ごとに
            for ( var m = 1; m < minute_length; m++ ) {

/// バスの時間を計算しやすくするように変換
		var bus_time = hoge[h][0] * 60 + hoge[h][m];

/// バスの時間が現在時刻より遅い場合、そしてtarget_timeより早い場合（一番近い時間）を求める
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
    target_destination = hoge[0][0];
    target_data        = hoge[0][1];
    if ( target_time == 1439 ) {
	time.innerText =  " No More Buses Today " ;
    }
    else if ( target_time > 180 ) {
	time.innerText = " No More Buses Today ";
    }
    else {
	var out = target_h + ":" + target_m
	time.innerText = out;
    }
}

