import { writable } from 'svelte/store';

//Pagination
export const moviesByGenrePage = writable(1);
export const topRatedMoviesPage = writable(1);
export const tvByGenrePage = writable(1);

export const topRatedMoviesLoading = writable(false);
export const nowPlayingMoviesLoading = writable(false);
export const popularMoviesLoading = writable(false);
export const upComingMoviesLoading = writable(false);
export const moviesByGenreLoading = writable(false);
export const tvByGenreLoading = writable(false);
