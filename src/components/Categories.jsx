import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const categories = [
    {
        number: "01",
        title: "Digital Art",
        description: "Creative artwork made with digital tools.",
    },
    {
        number: "02",
        title: "Illustration",
        description: "Unique illustrations, characters and visual stories.",
    },
    {
        number: "03",
        title: "Photography",
        description:
            "Moments, places and stories captured through photography.",
    },
    {
        number: "04",
        title: "3D Art",
        description: "Creative 3D scenes, objects and digital experiments.",
    },
];

function Categories() {
    return (
        <section className="bg-[#F5EBDD] px-6 py-20 transition-colors duration-500 dark:bg-[#1e1810]  lg:px-10 lg:py-28">
            <div className="mx-auto max-w-7xl">

                {/* Section Header */}
                <div className="mb-12 max-w-2xl animate-fade-up">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#D97757]">
                        Explore
                    </p>

                    <h2 className="text-4xl font-bold tracking-tight text-[#151515] transition-colors duration-500 dark:text-[#F5EBDD] sm:text-5xl">
                        Find your kind of art.
                    </h2>

                    <p className="mt-5 text-base leading-7 text-[#151515]/60 transition-colors duration-500 dark:text-[#F5EBDD]/60 ">
                        Explore different creative styles and discover artwork that speaks
                        to you.
                    </p>
                </div>

                {/* Categories */}
                <div className="divide-y divide-[#151515]/15 border-y border-[#151515]/15 transition-colors duration-500 dark:divide-[#F5EBDD]/15 dark:border-[#F5EBDD]/15 ">

                    {categories.map((category, index) => (
                        <Link
                            key={category.title}
                            to={`/explore?category=${encodeURIComponent(category.title)}`}
                            className="group flex items-center justify-between gap-6 py-7 transition-all duration-500 hover:-translate-y-1 hover:px-4"
                            style={{
                                animation: `fadeUp 0.7s ease-out ${index * 0.12}s both`,
                            }}
                        >

                            {/* Left Side */}
                            <div className="flex items-center gap-6 sm:gap-10">

                                {/* Number */}
                                <span className="text-sm text-[#151515]/40 transition duration-500 group-hover:translate-x-1 group-hover:text-[#D97757] dark:text-[#F5EBDD]/40 ">
                                    {category.number}
                                </span>

                                {/* Text */}
                                <div>
                                    <h3 className="text-2xl font-semibold text-[#151515] transition duration-500 group-hover:translate-x-2 group-hover:text-[#D97757] dark:text-[#F5EBDD]  sm:text-3xl">
                                        {category.title}
                                    </h3>

                                    <p className="mt-2 max-w-md text-sm leading-6 text-[#151515]/55 transition duration-500 group-hover:translate-x-2 dark:text-[#F5EBDD]/55 ">
                                        {category.description}
                                    </p>
                                </div>

                            </div>

                            {/* Arrow */}
                            <span className="text-lg text-[#151515]/40 transition-all duration-500 group-hover:translate-x-3 group-hover:scale-110 group-hover:text-[#D97757] dark:text-[#F5EBDD]/40 ">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </span>

                        </Link>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Categories;