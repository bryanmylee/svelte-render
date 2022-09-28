import {act, render, screen} from '@testing-library/svelte';
import {writable} from 'svelte/store';
import Template from './template.svelte';

it('renders a static string', () => {
	render(Template, {props: {config: 'Ada Lovelace'}});
	expect(screen.getByTestId('template')).toHaveTextContent('Ada Lovelace');
});

it('renders a static number', () => {
	render(Template, {props: {config: 1337}});
	expect(screen.getByTestId('template')).toHaveTextContent('1337');
});

it('renders a reactive string', async () => {
	const config = writable('Ada Lovelace');
	render(Template, {props: {config}});
	expect(screen.getByTestId('template')).toHaveTextContent('Ada Lovelace');
	config.set('Alan Turing');
	await act();
	expect(screen.getByTestId('template')).toHaveTextContent('Alan Turing');
});

it('renders a reactive number', async () => {
	const config = writable(1337);
	render(Template, {props: {config}});
	expect(screen.getByTestId('template')).toHaveTextContent('1337');
	config.set(42);
	await act();
	expect(screen.getByTestId('template')).toHaveTextContent('42');
});
