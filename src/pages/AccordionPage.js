import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "dwfwqfqwf",
      label: "Can I use React on a project",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: "dwdwdwvvdvd",
      label: "Can I use Javascript on a project",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: "codckodco",
      label: "Can I use CSS on a project",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
  ];

  return <Accordion items={items} />;
}
export default AccordionPage;
