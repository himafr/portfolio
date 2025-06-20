interface ServicesType {
  serviceName: string;
  serviceDetails: string;
  src: string;
}
function ServiceCardComponent({
  serviceDetails,
  serviceName,
  src,
}: ServicesType) {
  return (
    <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
      <div className="button-text mx-auto flex h-13 w-13 items-center justify-center rounded-md border ">
        <img src={src} alt={serviceName} />
      </div>
      <h3 className="mt-6 text-gray-400 text-2xl">{serviceName}</h3>
      <p className="my-4 mb-0 font-normal md:text-[14px] leading-relaxed tracking-wide text-gray-400">
        {serviceDetails}
      </p>
    </div>
  );
}

export default ServiceCardComponent;
