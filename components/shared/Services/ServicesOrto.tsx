import React from 'react';
import { cn } from '@lib/utils';
// import { Map } from '../Map/Map';
import { Application } from '../Application/Application';
import { List } from './List/ListOrto';
import { Benefit } from './Benefit/BenefitOrto';
import { SpecialsOrto } from './Specials/SpecialsOrto';

interface Props {
  className?: string;
}

export const ServicesOrto = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
      <List />
      <Benefit />
      <SpecialsOrto />
      <Application />
      {/* <Map /> */}
    </div>
  );
};