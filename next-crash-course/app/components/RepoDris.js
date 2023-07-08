import React from "react";
import Link from "next/link";

async function fetchRepo(name) {
  const res = await fetch(
    `https://api.github.com/repos/yogeshu/${name}/contents`
  );
  const repo = await res.json();
  return repo;
}

const RepoDris = async ({ name }) => {
  const contents = await fetchRepo(name);
  const dirs = contents.filter((item) => item.type === "dir");

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoDris;
