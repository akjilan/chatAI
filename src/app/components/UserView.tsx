import React from "react";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const UserView = () => {
  return (
    <div className="w-full flex justify-end p-4 ">
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default UserView;
