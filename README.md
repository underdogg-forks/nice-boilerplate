<p align="center"><img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" width="400"></p>

## Boilerplate

This boilerplate uses [Laravel 7](https://laravel-news.com/laravel7), Vue (with the [composition plugin](https://github.com/vuejs/composition-api)), TypeScript, [Inertia.js](https://inertiajs.com/) and the [domain-oriented hierarchy](https://stitcher.io/blog/laravel-beyond-crud-01-domain-oriented-laravel) structure from [Brent's Laravel Beyond CRUD](https://stitcher.io/blog/laravel-beyond-crud).

### Inertia.js

[Inertia.js](https://inertiajs.com/) is installed and configured. You can learn more about the [Vue Adapter](https://github.com/inertiajs/inertia-vue) and the [Laravel Adapter](https://github.com/inertiajs/inertia-laravel). 

Every Inertia page is stored in [/resources/js/views](/resources/js/views). You can access Inertia's `$page` from Vue's `context` (which is the second argument of the `setup` function of the composition API). 

```js
export default defineComponent({
  setup(props, { root }) {
    // @ts-ignore
    console.log(root.$page.app); // prints the `app` shared data
  },
});
```

I didn't manage to augment Vue with the composition API yet, any contribution regarding this is welcome. In the meantime, you need to use `@ts-ignore` for TypeScript to not yell at you.

To share data to every page in your front-end, you can use the Inertia facade. This boilerplate uses an [`InertiaServiceProvider`](/src/App/Providers/InertiaServiceProvider.php) to share basic data. You can find more information about this on the [shared data documentation](https://inertiajs.com/shared-data). 

To display an Inertia page, you can also use the Inertia facade, or the `inertia` helper. A basic example is shown in the [route file](/routes/web.php).

### Tailwind CSS 

Tailwind CSS 1.2 is included and loaded as a PostCSS plugin. 
Additionnaly, `@tailwindcss/ui` is installed, as well as [`tailwindcss-theming`](https://github.com/hawezo/tailwindcss-theming).

The former upgrades the configuration to better match the Tailwind UI aesthetics, and the second is there to provide theming capacities to your application. 

### Theming, dark and light themes

Tailwind Theming is disabled by default to avoid confusion with the default color palette. To enable it:

- Uncomment the corresponding plugin in [`tailwind.config.js`](/tailwind.config.js)
- Update the color palette in [`theme.config.js`](/theme.config.js) (more information [here](https://github.com/hawezo/tailwindcss-theming))
- Use the correct colors in your [views](/resources/js/views/Index.vue)
- Eventually, change your theme dynamically (example in your [body](/resources/views/app.blade.php))

Read the [documentation](https://github.com/hawezo/tailwindcss-theming)) for more information.

### PostCSS 

PostCSS is a tool that transforms your CSS thanks to JavaScript plugins. This boilerplate includes a few plugins:

- [`postcss-import`](https://github.com/postcss/postcss-import) — To allow importation in your CSS files, just like SASS,
- [`tailwindcss`](https://github.com/tailwindcss/tailwindcss) — To include Tailwind CSS,
- [`postcss-nested`](https://github.com/postcss/postcss-nested) — To allow rule nesting, just like SASS,
- [`postcss-font-magician`](https://github.com/jonathantneal/postcss-font-magician) — To generate `@font-face` rules from your used font families so you never have to do it yourself,
- [`autoprefixer`](https://github.com/postcss/autoprefixer) — To add vendor prefixes.

The order of the plugin is important, since they are processed in the order they are registered.

### Localization

[`laravel-localization-loader`](https://github.com/rmariuzzo/laravel-localization-loader) and [`Lang.js`](https://github.com/rmariuzzo/Lang.js) by [rmariuzzo](https://github.com/rmariuzzo) are used together to import your language files into Vue. More specifically, [`laravel-vue-lang`](https://github.com/hawezo/laravel-vue-lang) is used, which is a wrapper around these two libraries as well as a Mix extension, is used, so you don't have anything to do. 

Just use the `$_` method in Vue (or its alias `$t`) to translate something. 

```ts
$_: (key: string, replacements?: Replacements, locale?: string) => string;
```

More information on the [documentation](https://github.com/hawezo/laravel-vue-lang).

### Routing 

Currently, no example is provided within this boilerplate, but I personally make use of the sharing ability of Inertia to get links. For more information on how to handle links on an Inertia application, you can read this excellent [blog post](https://sebastiandedeyne.com/handling-routes-in-a-laravel-inertia-application/) from Sebastian De Deyne.
