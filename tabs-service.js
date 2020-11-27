import Storage from "./storage.js";
import TabsList from "./tabs-list.js";

export default function TabsService() {
  let tabs = [];
  const storage = new Storage();
  const tabsList = new TabsList();

  storage.load().then((loadedTabs) => {
    if (!loadedTabs) {
      return;
    }

    tabs = loadedTabs;
    refreshTabsList();
  });

  this.add = function (tab) {
    tabs.push({
      url: tab.url,
      pinned: tab.pinned,
    });
    storage.store(tabs);
    refreshTabsList();
  };

  this.clear = function () {
    storage.clearAll();
    tabs = [];
    refreshTabsList();
  };

  this.getAll = function () {
    return tabs;
  };

  function refreshTabsList() {
    tabsList.clearTabsList();
    tabs.forEach((tab) => tabsList.addTabToList(tab));
  }
}
