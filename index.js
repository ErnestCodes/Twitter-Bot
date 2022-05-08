const Twit = require("twit");

console.log("Bot starting");

const T = new Twit({
  consumer_key: "",
  consumer_secret: "",
  access_token: "",
  access_token_secret: "",
});

const stream = T.stream("user");

const GenerateMessage = (name) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  const dayName = days[d.getDay()];

  const msg = `
        Appreciate the follow  ${name}
        Hope all is going well there for you!
        Love meeting new people here on Twitter
        If your interested in talking drop me a line!
        BTW, it's codegenius here from Codegenes.
        \n Happy ${dayName} 😊😊 
        >> Ernest
    `;
  return msg; // your message
};

const SendMessage = (user) => {
  const { screen_name, name } = user.source;

  const obj = {
    screen_name,
    text: GenerateMessage(name),
  };
  // the follow stream track if I follow author person too.
  if (screen_name != my_user_name) {
    console.log(" 🎉🎉🎉🎉 New Follower  🎉🎉🎉🎉🎉 ");
    setTimeout(() => {
      T.post("direct_messages/new", obj)
        .catch((err) => {
          console.error("error", err.stack);
        })
        .then((result) => {
          console.log(`Message sent successfully To  ${screen_name}  💪💪`);
        });
    }, timeout);
  }
};
