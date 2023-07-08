import Repo from "@/app/components/Repo";
import RepoDris from "@/app/components/RepoDris";
import Link from "next/link";
import React, { Suspense } from "react";

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        back to repos
      </Link>
      <Repo name={name} />
      <Suspense fallback={<div>Loading...</div>}>
        <RepoDris name={name} />
      </Suspense>{" "}
    </div>
  );
};

export default RepoPage;
