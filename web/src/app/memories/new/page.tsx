
import { NewMemoryForm } from "@/src/components/NewMemoryForm";
import {ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NewMemory ()  {
    return (
        <div className="flex flex-1 flex-col gap-4">
           <Link href="/" className="flex items-center text-sm text-gray-200 hover:text-gray-100">
            <ChevronLeft  className="h-4 w-4"/>
            Voltar à timeline
            </Link>
            <NewMemoryForm />
        </div>
    )
}