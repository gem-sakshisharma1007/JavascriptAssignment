(function () {
    var Details=new Array();
    Details.push(["Name","Age","DOB","Email","Company"])
    Details.push(["Sakshi","21","10-07-2001","abc@gmail.com","Gemini Solutions"])
    Details.push(["Pooja","20","21-10-2002","xyz@gmail.com","Croxaint"])
    Details.push(["Riya","21","02-09-2001","def@gmail.com","Cognizant"])
    Details.push(["Shalini","22","13-03-2001","huj@gmail.com","Intellipaat"])

  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  // creating all cells
  for (let i = 0; i < 5; i++) {
    // creates a table row
    const row = document.createElement("tr");

    for (let j = 0; j < 5; j++) {
      if(i==0){
        const cell = document.createElement("th");
        const Text= document.createTextNode(Details[i][j]);
        cell.appendChild(Text);
        row.appendChild(cell);
       }
      else{
        const cell = document.createElement("td");
        const Text= document.createTextNode(Details[i][j]);
        cell.appendChild(Text);
        row.appendChild(cell);
      }     
      

      
      
    }
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
  
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
  // sets the border attribute of tbl to '2'
  tbl.setAttribute("border", "2");
  tbl.style.textalign='center';
  tbl.style.margin='auto';
 
})();