export default function TabsList() {
  const initTable = () => {
    const table = document.getElementById("tabsTable");
    const headerRow = generateHeaderRow();
    table.appendChild(headerRow);
  };

  const generateHeaderRow = () => {
    const tr = document.createElement("tr");
    const thUrl = document.createElement("th");
    const thPinned = document.createElement("th");
    thUrl.innerText = "URL";
    thPinned.innerText = "Pinned?";
    tr.appendChild(thUrl);
    tr.appendChild(thPinned);
    return tr;
  };

  initTable();

  this.clearTabsList = () => {
    const table = document.getElementById("tabsTable");
    table.textContent = "";

    const headerRow = generateHeaderRow();
    table.appendChild(headerRow);
  };

  this.addTabToList = (tab) => {
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
}
