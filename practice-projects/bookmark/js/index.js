(function toggleMobileMenu() {
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");
  const logo = document.getElementById("logo");

  const navToggle = () => {
    btn.classList.toggle("open");
    menu.classList.toggle("flex");
    menu.classList.toggle("hidden");

    const logoSource = menu.classList.contains("flex")
      ? "./images/logo-bookmark-footer.svg"
      : "./images/logo-bookmark.svg";
    logo.setAttribute("src", logoSource);
  };

  btn.addEventListener("click", navToggle);
})();

(function switchPanel() {
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".panel");
  const activeClassList = ["border-softRed", "border-b-4"];

  const deactivateAllPanel = () => {
    tabs.forEach((tab) => {
      tab.classList.remove(...activeClassList);
    });
    panels.forEach((panel) => panel.classList.add("hidden"));
  };

  const onTabClick = (evt) => {
    deactivateAllPanel();

    evt.target.classList.add(...activeClassList);
    const targetClass = evt.target.getAttribute("data-target");
    document
      .getElementById("panels")
      .getElementsByClassName(targetClass)[0]
      .classList.remove("hidden");
  };

  tabs.forEach((tab) => tab.addEventListener("click", onTabClick));
})();
