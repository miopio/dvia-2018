## Process

### 1 Getting familiar with the data

[Key to the columns](https://earthquake.usgs.gov/data/comcat/data-eventterms.php#net)

These columns are essential:

| Key               | Explanation                             | Encoding       |
| ----------------- | --------------------------------------- | -------------- |
| lat and longitude | position                                | position       |
| mag               | off. best est. for size event           | size or color  |
| depth             | very inconsistent way of measurement /1 | shape or color |
| time /2           | format: 1970-01-01T00:00:00.000Z        | tooltip        |

**/1:**

> Since ComCat includes data from many different seismic networks, the process for determining the depth is different for different events. The depth is the least-constrained parameter in the earthquake location, and the error bars are generally larger than the variation due to different depth determination methods.

I would probably need to research the different ways to measure to properly account for the depth. [Comcat link to depth](https://earthquake.usgs.gov/data/comcat/data-eventterms.php#depth)

**/2:**

> Time when the event occurred. Times are reported in milliseconds since the epoch ( 1970-01-01T00:00:00.000Z), and do not include leap seconds. In certain output formats, the date is formatted for readability. Note that large earthquakes can continue rupturing for many 10's of seconds. We provide time in UTC (Coordinated Universal Time). Seismologists use UTC to avoid confusion caused by local time zones and daylight savings time.

It would probably nice to translate that to the local time

These columns seem interesting to use to me:

| Key             | Explanation                           | Encoding           |
| --------------- | ------------------------------------- | ------------------ |
| nst             | # stations used to determine location | ?                  |
| place           | textual description of the location   | tooltip            |
| type            | “eq”, “quarry”, “explosion”           | shape, color, icon |
| magError        | est standard error of the magnitude   | grey shape         |
| horizontalError | horizontal location error /3          | grey polygon       |
| depthError      | depth error, in km                    | grey polygon       |

**/3:**

> The horizontal location error, in km, defined as the length of the largest projection of the three principal errors on a horizontal plane. The principal errors are the major axes of the error ellipsoid, and are mutually perpendicular. The horizontal and vertical uncertainties in an event's location varies from about 100 m horizontally and 300 meters vertically for the best located events, those in the middle of densely spaced seismograph networks, to 10s of kilometers for global events in many parts of the world. We report an "unknown" value if the contributing seismic network does not supply uncertainty estimates.


Just for reference:

| Key     | Explanation                                       | Encoding |
| ------- | ------------------------------------------------- | -------- |
| net     | Network delivering the data                       | none     |
| gap     | gap between azimuthally adjacent stations         | none     |
| dmin    | h distance: epicenter to the nearest station in ° | none     |
| updated | Time  event was most recently updated             | none     |

**not included: DYFI infomation =**
[Reference for est fatalities and economic losses](https://earthquake.usgs.gov/earthquakes/eventpage/ak20292186/pager)


# 20181031

## Feedback in class:

- External data, allowed but not required
- Think about categories: What does a average day look like?
- Tectonic plates movement, find the closest fault line and measure the distance to it
- Ways to think about the map differently:
  - Subway maps – rational paradigm over geographical paradigm
  - Ocean – Earth

- AM and PM juxtaposition
- Depth of earthquakes below
- Relation between depth and magnitude
- Magnitude in qualitative color scheme
- Animation: shaking
- Elevation of the map (like a heatmap) is the mapped data
-
