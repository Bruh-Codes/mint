import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export function Navigation() {
	return (
		<nav className="w-full bg-cream border-b">
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-4">
					<div className="flex items-center justify-between">
						<Link to="/" className="text-2xl font-bold text-primary">
							Freshmint
						</Link>

						<div className="lg:hidden">
							{/* Mobile menu button would go here */}
						</div>
					</div>

					<div className="hidden lg:flex items-center space-x-8">
						<Link
							to="/events"
							className="text-gray-600 hover:text-primary transition-colors"
						>
							Events
						</Link>
						<Link
							to="/community"
							className="text-gray-600 hover:text-primary transition-colors"
						>
							Community
						</Link>
						<Link
							to="/profiles"
							className="text-gray-600 hover:text-primary transition-colors"
						>
							Profiles
						</Link>
					</div>

					<div className="hidden lg:flex items-center space-x-4">
						<Link
							to="/connect"
							className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
						>
							Connect
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
