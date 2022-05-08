const Twit = require("twit");
const config = require("./config/config");

console.log("bot starting");

const t = new Twit(config);

const stream = t.stream("user");

const generatemessage = (name) => {
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const d = new date();
  const dayname = days[d.getday()];

  const msg = `
        appreciate the follow  ${name}
        hope all is going well there for you!
        love meeting new people here on twitter
        if your interested in talking drop me a line!
        btw, it's codegenius here from codegenes.
        \n happy ${dayname} 😊😊 
        >> ernest
    `;
  return msg; // your message
};

const sendmessage = (user) => {
  const { screen_name, name } = user.source;

  const obj = {
    screen_name,
    text: generatemessage(name),
  };
  // the follow stream track if i follow author person too.
  if (screen_name != my_user_name) {
    console.log(" 🎉🎉🎉🎉 new follower  🎉🎉🎉🎉🎉 ");
    settimeout(() => {
      t.post("direct_messages/new", obj)
        .catch((err) => {
          console.error("error", err.stack);
        })
        .then((result) => {
          console.log(`message sent successfully to  ${screen_name}  💪💪`);
        });
    }, timeout);
  }
};
