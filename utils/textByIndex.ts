export const texts: { title: string; desc: string; foot: string }[] = [
  {
    title: "We're here to optimised your workflow",
    desc: "Your docs, projects, notes, and reminders. Together.",
    foot: "Finally, all your work in one place.",
  },
  {
    title: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor",
    foot: "Finally, all your work in one place.",
  },
  {
    title:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    desc: "Lorem ipsum dolor",
    foot: "Finally, all your work in one place.",
  },
  {
    title:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    desc: "Lorem ipsum dolor",
    foot: "Finally, all your work in one place.",
  },
  {
    title:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    desc: "Lorem ipsum dolor",
    foot: "Finally, all your work in one place.",
  },
];

const textByIndex = (index: number): string[] => [
  texts[index % texts.length].title,
  texts[index % texts.length].desc,
  texts[index % texts.length].foot,
];

export default textByIndex;
