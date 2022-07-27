function GreetingsToUser(date = new Date(), userName = "SR Joy") {
  const hour = date.getHours();
  if (hour >= 5 && hour < 12) {
    return `Good morning ${userName}`;
  } else if (hour >= 12 && hour < 17) {
    return `Good afternoon ${userName}`;
  } else if ((hour >= 17 && hour <= 23) || hour < 5) {
    return `Good evening ${userName}`;
  }
}

module.exports.GreetingsToUser = GreetingsToUser;
