import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react"; // Re-use styles across other submenus.
import { audioState } from "@/stores/audioStore.js";
import { useStore } from "@nanostores/react";
import { CircleGauge } from "lucide-react";

export default function SpeedMenu() {
  const { playbackRate } = useStore(audioState);
  const options = ["0.5", "1.0", "1.5", "2.0"];
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          isIconOnly
          variant={playbackRate === "1.0" ? "light" : "flat"}
          color={playbackRate === "1.0" ? "default" : "primary"}
          size="sm"
          radius="full"
        >
          {playbackRate === "1.0" ? (
            <CircleGauge className="size-4 text-default-500" />
          ) : (
            playbackRate
          )}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label="Single selection example"
        selectedKeys={new Set([playbackRate.toString()])}
        selectionMode="single"
        variant="flat"
        onSelectionChange={(values) =>
          audioState.setKey("playbackRate", values.currentKey)
        }
        classNames={{ base: "font-mono" }}
      >
        {options.map((option) => (
          <DropdownItem key={option}>{option + "x"}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
