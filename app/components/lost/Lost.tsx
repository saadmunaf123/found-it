"use client";

import { useParams } from "next/navigation";
import { useRef, useState, useEffect } from "react";

export default function Lost() {
    //   const params = useParams();
    //   const type = String(params.type || "").toUpperCase();

    //   const isLost = type === "LOST";
    //   const isFound = type === "FOUND";

    const type = "LOST";
    const isLost = true;
    const isFound = false;

    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string>("");
    const fileRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview);
        };
    }, [preview]);

    function handleFile(selectedFile: File | undefined) {
        if (!selectedFile || !selectedFile.type.startsWith("image/")) return;

        setFile(selectedFile);
        setPreview(URL.createObjectURL(selectedFile));
    }

    const accent = isLost ? "#D97757" : "#71866A";
    const accentLight = isLost ? "#FFF0E9" : "#EDF3E9";
    const accentDark = isLost ? "#A94E32" : "#4D6447";

    const title = isLost
        ? "Report a Lost Item"
        : "Report a Found Item";

    const description = isLost
        ? "Misplaced something important? Tell us about it, and let the community help bring it back to you."
        : "Found something that belongs to someone? Share a few details and help it find its way home.";

    const inputClass =
        "w-full rounded-xl border border-[#E5DED2] bg-[#FFFEFC] px-4 py-3.5 text-sm text-[#263238] placeholder:text-[#AAA49A] outline-none transition duration-200 focus:border-[#D97757] focus:bg-white focus:ring-4 focus:ring-[#D97757]/10";

    const labelClass =
        "mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#68685F]";

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#F7F3EB] px-4 py-10 sm:px-6 sm:py-14">
            {/* Soft background decoration */}
            <div
                className="pointer-events-none absolute -left-32 top-48 h-80 w-80 rounded-full blur-3xl"
                style={{ backgroundColor: `${accent}12` }}
            />
            <div className="pointer-events-none absolute -right-28 top-[35rem] h-80 w-80 rounded-full bg-[#E9C89D]/20 blur-3xl" />

            <div className="relative mx-auto max-w-6xl">
                {/* Hero section */}
                <section className="mx-auto mb-9 grid max-w-5xl grid-cols-1 items-center gap-7 sm:mb-12 sm:grid-cols-[1fr_auto] sm:gap-10">
                    <div>
                        <div
                            className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2"
                            style={{
                                backgroundColor: accentLight,
                                borderColor: `${accent}35`,
                                color: accentDark,
                            }}
                        >
                            <span
                                className="h-2 w-2 rounded-full"
                                style={{ backgroundColor: accent }}
                            />
                            <span className="font-tag text-[10px] font-bold uppercase tracking-[0.2em]">
                                {isLost ? "Lost something?" : "Found something?"}
                            </span>
                        </div>

                        <h1 className="max-w-2xl font-display text-4xl font-semibold leading-[1.12] tracking-tight text-[#202B32] sm:text-5xl lg:text-6xl">
                            {title}
                            <span style={{ color: accent }}>.</span>
                        </h1>

                        <p className="mt-5 max-w-2xl text-sm leading-7 text-[#747168] sm:text-base sm:leading-8">
                            {description}
                        </p>

                        <div className="mt-5 flex items-center gap-2 text-xs font-medium text-[#77756B]">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="h-4 w-4"
                                style={{ color: accent }}
                                aria-hidden="true"
                            >
                                <path
                                    d="M12 3L19 6V11C19 15.5 16 19 12 21C8 19 5 15.5 5 11V6L12 3Z"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M9 12L11 14L15 10"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span>Every detail helps reunite an item with its owner.</span>
                        </div>
                    </div>

                    {/* Colorful illustration */}
                    <div
                        className="relative hidden h-48 w-48 items-center justify-center rounded-[2.5rem] border shadow-sm sm:flex lg:h-56 lg:w-56"
                        style={{
                            backgroundColor: accentLight,
                            borderColor: `${accent}30`,
                        }}
                    >
                        <div
                            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-sm"
                            style={{ color: accent }}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="h-5 w-5"
                                aria-hidden="true"
                            >
                                <path
                                    d="M12 3V6M12 18V21M3 12H6M18 12H21M5.6 5.6L7.7 7.7M16.3 16.3L18.4 18.4M18.4 5.6L16.3 7.7M7.7 16.3L5.6 18.4"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>

                        <div className="relative flex h-28 w-28 items-center justify-center rounded-[2rem] bg-white shadow-[0_12px_30px_rgba(38,50,56,0.08)]">
                            <svg
                                viewBox="0 0 100 100"
                                fill="none"
                                className="h-24 w-24"
                                aria-hidden="true"
                            >
                                <path
                                    d="M34 34V26C34 17 41 11 50 11S66 17 66 26V34"
                                    stroke="#263238"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                                <rect
                                    x="20"
                                    y="31"
                                    width="60"
                                    height="55"
                                    rx="13"
                                    fill={isLost ? "#F5D7CA" : "#DCE8D6"}
                                    stroke="#263238"
                                    strokeWidth="3"
                                />
                                <path
                                    d="M28 49H72"
                                    stroke="#263238"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <rect
                                    x="43"
                                    y="56"
                                    width="14"
                                    height="12"
                                    rx="3"
                                    fill="#263238"
                                />
                            </svg>

                            <div
                                className="absolute -bottom-3 -right-3 flex h-11 w-11 items-center justify-center rounded-2xl text-white shadow-md"
                                style={{ backgroundColor: accent }}
                            >
                                {isLost ? (
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    >
                                        <circle
                                            cx="10.5"
                                            cy="10.5"
                                            r="6.5"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        />
                                        <path
                                            d="M15.5 15.5L21 21"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M5 12.5L9.5 17L19 7"
                                            stroke="currentColor"
                                            strokeWidth="2.2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                )}
                            </div>
                        </div>

                        <span
                            className="absolute bottom-5 left-5 h-3 w-3 rounded-full"
                            style={{ backgroundColor: accent }}
                        />
                        <span className="absolute left-8 top-8 h-2 w-2 rounded-full bg-[#E6B66D]" />
                    </div>
                </section>

                {/* Form card */}
                <section className="mx-auto max-w-5xl overflow-hidden rounded-[1.75rem] border border-[#EAE3D8] bg-[#FFFEFC] shadow-[0_20px_60px_rgba(56,46,30,0.07)]">
                    {/* Colored top strip */}
                    <div
                        className="h-1.5 w-full"
                        style={{
                            background: `linear-gradient(90deg, ${accent} 0%, #E8BD80 55%, #DDE7D5 100%)`,
                        }}
                    />

                    <div className="p-5 sm:p-8 md:p-10 lg:p-12">
                        {/* Form heading */}
                        <div className="mb-8 flex items-center justify-between gap-4 border-b border-[#EAE3D8] pb-6">
                            <div>
                                <div className="mb-2 flex items-center gap-2">
                                    <span
                                        className="flex h-8 w-8 items-center justify-center rounded-xl"
                                        style={{
                                            backgroundColor: accentLight,
                                            color: accentDark,
                                        }}
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            className="h-4 w-4"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M7 3.75H14L19 8.75V19.25A1.75 1.75 0 0 1 17.25 21H7A2 2 0 0 1 5 19V5.75A2 2 0 0 1 7 3.75Z"
                                                stroke="currentColor"
                                                strokeWidth="1.6"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M13.5 4V9H18.5M8.5 13H15.5M8.5 16.5H13"
                                                stroke="currentColor"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </span>
                                    <span
                                        className="font-tag text-[10px] font-bold uppercase tracking-[0.17em]"
                                        style={{ color: accentDark }}
                                    >
                                        Step 01 · Item information
                                    </span>
                                </div>

                                <h2 className="font-display text-2xl font-semibold text-[#263238] sm:text-3xl">
                                    Item details
                                </h2>
                                <p className="mt-2 text-xs leading-6 text-[#817B70] sm:text-sm">
                                    Fields marked with * are required.
                                </p>
                            </div>

                            <div
                                className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl sm:flex"
                                style={{ backgroundColor: accentLight, color: accentDark }}
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M7 3.75H14L19 8.75V19.25A1.75 1.75 0 0 1 17.25 21H7A2 2 0 0 1 5 19V5.75A2 2 0 0 1 7 3.75Z"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M13.5 4V9H18.5M8.5 13H15.5M8.5 16.5H15.5"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                        </div>

                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-7"
                        >
                            {/* Item name */}
                            <div className="sm:col-span-2">
                                <label htmlFor="title" className={labelClass}>
                                    Item name <span style={{ color: accent }}>*</span>
                                </label>
                                <input
                                    id="title"
                                    name="title"
                                    required
                                    placeholder="e.g. Black leather wallet"
                                    className={inputClass}
                                />
                            </div>

                            {/* Category */}
                            <div>
                                <label htmlFor="category" className={labelClass}>
                                    Category
                                </label>
                                <select
                                    id="category"
                                    name="category"
                                    defaultValue=""
                                    className={inputClass}
                                >
                                    <option value="">Select a category</option>
                                    <option value="Accessories">Accessories</option>
                                    <option value="Bags">Bags</option>
                                    <option value="Books">Books</option>
                                    <option value="Clothing">Clothing</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="ID Cards">ID Cards</option>
                                    <option value="Keys">Keys</option>
                                    <option value="Others">Others</option>
                                    <option value="Wallets">Wallets</option>
                                </select>
                            </div>

                            {/* Brand */}
                            <div>
                                <label htmlFor="brand" className={labelClass}>
                                    Brand
                                </label>
                                <input
                                    id="brand"
                                    name="brand"
                                    placeholder="e.g. Samsung"
                                    className={inputClass}
                                />
                            </div>

                            {/* Color */}
                            <div>
                                <label htmlFor="color" className={labelClass}>
                                    Color
                                </label>
                                <input
                                    id="color"
                                    name="color"
                                    placeholder="e.g. Black"
                                    className={inputClass}
                                />
                            </div>

                            {/* Location */}
                            <div>
                                <label htmlFor="location" className={labelClass}>
                                    {isLost ? "Location lost" : "Location found"}
                                </label>
                                <input
                                    id="location"
                                    name="location"
                                    placeholder="e.g. College library"
                                    className={inputClass}
                                />
                            </div>

                            {/* Date */}
                            <div className="sm:col-span-2">
                                <label htmlFor="date" className={labelClass}>
                                    {isLost ? "Date lost" : "Date found"}
                                </label>
                                <input
                                    id="date"
                                    name="date"
                                    type="date"
                                    className={inputClass}
                                />
                            </div>

                            {/* Description */}
                            <div className="sm:col-span-2">
                                <label htmlFor="description" className={labelClass}>
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    rows={4}
                                    placeholder="Describe the item's appearance, condition, or identifying details..."
                                    className={`${inputClass} min-h-32 resize-y`}
                                />
                                <div className="mt-2 flex items-start gap-2 text-xs leading-5 text-[#817B70]">
                                    <span style={{ color: accent }}>✳</span>
                                    <span>
                                        Include details that could help identify the item.
                                    </span>
                                </div>
                            </div>

                            {/* Photo */}
                            <div className="sm:col-span-2">
                                <label htmlFor="image" className={labelClass}>
                                    Item photo
                                </label>

                                <input
                                    ref={fileRef}
                                    id="image"
                                    name="image"
                                    type="file"
                                    accept="image/*"
                                    className="sr-only"
                                    onChange={(e) => handleFile(e.target.files?.[0])}
                                />

                                <div
                                    onDragOver={(e) => e.preventDefault()}
                                    onDrop={(e) => {
                                        e.preventDefault();
                                        handleFile(e.dataTransfer.files?.[0]);
                                    }}
                                    onClick={() => fileRef.current?.click()}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") {
                                            e.preventDefault();
                                            fileRef.current?.click();
                                        }
                                    }}
                                    role="button"
                                    tabIndex={0}
                                    className="group flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed px-4 py-7 text-center transition duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                                    style={{
                                        backgroundColor: accentLight + "70",
                                        borderColor: `${accent}65`,
                                    }}
                                >
                                    {preview ? (
                                        <img
                                            src={preview}
                                            alt="Selected item preview"
                                            className="mb-3 h-28 w-28 rounded-xl border-2 border-white object-cover shadow-sm"
                                        />
                                    ) : (
                                        <span
                                            className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm transition group-hover:scale-105"
                                            style={{ color: accentDark }}
                                        >
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M12 16V4M7.5 8.5L12 4L16.5 8.5M4 15.5V19A1 1 0 0 0 5 20H19A1 1 0 0 0 20 19V15.5"
                                                    stroke="currentColor"
                                                    strokeWidth="1.7"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    )}

                                    <span className="text-sm font-semibold text-[#263238]">
                                        {file ? file.name : "Click to upload a photo"}
                                    </span>

                                    <span className="mt-1.5 text-xs text-[#817B70]">
                                        Drag and drop or browse files · PNG, JPG, WEBP
                                    </span>

                                    {file && (
                                        <span
                                            className="mt-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                                            style={{
                                                backgroundColor: "#FFFFFF",
                                                color: accentDark,
                                            }}
                                        >
                                            Photo selected
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Submit */}
                            <div className="pt-2 sm:col-span-2">
                                <button
                                    type="submit"
                                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#263238] px-5 py-4 font-tag text-xs font-bold uppercase tracking-[0.17em] text-white shadow-[0_6px_15px_rgba(38,50,56,0.13)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#35464D] hover:shadow-lg active:translate-y-0"
                                >
                                    Submit report
                                    <span
                                        className="flex h-7 w-7 items-center justify-center rounded-lg transition group-hover:translate-x-1"
                                        style={{ backgroundColor: accent }}
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            className="h-4 w-4"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M5 12H19M12 5L19 12L12 19"
                                                stroke="white"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </button>

                                <div className="mt-5 flex items-center justify-center gap-2 text-center text-xs leading-5 text-[#817B70]">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="h-4 w-4 shrink-0"
                                        style={{ color: accent }}
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M12 3L19 6V11C19 15.5 16 19 12 21C8 19 5 15.5 5 11V6L12 3Z"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M9 12L11 14L15 10"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    Your details help reunite items with their owners.
                                </div>
                            </div>
                        </form>
                    </div>
                </section>

                {/* Footer message */}
                <div className="mx-auto mt-8 flex max-w-5xl flex-col items-center gap-2 text-center">
                    <div className="flex items-center gap-2">
                        <span className="h-px w-7 bg-[#D9C8B2]" />
                        <span className="font-tag text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C8173]">
                            FoundIt · Campus Registry
                        </span>
                        <span className="h-px w-7 bg-[#D9C8B2]" />
                    </div>
                    <p className="text-xs text-[#A49A8D]">
                        Every item deserves a way home.
                    </p>
                </div>
            </div>
        </main>
    );
}