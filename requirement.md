# Instructions

This code is written in plain javascript. 

# Frameworks

The code must use web components from @fluentui/web-components, but **NOT** use any web framework as REACT or VUE.

# Stucture
- The view part of the program is stored in inde.html
- All HTML layout and css must placed in this file
- main.js must add event listeners to the controls in the HTML layout and delegate events to and request date from registationmodel.js
- only main.js must manipulate the DOM elements. 
- For repeated patterns
- All caculations and processing of time entries and data structure must be defined in registrationmode.js, so no date time logic

# HTML Layout 
- In addition to existing time entry section
- A section using the "weekday-template" must be layedout foreach weekday "Mon,Tue,Wed,Thu,Fri" must be added as the data can be retrieved from the registrationmode.js method activies for day
- A final section must be added using the "weektotal-template" to show the total of the hours registred for each day
- The css must define a border on each weekday entry
- The css must display the weekday with a bigger font
- The css must emphasize the total
