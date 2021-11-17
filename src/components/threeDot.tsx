import { Button,Menu ,MenuItem} from "@material-ui/core";
import { useState } from "react";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';



interface PropsThreeDotsMenu{
  id:string,
  handleWithDelateClick:(id:string)=>void,
  handleWithEditClick:(id:string)=>void
}
export const ThreeDotsMenu = ({id,handleWithDelateClick,handleWithEditClick}:PropsThreeDotsMenu) => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  

  
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);

      };
    const handleClose = () => {
      setAnchorEl(null);

    }





    return(
      <div>
      <Button onClick={handleClick}>
          <MoreHorizIcon/>
    </Button>
    <Menu
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={()=>handleWithEditClick(id)}>
        Edit 
      </MenuItem>
      <MenuItem onClick={()=>handleWithDelateClick(id)} >
        delete
      </MenuItem>
    </Menu>
    </div>
    )
  }