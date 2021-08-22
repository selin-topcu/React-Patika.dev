export default (name) => {
  console.log(`Merhaba ${name}`);
};

const sum = (a, b) => a + b;

const text = "Lorem Ipsum";
const user = {
  name: "Selin",
  surname: "Dayıoğlu",
};
const users = [
  {
    name: "Hasan",
    surname: "Topcu",
  },
  {
    name: "Selin",
    surname: "Topcu",
  },
];
export { user, users, text, sum };
