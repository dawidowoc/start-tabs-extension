import Storage from "../storage/storage.js";
import TabsList from "../view/tabs-list.js";

export default {
  /**
   * Add tab.
   */
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
    TabsList.refresh(tabsWithId);
  },

  /**
   * @returns All tabs.
   */
  findAll: function () {
    return Storage.findAll();
  },

  init: function () {
    Storage.findAll().then((loadedTabs) => {
      if (!loadedTabs) {
        return;
      }

      TabsList.refresh(loadedTabs);
    });
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
    TabsList.refresh(tabsWithId);
  },

  /**
   * Set pinned attribute (true or false) of a tab which has the specified id.
   */
  pin: async function (id, pinned) {
    let tabs = await Storage.findAll();

    const indexOfElement = tabs.indexOf(
      tabs.find((element) => element.id === id)
    );

    tabs[indexOfElement].pinned = pinned;

    const updatedTabs = await Storage.store(tabs);
    TabsList.refresh(updatedTabs);
  },
};
