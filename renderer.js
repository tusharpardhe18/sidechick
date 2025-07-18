const overlay = document.getElementById("overlay");

overlay.style.position = "absolute";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.display = "flex";
overlay.style.alignItems = "center";
overlay.style.justifyContent = "center";
overlay.style.borderRadius = "9999px";
overlay.style.background = "rgba(0, 0, 0, 0.6)";
overlay.style.color = "#fff";
overlay.style.fontSize = "14px";
overlay.style.fontFamily = "sans-serif";
overlay.style.userSelect = "none";
overlay.style.cursor = "grab";
overlay.style.webkitAppRegion = "drag"; // make draggable

overlay.innerText = "Listen";
