import React from 'react';
import { cn } from '@lib/utils';
// import { Map } from '../Map/Map';
import { Application } from '../Application/Application';
import { List } from './List/ListCosm';
import { Benefit } from './Benefit/BenefitCosm';
import { SpecialsCosm } from './Specials/SpecialsCosm';

interface Props {
  className?: string;
}

export const ServicesCosm = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
      <List />
      <Benefit />
      <SpecialsCosm />
      <Application />
      {/* <Map /> */}
    </div>
  );
};