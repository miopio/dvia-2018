## Process

Description of the contents of this folder, a prose description of your ideas for how to represent
the nuclear testing time series, and links to external data sources you'll be incorporating into
the project.

### Concept 1

Besides visualizing the total number of tests that were conducted every year by each country, I wanted to visualize the yield of the biggest test each country conducted every year (max yield). For example, in 1961, Russia tested the Tsar Bomba, a 58 megaton hydrogen bomb that to this day is still the most powerful explosive ever detonated. To visualize this, I need to map several variables: the x axis will map the year, the y axis will map the total number of nuclear tests conducted by each country, and the size of each point representing this number will correpsond to the yield of the biggest test each country conducted per year. The countries will be distinguished by different colors (categorical color types). I have extracted the data for maximum yield per country per year from the Johnston's Archive, and referenced Wikipedia for numbers that were not provided there (mostly all of North Korea's numbers). It should look something like this:

![Nuclear test count and maximum yield of each country per year](https://github.com/samizdatco/dvia-2018/blob/master/2.mapping-quantities/students/pm/mio/process/DVIA_project2_concept1.png)


### Concept 2

For the second concept, I wanted to combine the total number of tests that were conducted every year by each country with a timeline of the different treaties that were formed between different countries as an effort to de-escalate nuclear weapons production, to see if these treaties had significant effect. To visualize total test count by country, I will use a line graph (maybe with the area under the curve colored), with each country represented by a different color. Using the same scale, I want to have a timeline of treaties signed above it, pointing to major treaties if they correspond to dips in nuclear testing. The data for the treaties signed have been taken from the Nuclear Treaty Initiative site: https://www.nti.org/learn/treaties-and-regimes/treaties/. The line graph portion will look something like this:

![The effect of treaties in de-escalating nuclear weapons production](https://github.com/samizdatco/dvia-2018/blob/master/2.mapping-quantities/students/pm/mio/process/DVIA_project2_concept2.png) 

### Concept 3

I thought it would be interesting to explore the effects of nuclear fallout on health of populations near sites of testing. However, this would necessitate more of a "case study" type visualization rather than looking into health effects resulting from all tests ever conducted. For example, there is plenty of information about residual health effects from the Hiroshima and Nagaski bombings, and also those from prominent nuclear bomb tests. The Castle Bravo testing near the Marshall Islands has very good health records by the NIH and other researchers. The visualization will show the number of total atmospheric and underground tests per year of all countries (kind of like a timeline), and in select years, will have a "case study" of the health effects of a specific test in another mini visualization (perhaps upon hovering on the year). The case study could include information such as number of thyroid lesions experienced by people exposed to nuclear fallout as opposed to those who weren't, etc.s

Health Effects references
http://large.stanford.edu/courses/2017/ph241/liang2/docs/robbins.pdf
https://www.ctbto.org/nuclear-testing/the-effects-of-nuclear-testing/the-united-states-nuclear-testing-programme/

### Final concept

The final concept I decided to go with was a combination of concept 1 and concept 2. I decided to incorporate the bubble chart visualizing for each nuclearpower the total number of nuclear tests conducted per year (y axis), the maximum yield of nuclear tests conducted each year (radius of point), over a period of time (x axis). In the background of the chart using different shades of gray, I indicated when wars were fought between/amongst the nuclear powers. In addition to that, I made a timeline of nuclear treaties signed each year that incorporated some or all of the nuclear powers. I categorized the treaties into three categories and assigned a hue of pink to each: treaties that negotiated production limitations, facilitated mutual defense, or put forth a complete ban. Below this treaty timeline, I marked which nuclear power signed and ratified the treaty with rectangles colored with the same categorical colors used in the bubble chart. Gray rectangles indicate countries that did not sign the treaty even if they could have. Half transparent rectangles indicate countries which signed but did not ratify the treaty.

![Final concept](https://github.com/samizdatco/dvia-2018/blob/master/2.mapping-quantities/students/pm/mio/process/final_visual.png)

### Critique

Points from class critique:
- Label country boxes on side along with treaty line
- Treaty categories shouldn't be colors (distinguish from countries)
- Overlap of different wars: consider labeling it bookmark style
- label more than just 1000 kilotons for bubble legend: do a scale
- explain gray rectangles (maybe in the blurb)

![Final visual after critique implementation](https://github.com/samizdatco/dvia-2018/blob/master/2.mapping-quantities/students/pm/mio/process/final_visual_v2.png)



