namespace elements {
	export const [
		woolBags,
		maxBags,
		wbps,
		wbpc,
		clickSound,
		music,
		blessing,
		clickspace,
		clickarea,
		hrDepartment,
		sheep,
		sheepShakeContainer,
	] = [
		document.getElementById("pts"),
		document.getElementById("max"),
		document.getElementById("wbps"),
		document.getElementById("wbpc"),
		(document.getElementById("cs") as HTMLAudioElement),
		(document.getElementById("mus") as HTMLAudioElement),
		document.getElementById("dxb"),
		document.getElementById("clickspace"),
		(document.getElementById("clickarea") as HTMLDivElement),
		document.getElementById("hr-department"),
		document.getElementById("sheep"),
		document.getElementById("sheep-shake-container"),
	];
}

export default elements;