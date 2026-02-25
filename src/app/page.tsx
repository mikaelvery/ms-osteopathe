import Navbar      from '@/components/layout/Navbar'
import Footer      from '@/components/layout/Footer'
import Hero        from '@/components/sections/Hero'
import Services    from '@/components/sections/Services'
import About       from '@/components/sections/About'
import Portrait    from '@/components/sections/Portrait'
import Gallery     from '@/components/sections/Gallery'
import Contact     from '@/components/sections/Contact'
import Testimonials from '@/components/sections/Testimonials'
import Cta         from '@/components/sections/Cta'
import BlogPreview from '@/components/sections/BlogPreview'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
        <Testimonials />
        <Portrait />
        <Gallery />
        <BlogPreview />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
