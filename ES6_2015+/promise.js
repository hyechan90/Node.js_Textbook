const condition = true;
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("성공");
  } else {
    reject("실패");
  }
});

promise
  .then(message => {
    return new Promise((resolve, reject) => {
      resolve(message);
    });
  })
  .then(message2 => {
    console.log(message2);
    return new Promise((resolve, reject) => {
      resolve(message2);
    });
  })
  .then(message3 => {
    console.log(message3);
  })
  .catch(error => {
    console.error(error);
  });

console.log("========");

//나쁜 예시
// function findAndSaveUser(Users) {
//   Users.findone({}, (err, user) => {
//     if (err) {
//       return console.error(err);
//     }
//     user.name = "zero";
//     user.save(err => {
//       if (err) {
//         return console.error(err);
//       }

//       Users.findone({ gender: "m" }, (err, user) => {});
//     });
//   });
// }

//Promise
function findAndSaveUser(Users) {
  Users.find({})
    .then(user => {
      user.name = "zero";
      return user.save();
    })
    .then(user => {
      return Users.findone({ gender: "m" });
    })
    .then(user => {})
    .catch(err => {
      console.log(err);
    });
}

//Promise.all
const promise1 = Promise.resolve("성공");
const promise2 = Promise.resolve("성공");
Promise.all([promise1, promise2])
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.error(err);
  });