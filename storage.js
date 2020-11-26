export const store = (tabs) => {
  chrome.storage.local.set(
    {
      tabs: tabs,
    },
    () => {}
  );
};

export const load = () => {
  return new Promise((resolve) => {
    chrome.storage.local.get(["tabs"], (result) => resolve(result.tabs));
  });
};

export const clearAll = () => {
  chrome.storage.local.clear(() => {});
};
