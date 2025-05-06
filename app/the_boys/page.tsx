import TeamMembers from "@/components/TeamMembers/TeamMembers";
import Section from "@/components/Section";
import {boys} from "@/components/TeamMembers/constants"

export default function TheBoys() {
  return (
    <Section title="The Boys" id='boys'>
      <TeamMembers team={boys} cols={3}/>
    </Section>
  );
}
