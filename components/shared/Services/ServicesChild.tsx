import React from 'react';
import { cn } from '@lib/utils';
import { Map } from '../Map/Map';
import { Application } from '../Application/Application';
import { List } from './List/ListChild';
import { Benefit } from './Benefit/BenefitChild';
import { SpecialsChild } from './Specials/SpecialsChild';

interface Props {
  className?: string;
}

export const ServicesChild = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
      <List />
      <Benefit />
      <SpecialsChild />
      <Application />
      <Map />
    </div>
  );
};