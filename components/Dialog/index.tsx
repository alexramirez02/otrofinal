
import { Dialog as MiDialog, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';

interface Modalprops{
open:boolean;
onClose: ()=> void;
title:string;
chlidren:React.ReactNode;
}
const Dialog = ({open,onClose,title,chlidren}: Modalprops) => {
  return (
    <MiDialog open={open} onClose={onClose}>
      <DialogTitle> {title} </DialogTitle>
      <DialogContent>{chlidren} </DialogContent>
    </MiDialog>
  );
};
export { Dialog };