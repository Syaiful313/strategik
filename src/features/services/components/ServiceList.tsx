"use client";
import { ServiceType } from "@/types/service";
import ServiceDetail from "./ServiceDetail";
import { FC } from "react";

interface ServiceListProps {
  services: ServiceType[];
}

const ServiceList: FC<ServiceListProps> = ({ services }) => {
  return (
    <div className="space-y-12">
      {services.map((service, index) => (
        <ServiceDetail key={index} service={service} />
      ))}
    </div>
  );
};

export default ServiceList;
