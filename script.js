import { getFamilyData } from "./database.js";
// COSTUM templates
// female
OrgChart.templates.female = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.female.node =
  '<rect x="0" y="0" height="{h}" width="{w}" fill="#EE7674" stroke-width="1" stroke="#aeaeae" rx="7" ry="7" color="#000000"></rect>';
// wife
OrgChart.templates.wife = Object.assign({}, OrgChart.templates.ula);
OrgChart.templates.wife.node =
  '<rect x="0" y="0" height="{h}" width="{w}" fill="#ffffff" stroke-width="1" stroke="#aeaeae"></rect><line x1="0" y1="0" x2="250" y2="0" stroke-width="2" stroke="#EE7674"></line>';

getFamilyData().then((familyNodes) => {
  console.log(familyNodes.find((x) => x.id === "G2-01")); // should exist
  console.log(familyNodes.find((x) => x.pid === "G2-01")); // should exist

  new OrgChart(document.getElementById("tree"), {
    template: "ana",
    enableDragDrop: true,
    enableSearch: true,
    enableTouch: true,
    mouseScrool: OrgChart.action.scroll,

    tags: {
      assistant: {
        template: "ula",
      },
      female: {
        template: "female",
      },
      wife: {
        template: "wife",
      },
    },

    nodeBinding: {
      field_0: "name",
      field_1: "lifeStatus",
      img_0: "img",
    },

    nodes: familyNodes,
  });
});
