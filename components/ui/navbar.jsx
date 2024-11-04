"use client";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ModeToggle } from "./modeToggle";
function navbar() {
  return (
    <div>
      <Menubar className="lg:mx-96 flex justify-between px-3 mt-5 mx-10 border-spacing-2 p-6 backdrop-blur-xl bg-opacity-80">
        <MenubarMenu>
          <MenubarTrigger>Home</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Notes</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Userlist</MenubarTrigger>
        </MenubarMenu>
        <ModeToggle />
      </Menubar>
    </div>
  );
}

export default navbar;
