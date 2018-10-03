## Process

Japan Clock
Intended to create a grid-based clock, but concerned about readability, opted to sketch a simple analog clock. I called it Japan Clock, as it was based on the color scheme and circular forms of Japan's flag. This design employed the Bertin-ian variables of shape, size and color hue to define the background and hour and minute hands. 

Wave Clock 1.0
Determined an analog clock would be more difficult to code, and returned to the idea of a grid-based clock. I took inspiration for the design from a recently renovated garage (See: LES Garage jpg) with a shimmering, wave-like facade. I felt the motion of shaded lines on a grid could create a wave-like sensation that would effectively communicate the passage of time as lines representing seconds, minutes and hours dropped downwards in succession. My first iteration of the Wave Clock preserves the color scheme of the Japan Clock. with Bertin-ian variables including differing colors and line sizes to represent hours, minutues and seconds. 

Wave Clock 1.1
Seeking to more closely approach a wave effect, revised color scheme to grayscale, with smaller time units represented by the Bertin-ian variable of color value. Shifted the drop-down movements from right to left to left to right, in keeping with the trained motion of the western eye to look from left to right. Attempted to roughly normalize the number of lines so there would be 24 lines for hours, and 60 lines each for minutes and seconds. This resulted in a vertical screen and made clear that further experimenation with line size is required to optimize the lines for a horizontal canvas. 

Wave Clock 1.2
First iteration of design using javascript. 

Wave Clock Small
Sample code is altered to make rectangular time units 'move' by using if/else functions to draw each  unit according to now.progress values. 

Wave Clock Medium 
Returned to the original code to make time units appear to shift vertical position using a combination of if/else and conditional operator statements. Employed an if/else statement to fill the background with white for a.m. and black for p.m.

Wave Clock Large
Utilized days and weeks progress values in tandem with background RGB color values. Red progresses from 0-100 hourly and blue from 0-255 daily. Green is set to 0. Changed milliseconds to moon value with fill grayscale set to change at midway point in lunar cycle and rectangle width expanding according to lunar cycle.  
