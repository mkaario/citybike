import { useState } from "react";
import StationDetail from "../StationDetail/StationDetail";
import Card from "../Card/Card";
import DetailsPagination from "../DetailsPagination/DetailsPagination";
import { useSelector } from "react-redux";
import MapView from "../MapView/MapView";
import classes from "./StationView.module.scss";

const StationView = () => {
  const [stationsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const stations = useSelector((state) => state.storedStations.stations);
  const selectedStation = useSelector(
    (state) => state.storedStations.selectedStation
  );

  const indexOfLastStation = currentPage * stationsPerPage;
  const indexOfFirstStation = indexOfLastStation - stationsPerPage;
  const currentStations = stations.slice(
    indexOfFirstStation,
    indexOfLastStation
  );
  const renderStations = () =>
    currentStations.map((station, i) => (
      <StationDetail
        key={station.id}
        index={i}
        mapId={station.mapId}
        nameFinnish={station.nameFinnish}
        nameEnglish={station.nameEnglish}
        nameSwedish={station.nameSwedish}
        osoite={station.osoite}
        address={station.address}
        kaupunki={station.kaupunki}
        stad={station.stad}
        operaattori={station.operaattori}
        kapasiteetti={station.kapasiteetti}
        x={station.x}
        y={station.y}
      />
    ));

  const handleChange = (e, p) => {
    setCurrentPage(p);
  };

  return (
    <section className={classes.station_wrapper}>
      {Object.keys(selectedStation).length !== 0 && (
        <MapView station={selectedStation} />
      )}
      <div className={classes.grid_wrapper}>
        <div className={classes.data_headers}>
          <div className={classes.data_header}>ID</div>
          <div className={classes.data_header}>Nimi</div>
          <div className={classes.data_header}>Osoite</div>
          <div className={classes.data_header}>Kaupunki</div>
        </div>
        <Card className={classes.grid_card}>{renderStations()}</Card>
      </div>
      <DetailsPagination
        totalItems={stations.length}
        itemsPerPage={stationsPerPage}
        onChange={handleChange}
      />
    </section>
  );
};

export default StationView;
