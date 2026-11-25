import { Link } from "react-router";

const categories: TCategoryLink[] = [
  {
    label: "soft plushies 1",
    imgUrl: "https://dummyimage.com/200x200",
    slug: "/shop?category=soft-plushies",
  },
  {
    label: "soft plushies 2",
    imgUrl: "https://dummyimage.com/200x200",
    slug: "/shop?category=soft-plushies",
  },
  {
    label: "soft plushies 3",
    imgUrl: "https://dummyimage.com/200x200",
    slug: "/shop?category=soft-plushies",
  },
  {
    label: "soft plushies 4",
    imgUrl: "https://dummyimage.com/200x200",
    slug: "/shop?category=soft-plushies",
  },
  {
    label: "soft plushies 5",
    imgUrl: "https://dummyimage.com/200x200",
    slug: "/shop?category=soft-plushies",
  },
  {
    label: "soft plushies 6",
    imgUrl: "https://dummyimage.com/200x200",
    slug: "/shop?category=soft-plushies",
  },
  {
    label: "soft plushies 7",
    imgUrl: "https://dummyimage.com/200x200",
    slug: "/shop?category=soft-plushies",
  },
];

export default function ExploreCategories() {
  return (
    <section className="bg-background-2 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="xl:text-5xl sm:text-3xl text-2xl font-semibold title-font mb-4 text-foreground-2">
            {"KID'S FAVORITE COLLECTION"}
          </h2>
        </div>
        <div className="flex flex-wrap -m-4 justify-center mb-20">
          {categories.map(({ label, imgUrl, slug }) => (
            <Link
              to={slug}
              className="lg:w-1/6 md:w-1/4 p-4 w-1/2 nth-[n+7]:hidden max-lg:nth-[n+5]:hidden max-sm:nth-[n+3]:hidden block"
            >
              <img
                alt="ecommerce"
                className="object-contain object-center max-size-full block rounded-full aspect-square mx-auto"
                src={imgUrl}
              />
              <div className="mt-4">
                <h3 className="text-foreground-2 title-font text-lg font-medium text-center">
                  {label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-center w-full">
          <Link to={"/categories"}>
            <button className="btn btn-black">Explore More</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
