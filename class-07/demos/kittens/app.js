'use strict';

var tofu = {
  name: 'tofu',
  color: 'brown',
  pretty: true,
  age: 10,
  thingsSheLikes :['eating food', 'sniffing fresh air', 'loafing', 'be the alpha'],
  wakeUp: function () {
    var parent = document.getElementById('alarms');
    var child = document.createElement('li');
    child.textContent = this.name + ' the ' + this.color + ' is ' + this.age + ' cat years old, wake up and give her food';
    parent.appendChild(child);
  },
  renderLikes: function(){
    for(var i = 0; i < this.thingsSheLikes.length; i++){
      var tofuLikesList = document.getElementById('tofu-likes');
      var tofuLikesItem = document.createElement('li');
      tofuLikesItem.textContent = this.thingsSheLikes[i];
      tofuLikesList.appendChild(tofuLikesItem);
    }
  },
  renderAsTable : function(){
    // 1. find the target
    var table = document.getElementById('cats');
    // 2. create new element
    var row = document.createElement('tr');
    // 2.5 give it content
    // content for a row is a cell
    // do the full 3 step process for a cell
    // cell 1. find parent DONE because `var row` is the parent
    // cell 2. make element
    var tableHeadCell = document.createElement('th');
    // cell 2.5 - give content (name of cat)
    tableHeadCell.textContent = this.name;
    // cell 3- append cell to parent (row)
    row.appendChild(tableHeadCell);


    for(var i = 0; i < 4; i++){
      var tableDataCell = document.createElement('td');
      tableDataCell.textContent = this.thingsSheLikes[i];
      row.appendChild(tableDataCell);
    }





    // 3. append it
    table.appendChild(row);
  }
};

tofu.renderLikes();
tofu.renderAsTable();
