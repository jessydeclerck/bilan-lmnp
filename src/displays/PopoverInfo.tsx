import {IconButton, Popover, Typography} from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import React, {ReactNode, useState} from "react";

interface PopoverInfoProps {
    children: ReactNode;
}

function PopoverInfo({children}: PopoverInfoProps) {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const open = Boolean(anchorEl);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const id = open ? 'simple-popover' : undefined;


    return (
        <>
            <IconButton aria-describedby={id} onClick={handlePopoverOpen}
                        sx={{marginLeft: 'auto', padding: '0'}}><HelpIcon
                sx={{fontSize: 'small', color: 'darkgrey'}}/></IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{p: 1}}>{children}</Typography>
            </Popover>
        </>);
}

export default PopoverInfo;