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
    var obj = document.bus.stop_name;
    var index = obj.selectedIndex;

    var Jikan= new Date();
    //時・分・秒を取得する
    var Hour = Jikan.getHours();
    var Minute = Jikan.getMinutes();

    var target_hour = 24;
    var target_min = 60;

    if (index != 0){
        var stop = obj.options[index].value;
	///
        if ( stop == "慶応大学本館前" ) {
            var hour_length = keidaimae_kyuukou.length;

            for ( var h = 0; h < hour_length; h++ ) {

		var minute_length = keidaimae_kyuukou[h].length;

		if ( minute_length == 1 ) {
                    alert("No Buses on this hour");
		}
		else {
                    for ( var m = 1; m < minute_length; m++ ) {

			if ( keidaimae_kyuukou[h][0] < Hour ) {
                            break;
			}
			else {
                            if ( Hour < target_hour ) {
				target_hour = keidaimae_kyuukou[h][0];
				if ( keidaimae_kyuukou[h][m] < Minute ) {
				 ///   target_hour = 24;
				    break;
				}
				else {
				    if ( Minute < target_min ) {
                                    target_min = keidaimae_kyuukou[h][m];
				    }
				}
                            }
			}
                    }
		}
            }
            if ( target_hour == 23 && target_min == 60 ) {
		alert( " No More Buses untill tomorrow" );
            }
            else {
		alert(target_hour + ":" + target_min);
	    }
	}
    }
}
