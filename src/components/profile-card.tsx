import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export function ProfileCard() {
  return (
    <div className="relative w-fit bg-radial from-neutral-900 to-neutral-800 p-4 rounded-br-lg rounded-tr-lg shadow-lg flex items-center border-neutral-300">
      <Avatar className="w-12 h-12">
        <AvatarImage src="https://github.com/Mwrnk.png" alt="User" />
        <AvatarFallback>MW</AvatarFallback>
      </Avatar>
      <span className="absolute bottom-4 right-37 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-white"></span>
      </span>
      <div className="ml-3 text-sm">
        <p className="font-semibold text-white">Mateus Werneck</p>
        <p className="text-gray-400">Software Engineer</p>
      </div>
    </div>
  );
}
