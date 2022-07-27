function GreetingsToUser(
  date = new Date(),
  userName = "SR Joy",
  options = {
    showName: true,
  }
) {
  const hour = date.getHours();
  if (hour >= 5 && hour < 12) {
    return options.showName === true
      ? `Good morning ${userName}`
      : `Good morning`;
  } else if (hour >= 12 && hour < 17) {
    return options.showName === true
      ? `Good afternoon ${userName}`
      : `Good afternoon`;
  } else if ((hour >= 17 && hour <= 23) || hour < 5) {
    return options.showName === true
      ? `Good evening ${userName}`
      : `Good evening`;
  }
}

module.exports.GreetingsToUser = GreetingsToUser;
