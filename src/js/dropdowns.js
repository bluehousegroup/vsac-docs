// JSON object for states and their respective schools
// Each state has a `name`, a `value` and then an array of schools
// Each school has a `name` and a `value`
var states_schools_json = {
  "states": [
    {
      "name": "Vermont",
      "value": "VT",
      "schools": [
        {
          "name": "Bennington College",
          "value": "Bennington College"
        },
        {
          "name": "Castleton University",
          "value": "Castleton University"
        },
        {
          "name": "Champlain College",
          "value": "Champlain College"
        }
      ]
    },
    {
      "name": "New Hampshire",
      "value": "NH",
      "schools": [
        {
          "name": "Dartmouth College",
          "value": "Dartmouth College"
        },
        {
          "name": "Plymouth State University",
          "value": "Plymouth State University"
        },
        {
          "name": "University of New Hampshire",
          "value": "University of New Hampshire"
        }
      ]
    }
  ]
};

// Populate options for state selects on page load and set placeholder values
// This step would be optional if the states are already being set in the HTML for the form field along with any intial placeholder values
var dropdown_sets = $('.state-school-dropdowns');
$.each(dropdown_sets, function() {
  var state_dropdown = $('.state-dropdown');
  var school_dropdown = $('.school-dropdown');

  // Empty out the options for state and append placeholder option
  state_dropdown.empty();
  state_dropdown.append('<option value="" selected disabled>- Select a state -</option>');

  // Empty out the options for school and append placeholder option
  school_dropdown.empty();
  school_dropdown.append('<option value="" selected disabled>- Select a school -</option>');

  // Populate state dropdown with states
  $.each(states_schools_json.states, function (index, state) {
    // Set the value and name for each option as well as storing index from our JSON array as a data attribute
    state_dropdown.append('<option data-index="' + index + '" value="'+state.value+'">'+state.name+'</option>');
  });
});

// "On change" event for state dropdown
$('.state-dropdown').on('change', function () {
  // Get the school dropdown related to this state dropdown (defined by the data-target attribute on the state select)
  var school_dropdown = $($(this).data('target'));

  // Get index of the state in the JSON array from the data attribute
  var state_id = $(this).find('option:selected').data('index');

  // Remove all options in the school dropdown besides the first placeholder one
  school_dropdown.find("option:gt(0)").remove(); // gt(0): greater than 0
  school_dropdown.find("option:first").text("Loading..."); // Let the user know we're in a loading state in case there's a delay

  // Populate the school dropdown with the list of schools for the selected state
  $.each(states_schools_json.states[state_id].schools, function (index, school) {
    school_dropdown.append('<option data-index="' + index + '" value="'+school.value+'">'+school.name+'</option>');
  });

  // Reset the text of the placeholder option so the user knows we're not loading anymore
  school_dropdown.find("option:first").text("- Select a school -");
});
