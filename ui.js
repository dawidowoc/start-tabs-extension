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

const refreshTabsList = () => {
  clearTabsList();
  tabs.forEach((tab) => addTabToList(tab));
};

const clearTabsList = () =>
  (document.getElementById("tabsTable").textContent = "");

const addTabToList = (tab) => {
  const newTr = document.createElement("tr");
  const urlTd = document.createElement("td");
  const pinnedTd = document.createElement("td");
  const pinnedCheckbox = document.createElement("input");
  pinnedCheckbox.setAttribute("type", "checkbox");
  pinnedCheckbox.setAttribute("disabled", "true");

  if (tab.pinned) {
    pinnedCheckbox.setAttribute("checked", "true");
  }

  urlTd.appendChild(document.createTextNode(tab.url));
  pinnedTd.appendChild(pinnedCheckbox);

  newTr.appendChild(urlTd);
  newTr.appendChild(pinnedTd);
  document.getElementById("tabsTable").appendChild(newTr);
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
  tabs.push({
    url: formData.get("url"),
    pinned: formData.get("pinned") === "on",
  });
  store(tabs);
  refreshTabsList();
  document.getElementById("url").value = "";
};
