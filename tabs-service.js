import Storage from "./storage.js";
import TabsList from "./tabs-list.js";

export default function TabsService() {
  this.storage = new Storage();
  this.tabsList = new TabsList();

  this.add = async function (tab) {
    let tabs = await this.storage.findAll();

    if (!tabs) {
      tabs = [];
    }

    tabs.push({
      url: tab.url,
      pinned: tab.pinned,
    });
    this.storage.store(tabs);
    this.refreshTabsList(tabs);
  };

  this.clear = function () {
    this.storage.clearAll();
    this.refreshTabsList([]);
  };

  this.findAll = function () {
    return this.storage.findAll();
  };

  this.init = function (storage, refreshTabsList) {
    this.storage.findAll().then((loadedTabs) => {
      if (!loadedTabs) {
        return;
      }

      this.refreshTabsList(loadedTabs);
    });
  };

  this.refreshTabsList = function (tabs) {
    this.tabsList.clearTabsList();
    tabs.forEach((tab) => this.tabsList.addTabToList(tab));
  };

  this.init();
}
