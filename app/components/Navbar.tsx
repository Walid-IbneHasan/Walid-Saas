import { Button } from "../../components/ui/button";
import { ModeToggle } from "../../components/modeToggle";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import UserNav from "./UserNav";

export default async function Navbar() {
  const { isAuthenticated } = getKindeServerSession();

  return (
    <nav className="border-b bg-background flex h-[10vh]  items-center ">
      <div className="container flex items-center justify-between ">
        <Link href="/">
          <h1 className="font-bold text-3xl">
            Walid <span className="primary">Saas</span>{" "}
          </h1>{" "}
        </Link>

        <div className="flex items-center space-x-5">
          <ModeToggle />
          {(await isAuthenticated()) ? (
            <UserNav
              name="Walid"
              email="walid@gmail.com"
              image="https://github.com/shadcn.png"
            />
          ) : (
            <div className="flex items-center space-x-5">
              <LoginLink>
                <Button>Sign In</Button>
              </LoginLink>

              <RegisterLink>
                <Button variant="secondary">Sign Up</Button>
              </RegisterLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
