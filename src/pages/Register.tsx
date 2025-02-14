import { EventHeader } from "@/components/events/EventHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Register = () => {
	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		toast.success("Registration successful!");
		navigate("/");
	};

	return (
		<>
			<EventHeader />
			<main className=" flex items-center justify-center h-screen bg-cream  py-12 px-4">
				<div className="max-w-lg w-full bg-white rounded-lg shadow p-8">
					<h1 className="text-2xl font-bold text-gray-900 mb-6">
						Event Registration
					</h1>

					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="space-y-2">
							<Label htmlFor="name">Full Name</Label>
							<Input id="name" placeholder="Enter your full name" required />
						</div>

						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								placeholder="Enter your email"
								required
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="phone">Phone Number</Label>
							<Input
								id="phone"
								type="tel"
								placeholder="Enter your phone number"
								required
							/>
						</div>

						<div className="pt-4">
							<Button type="submit" className="w-full">
								Register for Event
							</Button>
						</div>
					</form>
				</div>
			</main>
		</>
	);
};

export default Register;
