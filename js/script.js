function get_bus_stop(hoge, stop) {
//    alert( typeof hoge);
/// innerHTML
    var time        = document.getElementById('time');
    var destination = document.getElementById('destination');

    var figure      = document.getElementById('figure');

/// 現在時間の取得
    var Jikan    = new Date();
    var Hour     = Jikan.getHours();
    var Minute   = Jikan.getMinutes();
    var Day      = Jikan.getDay();
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
	    // とりあえずここの処理無くても動くっぽいので後回し //
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
    else if ( diff > 180 ) {
	out = "<table class=\"class1\" border=\"0\" align=\"left\" style=\"table-layout: fixed;\"><tr width=\"200\"><td>Bus Arrival</td><td>=></td><td>There are no buses in the next 3 hours</td></tr><tr width=\"50\"><td>Present time</td><td>=></td><td>" + pre_time_h + ":" + pre_time_m + "</td></tr><tr width=\"50\"><td>Time Left</td><td> =></td><td>NaN</td></tr></table>";
    }
    else {
	out = "<table class=\"class1\" border=\"0\" align=\"left\" style=\"table-layout: fixed;\" ><tr width=\"200\"><td>Bus Arrival</td><td>=></td><td>" + target_h + ":" + target_m + "</td></tr><tr width=\"50\"><td>Present time</td><td>=></td><td>" + pre_time_h + ":" + pre_time_m + "</td></tr><tr width=\"50\"><td>Time Left</td><td> =></td><td>" + diff + " min</td></tr></table>";
	figure.innerHTML = DATA["BusStopName"][stop] + " ";
	for ( var i = 0; i< diff; i++ ){
	    figure.innerHTML += ".";
	}
	figure.innerHTML += "&#10721;";
    }
    return out;
}

function bus_timeline(hoge) {
    // 出力用の変数。<table>で整形
    var out = "<table>";

    // その路線が存在する時間をfor分で
    var hour_length = hoge.length;
    for ( var h = 0; h < hour_length; h++ ) {
	out      += "<tr>";

	var hour = hoge[h][0];
	// 一桁の数字を全て0をつけて二桁に
	if ( String(hour).length == 1 ) {
	    hour = "0"+String(hour);
	}
	out      += "<td>" + hour + "</td><td>:</td>";

	// その時間でバスが一個も無かった場合
	var minute_length = hoge[h].length;
	if( minute_length == 1 ) {
	    out  += "<td>x</td>";
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

// 親pulldownの作成
function Make_pulldown_P() {
    var out = document.getElementById('parentS');
    var htm="<select onChange=\"Make_pulldown_C(this.form)\" name=\"stop_name\" id=\"parentS\" style='width:200px;'><br/><option value=\"Origin\" selected>====== 選択してください ======</option>";
    for ( i in Bus_Stop_Name ) {
	htm += "<option value='"+i+"'>"+Bus_Stop_Name[i]['Name']+"<\/option>";
    }
    htm+="<\/select>";
// HTML出力
    out.innerHTML=htm;
}

// 子供pulldownの作成
function Make_pulldown_C(frmObj) {
    var pObj = frmObj.elements["parentS"].options;
    var out  = document.getElementById('childS');
    var htm="<select onChange=\"Make_pulldown_GC(this.form)\" name=\"destination_name\" id=\"childS\" style='width:200px;'><br/><option value=\"Origin\" selected>====== 選択してください ======</option>";

// 親ジャンルのoption数
    var pObjLen=pObj.length;
    for(i=0; i<pObjLen; i++ ) {
// 親ジャンルの選択値を取得
        if(pObj[i].selected == 1){
	    for ( j in Bus_Stop_Name[pObj[i].value]['Destination'] ) {
		var query = j;
                htm += "<option value='"+j+"'>"+j+"<\/option>";
	    }
        }
    }
    htm+="<\/select>";
// HTML出力
    out.innerHTML=htm;
}

// 孫pulldownの作成
function Make_pulldown_GC(frmObj) {
    var pObj     = frmObj.elements["childS"].options;
    var pObj_old = document.bus.stop_name.value;
    var out      = document.getElementById('grandchildS');
    var htm      = "<select onChange=\"get_bus()\" name='status_name' style='width:200px;'><br/><option value=\"Origin\" selected>====== 選択してください ======</option>";

// 子供ジャンルのoption数
    var pObjLen=pObj.length;
    for(i=0; i<pObjLen; i++ ) {
// 子供ジャンルの選択値を取得
	if(pObj[i].selected == 1){
	    for ( j in Bus_Stop_Name[pObj_old]['Destination'][pObj[i].value] ) {
		var query = j;
		htm += "<option value='"+j+"'>"+j+"<\/option>";
	    }
	}
    }
    htm+="<\/select>";
// HTML出力
    out.innerHTML=htm;
}

function get_bus() {
// pulldownからバス停の情報取得
    var obj          = document.bus.stop_name;
    var index        = obj.selectedIndex;
    var obj2         = document.bus.destination_name;
    var obj3         = document.bus.status_name;

// innerHTML用に情報取得
    var destination = document.getElementById('destination');
    var time        = document.getElementById('time');
    var timeline    = document.getElementById('Timeframe');
    var figure      = document.getElementById('figure');

// 現在時間の取得
    var Jikan       = new Date();
    var Day         = Jikan.getDay()
    var Hour        = Jikan.getHours();
    var Minute      = Jikan.getMinutes();

// Undefiend時のbus_stopのエスケープ
    var bus_stop_undefined = "<table border=\"0\" align=\"left\" style=\"table-layout: fixed;\" ><tr width=\"200\"><td>Bus Arrival</td><td>=></td><td>No Buses on this line on Sundays</td></tr><tr width=\"50\"><td>Present time</td><td>=></td><td>" + Hour + ":" + Minute + "</td></tr><tr width=\"50\"><td>Time Left</td><td> =></td><td>NaN</td></tr></table>";

// バス停の情報の明示化
    if (index != 0) {
	var stop                = obj.options[index].value;
	var dest                = obj2.value;
	var status              = obj3.value;
	var QUERY = Bus_Stop_Name[stop]['Destination'][dest][status]['Time'];

// InnerHTMLの初期化および出力
	figure.innerHTML = "";
	destination.innerHTML = dest + " : " + status;

// データの出力用の関数を用いて準備
	if ( Day == 0 ) {
	    QUERY = QUERY['Sunday'];
	    bus_stop     = get_bus_stop(QUERY,stop);
	    bus_time     = bus_timeline(QUERY)
	    if ( typeof bus_stop == 'undefined' ) {
		bus_stop = bus_stop_undefiend;
	    }
	}
        else if ( Day == 0 ) { //SAT
	    QUERY = QUERY['Saturday'];
	    bus_stop     = get_bus_stop(QUERY,stop);
	    bus_time     = bus_timeline(QUERY);
	    if ( typeof bus_stop == 'undefined' ) {
		bus_stop = bus_stop_undefined;
	    }
        }
        else {
	    QUERY = QUERY['Weekday'];
	    bus_stop     = get_bus_stop(QUERY,stop);
	    bus_time     = bus_timeline(QUERY);
	    if ( typeof bus_stop == 'undefined' ) {
		bus_stop = bus_stop_undefined;
	    }
        }
// 結果の出力
	time.innerHTML     = bus_stop;
	timeline.innerHTML = bus_time;
    }
}
