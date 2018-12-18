
//arrays to store years, details, undersground tests, atmospheric tests, tests
var yr = [];            
var details = [];
var underground = [];
var atmospheric = [];
var tests = [];
var yeartext = '';
var uraniumData;

//uranium data
var uryr = ["1981","1982", "1983", "1984","1985","1986","1987","1988","1989","1990","1991","1992"];
var urimp = [6.6, 17.1, 8.2, 12.5, 11.7, 13.5, 15.1, 15.8, 13.1,  23.7, 16.3, 23.3];

//country objetcs
var uk = []; var us = []; var ru = []; var pk = []; var id = []; var fr = []; var ch = []; var nk = [];

//all data
var all = [];

function preload(){
  
    //load json data
    allData = loadJSON('all1.json');
    console.log('allData'); console.log(allData);
    atmData = loadJSON('atmospheric1.json');
    ugData = loadJSON('underground1.json');
    totalData = loadJSON('totals1.json');
    //uraniumData = loadJSON('uraniumData.json');
    uraniumData = loadTable('uranium.csv','csv', 'header');
    
}

function setup() {
    
 //console.log(uraniumData.name);
  
 //constructor for countrywise objects
 function con (name, yer, ung,atmp, testss){
      this.name = name;
      this.yer = yer;
      this.ung = ung;
      this.atmp = atmp, 
      this.testss = testss;
  }
  
    
  years = allData['years'];
  countries = allData['countries'];
 // console.log(uraniumData['Australia']['2017']);
  
  x=0;
  y=windowHeight/2;
  
  //console.log(years);
    
    //all arrays
    years.forEach((d,i) =>{
      
        yr.push(d.year);
        details.push(d.details)
        underground.push(d.total.underground);
        atmospheric.push(d.total.atmospheric);
        tests.push(d.total.tests);
        
        //Country : array of objects
        uk[i] = new con('United Kingdom', d.year, d.details['United Kingdom'].underground, d.details['United Kingdom'].atmospheric,d.details['United Kingdom'].tests);
        us[i] = new con('United States', d.year, d.details['United States'].underground, d.details['United States'].atmospheric,d.details['United States'].tests);
        ru[i] = new con('Russia', d.year, d.details['Russia'].underground, d.details['Russia'].atmospheric,d.details['Russia'].tests);
        pk[i] = new con('Pakistan', d.year, d.details['Pakistan'].underground, d.details['Pakistan'].atmospheric,d.details['Pakistan'].tests);
        id[i] = new con('India', d.year, d.details['India'].underground, d.details['India'].atmospheric,d.details['India'].tests);
        fr[i] = new con('France', d.year, d.details['France'].underground, d.details['France'].atmospheric,d.details['France'].tests);
        ch[i] = new con('China', d.year, d.details['China'].underground, d.details['China'].atmospheric,d.details['China'].tests);
        nk[i] = new con('North Korea', d.year, d.details['North Korea'].underground, d.details['North Korea'].atmospheric,d.details['North Korea'].tests);
        
        all.push(uk[i]); all.push(us[i]); all.push(ru[i]); all.push(pk[i]); all.push(id[i]); all.push(fr[i]); all.push(ch[i]); all.push(nk[i]);

        // noStroke();
        // fill('#345687');
        // ellipse(x,y,2,2);
        //  x += (windowWidth-40)/72;
        
    });
    
  //all.push(uk); all.push(us); all.push(ru); all.push(pk); all.push(id); all.push(fr); all.push(ch); all.push(nk);
console.log(all);

 //var windowWidth = 1200;
 // var windowHeight = 1900;
 createCanvas(4000, 2000);
    //background(30,20,40,20);
     
    // var y=40;
    // var x=20;
    var yyy = 250;
    
    
    //midline
    stroke('lightgray');
    line(50,yyy,1800,yyy);
    
    //      //year dots
    //      xe=200;
    //      for(j=0;j<7;j++){
    //          fill('black');
    //          ellipse(xe,yyy,2,2);
             
    //          xa=xe;
    //          xe+=20;}
             
  
    
    
    //UK underground & atmospheric
    var unguk1 = 0; var unguk2 = 0; var unguk3 = 0; var unguk4 = 0; var unguk5 = 0; var unguk6 = 0; var unguk7 = 0;
    var atmuk1 = 0; var atmuk2 = 0; var atmuk3 = 0; var atmuk4 = 0; var atmuk5 = 0; var atmuk6 = 0; var atmuk7 = 0;
    
    //US underground & atmospheric
    var ungus1 = 0; var ungus2 = 0; var ungus3 = 0; var ungus4 = 0; var ungus5 = 0; var ungus6 = 0; var ungus7 = 0;
    var atmus1 = 0; var atmus2 = 0; var atmus3 = 0; var atmus4 = 0; var atmus5 = 0; var atmus6 = 0; var atmus7 = 0;
    
    //RU underground & atmospheric
    var ungru1 = 0; var ungru2 = 0; var ungru3 = 0; var ungru4 = 0; var ungru5 = 0; var ungru6 = 0; var ungru7 = 0;
    var atmru1 = 0; var atmru2 = 0; var atmru3 = 0; var atmru4 = 0; var atmru5 = 0; var atmru6 = 0; var atmru7 = 0;
    
    //PK underground & atmospheric
    var ungpk1 = 0; var ungpk2 = 0; var ungpk3 = 0; var ungpk4 = 0; var ungpk5 = 0; var ungpk6 = 0; var ungpk7 = 0;
    var atmpk1 = 0; var atmpk2 = 0; var atmpk3 = 0; var atmpk4 = 0; var atmpk5 = 0; var atmpk6 = 0; var atmpk7 = 0;
    
    //ID underground & atmospheric
    var ungid1 = 0; var ungid2 = 0; var ungid3 = 0; var ungid4 = 0; var ungid5 = 0; var ungid6 = 0; var ungid7 = 0;
    var atmid1 = 0; var atmid2 = 0; var atmid3 = 0; var atmid4 = 0; var atmid5 = 0; var atmid6 = 0; var atmid7 = 0;
    
    //FR underground & atmospheric
    var ungfr1 = 0; var ungfr2 = 0; var ungfr3 = 0; var ungfr4 = 0; var ungfr5 = 0; var ungfr6 = 0; var ungfr7 = 0;
    var atmfr1 = 0; var atmfr2 = 0; var atmfr3 = 0; var atmfr4 = 0; var atmfr5 = 0; var atmfr6 = 0; var atmfr7 = 0;
    
    //CH underground & atmospheric
    var ungch1 = 0; var ungch2 = 0; var ungch3 = 0; var ungch4 = 0; var ungch5 = 0; var ungch6 = 0; var ungch7 = 0;
    var atmch1 = 0; var atmch2 = 0; var atmch3 = 0; var atmch4 = 0; var atmch5 = 0; var atmch6 = 0; var atmch7 = 0;
    
    //NK underground & atmospheric
    var ungnk1 = 0; var ungnk2 = 0; var ungnk3 = 0; var ungnk4 = 0; var ungnk5 = 0; var ungnk6 = 0; var ungnk7 = 0;
    var atmnk1 = 0; var atmnk2 = 0; var atmnk3 = 0; var atmnk4 = 0; var atmnk5 = 0; var atmnk6 = 0; var atmnk7 = 0;
    
    
    
    all.forEach((d)=>{
        
                //uk underground & atmospheric
        if((d.yer <1956) && (d.name === 'United Kingdom'))
            {unguk1 = unguk1+ d.ung; atmuk1 = atmuk1+ d.atmp;}
        if((d.yer>1955 && d.yer<1966) && (d.name === 'United Kingdom'))
            {unguk2 = unguk2+ d.ung; atmuk2 = atmuk2+ d.atmp;}
        if((d.yer>1965 && d.yer<1976) && (d.name === 'United Kingdom'))
            {unguk3 = unguk3+ d.ung; atmuk3 = atmuk3+ d.atmp;}
        if((d.yer>1975 && d.yer<1986) && (d.name === 'United Kingdom'))
            {unguk4 = unguk4+ d.ung; atmuk4 = atmuk4+ d.atmp;}
        if((d.yer>1985 && d.yer<1996) && (d.name === 'United Kingdom'))
            {unguk5 = unguk5+ d.ung; atmuk5 = atmuk5+ d.atmp;}
        if((d.yer>1995 && d.yer<2006) && (d.name === 'United Kingdom'))
            {unguk6 = unguk6+ d.ung; atmuk6 = atmuk6+ d.atmp;}
        if((d.yer>2005 && d.yer<2016) && (d.name === 'United Kingdom'))
            {unguk7 = unguk7+ d.ung; atmuk7 = atmuk7+ d.atmp;}
            
        //us underground & atmospheric
        if((d.yer <1956) && (d.name === 'United States'))
            {ungus1 = ungus1+ d.ung; atmru1 = atmru1+ d.atmp;}
        if((d.yer>1955 && d.yer<1966) && (d.name === 'United States'))
            {ungus2 = ungus2+ d.ung; atmru2 = atmru2+ d.atmp;}
        if((d.yer>1965 && d.yer<1976) && (d.name === 'United States'))
            {ungus3 = ungus3+ d.ung; atmru3 = atmru3+ d.atmp;}
        if((d.yer>1975 && d.yer<1986) && (d.name === 'United States'))
            {ungus4 = ungus4+ d.ung; atmru4 = atmru4+ d.atmp;}
        if((d.yer>1985 && d.yer<1996) && (d.name === 'United States'))
            {ungus5 = ungus5+ d.ung; atmus5 = atmus5+ d.atmp;}
        if((d.yer>1995 && d.yer<2006) && (d.name === 'United States'))
            {ungus6 = ungus6+ d.ung; atmus6 = atmus6+ d.atmp;}
        if((d.yer>2005 && d.yer<2016) && (d.name === 'United States'))
            {ungus7 = ungus7+ d.ung; atmus7 = atmus7+ d.atmp;}
            
        //ru underground & atmospheric
        if((d.yer <1956) && (d.name === 'Russia'))
            {ungru1 = ungru1+ d.ung; atmus1 = atmus1+ d.atmp;}
        if((d.yer>1955 && d.yer<1966) && (d.name === 'Russia'))
            {ungru2 = ungru2+ d.ung; atmus2 = atmus2+ d.atmp;}
        if((d.yer>1965 && d.yer<1976) && (d.name === 'Russia'))
            {ungru3 = ungru3+ d.ung; atmus3 = atmus3+ d.atmp;}
        if((d.yer>1975 && d.yer<1986) && (d.name === 'Russia'))
            {ungru4 = ungru4+ d.ung; atmus4 = atmus4+ d.atmp;}
        if((d.yer>1985 && d.yer<1996) && (d.name === 'Russia'))
            {ungru5 = ungru5+ d.ung; atmru5 = atmru5+ d.atmp;}
        if((d.yer>1995 && d.yer<2006) && (d.name === 'Russia'))
            {ungru6 = ungru6+ d.ung; atmru6 = atmru6+ d.atmp;}
        if((d.yer>2005 && d.yer<2016) && (d.name === 'Russia'))
            {ungru7 = ungru7+ d.ung; atmru7 = atmru7+ d.atmp;}
            
        //pk underground & atmospheric
        if((d.yer <1956) && (d.name === 'Pakistan'))
            {ungpk1 = ungpk1+ d.ung; atmpk1 = atmpk1+ d.atmp;}
        if((d.yer>1955 && d.yer<1966) && (d.name === 'Pakistan'))
            {ungpk2 = ungpk2+ d.ung; atmpk2 = atmpk2+ d.atmp;}
        if((d.yer>1965 && d.yer<1976) && (d.name === 'Pakistan'))
            {ungpk3 = ungpk3+ d.ung; atmpk3 = atmpk3+ d.atmp;}
        if((d.yer>1975 && d.yer<1986) && (d.name === 'Pakistan'))
            {ungpk4 = ungpk4+ d.ung; atmpk4 = atmpk4+ d.atmp;}
        if((d.yer>1985 && d.yer<1996) && (d.name === 'Pakistan'))
            {ungpk5 = ungpk5+ d.ung; atmpk5 = atmpk5+ d.atmp;}
        if((d.yer>1995 && d.yer<2006) && (d.name === 'Pakistan'))
            {ungpk6 = ungpk6+ d.ung; atmpk6 = atmpk6+ d.atmp;}
        if((d.yer>2005 && d.yer<2016) && (d.name === 'Pakistan'))
            {ungpk7 = ungpk7+ d.ung; atmpk7 = atmpk7+ d.atmp;}
            
        //id underground & atmospheric
        if((d.yer <1956) && (d.name === 'India'))
            {ungid1 = ungid1+ d.ung; atmid1 = atmid1+ d.atmp;}
        if((d.yer>1955 && d.yer<1966) && (d.name === 'India'))
            {ungid2 = ungid2+ d.ung; atmid2 = atmid2+ d.atmp;}
        if((d.yer>1965 && d.yer<1976) && (d.name === 'India'))
            {ungid3 = ungid3+ d.ung; atmid3 = atmid3+ d.atmp;}
        if((d.yer>1975 && d.yer<1986) && (d.name === 'India'))
            {ungid4 = ungid4+ d.ung; atmid4 = atmid4+ d.atmp;}
        if((d.yer>1985 && d.yer<1996) && (d.name === 'India'))
            {ungid5 = ungid5+ d.ung; atmid5 = atmid5+ d.atmp;}
        if((d.yer>1995 && d.yer<2006) && (d.name === 'India'))
            {ungid6 = ungid6+ d.ung; atmid6 = atmid6+ d.atmp;}
        if((d.yer>2005 && d.yer<2016) && (d.name === 'India'))
            {ungid7 = ungid7+ d.ung; atmid7 = atmid7+ d.atmp;}
            
        //fr underground & atmospheric
        if((d.yer <1956) && (d.name === 'France'))
            {ungfr1 = ungfr1+ d.ung; atmfr1 = atmfr1+ d.atmp;}
        if((d.yer>1955 && d.yer<1966) && (d.name === 'France'))
            {ungfr2 = ungfr2+ d.ung; atmfr2 = atmfr2+ d.atmp;}
        if((d.yer>1965 && d.yer<1976) && (d.name === 'France'))
            {ungfr3 = ungfr3+ d.ung; atmfr3 = atmfr3+ d.atmp;}
        if((d.yer>1975 && d.yer<1986) && (d.name === 'France'))
            {ungfr4 = ungfr4+ d.ung; atmfr4 = atmfr4+ d.atmp;}
        if((d.yer>1985 && d.yer<1996) && (d.name === 'France'))
            {ungfr5 = ungfr5+ d.ung; atmfr5 = atmfr5+ d.atmp;}
        if((d.yer>1995 && d.yer<2006) && (d.name === 'France'))
            {ungfr6 = ungfr6+ d.ung; atmfr6 = atmfr6+ d.atmp;}
        if((d.yer>2005 && d.yer<2016) && (d.name === 'France'))
            {ungfr7 = ungfr7+ d.ung; atmfr7 = atmfr7+ d.atmp;}
            
        //ch underground & atmospheric
        if((d.yer <1956) && (d.name === 'China'))
            {ungch1 = ungch1+ d.ung; atmch1 = atmch1+ d.atmp;}
        if((d.yer>1955 && d.yer<1966) && (d.name === 'China'))
            {ungch2 = ungch2+ d.ung; atmch2 = atmch2+ d.atmp;}
        if((d.yer>1965 && d.yer<1976) && (d.name === 'China'))
            {ungch3 = ungch3+ d.ung; atmch3 = atmch3+ d.atmp;}
        if((d.yer>1975 && d.yer<1986) && (d.name === 'China'))
            {ungch4 = ungch4+ d.ung; atmch4 = atmch4+ d.atmp;}
        if((d.yer>1985 && d.yer<1996) && (d.name === 'China'))
            {ungch5 = ungch5+ d.ung; atmch5 = atmch5+ d.atmp;}
        if((d.yer>1995 && d.yer<2006) && (d.name === 'China'))
            {ungch6 = ungch6+ d.ung; atmch6 = atmch6+ d.atmp;}
        if((d.yer>2005 && d.yer<2016) && (d.name === 'China'))
            {ungch7 = ungch7+ d.ung; atmch7 = atmch7+ d.atmp;}
            
        //nk underground & atmospheric
        if((d.yer <1956) && (d.name === 'North Korea'))
            {ungnk1 = ungnk1+ d.ung; atmnk1 = atmnk1+ d.atmp;}
        if((d.yer>1955 && d.yer<1966) && (d.name === 'North Korea'))
            {ungnk2 = ungnk2+ d.ung; atmnk2 = atmnk2+ d.atmp;}
        if((d.yer>1965 && d.yer<1976) && (d.name === 'North Korea'))
            {ungnk3 = ungnk3+ d.ung; atmnk3 = atmnk3+ d.atmp;}
        if((d.yer>1975 && d.yer<1986) && (d.name === 'North Korea'))
            {ungnk4 = ungnk4+ d.ung; atmnk4 = atmnk4+ d.atmp;}
        if((d.yer>1985 && d.yer<1996) && (d.name === 'North Korea'))
            {ungnk5 = ungnk5+ d.ung; atmnk5 = atmnk5+ d.atmp;}
        if((d.yer>1995 && d.yer<2006) && (d.name === 'North Korea'))
            {ungnk6 = ungnk6+ d.ung; atmnk6 = atmnk6+ d.atmp;}
        if((d.yer>2005 && d.yer<2016) && (d.name === 'North Korea'))
            {ungnk7 = ungnk7+ d.ung; atmnk7 = atmnk7+ d.atmp;}
        
       
    });
    

    //US arcs //royalcornblue
    var xxx=100;
    noStroke();fill(100, 149, 237, 100);
    arc(xxx+20+ungus1,yyy,ungus1*2,ungus1*2,-2*PI,-PI); arc(xxx+20+atmus1,yyy,atmus1*2,atmus1*2,-PI,-2*PI);
    noStroke();fill(100, 149, 237, 100);
    arc(xxx+40+ungus2,yyy,ungus2*2,ungus2*2,-2*PI,-PI); arc(xxx+40+atmus2,yyy,atmus2*2,atmus2*2,-PI,-2*PI);
    arc(xxx+60+ungus3,yyy,ungus3*2,ungus3*2,-2*PI,-PI); arc(xxx+60+atmus3,yyy,atmus3*2,atmus3*2,-PI,-2*PI);
    arc(xxx+80+ungus4,yyy,ungus4*2,ungus4*2,-2*PI,-PI); arc(xxx+80+atmus4,yyy,atmus4*2,atmus4*2,-PI,-2*PI);
    arc(xxx+100+ungus5,yyy,ungus5*2,ungus5*2,-2*PI,-PI); arc(xxx+100+atmus5,yyy,atmus5*2,atmus5*2,-PI,-2*PI);
    arc(xxx+120+ungus6,yyy,ungus6*2,ungus6*2,-2*PI,-PI); arc(xxx+120+atmus6,yyy,atmus6*2,atmus6*2,-PI,-2*PI);
    arc(xxx+140+ungus7,yyy,ungus7*2,ungus7*2,-2*PI,-PI); arc(xxx+140+atmus7,yyy,atmus7*2,atmus7*2,-PI,-2*PI);   
    fill('gray');textSize(9);
    text('45',xxx+20+ungus1-5,yyy+10); text('55',xxx+40+ungus1-5,yyy+10);text('65',xxx+60+ungus1-5,yyy+10);
    text('75',xxx+80+ungus1-5,yyy+10);text('85',xxx+100+ungus1-5,yyy+10);text('95',xxx+100+ungus1-5,yyy+10);
    text('05',xxx+120+ungus1-5,yyy+10); text('15',xxx+140+ungus1-5,yyy+10);
    
    //RU arcs //lightseagreen
    var xxx=850;
    noStroke();
    fill(32,178,170, 100); 
    arc(xxx+20+ungru1,yyy,ungru1*2,ungru1*2,-2*PI,-PI); arc(xxx+20+atmru1,yyy,atmru1*2,atmru1*2,-PI,-2*PI);
    arc(xxx+40+ungru2,yyy,ungru2*2,ungru2*2,-2*PI,-PI); arc(xxx+40+atmru2,yyy,atmru2*2,atmru2*2,-PI,-2*PI);
    arc(xxx+60+ungru3,yyy,ungru3*2,ungru3*2,-2*PI,-PI); arc(xxx+60+atmru3,yyy,atmru3*2,atmru3*2,-PI,-2*PI);
    arc(xxx+80+ungru4,yyy,ungru4*2,ungru4*2,-2*PI,-PI); arc(xxx+80+atmru4,yyy,atmru4*2,atmru4*2,-PI,-2*PI);
    arc(xxx+100+ungru5,yyy,ungru5*2,ungru5*2,-2*PI,-PI); arc(xxx+100+atmru5,yyy,atmru5*2,atmru5*2,-PI,-2*PI);
    arc(xxx+120+ungru6,yyy,ungru6*2,ungru6*2,-2*PI,-PI); arc(xxx+120+atmru6,yyy,atmru6*2,atmru6*2,-PI,-2*PI);
    arc(xxx+140+ungru7,yyy,ungru7*2,ungru7*2,-2*PI,-PI); arc(xxx+140+atmru7,yyy,atmru7*2,atmru7*2,-PI,-2*PI);   
    fill('gray');textSize(9);
    text('45',xxx+20+ungus1-5,yyy+10); text('55',xxx+40+ungus1-5,yyy+10);text('65',xxx+60+ungus1-5,yyy+10);
    text('75',xxx+80+ungus1-5,yyy+10);text('85',xxx+100+ungus1-5,yyy+10);text('95',xxx+100+ungus1-5,yyy+10);
    text('05',xxx+120+ungus1-5,yyy+10); text('15',xxx+140+ungus1-5,yyy+10);
  
    
    //FR arcs //goldenrod
    var xxx=1380;
    noStroke();
    fill(218,165,32,100);
    arc(xxx+20+ungfr1,yyy,ungfr1*2,ungfr1*2,-2*PI,-PI); arc(xxx+20+atmfr1,yyy,atmfr1*2,atmfr1*2,-PI,-2*PI);
    arc(xxx+40+ungfr2,yyy,ungfr2*2,ungfr2*2,-2*PI,-PI); arc(xxx+40+atmfr2,yyy,atmfr2*2,atmfr2*2,-PI,-2*PI);
    arc(xxx+60+ungfr3,yyy,ungfr3*2,ungfr3*2,-2*PI,-PI); arc(xxx+60+atmfr3,yyy,atmfr3*2,atmfr3*2,-PI,-2*PI);
    arc(xxx+80+ungfr4,yyy,ungfr4*2,ungfr4*2,-2*PI,-PI); arc(xxx+80+atmfr4,yyy,atmfr4*2,atmfr4*2,-PI,-2*PI);
    arc(xxx+100+ungfr5,yyy,ungfr5*2,ungfr5*2,-2*PI,-PI); arc(xxx+100+atmfr5,yyy,atmfr5*2,atmfr5*2,-PI,-2*PI);
    arc(xxx+120+ungfr6,yyy,ungfr6*2,ungfr6*2,-2*PI,-PI); arc(xxx+120+atmfr6,yyy,atmfr6*2,atmfr6*2,-PI,-2*PI);
    arc(xxx+140+ungfr7,yyy,ungfr7*2,ungfr7*2,-2*PI,-PI); arc(xxx+140+atmfr7,yyy,atmfr7*2,atmfr7*2,-PI,-2*PI);   
    fill('gray');textSize(9);
    text('45',xxx+20+ungus1-5,yyy+10); text('55',xxx+40+ungus1-5,yyy+10);text('65',xxx+60+ungus1-5,yyy+10);
    text('75',xxx+80+ungus1-5,yyy+10);text('85',xxx+100+ungus1-5,yyy+10);text('95',xxx+100+ungus1-5,yyy+10);
    text('05',xxx+120+ungus1-5,yyy+10); text('15',xxx+140+ungus1-5,yyy+10);
    
  
}


function draw(){
       
};
  


 