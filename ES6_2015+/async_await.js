// function findAndSaveUser(Users) {
//     Users.find({})
//       .then(user => {
//         user.name = "zero";
//         return user.save();
//       })
//       .then(user => {
//         return Users.findone({ gender: "m" });
//       })
//       .then(user => {})
//       .catch(err => {
//         console.log(err);
//       });
//   }

//function
async function findAndSaveUser(Users) {
  try {
    let user = await Users.findOne({});
    user.name = "zero";
    user = await user.save();
    user = await Users.findOne({ gender: "m" });
  } catch (error) {
    console.error(error);
  }
}

//Arrow Function
const findAndSaveUser = async Users => {
  try {
    let user = await Users.findOne({});
    user.name = "zero";
    user = await user.save();
    user = await Users.findOne({ gender: "m" });
  } catch (error) {
    console.error(error);
  }
};

//for문과 async/await을 같이 써서 Promise.all을 대체
const promise1 = Promise.resolve("성공1");
const promise2 = Promise.resolve("성공2");
(async () => {
  for await (promise of [promise1, promise2]) {
    console.log(promise);
  }
})();
