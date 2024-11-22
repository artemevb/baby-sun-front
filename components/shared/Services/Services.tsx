import React from 'react';
import { cn } from '@lib/utils';
import { Map } from '../Map/Map';
import { Application } from '../Application/Application';
import { List } from './List/List';
import { Benefit } from './Benefit/Benefit';
import { Specials } from './Specials/Specials';

interface Props {
  className?: string;
}

export const Services = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
        <List />
        <Benefit />
        <Specials />
        <Application />
        <Map />
    </div>
  );
};