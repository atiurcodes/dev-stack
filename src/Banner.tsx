import bannerImage from './assets/banner-stack.png'
const Banner = () => {
    return (
        <section className='container mx-auto px-4'>
            <div className='flex flex-col md:flex-row md:items-center'>
                <div className='flex-1 pt-4'>
                    <h1 className='text-text-primary font-bold text-3xl text-center md:text-start md:text-6xl pb-1'>Build Your Ideal</h1>
                    <h2 className='font-bold text-4xl md:text-6xl text-center md:text-start brand-color md:pb-8'>Development Stack</h2>
                    <p className='text-text-secondary md:text-xl text-center md:text-start leading-6 md:leading-8 py-4 md:py-0'>Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.</p>
                    <div className='flex flex-wrap justify-center md:justify-start gap-4 md:gap-5 mt-2 md:py-8'>
                        <button className='btn brand-bg font-semibold text-white hover:opacity-90 transition duration-200'>Explore Technologies</button>
                        <button className="btn border border-text-secondary text-text-secondary hover:bg-slate-100 hover:border-slate-400 transition duration-200">Learn More</button>
                    </div>
                </div>
                <div className='flex-1 flex justify-center'>
                    <img
                        src={bannerImage}
                        alt="Development stack illustration"
                        className="w-full max-w-sm md:max-w-md object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;