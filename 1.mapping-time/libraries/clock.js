(function(){

  function clock(){
    const now = _now(),
          isAM = t => t.hour() < 12,
          to12hour = t => (t.hour() + 11) % 12 + 1,
          season = t => {
            let seasons = [{months:[3,4,5], name:'Spring'}, {months:[6,7,8], name:'Summer'}, {months:[9,10,11], name:'Autumn'}, {months:[12,1,2], name:'Winter'} ],
                [mt, yr] = [t.month()+1, t.year()];
            for (var i=0; i<seasons.length; i++){
              if (seasons[i].months.indexOf(mt)<0) continue
              let {months, name} = seasons[i],
                  start = moment({month:months[0]-1, year:months[0]>mt ? yr-1 : yr}).startOf('month'),
                  end = moment({month:months[2]-1, year:months[2]<mt ? yr+1 : yr}).endOf('month');
              return {name, id:i+1, progress:now.diff(start) / end.diff(start)}
            }
          },
          progress = timeslice => {
            let start = moment(now).startOf(timeslice),
                end = moment(now).endOf(timeslice);
            return now.diff(start) / end.diff(start)
          };

    return {
      // numerical values for elements of current time
      hours:now.hour(),     // hour in 0–23 'military' time
      hour:to12hour(now),   // hour in 1–12 'am/pm' time
      min:now.minute(),     // minute
      sec:now.second(),     // seconds
      ms:now.millisecond(), // milliseconds
      am:isAM(now),         // true for hours 0-11
      pm:!isAM(now),        // true for hours 12-23

      // numerical values for elements of current date
      year:now.year(),       // the full 4-digit year
      month:now.month()+1,   // month number 1–12
      day:now.date(),        // the day 1–{28,29,30,31}
      weekday:now.day()+1,   // the day of the week 1-7
      season:season(now).id, // the current season 1-4 (starting with spring)

      // a string-based representation that can be used as an argument to clockStart
      timestamp:now.format('Y/M/D H:mm:ss'),

      // values between 0.0 and 1.0 measuring the current time's
      // %-completion over each of the different durations
      progress:{
        year:progress('year'),
        season:season(now).progress,
        month:progress('month'),
        week:progress('week'),
        day:progress('day'),
        halfday:progress('day') % .5 / .5,
        hour:progress('hour'),
        min:progress('minute'),
        sec:progress('second')
      },

      // string versions of the date & time (in case you want to print it out)
      text:{
        time:now.format('h:mm:ss A'),
        hour:now.format('h'),
        hours:now.format('HH'),
        min:now.format('mm'),
        sec:now.format('ss'),
        ampm:now.format('A'),

        date:now.format('D MMM Y'),
        year:now.format('Y'),
        season:season(now).name,
        month:now.format('MMMM'),
        mon:now.format('MMM'),
        day:now.format('D'),
        weekday:now.format('dddd'),

        // for custom text-formatting see https://momentjs.com/docs/#/displaying/format/
        format:(fmt) => now.format(fmt)
      },

      // the datetime object itself
      moment:now
    }
  }

  moment.updateLocale('en', {
    meridiem:function(hour, minute, isLowercase){
      let ampm = hour<12 ? 'A.M.' : 'P.M.'
      return isLowercase ? ampm.toLowerCase() : ampm
    }
  });

  // -- internal state --------
  let _formats = ['Y/M/D h:m:s a', 'Y/M/D H:m:s', 'Y/M/D h:m a', 'Y/M/D H:m', 'Y/M/D', 'h:m:s a', 'H:m:s', 'h:m a', 'H:m'],
      _now = () => moment(_epoch).add(_speed * moment().diff(_since), 'ms');
      _epoch = moment(),
      _since = moment(),
      _speed = 1.0;

  // -- accessor functions --------
  function clockSpeed(multiplier){
    if (isNaN(multiplier))
      return console.error(`Clock speed must be a positive or negative number (not "${multiplier}")`)
    _epoch = _now()
    _since = moment()
    _speed = multiplier
  }

  function clockStart(timestamp){
    if (!moment(timestamp, _formats, true).isValid())
      return console.error('Specify start time using a string of the form:', _formats.map(f => moment().endOf('year').format(f)))
    _epoch = moment(timestamp, _formats)
  }

  function clockOffset(steps, stepSize){
    let stepSizes = ['years', 'quarters', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds', 'milliseconds']
    if (isNaN(steps) || stepSizes.indexOf(stepSize.replace(/s?$/,'s'))==-1)
      return console.error('Offsets must be specified with a number of steps, and a step-size such as:', stepSizes)
    _epoch.add(steps, stepSize);
  }

  // -- exports --------
  window.clockStart = clockStart
  window.clockSpeed = clockSpeed
  window.clockOffset = clockOffset
  window.clock = clock
})()

