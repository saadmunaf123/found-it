const Header = () => {
    return (
        <div className="flex w-full flex-col">
            <div className="font-sans-mono text-[10px] font-medium uppercase tracking-widest text-amber-600 sm:text-[11px] md:tracking-[0.2em]">
                Campus lost & found registry
            </div>

            <div className="mt-2 mb-4 flex w-full flex-col text-start font-fraunces text-3xl font-semibold leading-[1.1] sm:text-4xl md:w-[75%] md:text-5xl lg:w-[60%]">
                <span>Lost something? Found Something?</span>
                <span>Find it here — not on a WhatsApp group!</span>
            </div>
        </div>
    );
};

export default Header;
