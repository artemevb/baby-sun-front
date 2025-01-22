import React from 'react';
import { cn } from '@lib/utils';
import { History } from './History/History';
import { AboutBanner } from './Banner/AboutBanner';
import { Mission } from './Mission/Mission';
import { AboutDoctors } from './Doctors/AboutDoctors';
import { Reviews } from './Reviews/Reviews';
import { Licenses } from './Licenses/Licenses';
import { Application } from '../Application/Application';
import { Map } from '../Map/Map';
import { ReviewsFilter } from './Reviews/ReviewsFilter';

interface Props {
  className?: string;
}

export const About = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
        <AboutBanner />
        <History />
        <Mission />
        <AboutDoctors />
        <Licenses />
        <Reviews />
        <ReviewsFilter />
        <Application />
        <Map />
    </div>
  );
};