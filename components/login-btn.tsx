import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "./ui/button";

export default function LogInButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="max-w-48 space-y-3">

      </div>
    );
  }
  return (
    <>
   
    </>
  );
}
