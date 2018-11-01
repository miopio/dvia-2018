## Final Project

### Writing a Project Proposal

The goal of the final project is to bring the conceptual dimension of the class together with the visualization techniques we’ve learned. You will develop and implement a final project following a complete, iterative design process. The first step in this is the creation of a set of proposals.

####Process
You should aim to generate about **10 ideas** during the next week that are intellectually distinct, address a diverse range of points of view, and explore different subject domains and levels of complexity. Work rapidly and don't get hung up on polishing anything digitally — limit yourself to handwritten notes and sketches during this phase while you are doing research (recommended: 10 ideas in a 1 hour session).

During the research and sketching process, address the following questions:

  - What are some observations you find noteworthy?
  - What insights could this offer?
  - How is it related to visualization, what can visualization reveal here?
  - What new ideas came out of the process of sketching and research?
  - What are the next steps?

Refine your list daily and let your initial set of ideas sit for at least a day before you take things a step further. Talk about your ideas with a peer outside of class (their level of expertise does not matter here).

####Ideas & Sources (due 7 Nov)

List your **ten** ideas in the `process/ideas.txt` file in your student directory. Each idea can be described in 2 or 3 sentences, but make sure you outline the subject matter being considered, the question being asked, and the format (digital vs print, static vs interactive, diagram vs text vs map, etc.) you intend to use.

For **five** of these, find at least one datasource and record the details in your `process/datasources.txt` file. There is a placeholder entry in the file describing the USGS feeds. Delete that entry, but use it as a model for the five new entries you'll be adding.


####Proposals (due 14 Nov)

Select **3 ideas** to develop further and create a one-page proposal for *each* of them addressing the questions above.

- Make sure your ideas remain diverse, but be sure to pose specific questions (too much breadth will eventually become paralyzing)
- Identify the data sources (plural!) that contribute evidence to your subject (look in particular for CSV, TSV, JSON, XML, or SQL sources)
- Collect public URLs for those sources and list them in your `datasources.txt` file so we can share them as a class
- Summarize each of the 3 final project ideas as a 1-page project proposal. Including a rough visual sketch (photo of a pencil sketch, diagram, index, or score) is recommended but optional.
    - If you don’t include a sketch, then describe your visualization approach thoroughly.
- Create one PDF called `proposals.pdf` that combines each of the three 1-page proposals into one document.
- Put the combined PDF in your `process` folder and push to the github repo

### Concept Design & Development

Based on the feedback you’ve received for your sketches during the ideation phase, choose **one direction** and create **three different series** of wireframe sketches (with at least 2 sketches per series) to illustrate how you plan to convey your subject visually. Your wireframes will be *static* representations of the eventual user interface plus schematic views of your visualization. The individual components of the sketch should be rough, *functional* approximations of the final placement, size, and interaction type (click, drag, hover, etc.) of UI elements but shouldn't yet be concerned with aesthetics.

Develop these sketches quickly enough to explore alternative approaches that present the subject in different ways. Experiment both with the visual representation of the data (in terms of the retinal variable mappings we've examined) and the different affordances your UI provides, allowing the user to pose different questions and filter/sort/focus the information in different ways.

In parallel with your design work, build a **proof-of-concept illustration** that your data-source is sound and will be able to provide the quantitative and qualitative information necessary for your final visualization. To that end, write a simple p5 script in which you read in one of your data files (whether CSV, JSON, or otherwise) and print/draw its values to a canvas. This sketch will be the basis for the visualization portion of your project and should *not* incorporate any of your UI design ideas until we get to the next step of the process.

#### Sketches and Data (due 28 Nov)

- Bring in three conceptually distinct approaches to visualizing your chosen dataset, depicted with at least 2 sketches apiece
  - The sketches should illustrate both the representation of the data and the user interface approach
- Write a p5.js script that reads in your data file and generates *something* visual from it
  - The form of the visual representation is not important, but it **must** include every field from the data source that you'll be using in your final visualization

#### Initial Prototype (due 5 Dec)

Continue developing your wireframes and draw up a set of static representations of your user interface that demonstrate all of the ‘feature complete’ version’s eventual affordances, modes, and states. Devote particular attention to screen (or page) layout, typography, color mappings, contrast (both in terms of lightness and type hierarchy), and overall look and feel. These static mock-ups will serve as the ‘specification’ which the rest of your development work this semester will attempt to implement.

- Collect your mock-ups in a single PDF file and place it in your student directory in github as `process/prototype.pdf`.

- Clean your data and convert it to a more programmatically usable (CSV, JSON, TXT, or XML) form. If you’re working off of a ‘live’ data source, learn the relevant API. In the case of relational databases, ensure you have a full understanding of its schema and prepare the queries you’ll be using. Submit your p5 sketch that successfully parses the data as `data/sketch.js` and place any local data files you’ll be using in `data/assets`.