function GreetingsToUser(
  date = new Date(),
  options = {
    showName: true,
    name: "SR Joy",
  }
) {
  const hour = date.getHours();
  if (hour >= 5 && hour < 12) {
    return options.showName === true
      ? `Good morning ${options.name}`
      : `Good morning`;
  } else if (hour >= 12 && hour < 17) {
    return options.showName === true
      ? `Good afternoon ${options.name}`
      : `Good afternoon`;
  } else if ((hour >= 17 && hour <= 23) || hour < 5) {
    return options.showName === true
      ? `Good evening ${options.name}`
      : `Good evening`;
  }
}

module.exports.GreetingsToUser = GreetingsToUser;
