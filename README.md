# svelte-render

[![npm version](http://img.shields.io/npm/v/svelte-render.svg)](https://www.npmjs.com/package/svelte-render)
[![npm downloads](https://img.shields.io/npm/dm/svelte-render.svg)](https://www.npmjs.com/package/svelte-render)
![license](https://img.shields.io/npm/l/svelte-render)
![build](https://img.shields.io/github/actions/workflow/status/bryanmylee/svelte-render/publish.yml)
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

### `<Render />`

`<Render />` handles props and automatically registers the event handlers defined with `.on` as well as slot data defined with `.slot`.

`of` accepts:

- primitive data such as `number` and `string`
- `Writable<number>` and `Writable<string>` for dynamic primitive data
- `ComponentRenderConfig` returned by `createRender`

```svelte
<script>
  const avatar = createRender(Avatar, {name: 'Ada Lovelace'});
</script>

<Render of={avatar} />
```

becomes

```svelte
<Avatar name="Ada Lovelace" />
```

### `createRender: (component, props)`

`createRender` accepts a Svelte component and its props as arguments.

`props` can be omitted if the component does not receive props but must be included otherwise.

```ts
const icon = createRender(TickIcon); // ✅
const avatar = createRender(Avatar); // ❌ Type error.
const avatar = createRender(Avatar, {name: 'Ada Lovelace'}); // ✅
```

If you need prop reactivity, `props` must be a [Svelte store](https://svelte.dev/tutorial/writable-stores).

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

`<Render of={button} />` becomes:

```svelte
<Button on:click={handleClick} on:click={(ev) => console.log(ev)} />
```

### `.slot(...config)`

Svelte Render also supports Svelte's default slot system.

`.slot` receives any number of arguments with the same type as `of`, including `ComponentRenderConfig` returned by `createRender`, primitive data, and `Writable`. This makes it useful for rendering wrapper components such as `<Button />` and `<Label />`.

_Due to technical limitations with Svelte, it is not possible to assign render configurations to named slots._

```ts
const button = createRender(Button)
  .slot(
    createRender(Icon, {name: 'user'}),
    'Log in'
  );
```

`<Render of={button} />` becomes:

```svelte
<Button>
  <Icon name="user" />
  Log in
</Button>
```
