import Link from "next/dist/client/link";
import Image from "next/image";

const Register = () => {
    return (
        <div className="mx-auto flex min-h-20 w-full max-w-6xl flex-1 flex-col items-center justify-center px-4 py-4 sm:px-6 sm:py-6 md:px-10 md:py-10">
            <form className="flex w-full max-w-5xl flex-col items-stretch gap-0 rounded-xl borders border border-nav bg-box shadow-sm md:flex-row p-0 transition delay-50 duration-250 hover:-translate-y-1 hover:shadow-lg">

                {/* Form Section - 60% */}
                <div className="flex w-full flex-col px-5 py-8 sm:px-8 md:w-[65%] md:flex-none md:px-12 md:py-10">
                    <div className="font-sans-mono text-[10px] font-medium uppercase tracking-widest text-amber-600 sm:text-[11px] md:tracking-[0.2em]">
                        Join the Registry
                    </div>

                    <div className="mt-2 mb-4 flex w-full flex-col text-start font-fraunces text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-5xl">
                        Create an account
                    </div>

                    <div className="flex flex-col gap-4">

                        <div>
                            <label
                                htmlFor="name"
                                className="block text-start font-space-mono text-[10px] font-medium uppercase tracking-widest sm:text-[11px] md:tracking-[0.2em]"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                autoComplete="name"
                                placeholder="John Doe"
                                className="w-full font-space-mono tracking-widest md:tracking-[0.15em] rounded-none border-2 border-t-0 border-r-0 border-l-0 border-nav bg-none px-3 py-2 text-gray-500 placeholder:text-gray-400 focus:outline-0 focus:ring-0 focus:ring-amber-600 focus:border-t-0 focus:border-r-0 focus:border-l-0 hover:border-amber-600"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="name"
                                className="block text-start font-space-mono text-[10px] font-medium uppercase tracking-widest sm:text-[11px] md:tracking-[0.2em]"
                            >
                                Email
                            </label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                autoComplete="email"
                                className="w-full font-space-mono tracking-widest md:tracking-[0.15em] rounded-none border-2 border-t-0 border-r-0 border-l-0 border-nav bg-none px-3 py-2 text-gray-500 placeholder:text-gray-400 focus:outline-0 focus:ring-0 focus:ring-amber-600 focus:border-t-0 focus:border-r-0 focus:border-l-0 hover:border-amber-600"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="name"
                                className="block text-start font-space-mono text-[10px] font-medium uppercase tracking-widest sm:text-[11px] md:tracking-[0.2em]"
                            >
                                Phone
                            </label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                autoComplete="phone"
                                placeholder="+91 91956 34748"
                                className="w-full font-space-mono tracking-widest md:tracking-[0.15em] rounded-none border-2 border-t-0 border-r-0 border-l-0 border-nav bg-none px-3 py-2 text-gray-500 placeholder:text-gray-400 focus:outline-0 focus:ring-0 focus:ring-amber-600 focus:border-t-0 focus:border-r-0 focus:border-l-0 hover:border-amber-600"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="name"
                                className="block text-start font-space-mono text-[10px] font-medium uppercase tracking-widest sm:text-[11px] md:tracking-[0.2em]"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                autoComplete="password"
                                className="w-full font-space-mono tracking-widest md:tracking-[0.15em] rounded-none border-2 border-t-0 border-r-0 border-l-0 border-nav bg-none px-3 py-2 text-gray-500 placeholder:text-gray-400 focus:outline-0 focus:ring-0 focus:ring-amber-600 focus:border-t-0 focus:border-r-0 focus:border-l-0 hover:border-amber-600"
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full min-borders rounded bg-gray-900 px-3 py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-600 uppercase tracking-widest sm:px-4 sm:py-3 sm:text-[11px] md:tracking-[0.2em]"
                            >
                                Create Account
                            </button>
                        </div>

                        <div>
                            <p className="text-start font-space-mono text-[10px] font-medium uppercase tracking-widest text-gray-500 sm:text-[11px] md:tracking-[0.2em]">
                                Already have an account? <Link href="/pages/loginpage" className="text-amber-600 hover:underline">Log in</Link>
                            </p>
                        </div>
                    </div>
                </div>


                {/* Image Section */}
                <div className="borders relative m-0 flex w-full overflow-hidden rounded-b-xl p-0 md:w-[35.1%] md:flex-none md:rounded-bl-none md:rounded-r-xl">
                    <Image
                        src="/man-sitting-desk-front-computer_1072138-173340.jpg"
                        alt="Registration illustration"
                        width={600}
                        height={800}
                        priority
                        sizes="(max-width: 767px) 100vw, 35.1vw"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>

            </form>
        </div>
    );
};

export default Register;