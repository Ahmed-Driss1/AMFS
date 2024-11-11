export default function Hero() {
    return (
        <>
            <section className="w-full min-h-screen bg-light flex flex-col items-center justify-center gap-y-24">
                <div className="flex flex-col justify-center "> 
                <h1 className="mt-10 sm:mt-10 md:mt-20 font-amulya text-5xl sm:text-4xl md:text-5xl lg:text-7xl text-center text-accent">
                    Come surf with us!
                </h1>
                <p className="text-dark font-synonym text-center text-sm">some rondom texte I didn't decide it yet ok</p>
                </div>
                <button className="font-synonym font-black  border-4 border-accent text-dark lg:text-2xl lg:h-20 sm:w-1/2 sm:text-lg md:w-1/3 lg:w-1/5 p-3 rounded-lg lg:hover:scale-110 transition-transform duration-500 mt-6">
                    Book a Session
                </button>
            </section>
        </>
    );
}
