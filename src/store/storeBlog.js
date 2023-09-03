import { defineStore } from "pinia";
import { dataBlog } from "./dataBlog";

export const useStoreBlogStore = defineStore("storeBlogStore", {
  state: () => ({
    maagGerdBlog: dataBlog.maagGerd,
    obesityBlog: dataBlog.obesity,
    menstruationBlog: dataBlog.menstruation,
    autoimmuneBlog: dataBlog.autoimmune,
    pregnancyProgramBlog: dataBlog.pregnancyProgram,
    cholesterolBlog: dataBlog.cholesterol,
  }),
});
