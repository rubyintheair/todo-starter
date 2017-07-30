const sortedContainers = sortable(".js-sortable-items", {
  forcePlaceholderSize: true,
  connectWith: "connected-items"
});

manualSubmit = function(form) {
  var $currentForm = $(form);
  var data = $currentForm.serializeArray(); // convert values from <input> to an array of hash
  console.log("Quy ajaxing with data", data);

  $.ajax({
    url: $currentForm.attr("action"),
    method: $currentForm.attr("method"),
    data: data
  });
};

sortedContainers[0].addEventListener("sortupdate", function(e) { //sortupdate xl
  console.log("Quy typing sortedContainers[0] now");
  console.log("Quy want to print e.detail.startparent", e.detail.startparent);
  formStart = $(e.detail.startparent).parents("form");
  manualSubmit(formStart);

  console.log("Quy want to print e.detail.endparent", e.detail.endparent);
  formEnd = $(e.detail.endparent).parents("form");
  manualSubmit(formEnd);
});

const sortedContainersLists = sortable(".js-sortable-lists", {
  forcePlaceholderSize: true,
  connectWith: "connected-lists"
});

// manualSubmitList = function(div) {
//   var $currentDiv = $(div);
//   var data = $currentDiv.serializeArray(); // convert values from <input> to an array of hash
//   console.log("Quy ajaxing with currentDiv", data);

//   $.ajax({
//     url: $currentDiv.attr("action"),
//     method: $currentDiv.attr("method"),
//     data: data
//   });
// };

// sortedContainersLists[0].addEventListener("sortupdate", function(e) { //sortupdate xl
//   console.log("Quy typing sortedContainersLists[0] now");
//   console.log("Quy want to print e.detail.startparent", e.detail.startparent);
//   divStart = $(e.detail.startparent).parents("div");
//   manualSubmitList(divStart);

//   console.log("Quy want to print e.detail.endparent", e.detail.endparent);
//   formEnd = $(e.detail.endparent).parents("div");
//   manualSubmitList(divEnd);
// });



$(".add-list").click(function(){
  $(".add-list-form").removeClass("hidden");
  $(".cancel-add-list").removeClass("hidden");
  $("input:text").focus();
  $(".add-list").addClass("hidden");
});

$(".add-list-form").focusout(function(){
  $(".add-list-form").addClass("hidden");
  $(".add-list").removeClass("hidden");
  $(".cancel-add-list").addClass("hidden");
});


$("div.list-header-container").click(function(){
  $(this).siblings(".new-list-name").removeClass("hidden");
  $(this).siblings(".cancel-list-name").removeClass("hidden");
});

$(".add-item").mouseover(function (){
  $(this).children(".new-item").css("text-decoration", "underline");
});

$(".add-item").click(function(){
  $(this).children("#save-add-item").toggleClass("hidden");
  $(this).children("#cancel-add-item").toggleClass("hidden");
});

$("#cancel-add-item").focusout(function(){
  $("#cancel-add-item").toggleClass("hidden");
  $("#save-add-item").toggleClass("hidden");
});


$("li").mouseover(function(){
  $(this).css("background-color", "#eff5f5");
  $(this).children("#edit-item-button").toggleClass("hidden");
  $(this).children("#delete-item").toggleClass("hidden");
});

$("li").mouseout(function(){
  $(this).css("background-color", "white");
  $(this).children("#delete-item").toggleClass("hidden");
  $(this).children("#edit-item-button").toggleClass("hidden");
});

$("li #edit-item-button").click(function(){
  $(this).siblings("#edit-item").toggleClass("hidden");
  $(this).siblings("#cancel-edit-item").toggleClass("hidden");
  $(this).siblings("#save-edit-item").toggleClass("hidden");
});







