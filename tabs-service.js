import { clearAll, load, store } from "./storage.js";
import { addTabToList, clearTabsList } from "./tabs-list.js";

let tabs = [];

export const add = (tab) => {
  tabs.push({
    url: tab.url,
    pinned: tab.pinned,
  });
  store(tabs);
  refreshTabsList();
};

export const clear = () => {
  clearAll();
  tabs = [];
  refreshTabsList();
};

export const getAll = () => {
  return tabs;
};

const refreshTabsList = () => {
  clearTabsList();
  tabs.forEach((tab) => addTabToList(tab));
};

load().then((loadedTabs) => {
  if (!loadedTabs) {
    return;
  }

  tabs = loadedTabs;
  refreshTabsList();
});
