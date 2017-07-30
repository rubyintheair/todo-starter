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
  $("input:text").focus();
  $(".add-list").addClass("hidden");
});

$(".add-list-form").focusout(function(){
  $(".add-list-form").addClass("hidden");
   $(".add-list").removeClass("hidden");
});


$(".list-header-container").click(function(){
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

$("#edit-item-button").click(function(){
  $(this).siblings("#edit-item").toggleClass("hidden");
  $(this).siblings("#cancel-edit-item").toggleClass("hidden");
  $(this).siblings("#save-edit-item").toggleClass("hidden");
});



// $(".item-name").click(function() {
//   $(".edit-item").removeClass("hidden");
//   $(".edit-item-index").removeClass("hidden");
//   $(".cancel-edit-item").removeClass("hidden");
// });

// $("#delete-item").click(function(event){
//   $(this).parents("li").remove();
// });

// $( ".item-name" ).click(function(event) {
//   $currentForm = $(event.target);
//   var newName = $currentForm.children("input #edit-item").val();
//   var newNameDiv = `<li class=" item-name <%= item.status %>">${newName}</li>`
//   replaceItem = $( $currentForm ).replaceWith(newNameDiv);
//   manualSubmit(replaceItem);
// });

// $(".list-header-container").focusout(function(){
//   $(".new-list-name").addClass("hidden");
// });


// // class="old-list-name" type="hidden" name="name" value="<%= list.name %>">
// //         <input class="new-list-name"

// $(".old-list-name").click(function(){
//   $(".old-list-name").addClass("hidden");
//   $(".new-list-name").removeClass("hidden");
// });

// $(".old-list-name").click(function(){
//   // $(".new-list-name").removeClass("hidden");
//   $(".new-list-name:text").focus();
//   // $(".old-list-name").addClass("hidden");
// });


// var addItemFn = function(event) {
//   console.log("submitting the form", event.target);
//   event.preventDefault();
//   $currentForm = $(event.target);
//   var newItem = $currentForm.children("form.add-item").val()
//   var newItemDiv = `<li class="<%= item.status %>">${newItem}</li>`
//   $currentForm.siblings(".items").append(newItemDiv)


// data = $currentForm.serializeArray(); // convert values from <input> to an array of hash
// console.log("ajax with data", data);
// $.ajax({
//     url: $currentForm.attr("action"), // get "action" attribute from the form element
//     method: $currentForm.attr("method"), // get "method" attribute from the form element
//     data: data 
//   });
// };

// $("form.new-item").on("submit", addItemFn)


// $(".update-list").caijdo(function) {
//   $currentForm = $(e.target);
  
//   data = $currentForm.serializeArray();
//   $.ajax({
//     url: $currentForm.attr("action"),
//     method: $currentForm.attr("method"),
//     data: data
//   });
// };


  
// $("form.update-all").on("submit", function(event) {
//   event.preventDefault();
//   console.log("Quy print prevented", event.target, "from the submitting form.");


//   var $currentForm = $(event.target);
//   var data = $currentForm.serializeArray(); // convert values from <input> to an array of hash
//   console.log("Quy ajaxing with data", data);

//   $.ajax({
//     url: $currentForm.attr("action"),
//     method: $currentForm.attr("method"),
//     data: data
//   });
// });

// $("form.update-all").on("submit", function(event) ;
// $("div.list-header-container").on("click", function(event){
//   event.preventDefault();
//   $currentForm = $(event.target);
  // var newListName = $currentForm.siblings("input.new-list-name").val();
  // var newListNameDiv = `<div class="list-header">${newListName}</div>`;
//   $currentForm.children("div.list-header").html(newListNameDiv);
  
//   data = $currentForm.serializeArray(); 
//   $.ajax({
//       url: $currentForm.attr("action"), // get "action" attribute from the form element
//       method: $currentForm.attr("method"), // get "method" attribute from the form element
//       data: data 
//     });

// // $("form.new-item").on("submit", addItemFn)
// });





