import Navbar       from '@/components/layout/Navbar'
import Footer       from '@/components/layout/Footer'
import Hero         from '@/components/sections/Hero'
import Portrait     from '@/components/sections/Portrait'
import Services     from '@/components/sections/Services'
import WhyMe        from '@/components/sections/WhyMe'
import Gallery      from '@/components/sections/Gallery'
import Testimonials from '@/components/sections/Testimonials'
import BlogPreview  from '@/components/sections/BlogPreview'
import Contact      from '@/components/sections/Contact'
import Cta          from '@/components/sections/Cta'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />         {/* dark  — forest   */}
        <Portrait />     {/* light — ivory    */}
        <Services />     {/* light — cream    */}
        <WhyMe />        {/* dark  — forest   */}
        <Gallery />      {/* dark  — ivory   */}
        <Testimonials /> {/* light — warm-white    */}
        <BlogPreview />  {/* light — cream    */}
        <Contact />      {/* dark  — forest   */}
        <Cta />          {/* dark  — forest   */}
      </main>
      <Footer />
    </>
  )
}