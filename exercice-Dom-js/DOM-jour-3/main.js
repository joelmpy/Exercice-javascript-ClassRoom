function askHello() {
  fetch("https://mockbin.com/request?greetings=salut")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (value) {
      let result = document.getElementById("hello-result");
      result.innerText = value.queryString.greetings;
    })
    .catch(function (err) {
      console.log(err);
    });
}

let btn = document.getElementById("ask-hello");
btn.addEventListener("click", askHello);

