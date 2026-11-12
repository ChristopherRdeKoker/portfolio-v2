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
  "hover:border-brand transition",
  focusRingClasses,
);

const emailItem: ContactItemType = { icon: Mail, label: "Email", value: person.email };
const githubItem: ContactItemType = {
  icon: GithubIcon,
  label: "GitHub",
  value: person.githubHandle,
};
const locationItem: ContactItemType = { icon: MapPin, label: "Location", value: person.location };

function ContactCardBody({ icon: Icon, label, value }: ContactItemType) {
  return (
    <>
      <Icon className="text-brand mx-auto size-7" />
      <p className="text-ink-muted mt-3 text-sm break-words">{label}</p>
      <p className="mt-1 text-sm font-medium [overflow-wrap:anywhere]">{value}</p>
    </>
  );
}

export function Contact() {
  return (
    <Section id="contact" title="Contact" highlight="me" backdrop="say hello" isTinted>
      <p className="mx-auto mb-10 max-w-xl text-center leading-relaxed break-words">
        You&apos;ve made it this far! If you&apos;d like to work together or have a question, email
        is the best way to reach me.
      </p>
      <ul className="mx-auto grid max-w-4xl gap-4 lg:grid-cols-3">
        <li className="min-w-0">
          <a href={`mailto:${person.email}`} className={contactLinkClasses}>
            <ContactCardBody {...emailItem} />
          </a>
        </li>
        <li className="min-w-0">
          <ExternalLink href={person.githubUrl} className={contactLinkClasses}>
            <ContactCardBody {...githubItem} />
          </ExternalLink>
        </li>
        <li className="min-w-0">
          <div className={contactCardClasses}>
            <ContactCardBody {...locationItem} />
          </div>
        </li>
      </ul>
    </Section>
  );
}
