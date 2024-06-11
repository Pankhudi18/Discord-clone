"use client";
import axios from "axios"
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
} from "../ui/dialog";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { useModal } from "@/hooks/use-modal-store";
import { Label } from "../ui/label";

interface InitialModalProps {}


const InviteModal: FC<InitialModalProps> = ({}) => {
  const {isOpen, onClose, type} = useModal();
  
  


  const isModalOpen = isOpen && type === "invite";

  return (
    <>
      <Dialog open = {isModalOpen} onOpenChange={onClose}>
        <DialogContent className="bg-white text-black p-0 overflow-hidden">
          <DialogHeader className="pt-8 px-6">
            <DialogTitle className="text-2xl text-center font-bold">
              Invite Friends
            </DialogTitle>
          </DialogHeader>

          <div className = "p-6 ">
            <Label></Label>
          </div>
          Invite Modal!
         
        </DialogContent>
      </Dialog>
    </>
  );
};

export default InviteModal;
