import aboutimage1 from "@/assets/images/about1.jpg";
import aboutimage2 from "@/assets/images/about2.jpg";

export default function About() {
    return (
        <>
            <section className="min-h-screen bg-light flex flex-col items-center gap-7 py-8">
                <h1 className="font-amulya text-center text-accent text-5xl pt-10">More than a surf club</h1>

                <div className="p-5 grid gap-4 sm:gap-y-20 lg:gap-y-12 grid-cols-1 lg:grid-cols-3 pt-14 px-4 lg:px-28 ">
                    {/* First Row: Text 2/3, Image 1/3 */}
                    <p className="font-synonym text-lg text-dark lg:col-span-2 lg:order-1 order-1 text-center lg:text-left mx-auto lg:mx-0 lg:pr-8 ">
                        Located in Rabat, Morocco, Morocco Association of Free Surfers is a community of surfers
                        from all around the world, united by our love for the ocean and the thrill of surfing.
                        Whether you’re a complete beginner or an experienced surfer, we offer a friendly and
                        supportive environment where everyone can learn and improve. Our club is not just about
                        surfing—it’s about creating lasting connections, sharing experiences, and enjoying the
                        waves together as a family.
                    </p>
                    <img
                        src={aboutimage1}
                        alt="group of surfers"
                        className="w-full h-auto lg:col-span-1 lg:order-2 order-2 rounded-lg lg:hover:scale-105 lg:hover:shadow-2xl transition-all duration-500"
                    />

                    {/* Second Row: Image 1/3, Text 2/3 */}
                    <img
                        src={aboutimage2}
                        alt="high performer surfing"
                        className="w-full h-auto lg:col-span-1 lg:order-3 order-4 rounded-lg lg:hover:scale-105 lg:hover:shadow-2xl transition-all duration-500"
                    />
                    <p className="font-synonym text-lg text-dark lg:col-span-2 lg:order-4 order-3 text-center lg:text-left mx-auto lg:mx-0 lg:pl-8">
                        Our mission is to keep growing the sport of surfing in Morocco and help people push their limits.
                        We believe that every wave offers a chance to improve, and our team of experienced instructors is here
                        to guide you on that journey. With the stunning Moroccan coastline as our playground, we’re dedicated
                        to making sure each member feels supported while progressing in their surfing skills and becoming part
                        of our global surf family.
                    </p>
                </div>
                <button className="font-synonym font-black border-4 border-accent text-dark lg:text-2xl lg:h-20 sm:w-1/2 sm:text-lg md:w-1/3 lg:w-1/5 p-3 rounded-lg lg:hover:scale-110 transition-transform duration-500 mt-6">
                    More about us
                </button>
            </section>
        </>
    );
}
