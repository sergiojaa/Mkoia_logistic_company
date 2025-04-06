import Provide from "./components/home/Provide";
import Services from "./components/home/Services";
import Trackway from "./components/home/Trackway";
import Transit from "./components/home/Transit";
import Trust from "./components/home/Trust";
import ValueCard from "./components/home/ValueCard";

export default function Home() {
  return (
    <div>
      <Provide />
      <Transit />
      <ValueCard />
      <Trackway />
      <Services />
      <Trust />
    </div>
  );
}
