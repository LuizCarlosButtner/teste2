const tabsBox = document.querySelector(".tabs-box");
arrowIcons = tabsBox.querySelector(".icon i");


let isDragging = false;

arrowIcons.forEach(icon =>) {
    icon.addEventListener("click", () => {
        console.log(icon)
    })
}

const dragging = (e) => {
    if (!isDragging) return;
    tabsBox.scrollLeft = e.movementX;
}

const dragStop = () => {
    isDragging = false;
}

tabsBox.addEventListener("mousemove", () => isDragging = true)
tabsBox.addEventListener("mousemove", dragging);
tabsBox.addEventListener("mousemove", dragStop)