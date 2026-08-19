const teamMembers = [
  {
    name: "Adv. Abhishek Kumar",
    role: "GST & TAX Advisor",
    image: "/team/member-1.png",
  },
  {
    name: "Vijay Kumar",
    role: "Marketplace Consultant",
    image: "/team/member-2.png",
  },
  {
    name: "Ashu Rajauriya",
    role: "Operation Head ",
    image: "/team/member-3.png",
  },

  {
    name: "Deepti Rajauriya",
    role: "Product Manager ",
    image: "/team/member-4.png",
  },
  {
    name: "Uttam ",
    role: "Cataloge Manager",
    image: "/team/member-5.png",
  },
];

function TeamSection() {
  return (
    <section
      id="team"
      className="scroll-mt-18 border-y border-[var(--color-border)] bg-[var(--color-background)]"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Our Team
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--color-foreground)] sm:text-4xl">
            People behind VJ E-Commerce
          </h2>
        </div>

        {/* Team */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="group text-center"
            >
              {/* Image */}
              <div className="mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role} at VJ E-Commerce`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Name */}
              <h3 className="mt-5 text-lg font-bold text-[var(--color-foreground)]">
                {member.name}
              </h3>

              {/* Role */}
              <p className="mt-1 text-sm font-medium text-[var(--color-primary)]">
                {member.role}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;