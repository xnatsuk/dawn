const CONFIG = new Config({
  crypto: {
    coin: 'ETH',
    currency: 'USD',
    refreshIn: 10
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
  disabled: ['todo-list', 'search-bar', 'crypto-rate'],
  tabs: [
    {
      name: '家',
      background_url: 'src/img/banners/bg-1.gif',
      categories: [{
        name: 'social',
        links: [
          {
            url: 'https://twitter.com/home',
            name: 'twitter'
          },
          {
            name: 'reddit',
            url: 'https://www.reddit.com/'
          },
          {
            name: 'gmail',
            url: 'https://mail.google.com/'
          },
          {
            name: 'notion',
            url: 'https://www.notion.so/'
          },
          {
            name: 'steam',
            url: 'https://steamcommunity.com/my/profile'
          },
          {
            name: '/a/',
            url: 'https://4chan.org/a/'
          }
        ]
      },
      {
        name: 'Comfy',
        links: [
          {
            name: 'netflix',
            url: 'https://www.netflix.com/'
          },
          {
            name: 'twitch',
            url: 'https://www.twitch.tv/'
          }
        ]
      },
      {
        name: 'Misc',
        links: [
          {
            name: 'github',
            url: 'https://github.com/',
          },
          {
            name: 'freecodecamp',
            url: 'https://www.freecodecamp.org/'
          },
          {
            name: 'dev.to',
            url: 'https://dev.to'
          },
          {
            name: 'the odin project',
            url: 'https://www.theodinproject.com/'
          }
        ]
      }
      ]
    },
    {
      name: 'メディア',
      background_url: 'src/img/banners/bg-2.gif',
      categories: [
        {
          links: [
            {
              url: 'https://www.spotify.com',
              name: 'spotify'
            },
            {
              url: 'https://soundcloud.com/',
              name: 'soundcloud'
            },
            {
              url: 'https://youtu.be/',
              name: 'youtu.be'
            },
            {
              url: 'https://lofigenerator.com/',
              name: 'lo-fi'
            },
            {
              url: 'https://www.pixiv.net/en/',
              name: 'pixiv'
            }
          ]
        }
      ]
    },
    {
      name: 'テクノロジー',
      background_url: 'src/img/banners/bg-3.gif',
      categories: [
        {
          links: [
            {
              name: 'r/startpages/',
              url: 'https://www.reddit.com/r/startpages/'
            },
            {
              name: 'r/unixporn',
              url: 'https://www.reddit.com/r/unixporn/'
            },
            {
              name: 'r/mechkbds/',
              url: 'https://www.reddit.com/r/MechanicalKeyboards/',
              icon: 'keyboard',
              icon_color: '#a57685'
            },
            {
              name: 'r/programming',
              url: 'https://www.reddit.com/r/programming/'
            },
            {
              name: 'r/firefoxcss',
              url: 'https://www.reddit.com/r/FirefoxCSS/'
            },
            {
              name: 'r/desktops',
              url: 'https://www.reddit.com/r/desktops/'
            },
            {
              name: 'codewars',
              url: 'https://www.codewars.com/dashboard'
            },            {
              name: 'keybr',
              url: 'https://www.keybr.com/'
            },            {
              name: 'ezgif',
              url: 'https://ezgif.com/'
            },
            {
              name: 'color picker',
              url: 'https://colorpicker.me'
            }
          ]
        }
      ]
    }]
});
