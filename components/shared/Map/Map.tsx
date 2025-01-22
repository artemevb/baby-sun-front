"use client";
import React from 'react';

interface Props {
  className?: string;
}

export const Map = ({ className }: Props) => {
  return (
    <iframe
      src="https://yandex.ru/map-widget/v1/?um=constructor%3A32039d64c69b643d26b59c4a56b957ff0baa02b77d67f2abc51cb63507b59ed5&amp;source=constructor"
      width="100%"
      height="400"
      frameBorder="0"
      // Пример использования переданного className
      className={className}
    />
  );
};
