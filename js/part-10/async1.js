function fetchdata() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let successs = true;
      if (successs) {
        resolve("data fetched");
      } else {
        reject("data not fetched");
      }
    }, 1000);
  });
}

let response = fetchdata();
console.log(response);
