import { Plus } from "lucide-react";

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { MobileSideBar } from "./MobileSideBar";
import { FormPopover } from "@/components/form/form-popover";

const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0 w-full h-14 border-b shadow-sm bg-white flex items-center px-3">
      <MobileSideBar />
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <FormPopover align="start" side="bottom" sideOffset={18}>
          <Button
            variant={"primary"}
            size="sm"
            className="rounded-sm hidden md:block h-auto py-1.5 px-2"
          >
            Create
          </Button>
        </FormPopover>
        <FormPopover>
          <Button
            variant={"primary"}
            size="sm"
            className="rounded-sm block md:hidden"
          >
            <Plus className="h-4 w-6" />
          </Button>
        </FormPopover>
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl={"/organization/:id"}
          afterSelectOrganizationUrl={"/organization/:id"}
          afterLeaveOrganizationUrl={"/organization/:id"}
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
        />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                height: 30,
                width: 30,
              },
            },
          }}
        />
      </div>
    </nav>
  );
};
export default Navbar;
