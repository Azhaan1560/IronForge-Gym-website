import Image from "next/image";
export default function Footer() {
    return (
        <footer className="w-full pt-section-gap-sm pb-8 bg-obsidian-black border-t border-border-dark">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop max-w-container-max mx-auto mb-12">
            <div className="col-span-1 md:col-span-1">
                <a className="font-headline-md text-headline-md text-on-surface uppercase flex items-center gap-2 mb-4" href="#">
                    <Image src="https://lh3.googleusercontent.com/aida/AP1WRLverVzseFxUgj5Ie9SsZSUbNpn0aUEtUBeavN4BnUdrzh913zejMLNIXwZeH6eaJ9093e5U6c0iQAPtoylM5GzXRwy46q2HKcKAmpPnRbQmUYkjLjximeTV7232luS3_dsaXZv3tB2vSQEI8gUydxFvu10KhCs4IZ1Ezw6u6LIzie7NU8mg6KGJJRMq2b2h8gTSk3SJZQTnKXJ7Oed4DPSeCavYXvEanZQJslWOoQKwQnBk9EsQfV_rX-PS"
                    alt="Iron Forge Anvil Icon"
                    width={32}
                    height={32}
                    className="h-8 w-auto"/>
                    <span className="text-electric-blue font-bold uppercase tracking-tight">IRON FORGE</span>
                </a>
                <p className="text-metadata-grey text-sm mb-6">
                    Forging strength, discipline, and resilience. Welcome to the elite tier of fitness.
                </p>
                
            </div>
            
            <div className="col-span-1">
                <h4 className="font-label-bold text-label-bold text-on-surface uppercase mb-4 tracking-widest">Navigation</h4>
                <ul className="space-y-2 font-body-md text-body-md">
                    <li className=""><a className="text-metadata-grey hover:text-electric-blue transition-colors" href="#about">About Us</a></li>
                    <li className=""><a className="text-metadata-grey hover:text-electric-blue transition-colors" href="#services">Programs</a></li>
                    <li className=""><a className="text-metadata-grey hover:text-electric-blue transition-colors" href="#trainers">Coaches</a></li>
                    <li className=""><a className="text-metadata-grey hover:text-electric-blue transition-colors" href="#plans">Membership</a></li>
                </ul>
            </div>
            <div className="col-span-1">
                <h4 className="font-label-bold text-label-bold text-on-surface uppercase mb-4 tracking-widest">Legal</h4>
                <ul className="space-y-2 font-body-md text-body-md">
                    <li className=""><a className="text-metadata-grey hover:text-electric-blue transition-colors" href="#">Privacy Policy</a></li>
                    <li className=""><a className="text-metadata-grey hover:text-electric-blue transition-colors" href="#">Terms of Service</a></li>
                    <li className=""><a className="text-metadata-grey hover:text-electric-blue transition-colors" href="#">FAQ</a></li>
                    <li className=""><a className="text-metadata-grey hover:text-electric-blue transition-colors" href="#">Careers</a></li>
                </ul>
            </div>
            <div className="col-span-1">
                <h4 className="font-label-bold text-label-bold text-on-surface uppercase mb-4 tracking-widest">Contact</h4>
                    <ul className="space-y-2 font-body-md text-body-md text-metadata-grey">
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">location_on</span> 123 Industrial Way, Metal City</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">phone</span> (555) 019-8372</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">mail</span> join@ironforge.gym</li>
                </ul>
                </div>
            </div>
            <div className="border-t border-border-dark px-margin-desktop max-w-container-max mx-auto pt-8 text-center md:text-left">
                <p className="font-body-md text-body-md text-metadata-grey text-center uppercase tracking-widest">© 2024 IRON FORGE GYM. ALL RIGHTS RESERVED. FORGED IN STRENGTH.</p>
            </div>
        </footer>
    );
}

