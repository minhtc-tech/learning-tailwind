(function toggleMobileMenu() {
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");

  const navToggle = () => {
    btn.classList.toggle("open");
    menu.classList.toggle("flex");
    menu.classList.toggle("hidden");
  };

  btn.addEventListener("click", navToggle);
})();

(function validateForm() {
  const input = document.getElementById("link-input");
  const linkForm = document.getElementById("link-form");
  const errMsg = document.getElementById("err-msg");

  const validURL = (str) => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return !!pattern.test(str);
  };

  const formSubmit = (evt) => {
    evt.preventDefault();

    if (input.value === "") {
      errMsg.innerHTML = "Please enter something";
      input.classList.add("border-red");
      return;
    }

    if (!validURL(input.value)) {
      errMsg.innerHTML = "Please enter a valid URL";
      input.classList.add("border-red");
      return;
    }

    errMsg.innerHTML = "";
    input.classList.remove("border-red");
    alert("Success");
  };

  linkForm.addEventListener("submit", formSubmit);
})();
