import Link from "next/link";
import React from "react";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepo(name) {
  const res = await fetch(`https://api.github.com/repos/yogeshu/${name}`);
  const repo = await res.json();
  return repo;
}

const Repo = async ({ name }) => {
  const repos = await fetchRepo(name);
  // covert repos to array
  const repos1 = Array.isArray(repos) ? repos : [repos];

  return (
    <div className="repos-container">
      <h2>Repositories</h2>
      <ul className="repo-list">
        {repos1?.map(
          (repo) => (
            console.log(repo),
            (
              <li key={repo.id}>
                <Link href={`/code/repos/${repo.name}`}>
                  <h3>{repo.name}</h3>
                  <p>{repo.description}</p>
                  <div className="repo-details">
                    <span>
                      <FaStar /> {repo.stargazers_count}
                    </span>
                    <span>
                      <FaCodeBranch /> {repo.forks_count}
                    </span>
                    <span>
                      <FaEye /> {repo.watchers_count}
                    </span>
                  </div>
                </Link>
              </li>
            )
          )
        )}
      </ul>
    </div>
  );
};

export default Repo;
