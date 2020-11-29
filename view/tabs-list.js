import TabsService from "../service/tabs-service.js";

export default {
  generateHeaderRow: () => {
    const tr = document.createElement("tr");
    const thUrl = document.createElement("th");
    const thPinned = document.createElement("th");
    thUrl.innerText = "URL";
    thPinned.innerText = "Pinned?";
    tr.appendChild(thUrl);
    tr.appendChild(thPinned);
    return tr;
  },

  refresh: function (tabs) {
    this.clearTabsList();
    tabs.forEach((tab) => this.addTabToList(tab));
  },

  initTable: function () {
    const table = document.getElementById("tabsTable");
    const headerRow = this.generateHeaderRow();
    table.appendChild(headerRow);
  },

  clearTabsList: function () {
    const table = document.getElementById("tabsTable");
    table.textContent = "";

    const headerRow = this.generateHeaderRow();
    table.appendChild(headerRow);
  },

  addTabToList: function (tab) {
    const newTr = document.createElement("tr");
    const urlTd = document.createElement("td");
    const pinnedTd = document.createElement("td");
    const pinnedCheckbox = document.createElement("input");
    const removeButton = document.createElement("button");

    pinnedCheckbox.setAttribute("id", "pinned" + tab.id);
    pinnedCheckbox.setAttribute("type", "checkbox");
    if (tab.pinned) {
      pinnedCheckbox.setAttribute("checked", "true");
    }
    pinnedCheckbox.onclick = function () {
      TabsService.pin(tab.id, pinnedCheckbox.checked);
    };

    removeButton.setAttribute("id", "remove" + tab.id);
    removeButton.textContent = "x";
    removeButton.onclick = function () {
      TabsService.remove(tab.id);
    };

    urlTd.appendChild(document.createTextNode(tab.url));
    pinnedTd.appendChild(pinnedCheckbox);

    newTr.appendChild(urlTd);
    newTr.appendChild(pinnedTd);
    newTr.appendChild(removeButton);
    document.getElementById("tabsTable").appendChild(newTr);
  },
};
