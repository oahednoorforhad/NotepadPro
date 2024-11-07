"use client";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Link from "next/link";
import { Button } from "./button";
import { ModeToggle } from "./modeToggle";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import notepad from "../../public/assets/notepad.png";
function Navbar() {
  const session = useSession();
  console.log(session);
  return (
    <div className="flex justify-between items-center p-10">
      <div>
        <Image src={notepad} alt="notepad logo" height={42} width={42}></Image>
      </div>
      <div>
        <Menubar className="flex justify-between px-3 p-6 gap-10 border-spacing-2">
          <Link href="/">
            <MenubarMenu>
              <MenubarTrigger>Dashboard</MenubarTrigger>
            </MenubarMenu>
          </Link>
          <Link href="/notepad">
            <MenubarMenu>
              <MenubarTrigger>Notepad</MenubarTrigger>
            </MenubarMenu>
          </Link>
          <ModeToggle />
        </Menubar>
      </div>
      <div>
        {!session.data ? (
          <Link href="/login">
            <Button className="bg-secondary">Login</Button>
          </Link>
        ) : (
          <Button className="bg-secondary" onClick={() => signOut()}>
            Logout
          </Button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
