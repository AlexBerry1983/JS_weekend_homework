
var mountains;
var app = function(){
  var url = "https://munroapi.herokuapp.com/api/munros";
  var request = new XMLHttpRequest();
  var div = document.querySelector("#mountain-list");

  request.open("GET", url);
  request.addEventListener("load", function(){
    var jsonString = request.responseText;
    mountains = JSON.parse(jsonString);
    createSelect(mountains, div);
    var select = document.getElementById("select");
    select.addEventListener("change", handleSelectChanged);
  })
  request.send();
}

var createSelect = function(mountains, div){
  var select = document.createElement("select");
  select.id = "select";
    mountains.forEach(function(mountain, index){
      var option = document.createElement("option");
      option.value = index;
      option.text = mountain.name;
      select.appendChild(option);
    });
  div.appendChild(select);
}

var handleSelectChanged = function(){
  var index = this.value
  var mountain = mountains[index];
    console.log(mountain);
    var li = document.getElementById("mountain-name");
    li.innerText = "Name: " + mountain.name;
    var li = document.getElementById("mountain-name-meaning");
    li.innerText = "Meaning of the Name: " + mountain.meaning;
}




window.addEventListener("load", app);
