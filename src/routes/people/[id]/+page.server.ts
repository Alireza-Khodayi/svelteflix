import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, locals, params }) => {
	const person = await getPeopleById(fetch, locals, params);
	const credits = await getCreditByPeopleId(fetch, locals, params);

	return { person, credits };
};

const getPeopleById = async (fetch, locals, params) => {
	try {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${locals.API_KEY}`
			}
		};
		const response = await fetch(`https://api.themoviedb.org/3/person/${params.id}`, options);
		const data = await response.json();
		return data;
	} catch (err) {
		console.log(err);
		return [];
	}
};
const getCreditByPeopleId = async (fetch, locals, params) => {
	try {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${locals.API_KEY}`
			}
		};
		const response = await fetch(
			`https://api.themoviedb.org/3/person/${params.id}/movie_credits`,
			options
		);
		const data = await response.json();
		return data;
	} catch (err) {
		console.log(err);
		return [];
	}
};
