import TeamMembers from "@/components/TeamMembers/TeamMembers";
import Section from "@/components/Section";
import OurStory2 from "@/components/OurStory";

export default function OurStoryPage() {
  return (
    <div className="container mx-auto">
      <Section title="Our Story" id="our_story">
        <OurStory2 />
      </Section>
    </div>
  );
}
