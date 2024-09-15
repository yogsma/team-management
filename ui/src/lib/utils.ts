import { toast } from "@/hooks/use-toast"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function showToast(message: string, type: 'success' | 'error' = 'success') {
  toast({
    title: type === 'success' ? "Success" : "Error",
    description: message,
    variant: type === 'success' ? "default" : "destructive",
  })
}