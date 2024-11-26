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
import React, { Children, useState } from "react";

const ConfirmationPopup = ({ onDelete, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePopUpChange = (open) => {
    setIsOpen(open);
  };

  const handleDelete = () => {
    // Call the onDelete function passed as prop to handle the deletion
    onDelete();
    setIsOpen(false); // Close the dialog after confirming deletion
  };

  return (
    <>
      {/* Pass the children here to trigger the dialog */}
      <Dialog open={isOpen} onOpenChange={handlePopUpChange}>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        
        <DialogContent className="sm:max-w-[425px] bg-first">
          <DialogHeader>
            <DialogTitle>Delete Confirmation</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this item?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)} // Close dialog without deleting
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete} // Trigger the delete logic
            >
              Yes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ConfirmationPopup;
