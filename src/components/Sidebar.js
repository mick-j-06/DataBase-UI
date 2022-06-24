import {SidebarMenuHeading} from "./SidebarMenuHeading";
import {NavLink} from "./NavLink";

const sidebarItems = [
    {type: "navlink", title: "Tableau de bord", icon: "fas fa-tachometer-alt"},
    {
        type: "navlink",
        title: "Menu",
        icon: "fas fa-columns",
        items: ["Child", "Child"],
    },
    {
        type: "navlink",
        title: "Menu",
        icon: "fas fa-columns",
        items: [
            {
                type: "navlink",
                title: "Menu",
                items: ["Child","Child","Child"],
            },
            {
                type: "navlink",
                title: "Menu",
                items: ["Child","Child","Child"],
            },
        ],
    },
    {
        type: "navlink",
        title: "Menu",
        icon: "fas fa-chart-area",
    },
    {
        type: "navlink",
        title: "Menu",
        icon: "fas fa-table",
    },
];

export function Sidebar() {
    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                    {sidebarItems.map((sideBarItem) =>
                        sideBarItem.type === "heading" ? (
                            <SidebarMenuHeading {...sideBarItem} />
                        ) : (
                            <NavLink {...sideBarItem} />
                        )
                    )}
                </div>
            </div>
        </nav>
    );
}