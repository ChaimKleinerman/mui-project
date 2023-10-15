import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import Dialog from "./Dialog";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { chooseProject } from "../redux/projectsSlice";
import CreateComponent from "./CreateComponent";
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}



export default function BasicTabs() {
    const dispatch = useAppDispatch()

    const [open, setOpen] = useState<boolean>(false);

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const [projects, setProjects] = useState(["BUILD A WEBSITE","DEVELOPE A MOBILE APP","ORGANIZE A CONFERENCE"])
    return (
        <>
            <Box sx={{ width: "100%", background: "grey" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>                                                      
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        sx={{
                            "& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected":
                                {
                                    color: "#1976d2",
                                },
                        }}  
                    >
                        {projects.map((project,index) => 
                            <Tab label={project} key = {index} onClick={()=>{dispatch(chooseProject(<CreateComponent/>))}}/>
                        )}


                     

                        <Tab
                            label={<AddCircleOutlineIcon />}
                            onClick={() => {
                                setOpen(true);
                               
                                
                            }}
                        />
                    </Tabs>
                </Box>
            </Box>
            <Dialog open={open} setOpen={setOpen} setProjects={setProjects}/>
        </>
    );
}
