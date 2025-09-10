import carsData from "../../data/carsData";
import CarsList from "../../components/templates/CarsList";
function Suv() {
  const suv = carsData.filter((car) => car.category === "suv");
  return <CarsList data={suv}/> ;
}

export default Suv;
