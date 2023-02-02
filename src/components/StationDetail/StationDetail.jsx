import React from "react";
import classes from "./StationDetail.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectStation } from "../../redux/slices/stationsSlice";

const StationDetail = (props) => {
  const dispatch = useDispatch();
  const stations = useSelector((state) => state.storedStations.stations);

  const handleStationClick = (e) => {
    const stationId = e.target.closest(".divhook").dataset.index;
    const station = stations.find(
      (station) => station.mapId === Number(stationId)
    );
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    dispatch(
      selectStation({
        selectedStation: station,
      })
    );
  };

  return (
    <div
      data-index={props.mapId}
      data-testid="station_detail_container"
      onClick={handleStationClick}
      className={`${classes.station_detail} divhook`}
    >
      <h3>
        S<span className={classes.header_number}>{props.mapId}</span>
      </h3>
      <div>{props.nameFinnish}</div>
      <div>{props.osoite}</div>
      <div>{props.kaupunki}</div>
    </div>
  );
};

export default StationDetail;
