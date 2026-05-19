import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Stack } from "@/components/sections/stack";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="relative">
        <Hero />
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <About />
          <Experience />
          <Stack />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  );
}
