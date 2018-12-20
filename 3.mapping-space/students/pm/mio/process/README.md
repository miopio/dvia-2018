## Process

### Concept 1
I wanted to show the map where magnitude would be characterized by a sequential color palette, and depth would be characterized as the radius of the circle marking the earthquake site. For the graphs, I wanted to make a "depth graph" of sorts, that would chart significant earthquakes by depth on the y axis, but negatively, so we could get a better visual idea that "depth" means "underground". The magnitude would be represented by the radius of the circle surrounding the point. I wanted to provide some references by charting significant historical earthquakes in this way as well as given data.

![Depth graph sketch](https://github.com/samizdatco/dvia-2018/blob/master/3.mapping-space/students/pm/mio/process/dvia2018_p3_concept1.png)

### Concept 2
The map concept of characterizing magnitude by color and depth by radius did not change. However, I wanted to add data concerning tectonic plates and fault lines. I wanted to visualize the tectonic plates on my map, and have a capability where a user could click on these tectonic plates and stats on earthquake activity within the plates could pop up. I wanted to be able to count how many earthquakes occured within a particular plate region in a period of time, and visualize them in a bar chart. I also wanted to make an aggregate bar chart comparing gross earthquake activity across each plate region in the world. 

![Tectonic plates sketch](https://github.com/samizdatco/dvia-2018/blob/master/3.mapping-space/students/pm/mio/process/dvia2018_project2_sketch2-01.png)

### Concept 3
I was also interested in focusing on specific regions of the world with above average seismic activity, and taking a closer look at the earthquake data there. I was particularly curious about the bay area in California, which is where I am from. I would make a map focused solely on this region of interest that characterized earthquake magnitude by color, and time past since origin by opacity. I wanted to use historical data to take a look at the frequency of earthquakes over time on any given fault line in hte region, using either bar chart or scatter plot. 

### Final Concept
The final concept I chose ended up being a combination of my ideas:

#### Map
For the map, I decided to use a sequential color palette to characterize magnitude (yellow as lowest magnitude, red as highest magnitude), and the radii of the circles marking the sites of earthquakes to characterize depth (deeper earthquakes would have smaller radii, and shallower earthquakes would have larger radii). I also wanted to visualize the tectonic plates that covered the world. Originally, I wanted to be able to hover over the tectonic plates and visualize stats on the them, but couldn't figure out how to group earthquake sites based on the tectonic plate geoJSON data. Thus, it serves its purpose simply as a reference to where major fault lines are in relation to earthquake activity.

![Map of final concept](https://github.com/samizdatco/dvia-2018/blob/master/3.mapping-space/students/pm/mio/process/map.png)

#### Graph
For the graph, I went ahead and expanded my "depth graph" idea from Concept 1. Instead of creating a linear scale of circle radii to represent magnitudes, I grouped the earthquakes into three categories: 1) above 2.5 2) above 4.5, and 3) significant (I arbitrarily picked a magnitude of 5.1 and above for this--this may be different from the "significant" measurement used in the datasets, because it seems they take into account both magnitude and depth to assign the value of "significant" to an earthquake). Each category had a different radius and color (small and yellow, medium and orange, large and red). I first made this graph for all earthquake activity within the month. Then I wanted to make this graph for every tectonic plate area, but again, could not do this without figuring out how to group earthquake sites based on the geoJSON data. As an alternative, I made small multiples of this graph grouped by selected regions. In order to do this, I searched for keywords in the string provided in the "place" column of the CSV datasets which specify the nearest city and country to the earthquake site. For example, I would search for "Alaska" to get earthquake sites near Alaska. 

![Depth graph of final concept](https://github.com/samizdatco/dvia-2018/blob/master/3.mapping-space/students/pm/mio/process/depthGraph.png)

![Selected regions for small multiple visualization](https://github.com/samizdatco/dvia-2018/blob/master/3.mapping-space/students/pm/mio/process/smallMultiples.png)

### Class Critique
- Don't make everything interactive: if you make tectonic plates interactive, don't make earthquake points interactive
- Think about what to do with "small multiples": Figure out how to display all of them, or do a fade out/in on one graph
- Use same scale for all graphs; maybe no need to label all if axis are completely the same