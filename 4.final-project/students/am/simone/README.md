<strong>Process</strong>

This visualization explores the MoMa's collection through acquisition. I wanted to analyze how the museum's permanent collection is influenced by the bequeathing of artworks from estates, and from there, the gender breakdown by the represented artists. The data is represented by a D3 streamgraph. I chose this representation because it not only worked well with how my data was set up but it was abstract enough to mirror paint on a canvas.


<strong>Data Collection and Analysis Process</strong>

I found two interesting csv files on Kaggle that I then combined using a join on the Artist ID. I did some exploratory data analysis on Tableau Public. I could see an interesting pattern at play. I specifically wanted the amount of works acquired by year, so I reformatted the new combined csv file using a pivot table to give me the information I sought. I then found a D3 example of a streamgraph I could build  upon and also included some bootstrap for layout purposes


Sketches/Prototype Process

Code inspired by: https://bl.ocks.org/HarryStevens/c893c7b441298b36f4568bc09df71a1e
