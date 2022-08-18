# Scheduler

https://dimitra-anasta.github.io/scheduler/

![img](./assets/Screen%20Shot%202022-08-17%20at%208.38.57%20PM.png)

## 

For this week's Challenge, I had to modify starter code to create a weekly scheduler that allows the user to enter events in each timeblock, that is  color coded to indicate whether it is in the past, present, or future. My motivation was to create clean, concise code that lets the user create a schedule and saves his information.

## Installation

My first step was to create a table in the HTML that would act as the schedule skeleton, which I found from Bootstrap. I edited the table by adding id's to each row and buttons to save the events for each timeblock. I used data-id to assign the button to each timeblock's row. 

In my Javascript, I created variables and used moment() to display the day and date. I used a for loop to activate the color coding function, so that if the current hour is less than i, it will be considered a future event. If the current hour is greater than i, it will be a past event. And if i = current time, it is a present event. To save the notes/event when the user refreshes the schedule, I I used a jQuery function and local storage.

## Credits

https://getbootstrap.com/docs/4.5/components/buttons/

https://getbootstrap.com/docs/4.5/content/tables/

