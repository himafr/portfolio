import ProjectCardComponent from "../components/ProjectCardComponent";

function ProjectsPage() {
  return (
    <div className=" flex flex-wrap gap-3 gap-x-12 items-center justify-around overflow-auto mt-[3vh] h-[80vh]">
      {/* <section id="features"
        className="relative block px-6 py-10 md:py-20 md:px-10  border-t border-b border-neutral-900 bg-neutral-900/30"> */}

      <div className="relative mx-auto max-w-5xl text-center">
        <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
          Welcome To Hema's Projects
        </span>
        <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
          here you can see some of my Development work
        </h2>
        <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400 mb-0">
          you can take a tour and let me know your opinion ,I hope you enjoy
          while you here
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-2 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCardComponent
          siteLink="https://mofie-tv.netlify.app"
          imgSrc="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
          title="Mofie"
          subInfo="mofie app where you see your favorite movies and shows "
        />
        <ProjectCardComponent
          siteLink="https://mofie-tv.netlify.app"
          imgSrc="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
          title="Mofie"
          subInfo="mofie app where you see your favorite movies and shows "
        />
        <ProjectCardComponent
          siteLink="https://mofie-tv.netlify.app"
          imgSrc="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
          title="Mofie"
          subInfo="mofie app where you see your favorite movies and shows "
        />
        <ProjectCardComponent
          siteLink="https://mofie-tv.netlify.app"
          imgSrc="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
          title="Mofie"
          subInfo="mofie app where you see your favorite movies and shows "
        />
        <ProjectCardComponent
          siteLink="https://mofie-tv.netlify.app"
          imgSrc="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
          title="Mofie"
          subInfo="mofie app where you see your favorite movies and shows "
        />
        <ProjectCardComponent
          siteLink="https://mofie-tv.netlify.app"
          imgSrc="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
          title="Mofie"
          subInfo="mofie app where you see your favorite movies and shows "
        />
      </div>

      {/* </section> */}
    </div>
  );
}

export default ProjectsPage;
