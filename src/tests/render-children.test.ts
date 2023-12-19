import {createRender} from '$lib/index.js';
import {render, screen} from '@testing-library/svelte';
import Button from './button.svelte';
import Rocket from './rocket.svelte';
import Template from './template.svelte';

it('renders a component with children', () => {
	const config = createRender(Button).slot(createRender(Rocket), 'Fire!');
	render(Template, {props: {config}});
	expect(screen.getByTestId('button')).toHaveTextContent('🚀Fire!');
});
