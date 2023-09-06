allSideDivider.forEach(item=> {
	item.textContent = '-'
})
allDropdown.forEach(item=> {
	const a = item.parentElement.querySelector('a:first-child');
	a.classList.remove('active');
	item.classList.remove('show');
})
sidebar.classList.toggle('hide');
