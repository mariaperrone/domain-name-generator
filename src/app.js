/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var final = [".com", ".es", ".uy", ".co", ".ar", ".net", ".us", ".io"];
var text = "";

for (let i = 0; i < pronoun.length; i++) {
  var newpronoun = pronoun[i];
  for (let j = 0; j < adj.length; j++) {
    var newadj = adj[j];
    for (let k = 0; k < noun.length; k++) {
      var newnoun = noun[k];
      for (let l = 0; l < final.length; l++) {
        console.log(newpronoun + newadj + newnoun + final[l]);
        text += "<h2>" + newpronoun + newadj + newnoun + final[l] + "</h2>";
      }
    }
  }
}
console.log(text);
document.getElementById("domain").innerHTML = text;
