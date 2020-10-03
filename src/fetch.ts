const json = fetch("https://api.github.com/users/denoland");
json.then((res) => res.json()).then((data) => {
  console.log("jsonData", data);
}).catch((err) => {
  console.log("err", err);
});
