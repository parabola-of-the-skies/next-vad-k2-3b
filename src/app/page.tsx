import { ModeToggle } from "@/components/ui/dark-mode-toggle";
import Voice_Selector from "@/components/voice-selector";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ModeToggle />
      <Voice_Selector />
    </div>
  );
}
