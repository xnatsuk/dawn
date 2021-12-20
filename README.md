# dawn

<p align="center">
  <img src="https://i.imgur.com/vjfMONS.png">
</div>


## Keybindings

- <kbd>Numrow</kbd> Switch tabs
- <kbd>s</kbd> Open the search dialog

## Configuration

For now, some settings can be tweaked by changing the `GLOBAL_CONFIG` object located in `./userconfig.js`.

### Disabling a component

To disable a component, put their name into the list of `disabled` components:

```js
const GLOBAL_CONFIG = new Config({
    // ...
    disabled: ['todo-list'] // search-bar, crypto-rate, current-time, weather-forecast, status-bar
});
```

### Clock

Change the clock format in the status bar using [strftime.org](https://strftime.org) format.

Config example (`userconfig.js`):

```js
const GLOBAL_CONFIG = new Config({
    // ...
    clock: 'h:i p',        // 13:30 PM
    clock: 'do B Y - h:i', // 18th January 2021 - 13:30
    clock: 'h:i - m/b/Y'   // 13:30 - 3/Jul/2021
});
```

### Weather temperature

Change your location and temperature scale (celius, fahrenheit) like such:

```js
const GLOBAL_CONFIG = new Config({
  // ...
  temperature: {
    location: 'New York',
    scale: 'C'
  }
});
```

### Crypto status

For the live crypto status, provide a crypto coin and a FIAT currency. Example:

```js
const GLOBAL_CONFIG = new Config({
  // ...
  crypto: {
    coin: 'ETH', // BTC, LINK, DOGE etc
    currency: 'USD', // EUR, JPY, BRL etc
    refreshIn: 15 // refresh time (in seconds)
  },
});
```
