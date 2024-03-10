import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SearchComponent() {
  return (
    <div className="sticky bg-white top-0 flex w-full items-center space-x-2 border-b px-6 py-4">
      <Input type="text" placeholder="Cari..." />
      <Button type="submit" className="bg-primary hover:bg-partial">
        Cari
      </Button>
    </div>
  );
}
