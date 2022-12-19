import LoginComponent from '../components/LoginComponent'
export const Login = () => {
  return (
    	<div className="container d-flex flex-column">
			<div className="row vh-100">
				<div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
					<div className="d-table-cell align-middle">

						<div className="text-center mt-4">
							<h1 className="h2">Welcome back, Charles</h1>
							<p className="lead">
								Sign in to your account to continue
							</p>
						</div>

						<div className="card">
							<div className="card-body">
								<div className="m-sm-4">
									<div className="text-center">
										<img src="adminkit/img/avatars/avatar.jpg" alt="Charles Hall" className="img-fluid rounded-circle" width="132" height="132" />
									</div>
									
                                    <LoginComponent />
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
  )
}
