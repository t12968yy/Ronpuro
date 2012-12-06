var keidaimae_kyuukou = [
    [7,00,15,32,40,45,55,],
    [8,12,22,32,42,55],
    [9,10,30,50],
    [10,00],
    [11,40],
    [12,20,40,],
    [13,30],
    [14],
    [15,22,39,52],
    [16,04,21,34,46,59],
    [17,06,19,31,44],
    [18,04,17,29,36,56],
    [19,02,16]
];

function get_bus_stop() {
/// pulldownの情報を取得
    var obj = document.bus.stop_name;
    var index = obj.selectedIndex;

/// 現在時間の取得
    var Jikan= new Date();
    var Hour = Jikan.getHours();
    var Minute = Jikan.getMinutes();
    var pre_time = Hour * 60 + Minute;

/// 出力用の変数設定
    var target_time = 23 * 60 + 59;

    if (index != 0){
        var stop = obj.options[index].value;
/// 慶応大学本館前だった場合
        if ( stop == "慶応大学本館前" ) {
            var hour_length = keidaimae_kyuukou.length;

/// 時刻表に登録されている「時間」ごとに
            for ( var h = 1; h < hour_length; h++ ) {

		var minute_length = keidaimae_kyuukou[h].length;

/// その「時間」にバスが無かった場合
		if ( minute_length == 1 ) {
///		    alert("No buses this hour");  この例外処理はいらない？
		}
		else {

/// 時刻表に登録されている「分」ごとに
                    for ( var m = 1; m < minute_length; m++ ) {

/// バスの時間を計算しやすくするように変換
			var bus_time = keidaimae_kyuukou[h][0] * 60 + keidaimae_kyuukou[h][m];

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
	    target_h = ( target_time - ( target_time % 60 ) ) / 60;
	    target_m = target_time % 60;
	    alert( target_h + ":" + target_m);
	}
    }
}
