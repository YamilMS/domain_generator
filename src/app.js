/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let start = ["The", "Your", "Our"];
  let mid = ["Cat", "Mom", "Car"];
  let end = ["Blue", "Satanic", "Cute"];
  let TLD = [".com", ".org", ".edu"];

  // SOLUTION USING NESTED LOOPS
  for (let i in start) {
    for (let x in mid) {
      for (let j in end) {
        for (let y in TLD) {
          console.log(`${start[i]}${mid[x]}${end[j]}${TLD[y]}`);
        }
      }
    }
  }
  // ---------------------------------------------------

  //  SOLUTION USING MAP INSPIRED BY @zjovic
  const domainName = start.flatMap(a => {
    return mid.flatMap(b => end.flatMap(c => TLD.map(d => `${a}${b}${c}${d}`)));
  });
  console.log(domainName.join(" "));
  //----------------------------------------------------
};
