import GalleryHero from "./components/GalleryHero"
import GalleryGrid from "./components/GalleryGrid";
export default function Page()
{
    return (
        <main className="flex-grow pt-[64px]">
            <GalleryHero />
            <section className="py-section-gap-sm md:py-section-gap-lg px-margin-mobile md:px-margin-desktop">
                <div className="max-w-container-max mx-auto">
                <GalleryGrid />
                </div>
            </section>
         </main>
    );
}