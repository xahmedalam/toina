import { Link } from "react-router";
import StarSvg from "../../assets/StarSvg";
import { products } from "../../products";

export default function ExploreProducts() {
  function getPercentage(ratingStars: number) {
    return (ratingStars / 5) * 100;
  }

  return (
    <section className="bg-background body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="xl:text-5xl sm:text-3xl text-2xl font-semibold title-font mb-4 text-foreground">
            TOP PLAYTIME PICKS
          </h2>
        </div>
        <ul className="flex flex-wrap -m-4">
          {products.map(
            ({ label, priceUsd, imgUrl, ratingStars, ratings, slug }) => (
              <li className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link to={slug} className="block hover:[&_h3]:text-primary">
                  <div className="relative h-60 rounded overflow-hidden bg-white">
                    <img
                      alt="product image"
                      className="object-contain object-center w-full h-full block"
                      src={imgUrl}
                    />
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between items-center tracking-widest title-font mb-1">
                      <span className="text-xs inline-flex items-center space-x-1">
                        <span className="relative inline-flex items-center">
                          <span className="inline-flex flex-nowrap *:size-4 text-gray-500">
                            {Array.from({ length: 5 }, (_, i) => (
                              <StarSvg key={i} />
                            ))}
                          </span>
                          <span
                            className="absolute top-0 left-0 *:inline *:size-4 text-primary whitespace-nowrap overflow-hidden"
                            style={{ width: `${getPercentage(ratingStars)}%` }}
                          >
                            {Array.from({ length: 5 }, (_, i) => (
                              <StarSvg key={i} />
                            ))}
                          </span>
                        </span>
                        <span>{ratingStars}</span>
                        <span className="text-primary">{`(${ratings})`}</span>
                      </span>
                      <p className="text-lg font-medium">${priceUsd}</p>
                    </div>
                    <h3 className="text-white title-font text-base font-normal line-clamp-2 transition-colors">
                      {label}
                    </h3>
                  </div>
                </Link>
              </li>
            ),
          )}
        </ul>
        <div className="flex flex-col items-center w-full mt-20">
          <Link to={"/products"}>
            <button className="btn">Explore More</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
