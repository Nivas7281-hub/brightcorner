import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

type UserProfile = {
  uid: string;
  name: string;
  email: string;
  role: string;
  photoURL?: string;
};

export function useCurrentUser() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      if (!auth.currentUser) {
        setLoading(false);
        return;
      }

      const userRef = doc(db, "users", auth.currentUser.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setUser(userSnap.data() as UserProfile);
      }

      setLoading(false);
    }

    loadUser();
  }, []);

  return {
    user,
    loading,
  };
}