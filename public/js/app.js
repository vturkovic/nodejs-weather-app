const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const message1 = document.querySelector("#message-1");
const message2 = document.querySelector("#message-2");

document.addEventListener("submit", (e) => {
  e.preventDefault();
  const address = search.value;
  message1.textContent = "Loading...";
  message1.textContent = "";

  fetch("http://localhost:3000/weather?address=" + address).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        message1.textContent = data.error;
        message2.textContent = "";
      } else {
        message1.textContent = data.location;
        message2.textContent = data.forecast;
      }
    });
  });
});
