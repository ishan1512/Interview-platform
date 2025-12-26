import "./App.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/clerk-react";

function App() {
  return (
    <>
      <h1>Welcome to the app</h1>
      {/* if user is signed out than show show signin button */}
      <SignedOut>
        <SignInButton mode="modal">
          <button className="">Sign up</button>
        </SignInButton>
      </SignedOut>

      {/* if user is signedin than show sign out button */}
      <SignedIn>
        <SignOutButton />
      </SignedIn>

      <UserButton />
    </>
  );
}

export default App;
