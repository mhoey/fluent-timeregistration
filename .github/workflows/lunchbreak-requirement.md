# Refactor registrationmodel.js

Consider activityHours and calculateDayHours they do alway the same refactor the code to one method if the method is called without a day parameter it should default to today (referencing to the call .today in calculateDayTotal)

# New requirement for handling lunch break

Consider the value of the checkbox element 'exlt' in index.html

In main.js add an event handler in the init method, that the calls registrationmode.setReduceLunch with a true or false value based in the value of 'exlt'

When calculating the total of the day consider if any activity intersects with the time '11.30' and if the value of reduceLunch is true.

If an activity intersects and reduceLunch is true, reduced the total of the day with the amount defined by reduceTime.