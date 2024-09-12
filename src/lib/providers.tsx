"use client";

import { ThemeProvider } from "@/components/theme-provider";
import React from "react";
import { Toaster } from 'sonner'

export function Providers(props: { children: React.ReactNode }) {
  return (
    
    <ThemeProvider
     attribute="class"
     defaultTheme="system"
     enableSystem
     disableTransitionOnChange>
      {props.children}
      <Toaster position="top-center" richColors closeButton />
    </ThemeProvider>
  );
}