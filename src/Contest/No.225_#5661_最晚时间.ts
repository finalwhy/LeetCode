function maximumTime(time: string): string {
	let hh = time.substr(0, 2),
		mm = time.substr(3, 2);
	if (hh.includes('?')) {
		if (hh[0] == '?' && hh[1] == '?') hh = '23';
		else if (hh[1] == '?') hh = `${hh[0]}${parseInt(hh[0]) > 1 ? '3' : '9'}`;
		else hh = `${parseInt(hh[1]) <= 3 ? '2' : '1'}${hh[1]}`;
	}

	if (mm.includes('?')) {
		if (mm[0] == '?') mm = `5${mm[1]}`;
		if (mm[1] == '?') mm = `${mm[0]}9`;
	}

	return `${hh}:${mm}`;
}
