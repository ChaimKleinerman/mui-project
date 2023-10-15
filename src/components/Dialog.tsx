import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Dispatch, SetStateAction, useState} from 'react';



interface Props{
    open:boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    setProjects: Dispatch<SetStateAction<string[]>>
}


export default function FormDialog({ open, setOpen, setProjects }: Props) {
  const [projectName, setProjectName] = useState(''); // Add a state variable

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = () => {
    setProjects((prevProjects) => [...prevProjects, projectName]);
    setProjectName(''); // Clear the input field
    handleClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create New Project</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Project's name"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e) => setProjectName(e.target.value)} 
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreate}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

