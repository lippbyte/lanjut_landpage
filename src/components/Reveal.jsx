import React from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

export default function Reveal({
  as: Tag = 'div',
  className = '',
  delay = 0,
  style = {},
  children,
  ...rest
}) {
  const [ref, isVisible] = useRevealOnScroll();

  const mergedStyle = delay
    ? { ...style, transitionDelay: `${delay}ms` }
    : style;

  return (
    <Tag
      ref={ref}
      className={`reveal-block ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={mergedStyle}
      {...rest}
    >
      {children}
    </Tag>
  );
}

