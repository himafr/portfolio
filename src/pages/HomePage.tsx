import TechComponent from "../components/TechComponent";

function HomePage() {
  return (
    <div className="flex gap-6 items-center justify-between flex-col-reverse md:flex-row pt-10">
      <div className="md:max-w-2/4">
        <div className="md:text-4xl text-3xl  flex flex-col md:gap-11 gap-4">
          <div>
            Hi, It's
            <p className="md:text-5xl text-4xl md:pl-8 pl-4 md:pt-5 text-primary"> Hema Sallem </p>
          </div>
          <p className="md:text-2xl text-lg ">Full-Stack Developer</p>
          <p className="md:text-lg text-[10px] leading-4 md:leading-7">
           I’m a full stack developer with a focus on building performant and maintainable web applications using the MERN stack (MongoDB, Express.js, React, Node.js). I specialize in crafting responsive UIs with Tailwind CSS, optimizing user experiences across devices while ensuring clean, modular architecture. With a strong eye for dynamic component rendering and a methodical approach to debugging, I build apps that are as scalable as they are elegant.
          </p>
        </div>
        <div className="pt-10">
          tech i do work with :
          <p className="flex flex-wrap gap-3">
            <TechComponent img="svg/react.svg" name="React" />
            <TechComponent img="svg/tailwind.svg" name="Tailwind CSS" />
            <TechComponent img="svg/typescript.svg" name="TypeScript" />
            <TechComponent img="svg/mongodb.svg" name="Mongodb" />
            <TechComponent img="svg/express.svg" name="Express" />
            <TechComponent img="svg/bootstrap.svg" name="BootStrap" />
          </p>
        </div>
      </div>
      <div className="w-2/4" >
      <img  className="w-96 rounded-full object-cover m-auto" src="images/hema.jpg" alt="hema" />
      </div>
    </div>
  );
}

export default HomePage;
