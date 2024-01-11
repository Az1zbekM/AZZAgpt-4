import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Sidebar from "./sidebar";

const MobileSidebar = () => {
    return ( 
       <Sheet>
         <SheetTrigger className="md:hidden pr-4 fixed top-4 left-4">
           <Menu className="h-6 w-6" />
         </SheetTrigger>
        
         <SheetContent side="top" className="p-0 pt-16 w-full h-full">
            <Sidebar />
         </SheetContent>
       </Sheet>
     );
}
 
export default  MobileSidebar;