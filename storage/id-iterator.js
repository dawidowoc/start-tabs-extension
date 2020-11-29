export default {
  getNext: async function () {
    const currentId = await this.getFromStorage();
    const nextId = currentId + 1;
    this.store(nextId);
    return nextId;
  },

  store: function (id) {
    chrome.storage.local.set(
      {
        id: id,
      },
      () => {}
    );
  },

  getFromStorage: function () {
    return new Promise((resolve) =>
      chrome.storage.local.get(["id"], (result) => {
        if (!result.id) {
          resolve(0);
        } else {
          resolve(result.id);
        }
      })
    );
  },
};
