import { ServiceType } from "@/types/service";
import ServiceDetail from "./ServiceDetail";
import { FC } from "react";

interface ServiceListProps {
  services: ServiceType[];
}

const ServiceList: FC<ServiceListProps> = ({ services }) => {
  return (
    <div className="space-y-12">
      {services.map((service) => (
        <ServiceDetail key={service.entryId} service={service} />
      ))}
    </div>
  );
};

export default ServiceList;
