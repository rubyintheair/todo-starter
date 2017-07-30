<button class="new-list-name" type="submit" name="1">Save</button> 
<input class="new-list-name hidden" type="text" name="new-list-name" value="<%= list.name%>">
<div class="list-header"><%= list.name %></div>

<input type="hidden" value="<%= list.id %>" name="lists[][id]">
<input type="hidden" value="<%= list.save! %>" name="lists[][lines]"> 

<form class="update-all-lists" action="update-lists" method="post">
  <button type="submit" name="save_all_lists" value="<%= files.count%>">Save all lists</button>
</form>

<%=list.save!%>

$(".item-name").on("click", function() {
    $currentForm = $(event.target);
    $currentInput = $currentForm.children("form #edit-item");
    $currentSave = $currentForm.children("form #save-edit-item");
    $currentCancel = $currentForm.children("form #cancel-edit-item");
    $currentInput.addClass("hidden");
    $currentCancel.addClass("hidden");
    $currentSave.addClass("hidden");
    // $(this).removeClass("hidden");
});



<button id= "delete-item" type="submit" name="delete-item" value="<%= index%>"></button>

<a class="edit-item-a" href="default.asp">
    <img src="/public/images/edit-icon.jpg" style="width:42px;height:42px;border:0">
</a>


$("li").click(function(){
  $(this).children("#edit-item").removeClass("hidden");
  
  function myFunction() {
    var x = document.getElementById("edit-item").value;
    document.getElementById("item-name").innerHTML = x;
  }
});