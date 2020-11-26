import { clearAll, load, store } from "./storage.js";
import { openTabs } from "./tabs.js";

let tabs = [];

load().then((loadedTabs) => {
  if (!loadedTabs) {
    return;
  }

  tabs = loadedTabs;
  refreshTabsList();
});

function clearTabsList() {
  document.getElementById("urlList").textContent = "";
}

const refreshTabsList = () => {
  clearTabsList();
  tabs.forEach((tab) => addTabToList(tab));
};

const addTabToList = (tab) => {
  const newLi = document.createElement("li");
  newLi.appendChild(document.createTextNode(tab));
  document.getElementById("urlList").appendChild(newLi);
};

document.getElementById("openTabs").onclick = function () {
  openTabs(tabs);
};

document.getElementById("clearStorage").onclick = function () {
  clearAll();
  tabs = [];
  refreshTabsList();
};

document.getElementById("addTabForm").onsubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(document.getElementById("addTabForm"));
  tabs.push(formData.get("url"));
  store(tabs);
  refreshTabsList();
  document.getElementById("url").value = "";
};
