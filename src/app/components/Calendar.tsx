// Server Component (no "use client")
export default function CalendarEmbed() {
  return (
    <section className="bg-white text-[var(--midnight-blue)] py-12">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Events Calendar</h2>
        <div className="relative w-full overflow-hidden rounded-xl shadow-md">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=700&amp;wkst=1&amp;ctz=America%2FChicago&amp;showPrint=0&amp;showTitle=0&amp;showNav=0&amp;showCalendars=0&amp;src=Y2RjZjBhYTI3ODA5OGI2YjE4YjI0ODIzMWEzYWMxZjYwNmEyMzA5Njg2NGU5MWU4Yjk1N2U2N2M4ZjIzZjlkNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%2300a79d"
            style={{
              border: 0,
              width: "100%",
              height: "700px",
            }}
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </section>
  );
}