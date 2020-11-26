import { openTabs } from "./tabs-openner.js";
import { add, clear, getAll } from "./tabs-service.js";

document.getElementById("openTabs").onclick = function () {
  openTabs(getAll());
};

document.getElementById("clearStorage").onclick = function () {
  clear();
};

document.getElementById("addTabForm").onsubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(document.getElementById("addTabForm"));

  add({
    url: formData.get("url"),
    pinned: formData.get("pinned") === "on",
  });

  document.getElementById("url").value = "";
};
