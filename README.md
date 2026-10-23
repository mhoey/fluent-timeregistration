# flute-timeregistration
Simple javascript time registration program using Fluent UI

When **Add activity** detects an overlapping registration on the selected weekday,
the entry is not added and a 48px light-yellow warning banner appears between the
registration panels and weekday cards. The warning clears after a successful
addition or when switching weekdays.

Each weekday entry has a 16x16 remove button on its right. Removing an entry
immediately updates the day and weekly totals.
