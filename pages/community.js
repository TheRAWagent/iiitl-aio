import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatBox from "@/components/Chats";
import { useEffect } from "react";
import { useRouter } from "next/router";

function App() {
  const [user] = useAuthState(auth);
  const router = useRouter()
  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user]);

  return (
    <div className="App h-screen">
      {user && <ChatBox />}
    </div>
  );
}

export default App;
