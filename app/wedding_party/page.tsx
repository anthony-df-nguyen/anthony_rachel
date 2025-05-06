import TeamMembers from "@/components/TeamMembers/TeamMembers";
import Section from "@/components/Section";
import {
  groomsmen,
  bridesmaids,
  couple,
} from "@/components/TeamMembers/constants";

export default function TheBoys() {
  return (
    <div>
      <Section title="The Wedding Party" id="wedding_party">
        <TeamMembers team={couple} cols={2} />
      </Section>
      <Section title="The Bridesmaids" id="bridesmaids">
        <TeamMembers team={bridesmaids} cols={3} />
      </Section>
      <Section title="The Groomsmen" id="groomsmen">
        <TeamMembers team={groomsmen} cols={3} />
      </Section>
    </div>
  );
}
