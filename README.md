<p align="center">
  <a href='https://www.npmjs.com/package/@yaireo/ui-range'>
      <img src="https://img.shields.io/npm/v/@yaireo/ui-range.svg" />
  </a>
  <a href='https://simple.wikipedia.org/wiki/MIT_License'>
      <img src="https://img.shields.io/badge/license-MIT-lightgrey" />
  </a>
  <img src="https://img.shields.io/bundlephobia/minzip/@yaireo/ui-range" />
</p>

<h1 align="center">
  <a href='https://codepen.io/vsync/pen/mdEJMLv'>UI-Range</a>
</h1>
<h2 align="center">
<em>CSS-only</em> 🎩 Custom 🛠️ Flexible 🤸‍♂️ Better <br>
<code>&lt;input type='range'&gt; </code>
</h2>

<h3 align="center">
  👉 Demos: <a href='https://codepen.io/vsync/pen/mdEJMLv?editors=1100 target='_blank'>Codepen</a> 👈
</h3>

<p align="center">
<br>
  <a href='https://codepen.io/vsync/pen/mdEJMLv?editors=1100'>
    <img src="./screen1.png?sanitize=true" style='max-width: 820px' />
  </a>
<br>
<p>

## Features:

* Extensive [CSS variables](https://github.com/yairEO/ui-range/blob/master/ui-range.scss#L2-L22) usage = *Much easier* customization:
  * Track height
  * Track color/gradient
  * Progress color/gradient
  * Progress shadow
  * Thumb size & color
  * Ticks (per step) height & color
  * Ticks count limit (30)
  * Ticks skipping (Print on every N tick)
  * Value text color when "active" (component *hover*)
  * Value background color
  * Cursors for hover & grabbing
  * *RTL* (right-to-left) support via `dir=rtl` attribute
* Value is printed by default at all times
* Minimum & maximum values are printed at the edges
* Ticks are printed on each step or every N step
* No ticks if there would be too many of them


----

A *CSS-only* component, along-side the *corresponding **markup***, to bring life into the boring, plain, `<input type='range'>` native component, infusing it with extra basic features, leaving us, developers, alone, to figure things out in the dark, how to bring a spark of life to this lifeless poor thing browsers call *"range input"*.



---

I must say that CSS is not yet good enough to make this code much cleaner. I had to rely on repeating the input's attributes in its parent node, as CSS style variables, because CSS is currently unable to [extrapolate attibutes as variables](https://github.com/w3c/csswg-drafts/issues/4482).

Even if the above was possible, still, it would require passing varables from one sibling to another, or to a parent.

The `<input>` element has all the information needed, but the `oninput` event is needed to keep things in-sync for the CSS to be "aware".

`--text-value` is needed along-side `--value` due to CSS inability to cast variables types. Technically
it is possible with new [Houdini](https://developer.mozilla.org/en-US/docs/Web/Houdini), but it's not yet a norm in modern-browsers.

---

I intentionallyl did not use the native `<progress>` element, since it wasn't flexible enough (especially not cross-browser). Using `<div class='range__progress'></div>` instead.

## Install:

```
npm i @yaireo/ui-range
```

## Usage:

Import CSS file via JS

```js
import '@yaireo/ui-range'
```

Or via CSS [`@import`](https://stackoverflow.com/q/10036977/104380)

```css
@import '@yaireo/ui-range'
```

For the SCSS version, use this path:

    @yaireo/ui-range/ui-range.scss

### Markup example:

```html
<div class="range" style='--min:0; --max:1000; --value:170; --text-value:"170";'>
  <input type="range" min="0" max="1000" value="170" oninput="this.parentNode.style.setProperty('--value',this.value); this.parentNode.style.setProperty('--text-value', JSON.stringify(this.value))">
  <output></output>
  <div class='range__progress'></div>
</div>
```