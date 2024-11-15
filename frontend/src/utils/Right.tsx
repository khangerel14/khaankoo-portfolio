const data = [
  {
    name: 'Next.js',
    url: 'data:image/webp;base64,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',
  },
  {
    name: 'Github',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
  },
  {
    name: 'Cypress',
    url: 'data:image/webp;base64,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',
  },
  {
    name: 'Jest',
    url: 'data:image/png;base64,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',
  },
  {
    name: 'MongoDB',
    url: 'data:image/webp;base64,UklGRvQDAABXRUJQVlA4WAoAAAAQAAAAUQAArwAAQUxQSFkCAAABJyAQSOFmFxERIwlIUmRFRGgIsW23jdQApAjAFgNoAtAef1KWv97/CCL6PwGwa9tOGx1BAUlGBQRUQKgAgftvCp/u8F9E/ycAem29bZunMoALB3DKAC4YwJC+/ZeSQwBK+xvR/wlw1MOZRbCyI1tpgJEXgGhjB7DZGADgLbxwTxbapFgYEwS9HfOs1x+g9sJz1GqCojUE8Do7pFmni6DygjxqtIWigdXA25cyry/Bs15Yj6xKKKxBgOf8gJk4jVI4g4LA2MHNjEYqDLDD2k7La41W1gYNYeUH/LRSFcrKUICXvaAZZbtKlnUVyKAbJD9KSVKVNklXggTa4elHLT1Vte2pq+EJ+mH2MhBnu4E8qwbKrBvADBbD7WUi3XYT+VZNbLduArdhwzvnYDM492MkkTZSNbLZKY4mMgk5JhVvc7M5m3iTKHSXSUUmf0HvJjN9a93E2djS/i3eOplq0mzKT6PqFJn8FZ1lokkyOlhE7hYBm7OFp6s4mgpUkTcUkQx3kQRnkQiIeKBrOKBpAJR9nsO+PDtbsC/NDhJhhoRfaAosFoG8dBaISwj4lT7OrdRhb1bvw9Iae4C+I2xo+9oONpZBect5UNxCH+M2eYnRfS1pfZSMAS8wgteCFqFgDHnHJ+AdRvgaeHa0GGvWkOBJRuIhacpgySH1mtJyWDOGJE/4JPmQMGXhISP98GIGri+mPPyry8YoPASmCrzLKD10TTW4ZIBLRvFB0sRB0lSFS4ZLRvlhlc6Shjqu2jb2uGz4eWwfT0mf/4u2j4uk+f+ApPFPNOxkkfhWAFZQOCB0AQAAsA4AnQEqUgCwAD7daKpOqKakIiq+idEQG4lN3BgAfwAZ54iXgYK9ynxz6f/RhtgP//eBu9CZGCZxbomBVwjmgqi2DqdfZCzidVFTmU9+oE9KuY7yN5QHOdg7fP4+ec9XriX4ir7n4AWCYYH6GkDYhJbakfcKMTvAsyCJthUAAPtieftyqJv+FVeDTHkYoFx3x9KRyx/49uDxH1Ro0fAF3/uZZSqWBl1wQbNhtzs8weh2HexyWpv/1HSXPMs2FgTFgg+fDRFvX8l11nf1Ha2SK2NjHfzDwR1mVbaAnxvGCFJcecAn17ZfHzpUaXx8Ao8hj+NLf6IoTqtTG//+OyH0U5N79uNGwMtx1gPgMPlZ4drgte+YfpfOSUYuKx1WG6MbXhaT3ebUnsNh5ApowOLrcwaZxtsob/+OsX++enxHdTw0ofng2pp+JthZ/XRFDJ13/yfgDv/5pr+nN9GXqMUADa3AP3YgJvdA6gWeDykQCSLAAAAA',
  },
  {
    name: 'PostgreSQL',
    url: 'data:image/webp;base64,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',
  },
  {
    name: 'daisyUI',
    url: 'https://img.daisyui.com/images/daisyui-logo/daisyui-logotype.svg',
  },
  {
    name: 'Material UI',
    url: 'https://static-00.iconduck.com/assets.00/material-ui-icon-2048x1626-on580ia9.png',
  },
  {
    name: 'Sequelize',
    url: 'https://www.svgrepo.com/show/354333/sequelize.svg',
  },
  {
    name: 'GraphQL',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png',
  },
];

const Right = () => {
  return (
    <div className='flex gap-14 justify-between items-center flex-wrap'>
      {data.map((e, index) => {
        return (
          <div className='flex flex-col items-center gap-2' key={index}>
            <h1 className='text-xl font-semibold'>{e.name}</h1>
            <img src={e.url} alt='' style={{ height: 48 }} />
          </div>
        );
      })}
    </div>
  );
};

export default Right;
