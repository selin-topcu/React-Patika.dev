// setTimeout(() => {
//   console.log("2 Saniye sonra yazıcak");
// }, 2000);

// setInterval(() => {
//   console.log("Her saniyede çalışacak");
// }, 1000);

// const helloSay = (cb) => {
//   cb();
// };
// helloSay(() => {
//   console.log("Hello");
// });

import fetch from "node-fetch";

// fetch("https://jsonplaceholder.typicode.com/users").then((data) =>
//   data.json().then((users) => console.log(users))
// );

// async function getData() {
//   const users = await (
//     await await fetch("https://jsonplaceholder.typicode.com/users")
//   ).json();

//   const post1 = await (
//     await await fetch("https://jsonplaceholder.typicode.com/posts/1")
//   ).json();

//   console.log("Users ", users);
//   console.log("Post 1 ", post1);
// }
// getData();

(async () => {
  console.log(
    "Fonksiyon çalıştırmadan async yazarak anonim fonksiyon oluşturma"
  );
})();
