export default function Hero(){
    return(
    <>
    <div className="flex flex-col w-screen justify-center items-center content-center h-[80vh]">
        <h1 className="text-5xl font-bold lg:w-[40%] w-[80%] text-center fontchange">Serving Classy Cuisine In <span className="text-[#7E4300]">Sonipat, Haryana</span></h1>
        <p className="mt-3 text-md">Where Italian Flavors meet European elegance</p>
        <div className="flex flex-row mt-6 gap-4">
            <button className="bg-[#7E4300] text-white px-8 py-4 rounded-4xl cursor-pointer">Book A Table</button>
             <button className="bg-white text-black px-8 py-4 rounded-4xl cursor-pointer">View Menu</button>
        </div>

    </div>
    </>
    )
}