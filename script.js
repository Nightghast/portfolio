let cursor = document.querySelector('.cursor');

document.addEventListener("mousemove", (e) => {
    let x = e.clientX; //replace pageX for clientX
    let y = e.clientY; // replace  pageY for clientY

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    function mouseStopped(){
        cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000);
})
document.addEventListener("mouseout", () => { 
    cursor.style.display = "none";
})
