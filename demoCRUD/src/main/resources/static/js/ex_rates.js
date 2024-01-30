// const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function () {
  // Initialize tooltips on hover
  $('[data-bs-toggl="tooltip"]').tooltip({
    trigger: "hover",
  });

  // Remove tooltips on click
  $('[data-bs-toggl="tooltip"]').on("click", function () {
    $(this).tooltip("hide");
  });

  // Handle change event of the dropdown
  var avgRate = document.querySelectorAll("#avgRate");
  var closeRate = document.querySelectorAll("#closeRate");
  var both = document.querySelectorAll("#closeRate, #avgRate");

  // filter for rateSelection
  $(".rateSelection").change(function () {
    var selectedValue = $(this).val();

    if (selectedValue === "1") {
      closeRate.forEach(function (element) {
        element.style.visibility = "hidden";
      });

      avgRate.forEach(function (element) {
        element.style.visibility = "visible";
      });
    } else if (selectedValue === "2") {
      avgRate.forEach(function (element) {
        element.style.visibility = "hidden";
      });

      closeRate.forEach(function (element) {
        element.style.visibility = "visible";
      });
    } else if (selectedValue === "3") {
      both.forEach(function (element) {
        element.style.visibility = "visible";
      });
    }
  });

  // filter for dates
  $('input[type="checkbox"]').on("click", function () {
    // Check if the checkbox is checked
    if ($(this).prop("checked")) {
      // Log the ID to the console
      console.log("Checkbox ID: " + $(this).attr("id"));

      // Get the ID of the clicked checkbox
      var hideDate = $(this).attr("id");

      // Hide the element with the corresponding ID
      $("." + hideDate).hide();
    } else {
      console.log("Checkbox ID: " + $(this).attr("id"));

      // Get the ID of the clicked checkbox
      var hideDate = $(this).attr("id");

      // Hide the element with the corresponding ID
      $("." + hideDate).show();
    }
  });

  // logic for contenteditable

  // this is for setting each td contenteditable
  $(".edit-button").on("click", function () {
    var elementsWithContentEditableFalse = $('td[contenteditable="false"]');

    elementsWithContentEditableFalse.each(function () {
      // Example: Log the text content of each selected option
      console.log($(this));
      $(this).attr("contenteditable", "true");
    });
  });
  //this is for save and check contenteditable = true or false

  $(".save-button").on("click", function () {
    var editableContent = $("td");
    var currentContentEditable = editableContent.attr("contenteditable");

    if (currentContentEditable === "true") {
      editableContent.attr("contenteditable", "false");
      alert("✔ Added Successfully!..");
    } else {
      editableContent.attr("contenteditable", "false");
      alert("❌ Already Saved It..");
    }
  });
});
