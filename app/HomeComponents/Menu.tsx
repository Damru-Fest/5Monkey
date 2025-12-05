import Image from "next/image"
export default function Menu(){
    return(
        <>
        <div className="w-screen overflow-hidden">
            <div className="w-full flex flex-col gap-6 mt-20 justify-center  relative items-center content-center">
                    <Image src="/svg/Leaf.svg" alt="Menu Image" width={500} height={300}
                    className="w-70 h-90 -top-40  -right-30 -z-1  rotate-300 absolute   rounded-4xl" />
                   
                    <Image src="/svg/DesignL.svg" alt="Menu Image"  width={500} height={300}
                    className="w-70 h-90 -z-1  -right-6 bottom-0  rotate-200 absolute  opacity-80" />

                <h1 className="md:text-6xl text-3xl fontchange">Explore Our <span className="text-[#7E4300]">Menu</span></h1>

                <div className="flex flex-row w-full h-full relative justify-center mt-20">
                    <img src="./svg/cards.svg" alt=""
                    className="w-200" />
                </div>

                <button className="border py-3 px-5 rounded-4xl  cursor-pointer" onClick={()=>{
                    window.location.href="/menu";
                }}>View Menu</button>
                
                <Image src="/svg/Leaf.svg" alt="Menu Image" width={500} height={300}
                className="md:w-70 md:h-90 w-50 h-60 md:-bottom-20 -bottom-10 -z-1 -left-30  rotate-200 absolute   rounded-4xl" />
                
                <Image src="/svg/DesignR.svg" alt="Menu Image" width={500} height={300}
                className="w-70 h-90 -z-1   -left-13  rotate-200 absolute  opacity-70" />
                

            </div>

        </div>
        </>
    )
}