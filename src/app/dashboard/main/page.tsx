



import { WidgetsGrid } from "@/components";

export const metadata = {
    title: 'Dashboard',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident soluta aliquam enim ipsa deleniti fugiat perferendis! Perferendis quae adipisci vitae ratione vel accusantium nisi exercitationem consectetur odit omnis. Harum, quidem?',
};
   

export default function MainPage() {
    return (
        <div className="text-black p-2">
            <h1 className="text-3xl">Dashboard</h1>
            <p className="text-xl">Información general</p>
            <WidgetsGrid />
        </div>
    );
}
