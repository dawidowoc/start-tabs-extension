import Storage from "../storage/storage.js";
import TabsList from "../view/tabs-list.js";

export default {
  add: async function (tab) {
    let tabs = await Storage.findAll();

    if (!tabs) {
      tabs = [];
    }

    tabs.push({
      url: tab.url,
      pinned: tab.pinned,
    });

    const tabsWithId = await Storage.store(tabs);
    this.refreshTabsList(tabsWithId);
  },

  findAll: function () {
    return Storage.findAll();
  },

  init: function () {
    Storage.findAll().then((loadedTabs) => {
      if (!loadedTabs) {
        return;
      }

      this.refreshTabsList(loadedTabs);
    });
  },

  refreshTabsList: function (tabs) {
    TabsList.clearTabsList();
    tabs.forEach((tab) => TabsList.addTabToList(tab));
  },

  /**
   * Remove a tab which has the specified id.
   * @param id
   */
  remove: async function (id) {
    let tabs = await Storage.findAll();

    const indexOfElement = tabs.indexOf(
      tabs.find((element) => element.id === id)
    );

    tabs.splice(indexOfElement, 1);

    await Storage.store(tabs);

    const tabsWithId = await Storage.store(tabs);
    this.refreshTabsList(tabsWithId);
  },
};
