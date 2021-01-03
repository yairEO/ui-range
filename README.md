<p align="center">
<br>
  <a href='https://codepen.io/vsync/pen/mdEJMLv?editors=1100'>
    <img src="./screen.png?sanitize=true" style='max-width: 820px' />
  </a>
<br>
<p>

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
<h3 align="center"><em>CSS-Only</em> Custom & Flexible<wbr><code>&lt;input type='range'&gt; </code></h3>

<h3 align="center">
  👉 Demos: <a href='https://codepen.io/vsync/pen/mdEJMLv?editors=1100 target='_blank'>Codepen</a> 👈
</h3>

---

A *CSS-only* component which is designed to work along-side the *corresponding **markup*** (examples below).
This code here is designed to bring *customizabiilty* to the **maximum** for the `range` input element,
extending the **very basic** `<input type='range'>` native browser component, infusing it with extra features.


## Features:

* Extensive [CSS variables](https://github.com/yairEO/ui-range/blob/master/ui-range.scss#L2-L34) usage = *Much easier* customization:
  * Track height, color, gradient
  * Progress color/gradient
  * Progress shadow
  * Thumb size, color & shadow
  * Ticks (per step) height, color, width, position, offset
  * Ticks count limit (30)
  * Ticks skipping (Print on every N tick)
  * Value text color when "active" (component *hover*)
  * Value background color
  * Cursor for hover & grabbing
  * <del>*RTL* (right-to-left) support via `dir=rtl` attribute</del>
* Value is printed by default at all times
* Minimum & maximum values are printed at the edges
* Ticks are printed on each step, or every N step
* Ticks automatically hidden if too many (too dense to be helpful)

In addition to all the root variables, a helper variable `--is-left-most` exists on the `<input>` element itself,
which can be helpful if it is desirable to visually distingush between left/right thumbs of a multi-range slider.

---

I must say that CSS is not yet good enough to make this code much cleaner. I had to rely on repeating the input's attributes in its parent node, as CSS style variables, because CSS is currently unable to [extrapolate attibutes as variables](https://github.com/w3c/csswg-drafts/issues/4482).

Even if the above was possible, still, it would require passing varables from one sibling to another, or to a parent.

The `<input>` element has all the information needed, but the `oninput` event is needed to keep things in-sync for the CSS to be "aware".

`--text-value` is needed along-side `--value` due to CSS inability to cast variables types. Technically
it is possible with new [Houdini](https://developer.mozilla.org/en-US/docs/Web/Houdini), but it's not yet a norm in modern-browsers.

---

I intentionallyl did not use the native `<progress>` element, since it wasn't flexible enough (especially not cross-browser). Using `<div class='range-slider__progress'></div>` instead.

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

### Markup Example (single range):

```html
<div class="range-slider" style='--min:0; --max:100; --value:75; --text-value:"75";'>
  <input type="range" min="0" max="100" value="75" oninput="this.parentNode.style.setProperty('--value',this.value); this.parentNode.style.setProperty('--text-value', JSON.stringify(this.value))">
  <output></output>
  <div class='range-slider__progress'></div>
</div>
```

### Markup Example (double range):

```html
<div class="range-slider flat" data-ticks-position='top' style='--min:-500; --max:500; --value-a:-220; --value-b:400; --text-value-a:"-220"; --text-value-b:"400";'>
  <input type="range" min="-500" max="500" value="-220" oninput="this.parentNode.style.setProperty('--value-a',this.value); this.parentNode.style.setProperty('--text-value-a', JSON.stringify(this.value))">
  <output></output>
  <input type="range" min="-500" max="500" value="400" oninput="this.parentNode.style.setProperty('--value-b',this.value); this.parentNode.style.setProperty('--text-value-b', JSON.stringify(this.value))">
  <output></output>
  <div class='range-slider__progress'></div>
</div>
```