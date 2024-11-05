const url = "https://api.github.com/users/Narendrasingh2005";
const res = fetch(url);

res.then((res) => {
    return res.json();
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log("Error: " + err);
}).finally(() => {
    console.log("finally executed");
});
