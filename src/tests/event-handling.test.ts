import {createRender} from '$lib/index.js';
import {render, screen} from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import InteractiveRocket from './interactive-rocket.svelte';
import Template from './template.svelte';

it('receives forwarded events', async () => {
	const click = vi.fn();
	const launch = vi.fn();
	const config = createRender(InteractiveRocket).on('click', click).on('launch', launch);
	render(Template, {props: {config}});

	const nativeButton = screen.getByText('👽');
	const customButton = screen.getByText('🚀');

	const user = userEvent.setup();
	await user.click(nativeButton);
	expect(click).toHaveBeenCalled();
	await user.click(customButton);
	expect(click).toHaveBeenCalled();
});
