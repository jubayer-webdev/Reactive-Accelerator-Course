import Navigation from "./navbar/Navigation";

const NavbarSection = () => {
    return (
        <nav>
            <div className="flex max-w-7xl items-center bg-[#F9FAFB] w-full justify-between py-1 mt-2 border px-4 rounded-md mx-auto">
                {/* <!-- Logo --> */}
                <div>
                    <img src="/image/favicon.svg" className="h-14" />
                </div>

                {/* <!-- Menu --> */}
                <div className="hidden md:block">
                    <Navigation />
                </div>

                {/* <!-- Button --> */}
                <div className="px-6 py-2 bg-teal-600 text-white w-fit rounded-md">
                    Get App
                </div>
            </div>
        </nav>
    );
};

export default NavbarSection;