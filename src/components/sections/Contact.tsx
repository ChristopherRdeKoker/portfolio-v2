import type { ComponentType } from "react";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { Section } from "@/components/Section";
import { cardClasses, focusRingClasses } from "@/components/ui/classes";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { person } from "@/content/person";
import { cn } from "@/lib/cn";

type ContactItemType = {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
};

const contactCardClasses = cn(cardClasses, "block h-full p-6 text-center");
const contactLinkClasses = cn(
  contactCardClasses,
  "hover:border-accent transition",
  focusRingClasses,
);

const email: ContactItemType = { icon: Mail, label: "Email", value: person.email };
const github: ContactItemType = { icon: GithubIcon, label: "GitHub", value: person.githubHandle };
const location: ContactItemType = { icon: MapPin, label: "Location", value: person.location };

function ContactCardBody({ icon: Icon, label, value }: ContactItemType) {
  return (
    <>
      <Icon className="text-accent mx-auto size-7" />
      <p className="text-ink-muted mt-3 text-sm">{label}</p>
      <p className="mt-1 text-sm font-medium [overflow-wrap:anywhere]">{value}</p>
    </>
  );
}

export function Contact() {
  return (
    <Section id="contact" title="Contact" highlight="me" backdrop="say hello" isTinted>
      <p className="mx-auto mb-10 max-w-xl text-center leading-relaxed">
        You&apos;ve made it this far! If you&apos;d like to work together or have a question, email
        is the best way to reach me.
      </p>
      <ul className="mx-auto grid max-w-4xl gap-4 lg:grid-cols-3">
        <li>
          <a href={`mailto:${person.email}`} className={contactLinkClasses}>
            <ContactCardBody {...email} />
          </a>
        </li>
        <li>
          <ExternalLink href={person.githubUrl} className={contactLinkClasses}>
            <ContactCardBody {...github} />
          </ExternalLink>
        </li>
        <li>
          <div className={contactCardClasses}>
            <ContactCardBody {...location} />
          </div>
        </li>
      </ul>
    </Section>
  );
}
