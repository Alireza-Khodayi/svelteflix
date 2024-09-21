import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async function ({ event, resolve }) {
	event.locals.API_KEY =
		'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmI1MGMwMDg2N2UzOTg2MzAxNDk3YzJmNDBlMDU0ZCIsIm5iZiI6MTcyNjkxOTQ2Ny44NDA2ODcsInN1YiI6IjY2ZWVhOTYxMGVhODBkMWZlMzhkMWNhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yaTTQsXUfkS6uGTjiY1yGXv6CL0_b_oWH6F-xFR2CyA';

	return resolve(event);
};
