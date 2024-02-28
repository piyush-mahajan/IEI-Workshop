const greeting = (name) => {
  console.log("Hello" + name);
};

const processUserName = (callback) => {
  name = "MGM";
  callback(name);
};
processUserName(greeting);
