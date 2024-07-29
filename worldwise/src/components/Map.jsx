import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

const Map = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  console.log(setSearchParam);

  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");
  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <h1>
        Position {lat} , {lng}
      </h1>
      <button
        onClick={() => {
          setSearchParam({ lat: 38, lng: 50 });
        }}
      >
        {" "}
        Cahnge pos
      </button>
    </div>
  );
};

export default Map;
