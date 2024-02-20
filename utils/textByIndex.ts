export const texts: { title: string; desc: string }[] = [
  {
    title: "We're here to optimised your workflow",
    desc: "Your docs, projects, notes, and reminders. Together.",
  },
  {
    title: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor",
  },
  {
    title:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    desc: "Lorem ipsum dolor",
  },
  {
    title:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    desc: "Lorem ipsum dolor",
  },
  {
    title:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    desc: "Lorem ipsum dolor",
  },
];

const textByIndex = (index: number): string[] => [
  texts[index % texts.length].title,
  texts[index % texts.length].desc,
];

export default textByIndex;
