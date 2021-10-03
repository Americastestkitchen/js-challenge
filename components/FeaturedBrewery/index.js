import React from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import { breakpoint } from 'styled-components-breakpoint';
import { usePosition } from 'use-position';

import BreweryHeroItem, { LoadingBreweryHeroItem } from '../BreweryHeroItem';

const HeroWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const LocationError = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 8px;
  margin-top: 8px;
  padding: 4px;
  border-radius: 8px;
  background-color: ${({ theme, accentColor }) => theme.colors[accentColor]};
  color: white;
  font-size: 12px;

  ${breakpoint('md')`
    font-size: 16px;
  `}
`;

const FeaturedBrewery = () => {
  const {
    latitude,
    longitude,
    speed,
    timestamp,
    accuracy,
    error: geoError,
  } = usePosition();

  const { data, error } = useSWR(`https://api.openbrewerydb.org/breweries?by_dist${latitude},${longitude}&per_page=1`);

  if (error || data?.length === 0) return <span>An error has occurred.</span>;
  if (!data) return <LoadingBreweryHeroItem />;

  return (
    <HeroWrapper>
      <BreweryHeroItem
        brewery={data?.[0]}
      />
      {geoError && (
        <LocationError accentColor="primary">
          Enable location to see nearby locations.
        </LocationError>
      )}
    </HeroWrapper>
  );
};

export default FeaturedBrewery;
