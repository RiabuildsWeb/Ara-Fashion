const AboutHero = () => {
  return (
    <section className=" overflow-hidden">
        <div className="w-full max-w-7xl mt-5">
          <div className="flex justify-center ">
            <div className="max-w-xl text-black">
              <p className="uppercase tracking-[0.3em] text-sm md:text-base text-black/90">
                About ARA
              </p>
            </div>
          </div>
        </div>

     <div className='flex flex-col text-sm text-gray-900  mx-4 my-4 md:mx-20 md:my-10 gap-4'>
      <div>
        <p className="text-base md:text-lg leading-8 ">
                ARA is a contemporary African fashion brand celebrating
                heritage, craftsmanship, and timeless design. Every piece is
                thoughtfully created to honour our culture while embracing modern aesthetics. Our collections are a fusion of traditional African textiles and contemporary silhouettes, reflecting the rich diversity of our continent. We believe in sustainable fashion, ensuring that each garment is ethically produced with respect for both people and the planet.
          </p>
      </div>
       <div><p className='text-base md:text-lg leading-8'> At ARA we believe in the power of fashion to tell stories and create connections. We are committed to showcasing the best of African design on the global stage, while staying true to our roots and values.</p></div>
          
         <div><p className='text-base md:text-lg leading-8'> Welcome to our World of African Fashion! </p></div>  
          
</div>

    </section>
  )
}

export default AboutHero
