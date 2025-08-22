#!/usr/bin/env node
import fs from "fs";
import path from "path";
import inquirer from "inquirer";

const args = process.argv.slice(2);

if (args[0] === "add" && args[1] === "glass-card") {
  console.log("🚀 Adding glass-card component...");

  // Ask user for props
  const questions = [
    {
      type: "input",
      name: "title",
      message: "Enter card title (optional):",
    },
    {
      type: "input",
      name: "children",
      message: "Enter card content (optional):",
    },
    {
      type: "input",
      name: "className",
      message: "Extra Tailwind classes (optional):",
    },
  ];

  inquirer.prompt(questions).then((answers) => {
    const { title, children, className } = answers;

    // Build the component content dynamically
    const content = `import React from "react";

interface GlassCardProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ title, children, className }) => {
  return (
    <div
      className={\`bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg flex flex-col gap-4 transition-transform hover:scale-[1.02] \${className || ""}\`}
    >
      ${title ? `<h3 className="text-white text-xl font-semibold">${title}</h3>` : ""}
      <div className="text-white/90">
        ${children || ""}
      </div>
    </div>
  );
};

export default GlassCard;
`;

    const targetDir = path.resolve(process.cwd(), "components/ui");
    if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
    const filePath = path.join(targetDir, "glass-card.tsx");
    fs.writeFileSync(filePath, content);

    console.log(`✅ glass-card.tsx created at ${filePath}`);
  });
} else {
  console.log("🔥 Welcome to Cypher UI CLI!");
  console.log("Use `cypher-ui add glass-card` to scaffold a new component.");
}