// Server Component (no "use client")
export default function CalendarEmbed() {
  return (
    <section className="bg-white text-[var(--midnight-blue)] py-12">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Events Calendar</h2>
        <div className="relative w-full overflow-hidden rounded-xl shadow-md">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=America%2FChicago&mode=MONTH&showTitle=0&showPrint=0&showCalendars=0&title=BRAIN%20Events&src=MTBiYjM0N2Y0YzE2ZGZmZTMzYTU0ZmJmZTYyM2NiZDE1ZjExODU5Nzc5OGRmNmVjY2ZiMDhiMjA5NDllN2ZkM0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23d50000"
            style={{
              border: 0,
              width: "100%",
              height: "600px",
            }}
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </section>
  );
}