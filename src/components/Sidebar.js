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
                <div id={"admin"} className="d-flex align-items-center ms-4 mb-4 mt-4">
                    <div className="position-relative">
                        <img className="rounded-circle" src="" alt=""/>
                        <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    <div className="ms-3">
                        <h5 className="mb-0">Nom</h5>
                        <span>Admin</span>
                    </div>
                </div>
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