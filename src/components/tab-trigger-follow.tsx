"use client";
import { TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const TabTriggerFollowComponent = () => {
  return (
    <TabsTrigger
      onClick={() => toast("Fitur ini belum tersedia!")}
      value="password"
      className="w-full">
      Mengikuti
    </TabsTrigger>
  );
};

export default TabTriggerFollowComponent;
