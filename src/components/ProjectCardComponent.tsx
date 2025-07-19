interface CardTypes {
  title: string;
  imgSrc: string;
  subInfo: string;
  siteLink: string;
}
function ProjectCardComponent({ title, subInfo, imgSrc, siteLink }: CardTypes) {
  return (
    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto min-w-[384px] ">
      <img
        src={imgSrc}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
      <h3 className="z-10 mt-3 text-3xl font-bold text-white hover:text-primary ">
        <a href={siteLink} className="flex" target="_blank">
          <p className="pr-2">{title}</p> <img src="svg/link.svg" width={18} alt="icon" />
        </a>
      </h3>
      <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
        {subInfo}
      </div>
    </article>
  );
}

export default ProjectCardComponent;
