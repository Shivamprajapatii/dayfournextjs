"use client"
import { useSession, SessionProvider, signOut, signIn } from "next-auth/react";

export default function Home() {
  
  return (
    <SessionProvider> 
      <RealHome />
    </SessionProvider> 
  );
}


const RealHome = () => {
  const session = useSession();
  return(
    <div>
      {session.status === "authenticated"  && <button onClick={ () => signOut() }>Logout</button>}
      {session.status === "unauthenticated" && <button onClick={() => signIn() }>Sign In</button>}
    </div>
  )
}