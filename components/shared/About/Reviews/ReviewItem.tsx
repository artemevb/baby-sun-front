"use client";
import React, { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback, Button } from "@/components/ui";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui";
import { cn } from "@lib/utils";

interface ReviewItemProps {
  className?: string;
  name: string;
  date: string;
  avatar: string;
  reviewText: string;
}

export const ReviewItem = ({
  className,
  name,
  date,
  avatar,
  reviewText,
}: ReviewItemProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className={cn("p-4 rounded-lg shadow-md bg-[#F8FBFF]", className)}>
      <div className="flex items-start gap-4">
        <Avatar>
          <AvatarImage src={avatar} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-[#009FE3]">{date}</p>
        </div>
      </div>
      <p className="pt-4 text-lg font-medium">{reviewText}</p>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="link" className="text-[#009FE3] pt-2">
            Весь отзыв
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src={avatar} />
                <AvatarFallback>{name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <DialogTitle>{name}</DialogTitle>
                <DialogDescription>{date}</DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <p>{reviewText}</p>
        </DialogContent>
      </Dialog>
    </div>
  );
};
