import { Crown, HandPlatter, Home, Mountain, MountainSnow, Snowflake, Tent, TentTree, Tractor, TreePalm } from "lucide-react";
import Filter from "./Filter";

const Filters = () => {
    const sorting = [
        { title: "Home", icon: <Home /> },
        { title: "Mountain", icon: <Mountain /> },
        { title: 'Tent', icon: <Tent /> },
        { title: "Luxe", icon: <HandPlatter /> },
        { title: "Camping", icon: <TentTree /> },
        { title: "Tropical", icon: <TreePalm /> },
        { title: "Snow-Mountains", icon: <MountainSnow /> },
        { title: "Farm", icon: <Tractor /> },
        { title: "Arctic", icon: <Snowflake /> },
        { title: "Mansion", icon: <Crown /> }
    ];

    return (
        <div className="mt-4 mx-4 flex gap-8 items-center">
            {sorting.map(({ title, icon }) => (
                <Filter key={title} title={title} icon={icon} />
            ))}
        </div>
    );
};

export default Filters;
