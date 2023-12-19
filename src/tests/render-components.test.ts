import {createRender} from '$lib/index.js';
import {act, render, screen} from '@testing-library/svelte';
import {writable} from 'svelte/store';
import Rocket from './rocket.svelte';
import MultipleRockets from './multiple-rockets.svelte';
import Template from './template.svelte';

it('renders a component with no props', () => {
	const config = createRender(Rocket);
	render(Template, {props: {config}});
	expect(screen.getByTestId('template')).toHaveTextContent('🚀');
});

it('renders a component with static props', () => {
	const config = createRender(MultipleRockets, {times: 3});
	render(Template, {props: {config}});
	expect(screen.getByTestId('template')).toHaveTextContent('🚀🚀🚀');
});

it('renders a component with reactive props', async () => {
	const props = writable({times: 3});
	const config = createRender(MultipleRockets, props);
	render(Template, {props: {config}});
	expect(screen.getByTestId('template')).toHaveTextContent('🚀🚀🚀');
	props.set({times: 4});
	await act();
	expect(screen.getByTestId('template')).toHaveTextContent('🚀🚀🚀🚀');
});
