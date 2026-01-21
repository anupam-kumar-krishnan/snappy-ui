"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MousePointerClick } from "lucide-react";
import React from "react";

type ButtonProps = React.ComponentPropsWithoutRef<typeof Button>;

interface ParticleButtonProps extends ButtonProps {
  isLoading?: boolean;
}

export function ParticleButton({
  children,
  className,
  isLoading,
  ...props
}: ParticleButtonProps) {
  return (
    <Button
      {...props}
      className={cn(
        "relative overflow-hidden flex items-center gap-2",
        className,
      )}
    >
      <AnimatePresence>
        {!isLoading && (
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute inset-0 pointer-events-none"
          />
        )}
      </AnimatePresence>

      <MousePointerClick className="w-4 h-4" />
      {children}
    </Button>
  );
}
