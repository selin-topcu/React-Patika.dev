import fetch from "node-fetch";
import axios from "axios";

// (async () => {
//   const { data: users } = await axios(
//     "https://jsonplaceholder.typicode.com/users"
//   );

//   const { data: post1 } = await axios(
//     "https://jsonplaceholder.typicode.com/posts/1"
//   );

//   console.log("Users ", users);
//   console.log("Post 1 ", post1);
// })();

const getUsers = () => {
  //resolve işlem başarıyla gerçekleştirirse thenden sonra ki kısma düşer. Reject ise hata oluştu reddetti anlamına geliyor. catchten sonraki kısma düşer.
  return new Promise(async (resolve, reject) => {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    resolve(data);
  });
};
const getPost = (post_id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + post_id
    );
    resolve(data);
  });
};

// (async () => {
//   try {
//     const users = await getUsers();
//     const post = await getPost(1);
//     console.log(users);
//     console.log(post);
//   } catch (e) {
//     console.log(e);
//   }
// })();

Promise.all([getUsers(), getPost(1)])
  .then(console.log)
  .catch(console.log);
