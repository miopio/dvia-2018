## Process

Key design objectives

When we think about representations of time, for most of us the concept is rooted in:
- A day:...or where we are within that day
- Circles: time is generally visually presented as a circle, representing that at the end of the cycle it will begin again

I wanted to stick within the common unit of a day, but question the circle...additionally, I wanted it to provide the user with some sense of elapsed time that gives visual feedback

Dimensions

There are two common ways of presenting HH, either military (24hr) or civilian (12hr), this resulted in two alternative ways of specifying at the square/grid

- Military:  HH=24 + MM=60 + SS=60 = 144 units
- Civilian:  HH=12 + MM=60 + SS=60 = 132 units

With 144 units, an idea came to mind
- 12x12: The square root of 144 is 12, which results in 12 rows by 12 columns
- 12 is the magic number for time: HH, MM, and SS are all divisible by 12
- Rows: Rows 1-2 = HH, Rows 3-8 = MM, and Rows 9=12 = SS
