const GLOBAL_CONFIG = new Config({
  crypto: {
    coin: 'ETH',
    currency: 'USD',
    refreshIn: 60
  },
  temperature: {
    location: 'Brasília',
    scale: 'C'
  },
  clock: 'hi',
  search: {
    engines: {
      g: ['https://google.com/search?q=', 'Google'],
      i: ['https://ixquick.com/do/search?q=', 'Ixquick'],
      d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
      y: ['https://youtube.com/results?search_query=', 'Youtube'],
      w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia']
    }
  },
  disabled: ['todo-list', 'search-bar', 'crypto-rate']
});
