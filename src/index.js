import { createLegendContainer, createDiscreteColorLegend, createContinuousColorLegend, createContinuousSizeLegend } from "@flourish/legend";

import createColors from "@flourish/colors";

export var state = {
  legend_container: {},
  legend_categorical: {},
  legend_continuous: {},
  legend_size: {},
  color:{}
  // The current state of template. You can make some or all of the properties
  // of the state object available to the user as settings in settings.js.
};

const legend_container = createLegendContainer(state.legend_container);
const legend_categorical = createDiscreteColorLegend(state.legend_categorical);
const legend_continuous = createContinuousColorLegend(state.legend_continuous);
const legend_size = createContinuousSizeLegend(state.legend_size);
const colors = createColors(state.color);

function init() {

  legend_container
  	.appendTo(document.getElementById("legend"))
  	.add([
  		legend_categorical,
  		legend_continuous,
  		legend_size
  	]);
  
}

export var data = {};
// If your template includes data tables, use this variable to access the data.
// Each of the 'datasets' in data.json file will be available as properties of the data.


export function update() {
  //Test whether the function is being called
  console.log("Hi! I'm being called (also, long live the Queen)")
  
  // var legend_items = [
  //   {
  //     label: "Brazil",
  //     color: "#ff0000"
  //   },
  //   {
  //     label: "Argentina",
  //     color: "#000000"
  //   }
  // ]
  // legend_categorical.data(legend_items);

  // var legend_continuous_items = [
  //   {
  //     label: 10,
  //     color: "#ff0000"
  //   },
  //   {
  //     label: 0,
  //     color: "#000000"
  //   }
  // ]

  // legend_continuous.data(legend_continuous_items);

  // legend_container.update()

  const domain = [1, 2, 3]

  colors.updateColorScale(domain)

  const color1 = colors.getColor(1)

  console.log(color1)
  // The update function is called whenever the user changes a data table or settings
  // in the visualisation editor, or when changing slides in the story editor.

  // Tip: to make your template work nicely in the story editor, ensure that all user
  // interface controls such as buttons and sliders update the state and then call update.
}

export function draw() {
  // The draw function is called when the template first loads
  init();

  update();
}
