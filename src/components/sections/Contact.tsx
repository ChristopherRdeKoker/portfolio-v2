import { Mail, MapPin } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { Section } from "@/components/Section";
import { person } from "@/content/profile";

const items = [
  { icon: Mail, label: "Email", value: person.email, href: `mailto:${person.email}` },
  { icon: GithubIcon, label: "GitHub", value: person.githubHandle, href: person.githubUrl },
  { icon: MapPin, label: "Location", value: person.location },
];

export function Contact() {
  return (
    <Section id="contact" title="Contact" highlight="me" backdrop="say hello" tinted>
      <p className="mx-auto mb-10 max-w-xl text-center leading-relaxed">
        You&apos;ve made it this far! If you&apos;d like to work together or have a question, email
        is the best way to reach me.
      </p>
      <ul className="mx-auto grid max-w-4xl gap-4 lg:grid-cols-3">
        {items.map(({ icon: Icon, label, value, href }) => {
          const body = (
            <>
              <Icon className="text-accent mx-auto size-7" />
              <p className="text-ink-muted mt-3 text-sm">{label}</p>
              <p className="mt-1 text-sm font-medium [overflow-wrap:anywhere]">{value}</p>
            </>
          );
          const cardClass =
            "block h-full rounded-2xl border border-line bg-surface-raised p-6 text-center shadow-sm";
          return (
            <li key={label}>
              {href ? (
                <a
                  href={href}
                  {...(href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={`${cardClass} hover:border-accent focus-visible:outline-accent transition focus-visible:outline-2`}
                >
                  {body}
                </a>
              ) : (
                <div className={cardClass}>{body}</div>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
