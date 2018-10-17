const accidents = [
  {
    "Year": 2011,
    "Incident": "Fukushima",
    "INES level": 5,
    "Country": "Japan",
    "Location": "37.319444, 141.021111",
    "IAEA description": "Reactor shutdown after the 2011 Sendai earthquake and tsunami; failure of emergency cooling caused an explosion"
  },
  {
    "Year": 2011,
    "Incident": "Onagawa",
    "INES level": "",
    "Country": "Japan",
    "Location": "38.401111, 141.499722",
    "IAEA description": "Reactor shutdown after the 2011 Sendai earthquake and tsunami caused a fire"
  },
  {
    "Year": 2006,
    "Incident": "Fleurus",
    "INES level": 4,
    "Country": "Belgium",
    "Location": "Fleurus, Belgium",
    "IAEA description": "Severe health effects for a worker at a commercial irradiation facility as a result of high doses of radiation"
  },
  {
    "Year": 2006,
    "Incident": "Forsmark",
    "INES level": 2,
    "Country": "Sweden",
    "Location": "60.403333, 18.166667",
    "IAEA description": "Degraded safety functions for common cause failure in the emergency power supply system at nuclear power plant"
  },
  {
    "Year": 2006,
    "Incident": "Erwin",
    "INES level": "",
    "Country": "US",
    "Location": "36.145, -82.410833",
    "IAEA description": "Thirty-five litres of a highly enriched uranium solution leaked during transfer"
  },
  {
    "Year": 2005,
    "Incident": "Sellafield",
    "INES level": 3,
    "Country": "UK",
    "Location": "54.4205, -3.4975",
    "IAEA description": "Release of large quantity of radioactive material, contained within the installation"
  },
  {
    "Year": 2005,
    "Incident": "Atucha",
    "INES level": 2,
    "Country": "Argentina",
    "Location": "-33.967519, -59.205119",
    "IAEA description": "Overexposure of a worker at a power reactor exceeding the annual limit"
  },
  {
    "Year": 2005,
    "Incident": "Braidwood",
    "INES level": "",
    "Country": "US",
    "Location": "41.243611, -88.229167",
    "IAEA description": "Nuclear material leak"
  },
  {
    "Year": 2003,
    "Incident": "Paks",
    "INES level": 3,
    "Country": "Hungary",
    "Location": "46.5725, 18.854167",
    "IAEA description": "Partially spent fuel rods undergoing cleaning in a tank of heavy water ruptured and spilled fuel pellets"
  },
  {
    "Year": 1999,
    "Incident": "Tokaimura",
    "INES level": 4,
    "Country": "Japan",
    "Location": "36.4667,  140.5667",
    "IAEA description": "Fatal overexposures of workers following a criticality event at a nuclear facility"
  },
  {
    "Year": 1999,
    "Incident": "Yanangio",
    "INES level": 3,
    "Country": "Peru",
    "Location": "Latitude -11.2156 Longitude -75.4853",
    "IAEA description": "Incident with radiography source resulting in severe radiation burns"
  },
  {
    "Year": 1999,
    "Incident": "Ikitelli",
    "INES level": 3,
    "Country": "Turkey",
    "Location": "41.0792, 28.7825",
    "IAEA description": "Loss of a highly radioactive Co-60 source"
  },
  {
    "Year": 1999,
    "Incident": "Ishikawa",
    "INES level": 2,
    "Country": "Japan",
    "Location": "37.061111, 136.726389",
    "IAEA description": "Control rod malfunction"
  },
  {
    "Year": 1993,
    "Incident": "Tomsk",
    "INES level": 4,
    "Country": "Russia",
    "Location": "56.5, 84.966667",
    "IAEA description": "Pressure buildup led to an explosive mechanical failure"
  },
  {
    "Year": 1993,
    "Incident": "Cadarache",
    "INES level": 2,
    "Country": "France",
    "Location": "Cadarache, France",
    "IAEA description": "Spread of contamination to an area not expected by design"
  },
  {
    "Year": 1989,
    "Incident": "Vandellos",
    "INES level": 3,
    "Country": "Spain",
    "Location": "40.951389, 0.866667",
    "IAEA description": "Near accident caused by fire resulting in loss of safety systems at the nuclear power station"
  },
  {
    "Year": 1989,
    "Incident": "Greifswald",
    "INES level": "",
    "Country": "Germany",
    "Location": "54.140586, 13.664422",
    "IAEA description": "Excessive heating which damaged ten fuel rods"
  },
  {
    "Year": 1986,
    "Incident": "Chernobyl",
    "INES level": 7,
    "Country": "Ukraine (USSR)",
    "Location": "51.389553, 30.099147",
    "IAEA description": "Widespread health and environmental effects. External release of a significant fraction of reactor core inventory"
  },
  {
    "Year": 1986,
    "Incident": "Hamm-Uentrop",
    "INES level": "",
    "Country": "Germany",
    "Location": "51.679167, 7.971667",
    "IAEA description": "Spherical fuel pebble became lodged in the pipe used to deliver fuel elements to the reactor"
  },
  {
    "Year": 1981,
    "Incident": "Tsuraga",
    "INES level": 2,
    "Country": "Japan",
    "Location": "35.672778, 136.0775",
    "IAEA description": "More than 100 workers were exposed to doses of up to 155 millirem per day radiation"
  },
  {
    "Year": 1980,
    "Incident": "Saint Laurent des Eaux",
    "INES level": 4,
    "Country": "France",
    "Location": "Saint Laurent des Eaux, France",
    "IAEA description": "Melting of one channel of fuel in the reactor with no release outside the site"
  },
  {
    "Year": 1979,
    "Incident": "Three Mile Island",
    "INES level": 5,
    "Country": "US",
    "Location": "40.153889, -76.724722",
    "IAEA description": "Severe damage to the reactor core"
  },
  {
    "Year": 1977,
    "Incident": "Jaslovské Bohunice",
    "INES level": 4,
    "Country": "Czechoslovakia",
    "Location": "48.476111, 17.65",
    "IAEA description": "Damaged fuel integrity, extensive corrosion damage of fuel cladding and release of radioactivity"
  },
  {
    "Year": 1969,
    "Incident": "Lucens",
    "INES level": "",
    "Country": "Switzerland",
    "Location": "",
    "IAEA description": "Total loss of coolant led to a power excursion and explosion of experimental reactor"
  },
  {
    "Year": 1967,
    "Incident": "Chapelcross",
    "INES level": "",
    "Country": "UK",
    "Location": "55.01566, -3.22605",
    "IAEA description": "Graphite debris partially blocked a fuel channel causing a fuel element to melt and catch fire"
  },
  {
    "Year": 1966,
    "Incident": "Monroe",
    "INES level": "",
    "Country": "US",
    "Location": "41.889167, -83.345556",
    "IAEA description": "Sodium cooling system malfunction"
  },
  {
    "Year": 1964,
    "Incident": "Charlestown",
    "INES level": "",
    "Country": "US",
    "Location": "Lat: 41.44N, Lon: 71.69W",
    "IAEA description": "Error by a worker at a United Nuclear Corporation fuel facility led to an accidental criticality"
  },
  {
    "Year": 1959,
    "Incident": "Santa Susana Field Laboratory",
    "INES level": "",
    "Country": "US",
    "Location": "Santa Susana Field Laboratory, California",
    "IAEA description": "Partial core meltdown"
  },
  {
    "Year": 1958,
    "Incident": "Chalk River",
    "INES level": "",
    "Country": "Canada",
    "Location": "Chalk River Nuclear Labs Chalk River, Ontario Canada K0J 1J0",
    "IAEA description": "Due to inadequate cooling a damaged uranium fuel rod caught fire and was torn in two"
  },
  {
    "Year": 1958,
    "Incident": "Vinča",
    "INES level": "",
    "Country": "Yugoslavia",
    "Location": "Vinča belgrade serbia",
    "IAEA description": "During a subcritical counting experiment a power buildup went undetected - six scientists received high doses"
  },
  {
    "Year": 1957,
    "Incident": "Kyshtym",
    "INES level": 6,
    "Country": "Russia",
    "Location": "Mayak, Russia",
    "IAEA description": "Significant release of radioactive material\nto the environment from explosion of a high activity waste tank."
  },
  {
    "Year": 1957,
    "Incident": "Windscale Pile",
    "INES level": 5,
    "Country": "UK",
    "Location": "Sellafield, Cumbria UK",
    "IAEA description": "Release of radioactive material to the environment following a fire in a reactor core"
  },
  {
    "Year": 1952,
    "Incident": "Chalk River",
    "INES level": 5,
    "Country": "Canada",
    "Location": "Chalk River Nuclear Labs Chalk River, Ontario Canada K0J 1J0",
    "IAEA description": "A reactor shutoff rod failure, combined with several operator errors, led to a major power excursion of more than double the reactor's rated output at AECL's NRX reactor"
  }
]
