import TabsOpenner from "./tabs-openner.js";
import TabsService from "./tabs-service.js";

function Extension() {
  const tabsService = new TabsService();
  const tabsOpenner = new TabsOpenner();

  document.getElementById("openTabs").onclick = function () {
    tabsOpenner.openTabs(tabsService.getAll());
  };

  document.getElementById("clearStorage").onclick = function () {
    tabsService.clear();
  };

  document.getElementById("addTabForm").onsubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(document.getElementById("addTabForm"));

    new tabsService.add({
      url: formData.get("url"),
      pinned: formData.get("pinned") === "on",
    });

    document.getElementById("url").value = "";
  };
}

Extension();
