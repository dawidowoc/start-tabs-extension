import TabsOpenner from "./service/tabs-openner.js";
import TabsService from "./service/tabs-service.js";
import TabsList from "./view/tabs-list.js";

/**
 * This is an entry point of the extension.
 */
(function Extension() {
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
})();
