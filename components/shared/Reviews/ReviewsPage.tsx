import React from 'react';
import { cn } from '@lib/utils';
import { Application } from '../Application/Application';
import { Map } from '../Map/Map';
import { ReviewsList } from './ReviewsList';
import { ReviewsFilter } from '../About/Reviews/ReviewsFilter';

interface Props {
  className?: string;
}

export const ReviewsPage = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
        <ReviewsList />
        <ReviewsFilter />
        <Application />
        <Map />
    </div>
  );
};