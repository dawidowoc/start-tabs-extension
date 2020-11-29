import TabsOpenner from "./tabs-openner.js";
import TabsService from "./tabs-service.js";
import TabsList from "./tabs-list.js";

function Extension() {
  TabsList.initTable();
  TabsService.init();

  document.getElementById("openTabs").onclick = async function () {
    TabsOpenner.openTabs(await TabsService.findAll());
  };

  document.getElementById("addTabForm").onsubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(document.getElementById("addTabForm"));

    TabsService.add({
      url: formData.get("url"),
      pinned: formData.get("pinned") === "on",
    });

    document.getElementById("url").value = "";
  };
}

Extension();
