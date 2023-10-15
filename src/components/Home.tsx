import { Typography } from "@mui/material";
import Table from "./Table";
import { useAppSelector } from "../redux/hooks";
import Nav from "./Nav";

export default function Home() {
    const selector = useAppSelector((state)=>state.project)

  return (
    <>
    <Nav/>
    <Typography variant="h2"> Please Select Project</Typography>
    <>{selector}</>
    <Table/>
    </>
  )
}
