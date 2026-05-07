import { execSync } from "child_process";

async function getDependencyReleaseLine() {
  return "";
}

async function getReleaseLine(changeset, _type) {
  const [firstLine, ...futureLines] = changeset.summary
    .split("\n")
    .map((l) => l.trimEnd());

  let prInfo = "";
  try {
    const log = execSync(
      `git log --oneline --grep="#" -1 -- .changeset/${changeset.id}.md`,
      { encoding: "utf8" }
    ).trim();
    const prMatch = log.match(/#(\d+)/);
    const authorMatch = log.match(/by @([^\s]+)/);
    if (prMatch) prInfo = ` (#${prMatch[1]})`;
    if (authorMatch) prInfo = ` by @${authorMatch[1]}${prInfo}`;
  } catch (_) {}

  return `\n\n- ${firstLine}${prInfo}${
    futureLines.length > 0 ? `\n  ${futureLines.join("\n  ")}` : ""
  }`;
}

export default { getReleaseLine, getDependencyReleaseLine };