//Sets up the canvas
function setup() {
  createCanvas(2100, 700);
  frameRate (60);
  background (255);
}

//Draws the four charts
function draw() {

//Chart 1 - Shows major nuclear treaties, according to https://www.armscontrol.org/factsheets/Timeline-of-the-Treaty-on-the-Non-Proliferation-of-Nuclear-Weapons-NPT
noStroke ();
fill (0, 155, 255, 2);
ellipse (452,62,24,24); rect(452,62,1,502);
ellipse (482,62,24,24); rect(482,62,1,502);
ellipse (558,62,24,24); rect(558,62,1,502);
ellipse (588,62,24,24); rect(588,62,1,502);
ellipse (646,62,24,24); rect(646,62,1,502);
ellipse (682,62,24,24); rect(682,62,1,502);
ellipse (694,62,24,24); rect(694,62,1,502);
ellipse (714,62,24,24); rect(714,62,1,502);
ellipse (716,62,24,24); rect(716,62,1,502);
ellipse (768,62,24,24); rect(768,62,1,502);
ellipse (880,62,24,24); rect(880,62,1,502);
ellipse (944,62,24,24); rect(944,62,1,502);
ellipse (1010,62,24,24); rect(1010,62,1,502);
ellipse (1128,62,24,24); rect(1128,62,1,502);
ellipse (1262,62,24,24); rect(1262,62,1,502);
ellipse (1268,62,24,24); rect(1268,62,1,502);
ellipse (1284,62,24,24); rect(1284,62,1,502);
ellipse (1294,62,24,24); rect(1294,62,1,502);
ellipse (1308,62,24,24); rect(1308,62,1,502);
ellipse (1310,62,24,24); rect(1310,62,1,502);
ellipse (1358,62,24,24); rect(1358,62,1,502);
ellipse (1360,62,24,24); rect(1360,62,1,502);
ellipse (1392,62,24,24); rect(1392,62,1,502);
ellipse (1408,62,24,24); rect(1408,62,1,502);
ellipse (1480,62,24,24); rect(1480,62,1,502);
ellipse (1544,62,24,24); rect(1544,62,1,502);
ellipse (1554,62,24,24); rect(1554,62,1,502);
ellipse (1566,62,24,24); rect(1566,62,1,502);
ellipse (1600,62,24,24); rect(1600,62,1,502);
ellipse (1608,62,24,24); rect(1608,62,1,502);
ellipse (1608,62,24,24); rect(1608,62,1,502);
ellipse (1680,62,24,24); rect(1680,62,1,502);
ellipse (1720,62,24,24); rect(1720,62,1,502);
ellipse (1738,62,24,24); rect(1738,62,1,502);
ellipse (1746,62,24,24); rect(1746,62,1,502);
ellipse (1780,62,24,24); rect(1780,62,1,502);
ellipse (1782,62,24,24); rect(1782,62,1,502);
ellipse (1782,62,24,24); rect(1782,62,1,502);
ellipse (1806,62,24,24); rect(1806,62,1,502);
ellipse (1830,62,24,24); rect(1830,62,1,502);
ellipse (1830,62,24,24); rect(1830,62,1,502);
ellipse (1830,62,24,24); rect(1830,62,1,502);
ellipse (1854,62,24,24); rect(1854,62,1,502);
ellipse (1878,62,24,24); rect(1878,62,1,502);


// Chart 2, shows years in which different countries were actively testing, these are moving across the x-axis rather than down the y-axis
// stroke(50,50,50);
stroke(200,25);
strokeWeight(1);
fill (0); rect (150,98,48,24);
fill (0); rect (222,98,24,24);
fill (0); rect (294,98,192,24);
fill (0); rect (534,98,768,24);
fill (78); rect (246,122,24,24);
fill (78); rect (294,122,24,24);
fill (78); rect (342,122,144,24);
fill (78); rect (534,122,48,24);
fill (78); rect (606,122,528,24);
fill (78); rect (1158,122,96,24);
fill (243); rect (318,146,48,24);
fill (243); rect (414,146,72,24);
fill (243); rect (558,146,24,24);
fill (243); rect (606,146,48,24);
fill (243); rect (846,146,24,24);
fill (243); rect (894,146,24,24);
fill (243); rect (894,146,24,24);
fill (243); rect (942,146,240,24);
fill (243); rect (1206,146,72,24);
fill (203); rect (510,170,744,24);
fill (203); rect (1350,170,48,24);
fill (243); rect (606,194,408,24);
fill (243); rect (1038,194,72,24);
fill (243); rect (1158,194,48,24);
fill (243); rect (1230,194,24,24);
fill (243); rect (1278,194,120,24);
fill (255); rect (846,218,24,24);
fill (255); rect (1422,218,24,24);
fill (255); rect (1422,242,24,24);
fill (253); rect (1614,266,24,24);
fill (253); rect (1686,266,24,24);
fill (253); rect (1782,266,24,24);
fill (253); rect (1878,266,24,24);

//Chart 3 - Shows the total of all nuclear tests, centered around an X axis, above the axis is the sum of atmospheric tests, while below is the sum of underground tests
//rect for the sums of nuclear tests by years
fill (254); rect (150,406,24,1);
fill (252); rect (174,405,24,2);
fill (255); rect (198,407,24,0);
fill (251); rect (222,404,24,3);
fill (254); rect (246,406,24,1);
fill (255); rect (270,407,24,0);
fill (229); rect (294,390,24,18);
fill (239); rect (318,396,24,11);
fill (229); rect (342,389,24,18);
fill (232); rect (366,391,24,16);
fill (221); rect (390,384,24,24);
fill (208); rect (414,374,24,33);
fill (176); rect (438,357,24,55);
fill (89); rect (462,306,24,116);
fill (255); rect (486,407,24,0);
fill (251); rect (510,404,24,3);
fill (153); rect (534,348,24,71);
fill (0); rect (558,290,24,178);
fill (183); rect (582,403,24,50);
fill (169); rect (606,406,24,60);
fill (172); rect (630,406,24,58);
fill (146); rect (654,398,24,76);
fill (163); rect (678,402,24,64);
fill (142); rect (702,401,24,79);
fill (159); rect (726,406,24,67);
fill (163); rect (750,398,24,64);
fill (179); rect (774,401,24,53);
fill (173); rect (798,401,24,57);
fill (186); rect (822,400,24,48);
fill (176); rect (846,397,24,55);
fill (192); rect (870,407,24,44);
fill (182); rect (894,404,24,51);
fill (178); rect (918,406,24,54);
fill (160); rect (942,405,24,66);
fill (172); rect (966,406,24,58);
fill (178); rect (990,406,24,54);
fill (183); rect (1014,407,24,50);
fill (185); rect (1038,407,24,49);
fill (176); rect (1062,407,24,55);
fill (173); rect (1086,407,24,57);
fill (203); rect (1110,407,24,36);
fill (222); rect (1134,407,24,23);
fill (188); rect (1158,407,24,47);
fill (198); rect (1182,407,24,40);
fill (215); rect (1206,407,24,28);
fill (229); rect (1230,407,24,18);
fill (235); rect (1254,407,24,14);
fill (244); rect (1278,407,24,8);
fill (254); rect (1302,407,24,1);
fill (252); rect (1326,407,24,2);
fill (245); rect (1350,407,24,7);
fill (251); rect (1374,407,24,3);
fill (255); rect (1398,407,24,0);
fill (249); rect (1422,407,24,4);
fill (255); rect (1446,407,24,0);
fill (255); rect (1470,407,24,0);
fill (255); rect (1494,407,24,0);
fill (255); rect (1518,407,24,0);
fill (255); rect (1542,407,24,0);
fill (255); rect (1566,407,24,0);
fill (255); rect (1590,407,24,0);
fill (254); rect (1614,407,24,1);
fill (255); rect (1638,407,24,0);
fill (255); rect (1662,407,24,0);
fill (254); rect (1686,407,24,1);
fill (255); rect (1710,407,24,0);
fill (255); rect (1734,407,24,0);
fill (255); rect (1758,407,24,0);
fill (254); rect (1782,407,24,1);
fill (255); rect (1806,407,24,0);
fill (255); rect (1830,407,24,0);
fill (252); rect (1854,407,24,2);
fill (254); rect (1878,407,24,1);

//Chart 4, is the minutes to midnight by https://thebulletin.org/doomsday-clock/, the whitespace represents the minutes to midnight
fill (225,0,0);  rect (198,511,24,53);
fill (225,0,0);  rect (222,511,24,53);
fill (242,0,0);  rect (246,507,24,57);
fill (242,0,0);  rect (270,507,24,57);
fill (242,0,0);  rect (294,507,24,57);
fill (242,0,0);  rect (318,507,24,57);
fill (247,0,0);  rect (342,506,24,58);
fill (247,0,0);  rect (366,506,24,58);
fill (247,0,0);  rect (390,506,24,58);
fill (247,0,0);  rect (414,506,24,58);
fill (247,0,0);  rect (438,506,24,58);
fill (247,0,0);  rect (462,506,24,58);
fill (247,0,0);  rect (486,506,24,58);
fill (225,0,0);  rect (510,511,24,53);
fill (225,0,0);  rect (534,511,24,53);
fill (225,0,0);  rect (558,511,24,53);
fill (204,0,0);  rect (582,516,24,48);
fill (204,0,0);  rect (606,516,24,48);
fill (204,0,0);  rect (630,516,24,48);
fill (204,0,0);  rect (654,516,24,48);
fill (204,0,0);  rect (678,516,24,48);
fill (225,0,0);  rect (702,511,24,53);
fill (225,0,0);  rect (726,511,24,53);
fill (213,0,0);  rect (750,514,24,50);
fill (213,0,0);  rect (774,514,24,50);
fill (204,0,0);  rect (798,516,24,48);
fill (204,0,0);  rect (822,516,24,48);
fill (217,0,0);  rect (846,513,24,51);
fill (217,0,0);  rect (870,513,24,51);
fill (217,0,0);  rect (894,513,24,51);
fill (217,0,0);  rect (918,513,24,51);
fill (217,0,0);  rect (942,513,24,51);
fill (217,0,0);  rect (966,513,24,51);
fill (225,0,0);  rect (990,511,24,53);
fill (238,0,0);  rect (1014,508,24,56);
fill (238,0,0);  rect (1038,508,24,56);
fill (238,0,0);  rect (1062,508,24,56);
fill (242,0,0);  rect (1086,507,24,57);
fill (242,0,0);  rect (1110,507,24,57);
fill (242,0,0);  rect (1134,507,24,57);
fill (242,0,0);  rect (1158,507,24,57);
fill (230,0,0);  rect (1182,510,24,54);
fill (230,0,0);  rect (1206,510,24,54);
fill (213,0,0);  rect (1230,514,24,50);
fill (183,0,0);  rect (1254,521,24,43);
fill (183,0,0);  rect (1278,521,24,43);
fill (183,0,0);  rect (1302,521,24,43);
fill (183,0,0);  rect (1326,521,24,43);
fill (196,0,0);  rect (1350,518,24,46);
fill (196,0,0);  rect (1374,518,24,46);
fill (196,0,0);  rect (1398,518,24,46);
fill (217,0,0);  rect (1422,513,24,51);
fill (217,0,0);  rect (1446,513,24,51);
fill (217,0,0);  rect (1470,513,24,51);
fill (217,0,0);  rect (1494,513,24,51);
fill (225,0,0);  rect (1518,511,24,53);
fill (225,0,0);  rect (1542,511,24,53);
fill (225,0,0);  rect (1566,511,24,53);
fill (225,0,0);  rect (1590,511,24,53);
fill (225,0,0);  rect (1614,511,24,53);
fill (234,0,0);  rect (1638,509,24,55);
fill (234,0,0);  rect (1662,509,24,55);
fill (234,0,0);  rect (1686,509,24,55);
fill (230,0,0);  rect (1710,510,24,54);
fill (230,0,0);  rect (1734,510,24,54);
fill (234,0,0);  rect (1758,509,24,55);
fill (234,0,0);  rect (1782,509,24,55);
fill (234,0,0);  rect (1806,509,24,55);
fill (242,0,0);  rect (1830,507,24,57);
fill (242,0,0);  rect (1854,507,24,57);
fill (244,0,0);  rect (1878,506.5,24,57.5);

//Axis and labels for all 4 charts

//Project header
textSize (24); text("Nuclear testing, treaties and risk...post 1996, nuclear isn't the major driver of risk", 5, 24)

stroke(0);
strokeWeight(1);

//Line for the x-axis for Chart 3 - this segments atmospheric vs. underground testing
fill (0); line (150,407,1902,407);

//x-axis time axis
fill (0); line (150,564,1902,564);

//tick marks for each decade
fill (0); line (270,564,270,576);
fill (0); line (510,564,510,576);
fill (0); line (750,564,750,576);
fill (0); line (990,564,990,576);
fill (0); line (1230,564,1230,576);
fill (0); line (1470,564,1470,576);
fill (0); line (1710,564,1710,576);

//x-axis labels - this enables labeling on a decade only basis to reduce clutter
textSize (16); text("1940s", 164, 584)
textSize (16); text("1950s", 374, 584)
textSize (16); text("1960s", 614, 584)
textSize (16); text("1970s", 854, 584)
textSize (16); text("1980s", 1094, 584)
textSize (16); text("1990s", 1334, 584)
textSize (16); text("2000s", 1574, 584)
textSize (16); text("2010s", 1814, 584)

//y-Axis - it looks cleaner with one line going down the y-axis across all 4 panels
fill (0); line (150,50,150,564);
// fill (0); line (150,98,150,266);
// fill (0); line (150,290,150,480);
// fill (0); line (150,504,150,564);

//y-axis labels
textSize (16); text("Nuclear treaties", 5, 74)
textSize (16); text("United States", 5, 112)
textSize (16); text("Russia", 5, 134)
textSize (16); text("United Kingdom", 5, 158)
textSize (16); text("France", 5, 182)
textSize (16); text("China", 5, 206)
textSize (16); text("India", 5, 230)
textSize (16); text("Pakistan", 5, 254)
textSize (16); text("North Korea", 5, 278)
textSize (16); text("Atmospheric testing", 5, 377)
textSize (16); text("Underground testing", 5, 437)
textSize (16); text("Minutes elaspsed (60 - mtm)", 5, 534)

// Explanation label for Chart 2
fill (0); line (1280,156,1290,156);
textSize (12); text("Bar length shows the years that the country tested nuclear weapons, and color indicates the relative size of the nuclear testing program", 1294, 160)

// Explanation label for Chart 3
fill (0); line (584,353,610,353);
textSize (12); text("Bar size and color indicates the sum of atmospheric and underground testing, atomospheric testing shown above the x-axis and undergorund testing below ", 614, 357)

//Source
textSize (12); text("Source: Nuclear treatiess: https://www.armscontrol.org/factsheets/Timeline-of-the-Treaty-on-the-Non-Proliferation-of-Nuclear-Weapons-NPTtry, Minutes to midnight (mtm): https://thebulletin.org/doomsday-clock/, other data provided as part of coursework for DVIA Fall 2018", 5, 680)
}
