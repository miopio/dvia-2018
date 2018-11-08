## Process
------------------------------------------------------------------------------------------------------------------------------------
FINAL SUBMISSION - 10/17/18
------------------------------------------------------------------------------------------------------------------------------------
SUB VARIABLE DATA SOURCE

"Power is considered by many to be a central concept in explaining conflict".

  National Material Capabilities (v5.0) - csv file
   - retrieved from The Correlates of War Project
     http://cow.dss.ucdavis.edu/data-sets/national-material-capabilities

   - Link to Data Documentation
     file:///Users/dhanaperry/Downloads/NMC_Documentation_v5_0.pdf

Six indicators CINC (Composite Indicator of National Capability) are included in this data set which serves as the basis for the most widely used indicator of national capability to exercise and resist influence. The period this dataset covers is 1816-2012.

  6 Indicators of Power (CINC)
    - Military Expenditure
    - Military Personnel
    - Energy Consumption
    - Iron & Steel Production
    - Urban Population
    - Total Population

  External Data Attributes
    - statenme      - State Name
    - year          - Year
    - milex         - Military Expenditure
    - milper        - Military Personnel
    - irst          - Iron & Steel consumption
    - pec           - Energy Consumption
    - tpop          - Total population
    - upop          - Urban Population
    - upopgrowth    - Urban Population Growth Rate
    - cinc          - CINC Score

  Citation & History  
      Singer, J. David, Stuart Bremer, and John Stuckey. (1972). "Capability Distribution, Uncertainty, and Major Power War, 1820-1965." in Bruce Russett (ed) Peace, War, and Numbers, Beverly Hills: Sage, 19-48.

          * This is the first NMC data set assembled in the 1960s, described and analyzed original data on major powers only.

      Singer, J. David. 1987. "Reconstructing the Correlates of War Dataset on Material Capabilities of States, 1816-1985" International Interactions, 14: 115-32.

          * Following this publication, the data set was expanded to cover the entire interstate system as discussed in the article above.


DATA TYPE
  I'm interested in visualizing divergent data with this set because I would like to tell a more complete story behind what motivates the acceleration of nuclear arms production.

DISPLAYING DATA
  Grouping the years by 10 year bundles to give the visuals a bit more drama and it will allow to me to play with size more. I am using the size of the dots/circles to represent the number of atmospheric and underground tests. I still need to figure out how to regroup the data to show this effect.

  The total tests design has changed to become the background lerping color. It still offers the hot/cool effect I was looking for without using animated or interactive features.

  The atmospheric and underground tests were colored according to naturally occurring colors in toxic/poisonous minerals, etc. commonly used by humans as adornment, prior to discovering the danger behind the beauty.: https://www.youtube.com/watch?v=gKfjHTk8KrY

    - Atmospheric tests is set to Neon Orange w/ white stroke
    - Underground tests is set to Neon Green w/ white stroke
    - Total # tests is set to a lerping color gradient which uses color
      like a heat map to display the data. This data is the background,
      and thus the primary feature of the visualization.

  I chose not to assign countries with a color.  

-----------------------------------------------------------------------------------------------------------------------------------  
DRAFT SUBMISSION - 10/10/18
-----------------------------------------------------------------------------------------------------------------------------------
In this project I am attempting to visualize the data in reference to an interview I recently heard on NPR with renowned pop astrophysicist Neil DeGrasse Tyson. In this interview, he discusses his new book entitled "Accessory to War: The Unspoken Alliance Between Astrophysics and the Military" where he names the "curiously complicit alliance" between a nation's global conquests and innovation in science and technology. With that in mind, here are some of the design ideas I was initially aiming for:

SUB VARIABLE
I would love to be able embed the additional variables as links within the timeline. I'm considering these options:
- geopolitical factors
  https://www.mauldineconomics.com/this-week-in-geopolitics/the-geopolitics-of-nuclear-weapons
  https://energypolicy.columbia.edu/sites/default/files/The%20Geopolitics%20of%20Nuclear%20Power%20and%20Technology%20033017.pdf
  https://www.armscontrol.org/factsheets/Nuclear-Testing-and-Comprehensive-Test-Ban-Treaty-CTBT-Timeline
- American economic power **
  https://ourworldindata.org/military-spending
- scientific & technological innovation **
- environmental impact
  https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4165831/ (this would require focusing on atmospheric data)

* I'm also really interested in the corresponding shifts in cultural attitudes and changes in pop culture, but I'm
choosing to represent that in the color choices in the test data instead.

DATA TYPE
I'm interested in visualizing divergent data with this set, because I would like to tell a more complete story behind what motivates the acceleration of nuclear arms production.

HOW TO DISPLAY DATA
I'd like the background/canvas to gradually change color to display "hot" and "cool" affect, according to growth and lull periods of global nuclear arms testing. It might be more interesting to also show it as the actual totals of the data in addition to the hot and cool color scheme to express time spatially.

The mushroom clouds would be different sizes to represent the number of tests, and colors to represent the years.

DESIGN IDEAS
Color considerations:
- use gray scale for tests in 40s & 50s
  represent wholesome black and white television, a la Leave It to Beaver, and news reels

- use burnt oranges, yellows, greens, & browns for 60s & 70's
  represent "funky" color schemes, Vietnam War, cynicism, and apathy

- use reds, blues, whites, hot/white, and purples for 80's & 90's
  cold war, Coca-Cola, Olympics, boy bands, pop music

- use "Milennial pink" (aka rose gold), beiges, whites, and charcoal black for 2000 - present
  information & attention economy, first generation completely online, resurgence of activism

Typography considerations:
Unsure, still consulting.
