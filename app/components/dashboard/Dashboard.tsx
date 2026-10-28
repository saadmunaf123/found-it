"use client";

import Link from "next/link";

const dashboardData = {
  lost: 8,
  found: 12,
  recovered: 5,
  pendingClaims: 3,
  recent: [
    { id: "1", title: "Black Leather Wallet", type: "LOST", category: "Accessories", date: "Oct 26, 2026" },
    { id: "2", title: "Blue Water Bottle", type: "FOUND", category: "Bottles", date: "Oct 25, 2026" },
    { id: "3", title: "Wireless Earbuds", type: "LOST", category: "Electronics", date: "Oct 24, 2026" },
    { id: "4", title: "Student ID Card", type: "FOUND", category: "ID Cards", date: "Oct 23, 2026" },
  ],
  byCategory: [
    { category: "Accessories", count: 6 },
    { category: "Electronics", count: 5 },
    { category: "Bags", count: 4 },
    { category: "Books", count: 3 },
    { category: "ID Cards", count: 2 },
  ],
};

const stats = [
  {
    label: "My Lost Items",
    value: dashboardData.lost,
    icon: "↗",
    color: "#D97757",
    background: "#FFF0E9",
  },
  {
    label: "My Found Items",
    value: dashboardData.found,
    icon: "⌕",
    color: "#71866A",
    background: "#EDF3E9",
  },
  {
    label: "Recovered",
    value: dashboardData.recovered,
    icon: "✓",
    color: "#B78636",
    background: "#F8F0DD",
  },
  {
    label: "Pending Claims",
    value: dashboardData.pendingClaims,
    icon: "◷",
    color: "#64748B",
    background: "#EEF1F5",
  },
];

export default function DashboardPage() {
  const maxCategory = Math.max(
    1,
    ...dashboardData.byCategory.map((item) => item.count)
  );

  return (
    <main className="min-h-screen bg-[#F7F3EB] px-4 py-8 text-[#263238] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Page heading */}
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 font-space-mono text-xs uppercase tracking-[0.2em] text-[#B78636]">
              Your registry
            </p>

            <h1 className="font-fraunces text-4xl font-semibold sm:text-5xl">
              Dashboard<span className="text-[#D97757]">.</span>
            </h1>

            <p className="mt-3 max-w-lg text-sm leading-6 text-[#73766F]">
              Keep track of your reports, recovered belongings, and pending
              claims — all in one place.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/pages/lostpage"
              className="rounded-full bg-[#D97757] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#B95E41]"
            >
              + Report Lost
            </Link>

            <Link
              href="/pages/foundpage"
              className="rounded-full border border-[#71866A] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#4D6447] transition hover:bg-[#EDF3E9]"
            >
              + Report Found
            </Link>
          </div>
        </div>

        {/* Statistics */}
        <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-[#E8E0D4] bg-white/80 p-5 transition hover:-translate-y-1 hover:shadow-md sm:p-6"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-medium text-[#73766F]">
                  {stat.label}
                </span>

                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-xl"
                  style={{
                    color: stat.color,
                    backgroundColor: stat.background,
                  }}
                >
                  {stat.icon}
                </span>
              </div>

              <p
                className="font-fraunces text-4xl font-semibold"
                style={{ color: stat.color }}
              >
                {stat.value.toString().padStart(2, "0")}
              </p>

              <p className="mt-2 text-xs text-[#8B8C84]">
                Sample dashboard data
              </p>
            </div>
          ))}
        </section>

        {/* Main dashboard content */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Recent reports */}
          <div className="rounded-2xl border border-[#E8E0D4] bg-white/80 p-5 sm:p-7 lg:col-span-3">
            <div className="mb-6 flex items-center justify-between gap-3">
              <div>
                <p className="mb-1 font-space-mono text-[10px] uppercase tracking-[0.18em] text-[#B78636]">
                  Latest activity
                </p>
                <h2 className="font-fraunces text-2xl font-semibold">
                  Recent reports
                </h2>
              </div>

              <Link
                href="/pages/my-items"
                className="text-xs font-semibold text-[#B78636] transition hover:text-[#8D6525]"
              >
                View all →
              </Link>
            </div>

            <div className="space-y-3">
              {dashboardData.recent.map((item) => {
                const isLost = item.type === "LOST";

                return (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 rounded-xl border border-[#EEE9E0] p-3 transition hover:bg-[#FAF7F1] sm:gap-4 sm:p-4"
                  >
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg"
                      style={{
                        color: isLost ? "#D97757" : "#71866A",
                        backgroundColor: isLost ? "#FFF0E9" : "#EDF3E9",
                      }}
                    >
                      {isLost ? "↗" : "✓"}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-sm font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs text-[#85867E]">
                        {item.category} · {item.date}
                      </p>
                    </div>

                    <span
                      className="shrink-0 rounded-full px-2.5 py-1 font-space-mono text-[9px] font-semibold tracking-wider sm:text-[10px]"
                      style={{
                        color: isLost ? "#A94E32" : "#4D6447",
                        backgroundColor: isLost ? "#FFF0E9" : "#EDF3E9",
                      }}
                    >
                      {item.type}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap gap-4 border-t border-[#EEE9E0] pt-5">
              <Link
                href="/pages/my-items"
                className="text-xs font-semibold text-[#B78636] hover:underline"
              >
                Manage my items →
              </Link>

              <Link
                href="/pages/my-claims"
                className="text-xs font-semibold text-[#B78636] hover:underline"
              >
                View my claims →
              </Link>
            </div>
          </div>

          {/* Category chart */}
          <div className="rounded-2xl border border-[#E8E0D4] bg-white/80 p-5 sm:p-7 lg:col-span-2">
            <div className="mb-7">
              <p className="mb-1 font-space-mono text-[10px] uppercase tracking-[0.18em] text-[#B78636]">
                Item breakdown
              </p>
              <h2 className="font-fraunces text-2xl font-semibold">
                Lost by category
              </h2>
              <p className="mt-2 text-xs text-[#85867E]">
                Sample reports grouped by item type.
              </p>
            </div>

            <div className="space-y-6">
              {dashboardData.byCategory.map((item, index) => {
                const colors = [
                  "#D97757",
                  "#71866A",
                  "#B78636",
                  "#7B91B2",
                  "#A78BBA",
                ];

                return (
                  <div key={item.category}>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span className="text-sm font-medium">
                        {item.category}
                      </span>

                      <span className="font-space-mono text-xs text-[#73766F]">
                        {item.count}
                      </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-[#EEE9E0]">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${(item.count / maxCategory) * 100}%`,
                          backgroundColor: colors[index % colors.length],
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 rounded-xl bg-[#F7F3EB] p-4">
              <p className="text-xs leading-5 text-[#73766F]">
                <span className="font-semibold text-[#263238]">
                  Keep looking.
                </span>{" "}
                Reporting lost and found items helps your campus community
                reconnect people with their belongings.
              </p>
            </div>
          </div>
        </section>

        <p className="mt-8 text-center font-space-mono text-[10px] uppercase tracking-widest text-[#A3A196]">
          FoundIt Campus Registry · Demo dashboard
        </p>
      </div>
    </main>
  );
}
