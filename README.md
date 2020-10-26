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
  <a href='https://yaireo.github.io/ui-range'>ui-range</a> - CSS-only custom, flexible, range input
</h1>

<h3 align="center">
  👉 Demos: <a href='https://codepen.io/vsync/pen/mdEJMLv?editors=1100 target='_blank'>Codepen</a> 👈
</h3>

<p align="center">
<br>
  <a href='https://codepen.io/vsync/pen/mdEJMLv?editors=1100'>
    <img src="./screen.png?sanitize=true" style='max-width: 820px' />
  </a>
<br>
<p>

----

A CSS-only component, along-side the corresponding markup, to bring life into the boring, plain, `<input type='range'>` native component, infusing it with extra basic features, leaving us, developers, alone, to figure things out in the dark, how to bring a spark of life to this lifeless poor thing browsers call *"range input"*.

**How is a person to know the range limits without moving it around?** <br>
Let the user see the minimum & maximum limits.

**What is the current value? Who knows. A mystery.**<br>
Lets print it then.

**Maybe let the user know there are steps in the field. hmmm?**<br>
Printing ticks never hurt nobody, unless there are too many ticks - in which case, they will not be printed.

**How about a gradient background?**<br>
No problem, since the component is identical across-browsers (if possible). I wouldn't bother for IE users, they must be used viewing the web in its worst.

Mixing all those nice things in a soup of [CSS variables](https://github.com/yairEO/ui-range/blob/master/ui-range.scss#L2-L22) and we have cooked outselves a nice *component *for dinner.

---

I must say that CSS is not yet good enough to make this code much cleaner. I had to rely on repeating the input's attributes in its parent node, as CSS style variables, because CSS is currently unable to [extrapolate attibutes as variables](https://github.com/w3c/csswg-drafts/issues/4482).

Even if the above was possible, still, it would require passing varables from one sibling to another, or to a parent.

The `<input>` element has all the information needed, but the `oninput` event is needed to keep things in-sync for the CSS to be "aware".

`--text-value` is needed along-side `--value` due to CSS inability to cast variables types. Technically
it is possible with new [Houdini](https://developer.mozilla.org/en-US/docs/Web/Houdini), but it's not yet a norm in modern-browsers.

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