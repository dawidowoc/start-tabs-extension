export const clearTabsList = () =>
  (document.getElementById("tabsTable").textContent = "");

export const addTabToList = (tab) => {
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
