import PageHeading from "@/components/PageHeading";
import TextList from "@/components/TextList";

export default async function Home() {
  const json = await import("@/assets/skills.json");
  const skills = json.data;

  return (
    <div>
      <PageHeading text="SKILLS"></PageHeading>
      <TextList contents={skills}></TextList>
    </div>
  );
}
