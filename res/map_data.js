const map_element_id = "treeMap";
const dataArr = [
// under-tree , about family 
{ eng:"Mazzawi Family" , ar:"آل مزاوي" , path:"./res/about_family.png" , shape:"rect" , coords:"4,1349,999,1464"},
// Branches section / polygons
{ eng:"Ibrahim Al-Doumany (Mazzawi)" , ar:"ابراهيم الدوماني (مزاوي)" , path:"./branches/IbrahimDoumanyMazzawi.png" , shape:"poly" , coords:"392,1158,478,1153,527,1151,571,1150,573,1171,578,1206,588,1247,602,1271,617,1278,627,1286,637,1286,671,1291,700,1296,748,1303,776,1313,819,1326,795,1338,740,1343,703,1342,588,1342,480,1345,392,1346,345,1345,259,1346,233,1327,273,1320,332,1307,368,1297,391,1279,399,1255,401,1211,394,1175"},
{ eng:"Moussa Ibrahim" , ar:"موسى ابراهيم" , path:"./branches/MoussaIbrahim.png" , shape:"poly" , coords:"574,1145,575,1127,573,1108,584,1077,592,1055,613,1022,603,1009,593,994,576,987,566,1002,554,1023,546,1041,532,1069,522,1100,516,1123,511,1139,510,1146"},
{ eng:"Yousef Moussa Ibrahim" , ar:"يوسف موسى ابراهيم" , path:"./branches/YousefMoussaIbrahim.png" , shape:"poly" , coords:"602,1001,610,994,620,981,628,971,642,956,652,952,663,949,675,943,692,938,696,919,678,922,659,928,644,935,628,941,616,957,606,969,599,985,590,990"},
{ eng:"Elias Yousef Moussa Ibrahim" , ar:"الياس يوسف موسى ابراهيم" , path:"./branches/EliasYousefMoussaIbrahim.png" , shape:"poly" , coords:"693,936,697,929,708,929,722,933,737,943,751,953,765,960,780,963,784,970,770,970,755,963,737,957,721,953,701,946"},
{ eng:"Boulos Elias Yousef Moussa" , ar:"بولس الياس يوسف موسى" , path:"./branches/BoulosEliasYousefMoussa.png" , shape:"poly" , coords:"788,973,783,962,812,963,829,966,838,968,843,973,832,979,824,982,810,980,797,977"},
{ eng:"Moussa Yousef Moussa Ibrahim" , ar:"موسى يوسف موسى ابراهيم" , path:"./branches/MoussaYousefMoussaIbrahim.png" , shape:"poly" , coords:"694,927,699,916,711,907,732,900,741,896,762,886,796,880,794,892,773,897,751,909,732,918,720,928,707,927"},
{ eng:"Tawfik Moussa Yousef Moussa" , ar:"توفيق موسى يوسف موسى" , path:"./branches/TawfikMoussaYousefMoussa.png" , shape:"poly" , coords:"797,889,812,882,826,882,842,883,854,889,866,900,850,904,836,904,822,903,807,894"},
{ eng:"Elias Moussa Yousef Moussa" , ar:"الياس موسى يوسف موسى" , path:"./branches/EliasMoussaYousefMoussa.png" , shape:"poly" , coords:"797,883,812,879,822,871,835,861,846,855,859,850,871,840,884,820,867,821,856,826,838,838,826,850,815,859,804,872"},
{ eng:"Dahoud Moussa Ibrahim" , ar:"داود موسى ابراهيم" , path:"./branches/DahoudMoussaIbrahim.png" , shape:"poly" , coords:"665,866,679,867,685,876,672,888,654,905,641,920,633,932,620,943,613,951,600,969,595,981,588,989,576,982,582,971,592,951,602,934,614,918,628,899,640,892,652,877"},
{ eng:"Sleiman Dahoud Moussa Ibrahim" , ar:"سليمان داود موسى ابراهيم" , path:"./branches/SleimanDahoudMoussaIbrahim.png" , shape:"poly" , coords:"696,864,701,852,713,838,721,834,731,831,749,824,765,816,773,807,781,814,756,830,738,837,727,850,718,862,707,865"},
{ eng:"Elias Sleiman Dahoud Moussa" , ar:"الياس سليمان داود موسى" , path:"./branches/EliasSleimanDahoudMoussa.png" , shape:"poly" , coords:"791,797,800,792,811,769,814,756,821,745,821,722,812,677,817,634,807,649,808,694,811,719,798,746,797,766,793,782"},
{ eng:"Nimer Elias Sleiman Dahoud" , ar:"نمر الياس سليمان داود" , path:"./branches/NimerEliasSleimanDahoud.png" , shape:"poly" , coords:"810,636,821,626,829,609,836,607,842,601,847,586,859,574,849,570,838,574,825,583,821,593,818,600,811,611,810,622"},
{ eng:"Abdou Sleiman Dahoud Moussa" , ar:"عبده سليمان داود موسى" , path:"./branches/AbdouSleimanDahoudMoussa.png" , shape:"poly" , coords:"759,827,776,819,787,817,803,823,790,824,796,833,787,838,774,837"},
{ eng:"Dahoud Sleiman Dahoud Moussa" , ar:"داود سليمان داود موسى" , path:"./branches/DahoudSleimanDahoudMoussa.png" , shape:"poly" , coords:"793,796,804,792,818,771,833,740,833,720,842,696,869,660,867,673,850,699,850,709,846,722,845,737,838,748,831,765,822,778,812,795"},
{ eng:"Gerges Sleiman Dahoud Moussa" , ar:"جرجس سليمان داود موسى" , path:"./branches/GergesSleimanDahoudMoussa.png" , shape:"poly" , coords:"798,802,808,798,815,798,821,793,829,782,846,774,862,765,874,757,871,767,863,775,852,789,839,798,824,805,810,805"},
{ eng:"Yousef Dahoud Moussa Ibrahim" , ar:"يوسف داود موسى ابراهيم" , path:"./branches/YousefDahoudMoussaIbrahim.png" , shape:"poly" , coords:"696,854,706,843,715,834,721,823,724,809,727,798,737,770,727,777,721,788,714,813,708,828"},
{ eng:"Salim Yousef Dahoud Moussa" , ar:"سليم يوسف داود موسى" , path:"./branches/SalimYousefDahoudMoussa.png" , shape:"poly" , coords:"727,770,741,765,752,760,755,750,763,733,748,737,735,754"}	,
{ eng:"Ibrahim Dahoud Moussa Ibrahim" , ar:"ابراهيم داود موسى ابراهيم" , path:"./branches/IbrahimDahoudMoussaIbrahim.png" , shape:"poly" , coords:"696,848,703,829,710,814,714,800,715,787,715,765,724,734,717,742,711,754,704,775,700,791,699,812"},
{ eng:"Jeryes Ibrahim Dahoud Moussa" , ar:"جريس ابراهيم داود موسى" , path:"./branches/JeryesIbrahimDahoudMoussa.png" , shape:"poly" , coords:"725,734,722,722,728,702,729,687,724,675,731,666,735,675,737,688,737,701,742,712,739,720,734,729"},
{ eng:"Iseed Dahoud Moussa Ibrahim" , ar:"اسعيد داود موسى ابراهيم" , path:"./branches/IseedDahoudMoussaIbrahim.png" , shape:"poly" , coords:"693,842,696,818,696,786,696,762,694,742,689,720,687,697,686,675,683,707,686,731,687,755,689,775,686,793,686,810,690,828"},
{ eng:"Jarmas Iseed Dahoud Moussa" , ar:"جرمس اسعيد داود موسى" , path:"./branches/JarmasIseedDahoudMoussa.png" , shape:"poly" , coords:"682,675,689,670,694,661,694,642,694,625,703,604,708,590,721,576,748,569,735,562,721,566,710,574,700,587,689,607,682,625,680,638,676,656,678,664"},
{ eng:"Khalil Dahoud Moussa Ibrahim" , ar:"خليل داود موسى ابراهيم" , path:"./branches/KhalilDahoudMoussaIbrahim.png" , shape:"poly" , coords:"685,849,686,832,675,821,668,798,668,776,658,776,658,789,662,807,666,818,669,828,663,841,673,849,683,862"},
{ eng:"Khalil Ibrahim" , ar:"خليل ابراهيم" , path:"./branches/KhalilIbrahim.png" , shape:"poly" , coords:"498,1145,495,1131,491,1117,490,1101,494,1084,498,1075,486,1072,472,1071,458,1070,451,1073,435,1074,418,1079,410,1077,397,1080,379,1080,370,1084,354,1091,348,1100,351,1106,361,1115,370,1128,379,1137,385,1144,389,1152"},
{ eng:"Nasser Khalil Ibrahim" , ar:"ناصر خليل ابراهيم" , path:"./branches/NasserKhalilIbrahim.png" , shape:"poly" , coords:"498,1071,506,1058,519,1044,530,1020,534,1002,538,988,540,971,531,957,516,954,509,960,501,968,495,993,488,1007,477,1021,472,1028,461,1038,450,1041,463,1054,470,1066"},
{ eng:"Khalil Nasser Khalil Ibrahim" , ar:"خليل ناصر خليل ابراهيم" , path:"./branches/KhalilNasserKhalilIbrahim.png" , shape:"poly" , coords:"524,948,529,934,533,918,538,910,534,889,537,861,548,828,554,815,544,797,534,821,529,835,529,849,523,857,517,877,512,887,508,903,512,912,512,925,509,941,506,957"},
{ eng:"Abdullah Khalil Nasser Khalil" , ar:"عبدالله خليل ناصر خليل" , path:"./branches/AbdullahKhalilNasserKhalil.png" , shape:"poly" , coords:"541,786,551,799,550,775,550,751,548,729,543,694,534,695,534,723,531,743,536,768"},
{ eng:"Abdou Khalil Nasser Khalil" , ar:"عبده خليل ناصر خليل" , path:"./branches/AbdouKhalilNasserKhalil.png" , shape:"poly" , coords:"550,805,551,771,551,751,561,734,568,701,582,699,578,712,569,746,569,760,568,786,557,813"},
{ eng:"Khalil Abdou Khalil Nasser" , ar:"خليل عبده خليل ناصر" , path:"./branches/KhalilAbdouKhalilNasser.png" , shape:"poly" , coords:"576,696,583,695,588,684,595,678,604,673,607,653,609,638,607,621,607,602,612,591,602,593,602,611,597,633,585,663,582,673,579,685"},
{ eng:"Moeen Abdou Khalil Nasser" , ar:"معين عبده خليل ناصر" , path:"./branches/MoeenAbdouKhalilNasser.png" , shape:"poly" , coords:"565,694,574,691,575,675,575,667,575,657,569,645,568,625,565,615,561,630,560,647,557,660,557,675,562,684"},
{ eng:"Hanna Nasser Khalil Ibrahim" , ar:"حنا ناصر خليل ابراهيم" , path:"./branches/HannaNasserKhalilIbrahim.png" , shape:"poly" , coords:"536,958,541,937,541,919,547,896,568,857,585,819,599,784,602,801,599,822,582,853,575,870,568,884,564,891,567,903,568,915,560,927,548,946"},
{ eng:"Ameen Hanna Nasser Khalil" , ar:"أمين حنا ناصر خليل" , path:"./branches/AmeenHannaNasserKhalil.png" , shape:"poly" , coords:"603,774,607,757,613,744,624,725,631,713,634,698,631,675,624,682,616,692,609,706,604,716,603,730,602,741"},
{ eng:"Jameel Hanna Nasser Khalil" , ar:"جميل حنا ناصر خليل" , path:"./branches/JameelHannaNasserKhalil.png" , shape:"poly" , coords:"604,771,610,758,616,744,624,729,634,718,649,715,648,726,644,737,637,747,623,760,613,770"},
{ eng:"Sleiman Khalil Ibrahim" , ar:"سليمان خليل ابراهيم" , path:"./branches/SleimanKhalilIbrahim.png" , shape:"poly" , coords:"451,1061,442,1040,435,1014,437,988,432,943,440,889,454,859,472,830,464,815,444,818,430,830,418,844,409,863,397,898,392,925,390,948,395,985,397,1012,399,1030,413,1052,416,1062,428,1069"},
{ eng:"Yousef Sleiman Khalil Ibrahim" , ar:"يوسف سليمان خليل ابراهيم" , path:"./branches/YousefSleimanKhalilIbrahim.png" , shape:"poly" , coords:"464,811,439,811,447,794,450,771,453,746,450,724,446,704,464,701,472,705,478,746,475,764,474,788"},
{ eng:"Niemeh Yousef Sleiman Khalil" , ar:"نعمه يوسف سليمان خليل" , path:"./branches/NiemehYousefSleimanKhalil.png" , shape:"poly" , coords:"460,697,456,679,454,659,458,645,467,639,467,651,465,662,463,676,467,694"},
{ eng:"Mineem Yousef Sleiman Khalil" , ar:"منعم يوسف سليمان خليل" , path:"./branches/MineemYousefSleimanKhalil.png" , shape:"poly" , coords:"456,689,451,656,456,637,463,611,465,589,465,572,451,576,454,597,451,623,446,642,442,658,444,673,446,683,453,698"},
{ eng:"Yousef Mineem Yousef Sleiman" , ar:"يوسف منعم يوسف سليمان" , path:"./branches/YousefMineemYousefSleiman.png" , shape:"poly" , coords:"453,564,468,560,467,546,467,532,461,515,451,507,442,498,442,484,436,475,433,486,436,511,444,532,446,548"},
{ eng:"Naoum Yousef Sleiman Khalil" , ar:"نعوم يوسف سليمان خليل" , path:"./branches/NaoumYousefSleimanKhalil.png" , shape:"poly" , coords:"443,696,444,679,430,645,419,618,405,582,399,550,385,537,392,565,401,600,409,627,416,648,432,684"},
{ eng:"George Naoum Yousef Sleiman" , ar:"جورج نعوم يوسف سليمان" , path:"./branches/GeorgeNaoumYousefSleiman.png" , shape:"poly" , coords:"395,538,383,527,378,510,371,494,369,479,371,462,371,444,384,434,385,452,388,465,391,475,390,484,392,497,392,513"},
{ eng:"Asaad Sleiman Khalil Ibrahim" , ar:"أسعد سليمان خليل ابراهيم" , path:"./branches/AsaadSleimanKhalilIbrahim.png" , shape:"poly" , coords:"485,811,473,801,476,783,483,749,478,732,483,703,488,670,503,639,510,607,527,566,531,550,551,548,561,562,544,595,525,639,512,679,506,705,506,727,506,743,501,763,498,788"},
{ eng:"Iskandar Asaad Sleiman Khalil" , ar:"اسكندر أسعد سليمان خليل" , path:"./branches/IskandarAsaadSleimanKhalil.png" , shape:"poly" , coords:"480,425,486,423,491,427,492,436,496,443,500,454,506,459,511,464,515,473,520,479,524,489,530,494,537,502,539,509,541,526,541,533,530,522,513,505,508,490,508,478,498,470,492,455,487,441,482,431"}	,
{ eng:"Mikhaeel Asaad Sleiman Khalil" , ar:"مخائيل أسعد سليمان خليل" , path:"./branches/MikhaeelAsaadSleimanKhalil.png" , shape:"poly" , coords:"562,544,565,526,571,513,585,502,621,491,645,477,647,489,631,495,612,502,603,507,589,519,581,531,572,540"},
{ eng:"Keysar Mikhaeel Asaad Sleiman" , ar:"قيصر مخائيل أسعد سليمان" , path:"./branches/KeysarMikhaeelAsaadSleiman.png" , shape:"poly" , coords:"647,484,659,483,671,477,686,468,700,462,713,463,721,463,731,468,746,472,721,473,707,476,700,483,690,489,680,491,666,490,652,490"},
{ eng:"Asaad Mikhaeel Asaad Sleiman" , ar:"أسعد مخائيل أسعد سليمان" , path:"./branches/AsaadMikhaeelAsaadSleiman.png" , shape:"poly" , coords:"649,482,661,479,678,465,693,451,707,438,718,428,731,423,737,411,721,414,704,425,689,435,676,451,665,463"},
{ eng:"Wasef Mikhaeel Asaad Sleiman" , ar:"واصف مخائيل أسعد سليمان" , path:"./branches/WasefMikhaeelAsaadSleiman.png" , shape:"poly" , coords:"647,479,661,461,668,451,678,440,685,425,694,403,707,382,689,390,679,406,665,420,656,434,652,449,651,463"},
{ eng:"Salim Asaad Sleiman Khalil" , ar:"سليم أسعد سليمان خليل" , path:"./branches/SalimAsaadSleimanKhalil.png" , shape:"poly" , coords:"546,534,541,500,537,485,530,468,531,449,522,427,516,399,515,384,515,370,526,361,526,388,533,404,538,423,544,439,548,454,554,468,553,485,551,502,551,515"},
{ eng:"Naeem Salim Asaad Sleiman" , ar:"نعيم سليم أسعد سليمان" , path:"./branches/NaeemSalimAsaadSleiman.png" , shape:"poly" , coords:"523,365,524,337,529,320,526,308,516,296,506,289,491,274,479,258,489,285,498,308,506,323,512,333"},
{ eng:"Elia Salim Asaad Sleiman" , ar:"ايليا سليم أسعد سليمان" , path:"./branches/EliaSalimAsaadSleiman.png" , shape:"poly" , coords:"526,358,524,347,527,334,530,323,533,313,527,301,529,292,531,279,534,271,534,261,536,240,538,251,543,261,543,270,544,279,546,291,547,301,538,317,537,327,531,341"},
{ eng:"George Salim Asaad Sleiman" , ar:"جورج سليم أسعد سليمان" , path:"./branches/GeorgeSalimAsaadSleiman.png" , shape:"poly" , coords:"519,361,513,344,502,327,487,320,472,319,460,319,453,327,470,329,479,333,487,336,501,344"},
{ eng:"Sleiman Asaad Sleiman Khalil" , ar:"سليمان أسعد سليمان خليل" , path:"./branches/SleimanAsaadSleimanKhalil.png" , shape:"poly" , coords:"560,540,568,510,578,467,590,434,606,419,583,415,576,434,569,451,562,468,557,485,555,507,551,523,550,541"},
{ eng:"Tawfik Sleiman Asaad Sleiman" , ar:"توفيق سليمان أسعد سليمان" , path:"./branches/TawfikSleimanAsaadSleiman.png" , shape:"poly" , coords:"589,413,592,400,596,386,600,365,606,347,610,336,612,312,610,282,610,268,602,292,593,315,588,337,590,350,588,372,588,392"},
{ eng:"Elias Sleiman Asaad Sleiman" , ar:"الياس سليمان أسعد سليمان" , path:"./branches/EliasSleimanAsaadSleiman.png" , shape:"poly" , coords:"593,413,602,392,607,374,613,351,621,340,630,324,633,334,634,344,633,354,623,364,616,376,604,406"},
{ eng:"Raja Sleiman Asaad Sleiman" , ar:"رجا سليمان أسعد سليمان" , path:"./branches/RajaSleimanAsaadSleiman.png" , shape:"poly" , coords:"599,411,610,399,621,381,634,362,642,355,658,348,659,358,645,367,638,378,626,388,620,399,610,410"},
{ eng:"Abdullah Khalil Ibrahim" , ar:"عبدالله خليل ابراهيم" , path:"./branches/AbdullahKhalilIbrahim.png" , shape:"poly" , coords:"343,1096,352,1083,366,1075,391,1069,409,1066,402,1050,395,1035,388,1021,374,1013,360,1017,346,1026,336,1038,329,1054,329,1087"},
{ eng:"Saleh Abdullah Khalil Ibrahim" , ar:"صالح عبدالله خليل ابراهيم" , path:"./branches/SalehAbdullahKhalilIbrahim.png" , shape:"poly" , coords:"377,1005,367,1010,352,1014,343,1019,331,1031,326,1041,314,1044,284,1021,256,996,237,974,244,967,262,958,286,951,305,947,318,953,345,969,357,981,367,985,374,991"},
{ eng:"Said Saleh Abdullah Khalil" , ar:"سعيد صالح عبدالله خليل" , path:"./branches/SaidSalehAbdullahKhalil.png" , shape:"poly" , coords:"222,952,210,937,200,925,190,909,183,886,186,861,186,836,187,817,186,789,182,770,190,775,194,786,200,824,201,850,199,862,196,875,200,899,208,920"},
{ eng:"Nassif Saleh Abdullah Khalil" , ar:"ناصيف صالح عبدالله خليل" , path:"./branches/NassifSalehAbdullahKhalil.png" , shape:"poly" , coords:"287,923,290,898,296,867,294,850,301,828,308,814,312,808,319,797,322,783,332,788,321,832,307,870,303,881,298,895,296,912,296,925,293,932"},
{ eng:"Nicola Saleh Abdullah Khalil" , ar:"نقولا صالح عبدالله خليل" , path:"./branches/NicolaSalehAbdullahKhalil.png" , shape:"poly" , coords:"297,934,303,902,307,878,315,856,325,844,340,825,352,821,357,826,346,837,335,850,326,873,318,891,314,906,312,920,312,934,312,943"},
{ eng:"Najib Saleh Abdullah Khalil" , ar:"نجيب صالح عبدالله خليل" , path:"./branches/NajibSalehAbdullahKhalil.png" , shape:"poly" , coords:"249,924,253,891,255,870,248,851,249,837,260,816,262,780,262,745,265,698,267,681,279,666,277,694,276,714,274,747,273,775,270,799,273,826,273,843,273,861,270,878,269,888,269,906,267,914,265,930,251,933"},
{ eng:"George Najib Saleh Abdullah" , ar:"جورج نجيب صالح عبدالله" , path:"./branches/GeorgeNajibSalehAbdullah.png" , shape:"poly" , coords:"269,666,284,654,286,639,293,625,296,608,296,588,298,573,293,555,297,534,291,524,288,535,288,543,290,564,290,581,283,588,281,600,276,608,276,625,276,639"},
{ eng:"Raji Saleh Abdullah Khalil" , ar:"راجي صالح عبدالله خليل" , path:"./branches/RajiSalehAbdullahKhalil.png" , shape:"poly" , coords:"273,929,274,899,279,878,281,850,281,829,283,807,288,794,296,759,297,739,307,712,310,727,303,766,300,791,300,812,296,839,290,867,287,889,284,906,286,929"},
{ eng:"Radi Saleh Abdullah Khalil" , ar:"راضي صالح عبدالله خليل" , path:"./branches/RadiSalehAbdullahKhalil.png" , shape:"poly" , coords:"222,938,214,917,211,885,211,866,208,851,211,831,220,813,221,784,221,746,218,695,215,623,211,600,224,598,227,618,231,642,231,688,235,737,234,803,239,833,237,854,231,869,228,890,228,913,225,923"},
{ eng:"Salem Radi Saleh Abdullah" , ar:"سالم راضي صالح عبدالله" , path:"./branches/SalemRadiSalehAbdullah.png" , shape:"poly" , coords:"213,574,200,536,206,517,218,501,224,487,228,475,242,465,253,456,270,432,279,428,272,440,263,448,252,468,244,483,242,497,231,508,218,517,211,529,207,546"},
{ eng:"Mikhaeel Radi Saleh Abdullah" , ar:"مخائيل راضي صالح عبدالله" , path:"./branches/MikhaeelRadiSalehAbdullah.png" , shape:"poly" , coords:"201,552,194,521,194,493,203,463,210,435,217,409,224,393,229,381,232,368,217,383,211,397,203,416,190,423,182,442,186,456,192,476,187,501,192,535"},
{ eng:"Maarouf Radi Saleh Abdullah" , ar:"معروف راضي صالح عبدالله" , path:"./branches/MaaroufRadiSalehAbdullah.png" , shape:"poly" , coords:"203,572,189,559,178,552,168,557,158,563,145,569,127,569,126,557,135,548,142,538,161,538,172,539,182,541"},
{ eng:"Simaan Radi Saleh Abdullah" , ar:"سمعان راضي صالح عبدالله" , path:"./branches/SimaanRadiSalehAbdullah.png" , shape:"poly" , coords:"199,555,187,528,180,504,176,484,171,470,159,455,155,465,162,484,162,496,165,506,165,520,176,532,185,539"},
{ eng:"Shibly Saleh Abdullah Khalil" , ar:"شبلي صالح عبدالله خليل" , path:"./branches/ShiblySalehAbdullahKhalil.png" , shape:"poly" , coords:"225,958,211,941,197,928,187,907,179,889,166,878,155,864,145,847,141,814,144,795,135,795,131,813,133,830,134,847,140,862,147,880,158,900,169,914,189,939,208,952,213,960"},
{ eng:"Saleh Shibly Saleh Abdullah" , ar:"صالح شبلي صالح عبدالله" , path:"./branches/SalehShiblySalehAbdullah.png" , shape:"poly" , coords:"133,788,142,785,137,764,131,748,135,737,130,725,123,718,120,706,114,688,112,668,92,660,79,666,99,671,102,685,106,699,107,709,106,719,107,734,112,748,120,751,126,764"},
{ eng:"Jeryes Abdullah Khalil Ibrahim" , ar:"جريس عبدالله خليل ابراهيم" , path:"./branches/JeryesAbdullahKhalilIbrahim.png" , shape:"poly" , coords:"321,1078,304,1075,290,1061,272,1052,245,1035,211,1020,215,990,252,1009,279,1027,297,1040,318,1047,325,1052,325,1064"},
{ eng:"Fadoul Jeryes Abdullah Khalil" , ar:"فضول جريس عبدالله خليل" , path:"./branches/FadoulJeryesAbdullahKhalil.png" , shape:"poly" , coords:"201,998,182,994,169,987,154,976,144,975,119,972,99,987,79,996,88,997,107,1000,130,1001,149,1003,169,1001,183,1008,193,1007"},
{ eng:"Fadeel Jeryes Abdullah Khalil" , ar:"فضيل جريس عبدالله خليل" , path:"./branches/FadeelJeryesAbdullahKhalil.png" , shape:"poly" , coords:"207,998,208,990,197,984,182,976,162,956,145,948,127,945,106,949,93,956,113,962,130,965,151,973,162,975,175,983,186,990,196,993"},
// Leaves section / circles 
	//Asaad Sleiman subsection 
		//Iskandar
{ eng:"Mundher Iskandar Asaad Sleiman" , ar:"منذر اسكندر أسعد سليمان" , path:"./leaves/MunderIskandarAsaadSleiman.png" , shape:"circle" , coords:"465,436,15"},
		//Mikhaeel
{ eng:"Wadie Mikhaeel Asaad Sleiman" , ar:"وديع مخائيل أسعد سليمان" , path:"./leaves/WadieMikhaeelAsaadSleiman.png" , shape:"circle" , coords:"633,520,16"},
{ eng:"Michel Keysar Mikhaeel Asaad" , ar:"ميشيل قيصر مخائيل أسعد" , path:"./leaves/MichelKeysarMikhaeelAsaad.png" , shape:"circle" , coords:"781,493,13"},
{ eng:"Nayef Keysar Mikhaeel Asaad" , ar:"نايف قيصر مخائيل أسعد" , path:"./leaves/NayefKeysarMikhaeelAsaad.png" , shape:"circle" , coords:"793,470,15"},
{ eng:"Elias Keysar Mikhaeel Asaad" , ar:"الياس قيصر مخائيل أسعد" , path:"./leaves/EliasKeysarMikhaeelAsaad.png" , shape:"circle" , coords:"758,461,14"},
{ eng:"Sami Keysar Mikhaeel Asaad" , ar:"سامي قيصر مخائيل أسعد" , path:"./leaves/SamiKeysarMikhaeelAsaad.png" , shape:"circle" , coords:"738,490,13"},
{ eng:"Maurice Keysar Mikhaeel Asaad" , ar:"موريس قيصر مخائيل أسعد" , path:"./leaves/MauriceKeysarMikhaeelAsaad.png" , shape:"circle" , coords:"760,484,13"},
{ eng:"Anis Keysar Mikhaeel Asaad" , ar:"أنيس قيصر مخائيل أسعد" , path:"./leaves/AnisKeysarMikhaeelAsaad.png" , shape:"circle" , coords:"717,492,14"},
{ eng:"Albert Asaad Mikhaeel Asaad" , ar:"ألبير أسعد مخائيل أسعد" , path:"./leaves/AlbertAsaadMikhaeelAsaad.png" , shape:"circle" , coords:"751,424,13"},
{ eng:"Asad Wasef Mikhaeel Asaad" , ar:"أسد واصف مخائيل أسعد" , path:"./leaves/AsadWasefMikhaeelAsaad.png" , shape:"circle" , coords:"710,397,14"},
		//Sleiman
{ eng:"Anton Sleiman Asaad Sleiman" , ar:"أنطون سليمان أسعد سليمان" , path:"./leaves/AntonSleimanAsaadSleiman.png" , shape:"circle" , coords:"564,412,15"},
{ eng:"Aziz Sleiman Asaad Sleiman" , ar:"عزيز سليمان أسعد سليمان" , path:"./leaves/AzizSleimanAsaadSleiman.png" , shape:"circle" , coords:"557,436,12"},
{ eng:"Jamal Sleiman Asaad Sleiman" , ar:"جمال سليمان أسعد سليمان" , path:"./leaves/JamalSleimanAsaadSleiman.png" , shape:"circle" , coords:"569,391,15"},
{ eng:"Sleiman Tawfik Sleiman Asaad" , ar:"سليمان توفيق سليمان أسعد" , path:"./leaves/SleimanTawfikSleimanAsaad.png" , shape:"circle" , coords:"627,300,14"},
{ eng:"Victor Tawfik Sleiman Asaad" , ar:"فيكتور توفيق سليمان أسعد" , path:"./leaves/VictorTawfikSleimanAsaad.png" , shape:"circle" , coords:"604,230,16"},
{ eng:"Jeryes Tawfik Sleiman Asaad" , ar:"جريس توفيق سليمان أسعد" , path:"./leaves/JeryesTawfikSleimanAsaad.png" , shape:"circle" , coords:"640,279,14"},
{ eng:"Farid Tawfik Sleiman Asaad" , ar:"فريد توفيق سليمان أسعد" , path:"./leaves/FaridTawfikSleimanAsaad.png" , shape:"circle" , coords:"635,238,17"},
{ eng:"Nabeeh Tawfik Sleiman Asaad" , ar:"نبيه توفيق سليمان أسعد" , path:"./leaves/NabeehTawfikSleimanAsaad.png" , shape:"circle" , coords:"640,256,14"},
{ eng:"Wasfi Elias Sleiman Asaad" , ar:"وصفي الياس سليمان أسعد" , path:"./leaves/WasfiEliasSleimanAsaad.png" , shape:"circle" , coords:"651,324,14"},
{ eng:"Marwan Raja Sleiman Asaad" , ar:"مروان رجا سليمان أسعد" , path:"./leaves/MarwanRajaSleimanAsaad.png" , shape:"circle" , coords:"659,379,15"},
{ eng:"Munzer Raja Sleiman Asaad" , ar:"منذر رجا سليمان أسعد" , path:"./leaves/MunzerRajaSleimanAsaad.png" , shape:"circle" , coords:"678,366,16"},
		//Salim
{ eng:"Rashid Salim Asaad Sleiman" , ar:"رشيد سليم أسعد سليمان" , path:"./leaves/RashidSalimAsaadSleiman.png" , shape:"circle" , coords:"554,370,14"},
{ eng:"Salim Naeem Salim Asaad" , ar:"سليم نعيم سليم أسعد" , path:"./leaves/SalimNaeemSalimAsaad.png" , shape:"circle" , coords:"505,273,13"},
{ eng:"Suheil Naeem Salim Asaad" , ar:"سهيل نعيم سليم أسعد" , path:"./leaves/SuheilNaeemSalimAsaad.png" , shape:"circle" , coords:"496,242,14"},
{ eng:"Samir Naeem Salim Asaad" , ar:"سمير نعيم سليم أسعد" , path:"./leaves/SamirNaeemSalimAsaad.png" , shape:"circle" , coords:"467,282,13"},
{ eng:"Nabil Elia Salim Asaad" , ar:"نبيل ايليا سليم أسعد" , path:"./leaves/NabilEliaSalimAsaad.png" , shape:"circle" , coords:"560,202,14"},
{ eng:"Ramzi Elia Salim Asaad" , ar:"رمزي ايليا سليم أسعد" , path:"./leaves/RamziEliaSalimAsaad.png" , shape:"circle" , coords:"553,231,12"},
{ eng:"Mounir Elia Salim Asaad" , ar:"منير ايليا سليم أسعد" , path:"./leaves/MounirEliaSalimAsaad.png" , shape:"circle" , coords:"520,241,13"},
{ eng:"Adel Elia Salim Asaad" , ar:"عادل ايليا سليم أسعد" , path:"./leaves/AdelEliaSalimAsaad.png" , shape:"circle" , coords:"520,210,14"},
{ eng:"Victor George Salim Asaad" , ar:"فيكتور جورج سليم أسعد" , path:"./leaves/VictorGeorgeSalimAsaad.png" , shape:"circle" , coords:"458,346,14"},
{ eng:"Fayez George Salim Asaad" , ar:"فايز جورج سليم أسعد" , path:"./leaves/FayezGeorgeSalimAsaad.png" , shape:"circle" , coords:"432,339,13"},
	//Yousef Sleiman subsection
{ eng:"Nieman Mineem Yousef Sleiman" , ar:"نعمان منعم يوسف سليمان" , path:"./leaves/NiemanMineemYousefSleiman.png" , shape:"circle" , coords:"439,609,15"},
{ eng:"Jean Mineem Yousef Sleiman" , ar:"جان منعم يوسف سليمان" , path:"./leaves/JeanMineemYousefSleiman.png" , shape:"circle" , coords:"475,609,13"},
	//Khalil Nasser subsection
{ eng:"Abdou Khalil Abdou Khalil" , ar:"عبده خليل عبده خليل" , path:"./leaves/AbdouKhalilAbdouKhalil.png" , shape:"circle" , coords:"590,585,15"},
{ eng:"Antoine Khalil Abdou Khalil" , ar:"أنطوان خليل عبده خليل" , path:"./leaves/AntoineKhalilAbdouKhalil.png" , shape:"circle" , coords:"621,613,14"},
{ eng:"Nasser Khalil Abdou Khalil" , ar:"ناصر خليل عبده خليل" , path:"./leaves/NasserKhalilAbdouKhalil.png" , shape:"circle" , coords:"633,591,14"},
{ eng:"Majed Moeen Abdou Khalil" , ar:"ماجد معين عبده خليل" , path:"./leaves/MajedMoeenAbdouKhalil.png" , shape:"circle" , coords:"582,617,13"},
	//Hanna Nasser subsection
{ eng:"Hanna Ameen Hanna Nasser" , ar:"حنا أمين حنا ناصر" , path:"./leaves/HannaAmeenHannaNasser.png" , shape:"circle" , coords:"647,669,13"},
{ eng:"Lotof Ameen Hanna Nasser" , ar:"لطف أمين حنا ناصر" , path:"./leaves/LotofAmeenHannaNasser.png" , shape:"circle" , coords:"620,665,15"},
{ eng:"Raja Jameel Hanna Nasser" , ar:"رجا جميل حنا ناصر" , path:"./leaves/RajaJameelHannaNasser.png" , shape:"circle" , coords:"666,718,13"},
	//Yousef Moussa subsection
{ eng:"Aziz Tawfik Moussa Yousef" , ar:"عزيز توفيق موسى يوسف" , path:"./leaves/AzizTawfikMoussaYousef.png" , shape:"circle" , coords:"905,904,15"},
{ eng:"Yousef Tawfik Moussa Yousef" , ar:"يوسف توفيق موسى يوسف" , path:"./leaves/YousefTawfikMoussaYousef.png" , shape:"circle" , coords:"874,930,14"},
{ eng:"Hanna Tawfik Moussa Yousef" , ar:"حنا توفيق موسى يوسف" , path:"./leaves/HannaTawfikMoussaYousef.png" , shape:"circle" , coords:"880,887,15"},
{ eng:"Shafik Elias Moussa Yousef" , ar:"شفيق الياس موسى يوسف" , path:"./leaves/ShafikEliasMoussaYousef.png" , shape:"circle" , coords:"925,801,15"},
	//Dahoud Moussa subsection 
		//Sleiman
{ eng:"Adeeb Nimer Elias Sleiman" , ar:"أديب نمر الياس سليمان" , path:"./leaves/AdeebNimerEliasSleiman.png" , shape:"circle" , coords:"869,550,15"},
{ eng:"Elias Nimer Elias Sleiman" , ar:"الياس نمر الياس سليمان" , path:"./leaves/EliasNimerEliasSleiman.png" , shape:"circle" , coords:"869,588,16"},
{ eng:"Abdallah Dahoud Sleiman Dahoud" , ar:"عبدالله داود سليمان داود" , path:"./leaves/AbdallahDahoudSleimanDahoud.png" , shape:"circle" , coords:"876,683,16"},
{ eng:"Sleiman Dahoud Sleiman Dahoud" , ar:"سليمان داود سليمان داود" , path:"./leaves/SleimanDahoudSleimanDahoud.png" , shape:"circle" , coords:"894,662,17"},
{ eng:"Sami Dahoud Sleiman Dahoud" , ar:"سامي داود سليمان داود" , path:"./leaves/SamiDahoudSleimanDahoud.png" , shape:"circle" , coords:"913,643,14"},
		//Yousef
{ eng:"Yousef Salim Yousef Dahoud" , ar:"يوسف سليم يوسف داود" , path:"./leaves/YousefSalimYousefDahoud.png" , shape:"circle" , coords:"781,739,16"},
		//Ibrahim
{ eng:"Jameel Jeryes Ibrahim Dahoud" , ar:"جميل جريس ابراهيم داود" , path:"./leaves/JameelJeryesIbrahimDahoud.png" , shape:"circle" , coords:"751,695,14"},
{ eng:"Afif Jeryes Ibrahim Dahoud" , ar:"عفيف جريس ابراهيم داود" , path:"./leaves/AfifJeryesIbrahimDahoud.png" , shape:"circle" , coords:"753,672,14"},
		//Iseed
{ eng:"Iseed Jarmas Iseed Dahoud" , ar:"اسعيد جرمس اسعيد داود" , path:"./leaves/IseedJarmasIseedDahoud.png" , shape:"circle" , coords:"760,550,17"},
{ eng:"Bishara Jarmas Iseed Dahoud" , ar:"بشارة جرمس اسعيد داود" , path:"./leaves/BisharaJarmasIseedDahoud.png" , shape:"circle" , coords:"755,589,14"},
{ eng:"Abdou Jarmas Iseed Dahoud" , ar:"عبده جرمس اسعيد داود" , path:"./leaves/AbdouJarmasIseedDahoud.png" , shape:"circle" , coords:"727,591,14"},
	//Jeryes Abdullah subsection
{ eng:"Jeryes Fadeel Jeryes Abdullah" , ar:"جريس فضيل جريس عبدالله" , path:"./leaves/JeryesFadeelJeryesAbdullah.png" , shape:"circle" , coords:"46,952,13"},
{ eng:"Tawfik Fadeel Jeryes Abdullah" , ar:"توفيق فضيل جريس عبدالله" , path:"./leaves/TawfikFadeelJeryesAbdullah.png" , shape:"circle" , coords:"62,968,14"},
{ eng:"Diab Fadoul Jeryes Abdullah" , ar:"دياب فضول جريس عبدالله" , path:"./leaves/DiabFadoulJeryesAbdullah.png" , shape:"circle" , coords:"47,1039,16"},
{ eng:"Afif Fadoul Jeryes Abdullah" , ar:"عفيف فضول جريس عبدالله" , path:"./leaves/AfifFadoulJeryesAbdullah.png" , shape:"circle" , coords:"31,1017,14"},
{ eng:"Fawzi Fadoul Jeryes Abdullah" , ar:"فوزي فضول جريس عبدالله" , path:"./leaves/FawziFadoulJeryesAbdullah.png" , shape:"circle" , coords:"61,1009,15"},
	//Saleh Abdullah subsection 
		//Said
{ eng:"Joul Said Saleh Abdullah" , ar:"جول سعيد صالح عبدالله" , path:"./leaves/JoulSaidSalehAbdullah.png" , shape:"circle" , coords:"154,744,14"},
{ eng:"Elias Said Saleh Abdullah" , ar:"الياس سعيد صالح عبدالله" , path:"./leaves/EliasSaidSalehAbdullah.png" , shape:"circle" , coords:"194,727,15"},
{ eng:"Emil Said Saleh Abdullah" , ar:"اميل سعيد صالح عبدالله" , path:"./leaves/EmilSaidSalehAbdullah.png" , shape:"circle" , coords:"155,714,17"},
		//Nassif
{ eng:"Zidan Nassif Saleh Abdullah" , ar:"زيدان ناصيف صالح عبدالله" , path:"./leaves/ZidanNassifSalehAbdullah.png" , shape:"circle" , coords:"356,748,18"},
{ eng:"Sami Nassif Saleh Abdullah" , ar:"سامي ناصيف صالح عبدالله" , path:"./leaves/SamiNassifSalehAbdullah.png" , shape:"circle" , coords:"345,772,15"},
		//Nicola
{ eng:"Arab Nicola Saleh Abdullah" , ar:"عرب نقولا صالح عبدالله" , path:"./leaves/ArabNicolaSalehAbdullah.png" , shape:"circle" , coords:"380,832,16"},
		//Najib
{ eng:"Najib George Najib Saleh" , ar:"نجيب جورج نجيب صالح" , path:"./leaves/NajibGeorgeNajibSaleh.png" , shape:"circle" , coords:"322,514,19"},
{ eng:"Nabil George Najib Saleh" , ar:"نبيل جورج نجيب صالح" , path:"./leaves/NabilGeorgeNajibSaleh.png" , shape:"circle" , coords:"312,542,15"},
		//Raji
{ eng:"Gabi Raji Saleh Abdullah" , ar:"جابي راجي صالح عبدالله" , path:"./leaves/GabiRajiSalehAbdullah.png" , shape:"circle" , coords:"342,684,16"},
{ eng:"Fouad Raji Saleh Abdullah" , ar:"فؤاد راجي صالح عبدالله" , path:"./leaves/FouadRajiSalehAbdullah.png" , shape:"circle" , coords:"324,704,14"},
		//Radi
{ eng:"Abdallah Radi Saleh Abdullah" , ar:"عبدالله راضي صالح عبدالله" , path:"./leaves/AbdallahRadiSalehAbdullah.png" , shape:"circle" , coords:"259,645,15"},
{ eng:"Aziz Radi Saleh Abdullah" , ar:"عزيز راضي صالح عبدالله" , path:"./leaves/AzizRadiSalehAbdullah.png" , shape:"circle" , coords:"253,618,17"},
{ eng:"Ruda Salem Radi Saleh" , ar:"رضى سالم راضي صالح" , path:"./leaves/RudaSalemRadiSaleh.png" , shape:"circle" , coords:"272,466,15"},
{ eng:"Fawzi Salem Radi Saleh" , ar:"فوزي سالم راضي صالح" , path:"./leaves/FawziSalemRadiSaleh.png" , shape:"circle" , coords:"310,429,15"},
{ eng:"Fahed Mikhaeel Radi Saleh" , ar:"فهد مخائيل راضي صالح" , path:"./leaves/FahedMikhaeelRadiSaleh.png" , shape:"circle" , coords:"244,395,16"},
{ eng:"Ghassan Mikhaeel Radi Saleh" , ar:"غسان مخائيل راضي صالح" , path:"./leaves/GhassanMikhaeelRadiSaleh.png" , shape:"circle" , coords:"201,393,15"},
{ eng:"Hani Maarouf Radi Saleh" , ar:"هاني معروف راضي صالح" , path:"./leaves/HaniMaaroufRadiSaleh.png" , shape:"circle" , coords:"138,600,15"},
{ eng:"Raji Maarouf Radi Saleh" , ar:"راجي معروف راضي صالح" , path:"./leaves/RajiMaaroufRadiSaleh.png" , shape:"circle" , coords:"117,620,16"},
{ eng:"Suheil Simaan Radi Saleh" , ar:"سهيل سمعان راضي صالح" , path:"./leaves/SuheilSimaanRadiSaleh.png" , shape:"circle" , coords:"149,482,17"},
		//Shibly
{ eng:"Bassem Shibly Saleh Abdullah" , ar:"باسم شبلي صالح عبدالله" , path:"./leaves/BassemShiblySalehAbdullah.png" , shape:"circle" , coords:"159,809,14"},
{ eng:"Mazzawi Shibly Saleh Abdullah" , ar:"مزاوي شبلي صالح عبدالله" , path:"./leaves/MazzawiShiblySalehAbdullah.png" , shape:"circle" , coords:"131,895,16"},
{ eng:"Hanna Saleh Shibly Saleh" , ar:"حنا صالح شبلي صالح" , path:"./leaves/HannaSalehShiblySaleh.png" , shape:"circle" , coords:"85,701,15"},
{ eng:"Hani Saleh Shibly Saleh" , ar:"هاني صالح شبلي صالح" , path:"./leaves/HaniSalehShiblySaleh.png" , shape:"circle" , coords:"64,686,16"}
];

// = = = = =  = = = = =  = = = = =  = = = = =  = = = = =  = = = = =  = = = = =  = = = = =  = = = = =  = = = = =  = = = = =  = = = = = //

// load - functions section //

var m = document.getElementById(map_element_id);
function load_english_map(){
	var res="",curr;
	for(var i=0; i<dataArr.length; i++)
	{
		curr=dataArr[i];
		res+="<area title=\""+curr.eng+' &#13; '+curr.ar+"\" alt=\""+curr.path+"\" shape=\""+curr.shape+"\" coords=\""+curr.coords+"\" href=\"#\">";
	}
	m.innerHTML = res;
}
function load_arabic_map(){
	var res="",curr;
	for(var i=0; i<dataArr.length; i++)
	{
		curr=dataArr[i];
		res+="<area title=\""+curr.ar+"\" alt=\""+curr.path+"\" shape=\""+curr.shape+"\" coords=\""+curr.coords+"\" href=\"#\">";
	}
	m.innerHTML = res;
}

if(location.pathname.indexOf("_ar.html")!=-1) load_arabic_map();
else load_english_map();