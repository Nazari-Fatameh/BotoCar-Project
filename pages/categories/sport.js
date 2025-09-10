import carsData from "../../data/carsData";
import CarsList from "../../components/templates/CarsList";
function Sport() {
  const sport = carsData.filter((car) => car.category === "sport");
  return <CarsList data={sport}/> ;
}

export default Sport;
