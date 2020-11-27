export default function Storage() {
  this.store = (tabs) => {
    chrome.storage.local.set(
      {
        tabs: tabs,
      },
      () => {}
    );
  };

  this.findAll = () => {
    return new Promise((resolve) => {
      chrome.storage.local.get(["tabs"], (result) => resolve(result.tabs));
    });
  };

  this.clearAll = () => {
    chrome.storage.local.clear(() => {});
  };
}
