import React from 'react';

type IconFontProps = {
  name: string;
  type: string;
  style?: {
    color: string;
    fontSize: string;
  };
};

const IconFont = ({ name, type, style }: IconFontProps) => {
  const iconBlock = {
    margin: 0,
    padding: 0,
  };

  const symbolStyle = {
    ...style,
    width: '1em',
    height: '1em',
    verticalAlign: '-0.15em',
    fill: 'currentColor',
    overflow: 'hidden',
  };

  return (
    <span style={iconBlock}>
      {type === 'icon' ? (
        <span className={`iconfont icon-${name}`} style={style}></span>
      ) : (
        <svg aria-hidden='true' style={symbolStyle}>
          <use xlinkHref={`#icon-${name}`}></use>
        </svg>
      )}
    </span>
  );
};

export default IconFont;
