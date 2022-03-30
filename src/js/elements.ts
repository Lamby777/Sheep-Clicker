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
		hrDepartment
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
	];
}

export default elements;