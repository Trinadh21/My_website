var storinda = [];
if (localStorage.getItem("storinda")) {
    storinda = JSON.parse(localStorage.getItem("storinda"));
    for (i in storinda) {
        var current = document.getElementById("currentid");
        var currentrow = current.insertRow(1);
        var cellcurrent = currentrow.insertCell(0);
        cellcurrent.innerHTML = storinda[i]["name"];
        cellcurrent = currentrow.insertCell(1);
        cellcurrent.innerHTML = storinda[i]["skill"];
        cellcurrent = currentrow.insertCell(2);
        cellcurrent.innerHTML = storinda[i]["level"];
        cellcurrent = currentrow.insertCell(3);
        cellcurrent.innerHTML = storinda[i]["comment"];
    }
}

function addingdata() {
    var name = document.getElementById("name").value;
    var skill = document.getElementById("skill").value;
    var level = document.getElementById("level").value;
    var comment = document.getElementById("comment").value;
    var current = document.getElementById("currentid");
    var currentrow = current.insertRow(1);
    var cellcurrent = currentrow.insertCell(0);
    cellcurrent.innerHTML = name;
    cellcurrent = currentrow.insertCell(1);
    cellcurrent.innerHTML = skill;
    cellcurrent = currentrow.insertCell(2);
    cellcurrent.innerHTML = level;
    cellcurrent = currentrow.insertCell(3);
    cellcurrent.innerHTML = comment;
    storinda.push({
        name: name,
        skill: skill,
        level: level,
        comment: comment,
    });
    localStorage.setItem("storinda", JSON.stringify(storinda));
};