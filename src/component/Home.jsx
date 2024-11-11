export default function Home() {
    return (
        <>
            <section className="w-full min-h-screen bg-slate-300 flex flex-col items-center justify-center">
                <h1 className="m-10 sm:m-10 md:m-20 font-amulya text-5xl sm:text-4xl md:text-5xl lg:text-7xl text-center">
                    Come surf with us!
                </h1>

                <button className="font-synonym border-4 font-black w-2/3 sm:w-1/2 md:w-1/3 text-lg p-3 rounded-lg lg:hover:scale-110 transition-transform duration-500 mt-6">
                    Book a session
                </button>
            </section>
        </>
    );
}
