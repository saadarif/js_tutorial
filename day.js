// Returns the day of the week for a given date
function greetings(date) {
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                           "Thursday", "Friday", "Saturday"];
    return `Hello, world! Happy ${daysOfTheWeek[date.getDay()]}.`;
  }