export const getCountryName = (item) => {
	if (item.production_countries && item.production_countries[0]?.name.includes('America')) {
		return 'USA';
	} else if (item.production_countries && item.production_countries[0]) {
		return item.production_countries[0].name;
	} else {
		return '-';
	}
};
