import LogoutModal from "./layouts/LogoutModal"
import Navbar from "./layouts/Navbar"
import Sidebar from "./layouts/Sidebar"
import Router from "./router"

function App() {
  return (
	<>
    <div id="wrapper">
		<Sidebar />
		<div id="content-wrapper" className="d-flex flex-column">
			<div id="content">
			<Navbar />
                <div className="container-fluid">
					<Router />
				</div>
			</div>
		</div>
	</div>
	<a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
    </a>
	<LogoutModal />
	</>
  )
}

export default App
