//for menu function

const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
    overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
    overlay.classList.remove("overlay--active");
});



//for dropdown menu display set to block
function myFunctionn() {
    document.getElementById("listitem22").classList.toggle("show");
}


//for dropdown menu display set to block
function myFunction() {
    document.getElementById("listitem33").classList.toggle("showw");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.listitem2')) {
        var dropdowns = document.getElementsByClassName("yearwisenotes");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    if (!event.target.matches('.listitem3')) {
        var dropdowns = document.getElementsByClassName("semwisenotes");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('showw')) {
                openDropdown.classList.remove('showw');
            }
        }

    }
    if (!event.target.matches(".dropbtn2")) {
        var dd = document.getElementsByClassName("dropdown-content2")
        for (var i = 0; i < dd.length; i++) {
            var x = dd[i];
            if (x.classList.contains("show22")) { x.classList.remove("show22") }
        }
    }
}



// for color change on click

//for search branch

function myFunctionnn() {
    document.getElementById("myDropdown22").classList.toggle("show22");
}


function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput22");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown22");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}