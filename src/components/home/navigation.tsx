import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabTriggerFollowComponent from "../tab-trigger-follow";

const NavHomeComponent = () => {
  return (
    <Tabs
      defaultValue="account"
      className="border-b border-slate-300 sticky top-0">
      <TabsList className="flex justify-between">
        <TabsTrigger value="account" className="w-full">
          Untuk Anda
        </TabsTrigger>
        <TabTriggerFollowComponent />
      </TabsList>
      {/* <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent> */}
    </Tabs>
  );
};

export default NavHomeComponent;
