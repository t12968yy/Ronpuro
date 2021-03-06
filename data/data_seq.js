var Bus_Stop_Name = {
    '1'  : {
	'Name' : '慶應大学',
	'Destination' : {
	    '湘南台駅西口' : {
		'普通' : {
		    'Time' : {
			'Weekday' : [ // B2_weekday // 慶応大学 湘南台駅西口 普通 平日
			    [7,05,28,35,47],
			    [8,02,08,18,24,37,50],
			    [9,00,20,35],
			    [10,07,20,27,40,50],
			    [11,00,07,20,30,50],
			    [12,00,10,30,50],
			    [13,00,10,20,40,50],
			    [14,00,10,20,30,38,46,54],
			    [15,02,09,17,25,32,44,57],
			    [16,09,14,26,39,51],
			    [17,11,24,36,49,56],
			    [18,09,21,41,48],
			    [19,08,21,31,41,51],
			    [20,01,11,21,31,41,51],
			    [21,01,16,31,51],
			    [22,11,31,51],
			    [23,16]
			],
			'Saturday' : [ // B2_sat // 慶応大学 湘南台駅西口 急行　土曜
			    [7,00,15,32,40,45,55],
			    [8,12,22,32,42,55],
			    [9,10,30,50],
			    [10],
			    [11,58],
			    [12,49,56],
			    [13,08,16,29,37,51],
			    [14,01,41],
			    [15],
			    [16],
			    [17,01,51],
			    [18,11,41],
			    [19,01]
			],
			'Sunday' : [ // B2_sun // 慶応大学 湘南台駅西口 普通 日曜日
			    [8,10,25,40],
			    [9,10,40],
			    [10,10,25,40],
			    [11,10,40],
			    [12,10,25,40],
			    [13,10,30,45],
			    [14,00,15,30,45],
			    [15,00,15,30,45],
			    [16,00,15,30,45],
			    [17,00,15,30,45],
			    [18,15,45],
			    [19,45]
			]
		    }
		},
		'急行' : {
		    'Time' : {
			'Weekday' : [ // B1_weekday / 慶応大学 湘南台駅西口　急行　平日
			    [7,00,15,32,40,45,55],
			    [8,12,22,32,42,55],
			    [9,10,30,50],
			    [10,00],
			    [11,40],
			    [12,20,40],
			    [13,30],
			    [14],
			    [15,22,39,52],
			    [16,04,21,34,46,59],
			    [17,06,19,31,44],
			    [18,04,17,29,36,56],
			    [19,02,16]
			],
			'Saturday' : 'B1_sat',
			'Sunday'   : 'B1_sun'
		    }
		}
	    }
	}
    },
    '2' : {
	'Name' : '慶應大学本館前',
	'Destination' : {
	    '湘南台駅西口' : {
		'普通' : {
		    'Time'  : {
			'Weekday' : [ // B3_weekday // 慶応大学本館前 湘南台駅西口 急行 平日
			    [15,21,28,30,38,51],
			    [16,03,20,33,45,58],
			    [17,05,18,30,43],
			    [18,03,11,16,28,35,42,55],
			    [19,01,15]
			],
			'Saturday' : [ // B3_sat // 慶応大学本館前 湘南台駅西口 急行 土曜日
			    [12,48,55],
			    [13,07,15,28,36,50],
			    [14,00,40],
			    [15],
			    [16],
			    [17,00,50],
			    [18,10,40],
			    [20,00]
			],
			'Sunday' : 'B3_sun'
                    }
		},
		'急行' : {
                    'Time' : {
			'Weekday' : [ // B7_weekday // 慶応大学本館前 湘南台　普通　平日
			    [15,16,24,31,43,56],
			    [16,08,13,25,38,50],
			    [17,10,23,35,48,55],
			    [18,08,20,40,47],
			    [19,07,20,30,40,50],
			    [20,00,10,20,30,40,50],
			    [21,00,15,30,50],
			    [22,10,30,50],
			    [23,15]
			],
			'Saturday' : [  // B7_sat// 慶応大学本館前 湘南台　普通　土曜日
			    [13,00,20,41],
			    [14,10,20,30,50],
			    [15,00,10,20,30,40,50],
			    [16,00,10,20,30,40,50],
			    [17,10,20,30,40],
			    [18,00,20,30,50],
			    [19,10,20,30,40,50],
			    [20,00,10,30]
			],
			'Sunday' : 'B7_sun'
                    }
		}
	    },
	    '辻堂駅北口' : {
		'普通' : {
                    'Time' : {
			'Weekday' : [ // B4_weekday // 慶応大学本館前 辻堂駅北口 平日
			    [15,15,25,30,40,45,55],
			    [16,00,12,27,42,52],
			    [17,02,12,22,32,42,52],
			    [18,02,12,22,42],
			    [19,02,22,42],
			    [20,10,40],
			    [21,10],
			    [22,10]
			],
			'Saturday' : [ // B4_sat // 慶応大学本館前 辻堂駅北口 土曜
			    [12,45,58],
			    [13,13,28,43,58],
			    [14,13,28,43,58],
			    [15,13,28,43,58],
			    [16,13,28,43,58],
			    [17,13,28,43,58],
			    [18,13,28,43],
			    [19,15],
			    [20,15],
			    [21,15]
			],
			'Sunday' : 'B4_sun'
                    }
		}
	    }
	}
    },
    '3' : {
	'Name' : '湘南台駅西口',
	'Destination' : {
	    '慶応大学中高部前' : {
		'普通' : {
                    'Time' : {
			'Weekday' : [ // B8_weekday// 慶応大学本館前 湘南台駅西口 普通 平日
			    [7,10,17,30,40,44,48,56],
			    [8,04,12,20,24,28,40,49,59],
			    [9,08,12,16,26,36,40,55],
			    [10,00,05,17,30,35,40,45,50,55],
			    [11,00,05,10,15,20,30,40,50],
			    [12,10,20,25,30,35,40,50,55],
			    [13,15,25,35,45],
			    [14,05,15,20,25,35,45,55],
			    [15,05,15,25,35,45,52],
			    [16,05,15,27,33,45],
			    [17,00,15,33,45,57],
			    [18,15,30,42],
			    [19,03,17,27,39,45,55],
			    [20,05,15,25,35,50],
			    [21,05,20,35,50]
			],
			'Saturday' : 'B8_sat',
			'Sunday' : 'B8_sun'
                    }
		},
	    	'急行' : {
		    'Time' : {
			'Weekday' : [ // B9_weekday // 慶応大学本館前 湘南台駅西口 急行 平日
			    [7,24,35,48,53,58],
			    [8,01,05,09,12,17,35,45,55],
			    [9,04,22,32,50],
			    [10,12,25],
			    [11],
			    [12,00,45],
			    [13,05,55],
			    [14],
			    [15,40],
			    [16,00,10,21,39,52],
			    [17,08,21,27,39,50],
			    [18,05,23,35,47,54],
			    [19,13,21,33]
			],
			'Saturday' : 'B9_sat',
			'Sunday' : 'B9_sun'
		    }
		}
	    }
	}
    },
    '4' : {
	'Name' : '公務員住宅入口',
	'Destination' : {
	    '上永谷駅前' : {
		'普通' : {
                    'Time' : {
			'Weekday' : [ // B5_weekday // 公務員住宅入口 上永谷駅前 平日
			    [6,39],
			    [7,26,43,56],
			    [8,10,25,40],
			    [9,28],
			    [10,5,25,48],
			    [11,17,51],
			    [12,13,52],
			    [13,26],
			    [14,17,52],
			    [15,26,51],
			    [16,27,51],
			    [17,13,28,55],
			    [18,12,36],
			    [19,10,36],
			    [20,10,47],
			    [21,19],
			    [22,2]
			],
			'Saturday' : 'B5_sat',
			'Sunday' : 'B5_sun'
                    }
		}
	    },
	    '上大岡駅前' : {
		'普通' : {
                    'Time' : {
			'Weekday' : [ // B6_weekday // 公務員住宅入口 上大岡駅 平日
			    [5,54,56],
			    [6,3,12,19,22,31,37,41,43,49,54,56,59],
			    [7,4,9,13,18,23,28,33,38,41,43,48,53,58],
			    [8,3,8,14,19,20,27,34,39,41,48,55],
			    [9,2,9,16,23,31,38,47,56],
			    [10,6,18,30,42,54],
			    [11,6,18,30,42,53],
			    [12,4,15,26,37,48,59],
			    [13,10,21,32,43,54],
			    [14,5,16,27,38,49],
			    [15,0,11,21,31,40,49,57],
			    [16,4,12,20,27,34,41,48,55],
			    [17,2,9,16,23,30,37,44,51,58],
			    [18,5,13,21,29,38,45,53],
			    [19,1,13,21,29,38,47,54],
			    [20,5,13,21,29,39,49,59],
			    [21,9,19,28,39,48,59],
			    [22,8,19,29,39]
			],
			'Saturday' : 'B6_sat',
			'Sunday' : 'B6_sun'
                    }
		}
	    }
	}
    },
    '5' : {
	'Name' : '野庭中央公園',
	'Destination' : {
	    '港南中央' : {
		'普通' : {
                    'Time' : {
			'Weekday' : [ // 'B10_weekday',
			    [6,16, 25, 34, 40, 44, 53, 59],
			    [7,4,13,17,20,24,32,37,41,46,51,57],
			    [8,2,7,12,17,22,27,32,36,42,46,48,55],
			    [9, 2, 6, 9,16,23,30,37,44,51,59],
			    [10,3, 12, 21, 31, 43, 55],
			    [11, 7, 19, 31, 43, 55],
			    [12, 7, 18, 29, 40, 51],
			    [13,2, 13, 24, 35, 46, 57],
			    [14, 8, 19, 30, 41, 52],
			    [15,3, 14, 25, 36, 46, 56],
			    [16, 5, 14, 23, 32, 40, 48, 55],
			    [17, 2, 9,16,23,30,37,44,51,58],
			    [18, 5, 12, 19, 26, 33, 41, 49, 57],
			    [19, 6, 13, 21, 29, 37, 45, 53],
			    [20, 2, 11, 18, 29, 37, 45, 53],
			    [21, 3, 13, 23, 33, 43, 52],
			    [22, 3, 12, 23, 32 ,43, 54],
			    [23, 3, 11, 19, 32, 54],
			    [24, 12, 44]
			],
			'Saturday' : 'B10_sat',
			'Sunday' : 'B10_sun'
                    }
		}
	    }
	}
    }
};
