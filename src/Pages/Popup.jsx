import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { handlePopup } from "@/Redux/features/popup/popupSlice";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Popup({ Color }) {

  const dispatch = useDispatch()

  const { isOpen } = useSelector(state => state.popup);

  const [bgColor, setBgColor] = useState(Color || "bg-first");

const handlePopUpChange = () => {

  dispatch(handlePopup(false))

}

// useEffect(() => {console.log(isOpen)},[isOpen])
  
  return (
    <Dialog open={isOpen} onOpenChange={handlePopUpChange}>
      <DialogTrigger asChild>
        {/* Button or any trigger can be placed here if needed */}
        {/* <Button variant="outline">Edit Profile</Button> */}
      </DialogTrigger>
      <DialogContent className={`sm:max-w-[425px] ${bgColor}`}>
        <DialogHeader>
          <DialogTitle>Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" variant="outline">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
