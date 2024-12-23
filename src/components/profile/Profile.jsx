import { getUserData } from "@/services/localStorageService";
import { Avatar } from "@nextui-org/avatar";
import defaultAvatar from "@/assets/avatars/avatar.png";
import { FireDay } from "@/components/ui/FireDay";
import { CurrentTask } from "@/components/profile/CurrentTask";

const backgrounds = {
  ocean: "bg-ocean",
  catiamatos: "bg-catiamatos",
  material: "bg-material",
  bridge: "bg-bridge",
};

export function Profile() {
  const wallpaper = getUserData("wallpaper");
  const avatar = getUserData("avatar");
  const name = getUserData("name");
  return (
    <div
      className={`w-full h-full ${backgrounds[wallpaper]} bg-cover bg-center rounded-2xl border-5 border-white relative`}
    >
      <div className="flex justify-between items-center p-5">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl text-white font-bold">Hello {name} 👋</h1>
          <p className="text-md text-white">Welcome to tomatify</p>
        </div>
        <Avatar
          size="lg"
          isBordered
          radius="full"
          src={avatar || defaultAvatar}
        />
      </div>
      <div className="w-full flex justify-between items-center flex-col md:flex-row p-5">
        <div className="w-full flex justify-between md:justify-stretch gap-2">
          <FireDay active day="M" />
          <FireDay active day="T" />
          <FireDay day="W" />
          <FireDay active day="T" />
          <FireDay active day="F" />
          <FireDay active day="S" />
          <FireDay day="S" />
        </div>
        <div className="mt-5 md:mt-0">
          <CurrentTask />
        </div>
      </div>
    </div>
  );
}
