import { Application } from "@/components/shared/Application/Application";
import { DoctorPage } from "@/components/shared/DoctorPage/DoctorPage";
// import { Map } from "@/components/shared/Map/Map";


export default function Home() {
    return (
      <div>
        <DoctorPage />
        <Application />
        {/* <Map /> */}
      </div>
    );
  }
  