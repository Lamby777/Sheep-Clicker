const cont = document.getElementById("ctContainer");
const csound = document.getElementById("cs");
csound.volume = 0.4;

document.getElementById("clickspace").addEventListener("click", () => {
	cont.style.width = "49%";
	csound.play();
	setTimeout(() => {
		cont.style.width = "50%";
	}, 50);
});
