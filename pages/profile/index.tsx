/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Circles } from "@/components/molecules";

const Profile = () => {
  const [profile, setProfile] = useState<any>({});
  const router = useRouter();

  const getProfile = async () => {
    try {
      const token = localStorage.getItem("token"); // Retrieve token from localStorage

      if (token) {
        const response = await fetch("https://dummyjson.com/auth/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Use token from localStorage
          },
        });

        if (response.status === 401) {
          // Token expired, redirect to login page
          router.push("/login");
          return;
        }

        const data = await response.json();
        setProfile(data);
      } else {
        // Token not found, redirect to login page
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Fetch user profile data here
    /* providing token in bearer */
    getProfile();
  }, []);

  const handleSignOut = () => {
    // Remove token from localStorage
    localStorage.removeItem("token");
    // Redirect to login page
    router.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center p-12 gap-4 z-[2]">
    <Circles isProfile isLoginRegPath />
      <h1 className="text-[24px] font-bold">Profile</h1>
      <img
        src={profile?.image}
        alt="Profile Image"
        className="w-32 h-32 rounded-full"
      />
      <div className="flex flex-col  w-full border-2 border-black p-4 rounded-lg gap-3">
        <p>
          <span className="font-bold">Name: </span>
          {profile?.firstName + " " + profile?.lastName}
        </p>
        <p>
          <span className="font-bold">Username: </span>
          {profile?.username}
        </p>
        <p>
          <span className="font-bold">Email: </span>
          {profile?.email}
        </p>
        <p>
          <span className="font-bold">Birthdate: </span>
          {profile?.birthDate}
        </p>
        <p>
          <span className="font-bold">University: </span>
          {profile?.university}
        </p>
      </div>
      <button
        className="font-semibold bg-red-300 rounded-md p-2 w-auto text-[12px] hover:bg-red-400"
        onClick={handleSignOut}
      >
        Sign out
      </button>
    </div>
  );
};

export default Profile;
