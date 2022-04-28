const message = "Some message from myModule.js";
const defaultMessage = "this is default!!";
const getGreeting = (name) => {
  return `Hello ${name}!!`;
};

export { message, defaultMessage as default, getGreeting };
