export default function Hero() {
  return (
    <section className="text-gray-400 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font lg:text-7xl sm:text-4xl text-3xl mb-4 font-bold text-white uppercase">
            SPARK JOY WITH EVERY TOY
          </h1>
          <div className="flex justify-center">
            <button id="button">SHOP GAMES & PUZZLES</button>
          </div>
        </div>
        <div className="lg:max-w-1/2 lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/hero.webp"
          />
        </div>
      </div>
    </section>
  );
}
