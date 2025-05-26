import Head from 'next/head';
import Link from 'next/link';

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog | the eksperts</title>
        <meta name="description" content="Latest blog posts and insights from the eksperts." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <meta property="og:image" content="https://www.the-eksperts.com/images/the%20eksperts%20vertical%20blue.png" />

      </Head>

      <main className="font-matt max-w-[1280px] mx-auto p-4 lg:p-2 mb-[100px]">
        {/* Header Section */}
        <header className="text-center mt-[100px] mb-[160px] lg:mt-[150px] lg:mb-[250px]">
          <h1 className="lg:block hidden text-6xl font-extrabold text-black mb-4 tracking-tight uppercase font-matt" style={{ fontSize: '174px', letterSpacing: '-2.88px', lineHeight: '158px'}}>
            GUT ZU WISSEN
          </h1>
          <h1 className="lg:hidden block text-[90px] leading-[109px] font-matt font-[900] text-center tracking-tight mb-2 lg:mb-8 ">
            GUT ZU WISSEN
          </h1>
          <p className="text-lg font-light text-gray-600">
            Sie haben die eksperts gefunden. Entdecken Sie unsere neuesten Blogposts!
          </p>
        </header>

        {/* Blog Posts Section */}
        <section>
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
            {/* Post 1 */}
            <Link href="/blog/nearshoring-mit-the-eksperts">
              <div className="bg-white  overflow-hidden flex flex-col lg:h-[479px]" >
                <img
                  src="/images/kosova.png" // Replace with actual image path
                  alt="Kosova"
                  className="w-full lg:h-[300px] h-[250px] object-cover rounded-[12px]"
                />
                <div className="py-4">
                  <h3 className="text-[24px] font-matt  uppercase font-[900] leading-[37px] text-black">Kosova - Nearshoring mit the eksperts</h3>
                  <p className="text-[#5A585A] text-[18px]  font-matt mb-2">
Lesedauer: ca. 5 Minuten                  </p>
                </div>
              </div>
            </Link>

            {/* Post 2 */}
            <Link href="/blog/der-unterschatzte-boost">
              <div className="bg-white  overflow-hidden flex flex-col lg:h-[956px]" >
                <img
                  src="/images/briefing.png" // Replace with actual image path
                  alt="Vom Briefing zum Launch"
                  className="w-full lg:h-[758px] h-[250px] object-cover rounded-[12px]"
                />
                <div className="py-4">
                   <h3 className="text-[24px] font-matt  uppercase font-[900] leading-[37px] text-black">Der unterschätzte Boost</h3>
 <p className="text-[#5A585A] text-[18px]  font-matt mb-2">Lesedauer: ca. 2 Minuten                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Post 3 */}
          <Link href="/blog/briefing-launch">
            <div className="bg-white  overflow-hidden flex flex-col lg:w-[620px] lg:h-[479px] lg:mt-[-500px] mt-[24px] ">
              <img
                src="/images/boost.png" // Replace with actual image path
                alt="Der unterschätzte Boost"
                className="w-full lg:h-[300px] h-[250px] object-cover rounded-[12px]"
              />
              <div className="py-4">
                 <h3 className="text-[24px] font-matt  uppercase font-[900] leading-[37px] text-black">Vom Briefing zum Launch</h3>
 <p className="text-[#5A585A] text-[18px]  font-matt mb-2">Lesedauer: ca. 4-5 Minuten                </p>
              </div>
            </div>
          </Link>

          {/* Post 4 */}
          <Link href="/blog/agile-projektleitung">
            <div className="bg-white  overflow-hidden flex flex-col lg:h-[479px] lg:mt-[-50px] mt-[20px]">
              <img
                src="/images/agile.png" // Replace with actual image path
                alt="Agile Projektleitung"
                className="w-full lg:h-[300px] h-[250px] object-cover rounded-[12px]"
              />
              <div className="py-4">
                 <h3 className="text-[24px] font-matt  uppercase font-[900] leading-[37px] text-black">Agile Projektleitung</h3>
 <p className="text-[#5A585A] text-[18px] font-matt mb-2">Lesedauer: ca. 3 Minuten                </p>
              </div>
            </div>
          </Link>
        </section>
        <section className='lg:mt-[-55px] flex flex-col lg:flex-row gap-[30px]'>
     <Link href="/blog/salesforce-consultant">
            <div className="bg-white  overflow-hidden flex flex-col lg:w-[622px] lg:h-[479px]">
              <img
                src="/images/logoss/blog5.png" // Replace with actual image path
                alt="Agile Projektleitung"
                className="w-full lg:h-[300px] h-[250px] object-cover rounded-[12px]"
              />
              <div className="py-4">
                 <h3 className="text-[24px] font-matt  uppercase font-[900] leading-[37px] text-black">Was unterscheidet Sie von anderen Salesforce-Beratern?</h3>
 <p className="text-[#5A585A] text-[18px] font-matt mb-2">Lesedauer: ca. 3 Minuten                </p>
              </div>
            </div>
          </Link>
               <Link href="/blog/der-start-deiner-salesforce-zertifizierungs-reise">
            <div className="bg-white  overflow-hidden flex flex-col lg:w-[622px] lg:h-[479px]">
              <img
                src="/images/logoss/blog6.png" // Replace with actual image path
                alt="Agile Projektleitung"
                className="w-full lg:h-[300px] h-[250px] object-cover rounded-[12px]"
              />
              <div className="py-4">
                 <h3 className="text-[24px] font-matt  uppercase font-[900] leading-[37px] text-black">Der Start deiner Salesforce-(Zertifizierung's)-Reise</h3>
 <p className="text-[#5A585A] text-[18px] font-matt mb-2">Lesedauer: ca. 4 Minuten                </p>
              </div>
            </div>
          </Link>
        </section>
      </main>
    </>
  );
};

export default Blog;
