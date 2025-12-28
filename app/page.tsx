import { cn } from "@/src/lib/utils/common.util"

export default function Home() {
  return (
    <h1 className={cn("text-3xl font-bold", "underline")}>
      Hello world!
    </h1>
  );
}
