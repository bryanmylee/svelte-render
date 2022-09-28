# svelte-render

[![npm version](http://img.shields.io/npm/v/svelte-render.svg)](https://www.npmjs.com/package/svelte-render)
[![npm downloads](https://img.shields.io/npm/dm/svelte-render.svg)](https://www.npmjs.com/package/svelte-render)
![license](https://img.shields.io/npm/l/svelte-render)
![build](https://img.shields.io/github/workflow/status/bryanmylee/svelte-render/publish)
[![coverage](https://coveralls.io/repos/github/bryanmylee/svelte-render/badge.svg?branch=main)](https://coveralls.io/github/bryanmylee/svelte-render?branch=main)
[![size](https://img.shields.io/bundlephobia/min/svelte-render)](https://bundlephobia.com/result?p=svelte-render)

Manage complex Svelte behaviors outside of templates with full type safety.

```svelte
<script>
  import {Render, createRender} from 'svelte-render';
  import Avatar from './Avatar.svelte';
  // ...
  const avatar = createRender(Avatar, {name: 'Ada Lovelace'})
    .on('click', handleClick)
    .on('launch', handleLaunch);
</script>

<Render of={avatar} />
```

## Installation

```bash
$ npm i -D svelte-render
```

## API

Svelte Render was primarily built to support complex rendering definitions for [Svelte Headless Table](https://github.com/bryanmylee/svelte-headless-table). You can find full documentation on `createRender` on the [documentation site](https://svelte-headless-table.bryanmylee.com/docs/api/create-render).

### `createRender: (component, props)`

`createRender` accepts a Svelte component and its props as arguments.

`props` can be omitted if the component does not receive props but must be included otherwise.

```ts
const icon = createRender(TickIcon); // ✅
const avatar = createRender(Avatar); // ❌ Type error.
const avatar = createRender(Avatar, {name: 'Ada Lovelace'}); // ✅
```

`props` must be a [Svelte store](https://svelte.dev/tutorial/writable-stores) if you need prop reactivity.

```ts
const avatarProps = writable({name: 'Ada Lovelace'});
const avatar = createRender(Avatar, avatarProps);
```

### `.on(event, handler)`

Svelte Render supports the Svelte event system by chaining `.on` calls on `createRender()`. Multiple event handlers can be registered for the same event type like the Svelte `on:` directive.

```ts
const button = createRender(Button)
  .on('click', handleClick)
  .on('click', (ev) => console.log(ev));
```

### `<Render />`

The `<Render />` component accepts one prop `of` for the configuration returned by `createRender`. `<Render />` handles props and automatically registers the event handlers defined with `.on`.

```svelte
<script>
  const avatar = createRender(Avatar, {name: 'Ada Lovelace'});
</script>
<Render of={avatar} />
```
