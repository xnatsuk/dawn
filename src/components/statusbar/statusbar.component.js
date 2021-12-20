class Statusbar extends Component {
  externalRefs = {};

  refs = {
    panels: '#panels > ul',
    tabs: '#tabs ul li',
    indicator: '.indicator'
  };

  constructor() {
    super();

    this.setDependencies();
  }

  setDependencies() {
    this.externalRefs = {
      panels: this.parentNode.querySelectorAll(this.refs.panels)
    };
  }

  imports() {
    return [
      this.resources.fonts.roboto,
      this.resources.icons.material,
      this.resources.libs.awoo,
    ];
  }

  style() {
    return `
      *:not(:defined) { display: none; }

      #tabs,
      #tabs .widgets,
      #tabs ul li:last-child {
          position: absolute;
      }

      #tabs {
          width: 100%;
          height: 100%;
      }

      #tabs ul {
          counter-reset: tabs;
          margin: 0 0 0 1.5em;
          height: 100%;
          position: relative;
          list-style: none;
      }

      #tabs ul li:not(:last-child)::after {
          content: counter(tabs, cjk-ideographic);
          counter-increment: tabs;
          display: flex;
          width: 100%;
          height: 100%;
          position: relative;
          align-items: center;
          text-align: center;
          justify-content: center;
      }

      #tabs ul li:not(:last-child) {
          width: 35px;
          text-align: center;
          font: 100 13px 'Roboto', serif;
          color: #bbb;
          padding: 6px 0;
          transition: all .1s;
          cursor: pointer;
          line-height: 0;
          height: 100%;
      }

      #tabs ul li:not(:last-child):hover {
          background: #34343e;
      }

      #tabs ul li:last-child {
          --flavour: var(--accent);
          width: 35px;
          height: 3px;
          background: var(--flavour);
          bottom: 0;
          transition: all .3s;
      }

      #tabs ul li[active]:not(:last-child) {
          font-weight: 700;
          color: #fff;
          font-size: 16px;
          padding: 6px 0;
      }

      #tabs ul li[active]:nth-child(2) ~ li:last-child { margin: 0 0 0 35px; }
      #tabs ul li[active]:nth-child(3) ~ li:last-child { margin: 0 0 0 70px; }

      #tabs ul li[active]:nth-child(2) ~ li:last-child {
          --flavour: #fcb3a3;
      }

      #tabs ul li[active]:nth-child(3) ~ li:last-child {
          --flavour: #5b52e4;
      }

      .widgets {
          right: 0;
          margin: auto;
          height: 32px;
          color: #fff;
          font-size: 12px;
          background: #1d1d21;
      }

      .widgets:hover .edit {
          margin: 0;
      }

      .widget {
          position: relative;
          height: 100%;
          padding: 0 1em;
      }

      .widget:first-child {
          padding-left: 2em;
      }

      .widget:last-child {
          padding-right: 2em;
      }

      .widget:hover {
          cursor: pointer;
          background: rgba(255, 255, 255, .05);
      }

      #tabs > cols {
          position: relative;
      }

      #tabs .time span {
          font-weight: 400;
      }

      #tabs i {
          font-size: 14pt !important;
      }

      .widget:not(:first-child)::before {
          content: '';
          position: absolute;
          display: block;
          left: 0;
          height: calc(100% - 15px);
          width: 1px;
          background: rgb(255 255 255 / 10%);
      }
    `;
  }

  template() {
    return `
        <div id="tabs">
            <cols>
                <ul class="- indicator"></ul>
                <div class="+ widgets col-end">
                    <crypto-rate class="+ widget"></crypto-rate>
                    <current-time class="+ widget"></current-time>
                    <weather-forecast class="+ widget weather"></weather-forecast>
                </div>
            </cols>
        </div>`;
  }

  setEvents() {
    this.refs.tabs.forEach(tab =>
      tab.onclick = ({ target }) =>
        this.activateByKey(Number(target.getAttribute('tab-index'))));

    document.onkeydown = (e) => {
      if (e !== undefined) {
        let { key } = e;

        if (Number.isInteger(parseInt(key)) && key <= this.externalRefs.panels.length)
          this.activateByKey(key - 1);
      }
    };
  }

  activateByKey(key) {
    this.activate(this.refs.tabs, this.refs.tabs[key]);
    this.activate(this.externalRefs.panels, this.externalRefs.panels[key]);
  }

  createTabs() {
    const panelsCount = this.externalRefs.panels.length;

    for (let i = 0; i <= panelsCount; i++)
      this.refs.indicator.innerHTML += `<li tab-index=${i} ${i == 0 ? 'active' : ''}></li>`;
  }

  activate(target, item) {
    target.forEach((i) => i.removeAttribute('active'));
    item.setAttribute('active', '');
  }

  connectedCallback() {
    this.render().then(() => {
      this.createTabs();
      this.setEvents();
    });
  }
}
