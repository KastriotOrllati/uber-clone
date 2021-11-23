import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import RideSelector from "./components/RideSelector";
import { useRouter } from "next/router";

//.json?access_token=pk.eyJ1Ijoia2FzdHJpb3RvcmxsYXRpIiwiYSI6ImNrd2FxeGE4cTE0a3AzMHFtYXVwYjlyZXUifQ.4Ug_JxatqrfD1Ui2pel9-A`
const Confirm = (props) => {
  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();
  const router = useRouter();
  const { pickup, dropoff } = router.query;
  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup, dropoff]);
  const getPickupCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1Ijoia2FzdHJpb3RvcmxsYXRpIiwiYSI6ImNrd2FxeGE4cTE0a3AzMHFtYXVwYjlyZXUifQ.4Ug_JxatqrfD1Ui2pel9-A",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropoffCoordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1Ijoia2FzdHJpb3RvcmxsYXRpIiwiYSI6ImNrd2FxeGE4cTE0a3AzMHFtYXVwYjlyZXUifQ.4Ug_JxatqrfD1Ui2pel9-A",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      });
  };

  return (
    <Wrapper>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector />
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`flex flex-col h-screen`;
const RideContainer = tw.div` flex-1 flex  flex-col h-1/2 `;

const ConfirmButtonContainer = tw.div`border-t-2`;
const ConfirmButton = tw.div`bg-black text-white text-center m-4 py-4  text-xl`;
