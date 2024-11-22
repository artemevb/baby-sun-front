import React from "react";
import { cn } from "@lib/utils";
import { Application } from "../Application/Application";
import { Map } from "../Map/Map";
import { ContactsInfo } from "./ContactsInfo";

interface Props {
  className?: string;
}

export const Contacts = ({ className }: Props) => {
  
  return (
    <div className={cn(className)}>
      <ContactsInfo />
      <Application className="py-8" />
      <Map />
    </div>
  );
};
