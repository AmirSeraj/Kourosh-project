import { BackButtonProps } from "@/lib/types";
import { Button } from "../ui/button";
import Link from "next/link";

const BackButton = ({ label, href, className }: BackButtonProps) => {
  return (
    <Button
      className="font-normal w-full no-underline"
      variant={"link"}
      size={"sm"}
      asChild
    >
      <Link href={href} className={className}>
        {label}
      </Link>
    </Button>
  );
};

export default BackButton;
