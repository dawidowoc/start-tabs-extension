import TabsService from "./tabs-service.js";

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

    pinnedCheckbox.setAttribute("type", "checkbox");
    pinnedCheckbox.setAttribute("disabled", "true");

    if (tab.pinned) {
      pinnedCheckbox.setAttribute("checked", "true");
    }

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
