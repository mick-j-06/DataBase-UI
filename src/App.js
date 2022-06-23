import {useState} from "react";
import {Navbar} from "./components/Navbar";
import {Sidebar} from "./components/Sidebar";
import Card from "./components/Card";
import {ContainerFluid} from "./components/ContainerFluid";

function App() {
    const [sidebarClass, setSidebarClass] = useState("sb-nav-fixed");
    function toggleSidebarClass() {
        setSidebarClass(
            sidebarClass.includes("toggled")
                ? "sb-nav-fixed"
                : "sb-nav-fixed sb-sidenav-toggled"
        );
    }

    return (
        <>
        <div className={sidebarClass} id={"app"}>
            <Navbar toggleSidebarClass={toggleSidebarClass}/>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar/>
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <ContainerFluid>
                            <div className="row g-4">
                                <Card icon={"fa fa-chart-line fa-3x text-primary"}>
                                    <p className="mb-2">Text</p>
                                    <h6 className="mb-0">1234</h6>
                                </Card>
                                <Card icon={"fa fa-chart-bar fa-3x text-primary"} >
                                    <p className="mb-2">Text</p>
                                    <h6 className="mb-0">1234</h6>
                                </Card>
                                <Card icon={"fa fa-chart-area fa-3x text-primary"} >
                                    <p className="mb-2">Text</p>
                                    <h6 className="mb-0">1234</h6>
                                </Card>
                                <Card icon={"fa fa-chart-pie fa-3x text-primary"}>
                                    <p className="mb-2">Text</p>
                                    <h6 className="mb-0">1234</h6>
                                </Card>
                            </div>
                        </ContainerFluid>
                        <ContainerFluid>
                            <div className="row g-4">
                                <div className="col-sm-12 col-xl-6">
                                    <div className="bg-dark text-center rounded p-4">
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                            <h6 className="mb-0">Data</h6>
                                            <a href="">Show All</a>
                                        </div>
                                        <canvas></canvas>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-xl-6">
                                    <div className="bg-dark text-center rounded p-4">
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                            <h6 className="mb-0">Data</h6>
                                            <a href="">Show All</a>
                                        </div>
                                        <canvas></canvas>
                                    </div>
                                </div>
                            </div>
                        </ContainerFluid>
                        <ContainerFluid>
                            <div className="bg-dark text-center rounded p-4">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <h6 className="mb-0">Recent Salse</h6>
                                    <a href="">Show All</a>
                                </div>
                                <canvas></canvas>
                            </div>
                        </ContainerFluid>
                    </main>
                    <ContainerFluid>
                        <div className="bg-dark rounded-top p-4" id={"footer"} >
                            <div className="row">
                                <div className="col-12 col-sm-6 text-center text-sm-start">
                                    Antananarivo 101
                                    <br/>
                                    CONTACT : +261 40 501 44
                                </div>
                                <div className="col-12 col-sm-6 text-center text-sm-end">
                                    👾👾👾 - Designed By :
                                    <br/>
                                    Jerry, Lauren, Reich
                                </div>
                            </div>
                        </div>
                    </ContainerFluid>
                </div>
            </div>
        </div>
        </>
    );
}

export default App;
