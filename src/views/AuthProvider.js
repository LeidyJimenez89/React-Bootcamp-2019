import React from "react";

const AuthProvider = WrappedComponent =>
	class AuthProvider extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				isAuth: window.localStorage.getItem("username") === "Leonardo"
			};
		}

		render() {
			const data = {
				...this.props,
				isAuth: this.state.currentUser
			};
			return <WrappedComponent {...data} />;
		}
	};

export default AuthProvider;
