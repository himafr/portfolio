function AboutMePage() {
  return (
    <div className="w-full max-w-7xl px-4 mx-auto sm:px-8 mt-24">
      <blockquote className="relative grid items-center bg-white/30 shadow-xl md:grid-cols-3 rounded-xl">
        <img
          className="hidden object-cover w-full h-full rounded-l-xl md:block"
          style={{ clipPath: "polygon(0 0%, 100% 0%, 75% 100%, 0% 100%)" }}
          src="/images/hema.png"
        />

        <article className="relative p-6 md:p-8 md:col-span-2">
          <svg
            className="absolute top-0 right-0 hidden w-24 h-24 -mt-12 -mr-12 text-primary-600 md:block"
            width="256"
            height="256"
            viewBox="0 0 256 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M65.44 153.526V149.526H61.44H20.48C11.3675 149.526 4 142.163 4 133.105V51.4211C4 42.3628 11.3675 35 20.48 35H102.4C111.513 35 118.88 42.3628 118.88 51.4211V166.187C118.88 195.935 95.103 220.165 65.44 220.979V153.526ZM198.56 153.526V149.526H194.56H153.6C144.487 149.526 137.12 142.163 137.12 133.105V51.4211C137.12 42.3628 144.487 35 153.6 35H235.52C244.633 35 252 42.3628 252 51.4211V166.187C252 195.935 228.223 220.165 198.56 220.979V153.526Z"
              stroke="currentColor"
              stroke-width="8"
            ></path>
          </svg>

          <div className="space-y-8">
            <p className="text-base sm:leading-relaxed md:text-xl">
              Hi, I'm Hema — a frontend developer who loves making websites look
              great and work smoothly. 
              <br/>
              I enjoy turning hard problems into
              simple, clean solutions using tools like React, TypeScript, and
              Tailwind CSS. 
              <br/>
              
              I graduated from King Marriott Academy, where I
              started my journey in tech and built the skills that help me write
              clean, smart code today.
              <br/>
              I care a lot about writing reusable code, making
              websites load fast, and creating layouts that look good on every
              screen.
              I like building things that are both beautiful and easy to use. If
              you like smooth user experiences, simple designs, and strong code
              — we probably have a lot in common.
            </p>

            <footer className="flex items-center space-x-4 md:space-x-0">
              <img
                className="w-12 h-12 rounded-full md:hidden"
                src="/images/hema.png"
              />
              <span className="font-bold text-lg">Hema Sallem</span>
            </footer>
          </div>
        </article>
      </blockquote>
    </div>
  );
}

export default AboutMePage;
