import React from "react";
import { cn } from "@lib/utils";
import { Banner } from "./Banner/Banner";
import { About } from "./About/About";
import { Services } from "./Services/Services";
import { Advantages } from "./Advantages/Advantages";
import { Reviews } from "./Reviews/Reviews";
import { Application } from "../Application/Application";
// import { Map } from "@/components/shared/Map/Map";

interface Props {
  className?: string;
}

export const Main = ({ className }: Props) => {
  return (
    <main className={cn(className)}>
      <Banner />
      <About />
      <Services />
      <Advantages />
      <Reviews />
      <Application />
      {/* <Map /> */}
    </main>
  );
};
