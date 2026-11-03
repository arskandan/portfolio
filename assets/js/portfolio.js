// Turns each "Label: a | b | c" line in the Skills section into a label plus chips.
// The text stays in index.html exactly as written; this only changes how it is shown.
(function () {
	var section = document.getElementById('skills');
	if (!section) return;
	section.querySelectorAll('p').forEach(function (p) {
		var label = p.querySelector('strong');
		if (!label) return;
		var rest = p.textContent.slice(label.textContent.length).trim();
		var items = rest.split('|').map(function (s) { return s.trim(); }).filter(Boolean);
		if (items.length < 2) return;
		var labelEl = document.createElement('span');
		labelEl.className = 'skill-label';
		labelEl.textContent = label.textContent.replace(/:\s*$/, '');
		var chips = document.createElement('span');
		chips.className = 'chips';
		items.forEach(function (item) {
			var chip = document.createElement('span');
			chip.className = 'chip';
			chip.textContent = item;
			chips.appendChild(chip);
		});
		p.textContent = '';
		p.appendChild(labelEl);
		p.appendChild(chips);
	});
})();
