import { database } from "./database.js";

let options = getOptions();
let chart = new OrgChart(document.getElementById("tree"), {
  enableSearch: true,
  enableAI: false,
  enableDragDrop: true,
  mouseScrool: OrgChart.action.scroll,
  scaleInitial: options.scaleInitial,
  tags: {
    assistant: {
      template: "ula",
    },
  },
  nodeMenu: {
    details: { text: "Details" },
    edit: { text: "Edit" },
    add: { text: "Add" },
    remove: { text: "Remove" },
  },
  nodeBinding: {
    field_0: "name",
    field_1: "gender",
    field_2: "age",
    field_3: "alive",
    img_0: "img",
  },
});

// console.log(database);
chart.load(database);

function getOptions() {
  const searchParams = new URLSearchParams(window.location.search);
  let fit = searchParams.get("fit");
  let scaleInitial = 1;
  if (fit == "yes") {
    scaleInitial = OrgChart.match.boundary;
  }
  return { scaleInitial };
}
