$(document).ready(function() {
  // Initialize tooltips on hover
  $('[data-bs-toggl="tooltip"]').tooltip({
    trigger: 'hover'
  });

  // Remove tooltips on click
  $('[data-bs-toggl="tooltip"]').on('click', function() {
    $(this).tooltip('hide');
  });

  $(".addEntity").on("click", function() {
    // Clone the first row
    var newRow = $("tbody tr:first").clone();

    // Make the new row editable
    newRow.find("[contenteditable]").attr("contenteditable", "true");

    // Append the new row to the table
    $("tbody").append(newRow);
  });

  // Save Entity Button Click Event
  $(".saveEntity").on("click", function() {
    // Make all contenteditable elements non-editable
    $("[contenteditable]").attr("contenteditable", "false");
  });
});

 $('input[type="radio"]').on("click", function () {
  console.log($(this).attr("id"))
  var hideRow = $(this).attr("id");
  $("."+hideRow).hide();
 })


function selectCategory(category) {
  document.querySelector('.btn-secondary').textContent = category;
}