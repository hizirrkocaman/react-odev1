import axios from "axios";

const getData = (number) => {
  return new Promise(async (resolve, reject) => {
    const { data: user } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + number
    );
    const { data: post } = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + number
    );
    //Birden fazla değeri(user, post) resolve edebilmek için array içerisine aldım.
    resolve([user, post]);
  });
};

getData(1)
  .then((data) => console.log(data))
  .catch((e) => console.log(e));

export default getData;
