import { writable } from 'svelte/store';

function createTitle() {
	const { subscribe, set } = writable('');

	return {
		subscribe,
		set: (value) => {
			set(`${value} • Pechtold Architekten`);
		},
		clear: () => {
			set('Pechtold Architekten');
		},
	};
}

export const title = createTitle();

export const sluggify = (string) => string.replaceAll(' ', '_');
export const desluggify = (string) => string.replaceAll('_', ' ');
