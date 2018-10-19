import { types } from "mobx-state-tree";

export const store = types
  .model({
    lang: "en"
  })
  .actions(self => ({
    setLang(lang) {
      self.lang = lang;
    }
  }));
