import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipCom({ icon, tooltipText = "Add to library" }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
        <FontAwesomeIcon icon={icon} className="text-xl cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
