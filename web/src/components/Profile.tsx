import { getUser } from "../lib/auth";
import Image from "next/image";

export const Profile = () => {
    const {name, avatarUrl} = getUser()
    return (
        <div className="flex items-center gap-3 text-left">
             <Image src={avatarUrl} alt={name} width={40} height={40} className="rounded-full w-10 h-10" />
        <p className="max-w-[140px] text-sm leading-snug">
            Olá, {name.split(" ")[0]} 
            <a href="" className="block text-red-400 hover:text-red-300">Quero sair</a>
        </p>
      </div>
    )
}