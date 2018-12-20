### Initial Ideas

See /process/ideas.text and /process/datasources.txt

### Three Concepts

See /process/DVIA-2018 Final Project Proposals.pdf

### Final Concept
I chose to pursue Concept 3 further (Human Connection, Empathy, and Intimacy in the Digital Age). I wanted to tackle the ideas of human connection, empathy, intimacy in an increasingly isolating world, and how we remedy that both through digital interface and also by harnessing digital interface to increase meaningful direct human interaction.

My initial datasets included the World Happiness Report, which I wanted to use for a general overview of happiness of countries around the world, and what factors influenced this happiness. I extracted variables that they measured that related to human connection ("social support", "generosity", "freedomto make life choices") to break down the influences of happiness. I then intended on using a machine learning dataset called HappyDB, which included 100,000 responses from people who wrote strings on "what made them happy in the last 24 hours/last week", to see the rate at which words relating to humans and connections appeared in this dataset. Finally, I wanted to implement my own survey through both Amazon Mechanical Turks and in my own network to see if there were differences in perceived happiness and values that contribute to happiness between the general population and those with holistic careers, whose job you could say is to "understand humans" and "guide humans to live a better life".

See /process/wireframes for the general sketch.

### More Realistic Scope of Final Concept
Unfortunately, the above project was impossible to execute under the time constraints, and I had to put aside the bulk of it for this particular project. I was left with only the World Happiness Report, which I had only intended to use as an introduction. Uninspired for a while, I focused mostly on how to visualize the different variables from the report, and how to possibly see interesting trends from this. I started off by making bar graphs of the life ladder variable, which they use as an overall measurement of happiness. In the conducted survey, it is the national average to this question: "Please imagine a ladder, with steps numbered from 0 at the bottom to 10 at the top. The top of the ladder represents the best possible life for you and the bottom of the ladder represents the worst possible life for you. On which step of the ladder would you say you personally feel you stand at this time?” I was curious if there would be any differences amongst regions of the world. Even if slight, there were noticeable changes in the height of the bars between regions. The other variables I did the same things for were these:

- Social Support: a binary 0 or 1 answer to the question, "If you were in trouble, do you have relatives you can count on to help you whenever you need them?"
- Generosity: a binary 0 or 1 answer to the question, "Have you donated money to a charity in the past month?"
- Freedom to Make Life Choices: a binary 0 or 1 answer to the question, "Are you satisfied or dissatisfied with your freedom to choose what you do with your life?
- Pereived Corruption Amongst Businesses or Government: a binary 0 or 1 answer to the quesiton, "Is corruption widespread throughout the government, or in business?"

There were some interesting trends that emerged, such as that Southeast Asian countries had a high score of generosity values.

![Happiness levels of countries]()


### Critique 1
- Each region is a box plot --> each country is visualzied as a line within box plot
- Plot in descending order by region

Unsatisfied with working just with the World Happiness Report, I started collecting data on what countries major travel media and news sources were recommending that travelers visit in 2018 and/or 2019. I made a dataset using around seven resources, and counted the number of times a country was mentioned in these lists. I wanted to use this data as a measurement of "How people perceive the desirability of a country to be". I wanted to juxtapose that with data on the life ladder.

### Critique 2
- look to see if there is tourism data (UN?)
- look to see if there is immigration/emigration data
- focus on the box plot
- interaction: maybe the box plots change with each parameter 
- info aesthetics class: it's ok to focus on just the box plot data
- try to look at recommendations from different regions(countries): are they different from the US?
- simple scatterplot: plot happiness value with number of times it was mentioned
- focus on the box plot--> make it something that can go on a wall (dont rely on hovers to tell you all the information)

Instead of using a biased list of recommendations, I looked into using annual inbound tourism data from the UN in order to explore this same measurement. I plotted the tourism data against countries in descending order of happiness. As expected, there was not a correlating trend, though the rates of tourism were generally higher in countries with higher happiness levels.

![Tourism against countries in descending order of happiness]()

I also tried plotting a scatter plot using life ladder data vs tourism data. My intention was to connect all of the dots in each region, and look at the surface area the dots produced within the scatter plot. If the area was large, it meant that there was a large discrepency between "happiness of citizens within a country" vs "perceived desirability of a country". Though I started looking at thsi manually in Illustrator, I did not have time to implement this in code.

![Life ladder vs tourism]()

### Critique 3
- take a look at suicide rates of countries and/or emigration data and/or net immigation
- order box plots by descending order using one of the variables, then keep order

After the final critique, I went ahead and got a dataset on the suicide rates of each country from WHO and plotted that once again against countries in descending order of happiness. This resulted in an interesting pattern, where suicide rates varied regardless of the happiness of the country, with some high values in some countries.

![Suicide rates]()

Though overall I was disappointed with my inability to execute the project I wanted, and that I couldn't quite figure out a good narrative for the dataset I did work with, it was a good exercise in how to visualize data you don't necessarily know how to parse out. It gave me experience in putting together a visualization using javascript/plotly.js rather than using something static like Illustrator.
