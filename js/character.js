document.getElementById("dwarf").addEventListener("click", dwarf);
document.getElementById("tank").addEventListener("click", tank);
document.getElementById("mage").addEventListener("click", mage);
document.getElementById("ranger").addEventListener("click", ranger);
document.getElementById("dwarf").style.backgroundColor = "#212529";
document.getElementById("tank").style.backgroundColor = "#212529";
document.getElementById("mage").style.backgroundColor = "#0d0e0f";
document.getElementById("ranger").style.backgroundColor = "#212529";


function dwarf() {
    document.getElementById("dwarf").style.backgroundColor = "#0d0e0f";
    document.getElementById("tank").style.backgroundColor = "#212529";
    document.getElementById("mage").style.backgroundColor = "#212529";
    document.getElementById("ranger").style.backgroundColor = "#212529";
}

function tank() {
    document.getElementById("dwarf").style.backgroundColor = "#212529";
    document.getElementById("tank").style.backgroundColor = "#0d0e0f";
    document.getElementById("mage").style.backgroundColor = "#212529";
    document.getElementById("ranger").style.backgroundColor = "#212529";
}

function mage() {
    document.getElementById("dwarf").style.backgroundColor = "#212529";
    document.getElementById("tank").style.backgroundColor = "#212529";
    document.getElementById("mage").style.backgroundColor = "#0d0e0f";
    document.getElementById("ranger").style.backgroundColor = "#212529";
}

function ranger() {
    document.getElementById("dwarf").style.backgroundColor = "#212529";
    document.getElementById("tank").style.backgroundColor = "#212529";
    document.getElementById("mage").style.backgroundColor = "#212529";
    document.getElementById("ranger").style.backgroundColor = "#0d0e0f";
}
