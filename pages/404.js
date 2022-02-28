import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  useEffect(() => {
    console.log("useeffect ran");
  }, []);
  return (
    <div className=" not-found">
      <h1>Ooops....</h1>
      <h2> THe page cannot be found</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
