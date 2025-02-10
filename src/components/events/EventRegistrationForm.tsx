import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const formSchema = z.object({
	blockchainKnowledge: z
		.string({
			required_error: "Please select your knowledge level",
		})
		.min(1, "Please select your knowledge level"),
	message: z.string(),
	enrollmentNumber: z.string().optional(),
	college: z
		.string({
			required_error: "College name is required",
		})
		.min(1, "College name is required"),
	branch: z
		.string({
			required_error: "Branch is required",
		})
		.min(1, "Branch is required"),
	yearOfStudy: z
		.string({
			required_error: "Year of study is required",
		})
		.min(1, "Year of study is required"),
	socialHandle: z
		.string({
			required_error: "Social handle is required",
		})
		.min(1, "Social handle is required"),
});

export function EventRegistrationForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			blockchainKnowledge: "",
			message: "",
			enrollmentNumber: "",
			college: "",
			branch: "",
			yearOfStudy: "",
			socialHandle: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<Card className="mb-8 border-none bg-cream">
			<CardHeader className="flex flex-row items-center justify-between w-full">
				<div className="flex flex-row items-center gap-5">
					<CardTitle className="w-fit">Registration</CardTitle>
					<Link
						to={"/"}
						className="bg-transparent text-sm text-orange-500 hover:text-orange-600 font-medium"
					>
						Manage Event
					</Link>
				</div>
				<Link
					to={"/"}
					className="bg-transparent !mt-0 text-sm text-black underline hover:text-black/80 font-medium"
				>
					View location in Google Map
				</Link>
			</CardHeader>
			<CardContent>
				<div className="flex items-center justify-between my-7">
					<p className=" text-gray-900 max-w-xl text-xl font-semibold">
						Hello! Please register below. You will be able to join the event
						when the host approves your registration.
					</p>
					<Button
						type="button"
						className="text-lg font-semibold rounded-full p-6 px-7"
					>
						Share this event
					</Button>
				</div>
				<Card className="space-y-6 bg-[#F7EBEB] border-none">
					<CardContent className="p-10">
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-5"
							>
								<FormField
									control={form.control}
									name="blockchainKnowledge"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-black font-semibold text-lg">
												Rate yourself in the knowledge of blockchain{" "}
												<span className="text-red-600">*</span>
											</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<FormControl
													className={
														form.formState.errors.blockchainKnowledge
															? "border-red-500"
															: ""
													}
												>
													<SelectTrigger>
														<SelectValue placeholder="Select your knowledge level" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value="beginner">Beginner</SelectItem>
													<SelectItem value="intermediate">
														Intermediate
													</SelectItem>
													<SelectItem value="advanced">Advanced</SelectItem>
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="message"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-black font-semibold text-lg">
												Say something
											</FormLabel>
											<FormControl>
												<Input
													{...field}
													className={
														form.formState.errors.message
															? "border-red-500"
															: ""
													}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="enrollmentNumber"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-black font-semibold text-lg">
												If you are from IIT Madras ? Share enrollment number
											</FormLabel>
											<FormControl>
												<Input
													{...field}
													placeholder="Enrollment number"
													className={
														form.formState.errors.enrollmentNumber
															? "border-red-500"
															: ""
													}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="college"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-black font-semibold text-lg">
												College
											</FormLabel>
											<FormControl>
												<Input
													{...field}
													placeholder="College name"
													className={
														form.formState.errors.college
															? "border-red-500"
															: ""
													}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="branch"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-black font-semibold text-lg">
												Branch
											</FormLabel>
											<FormControl>
												<Input
													{...field}
													placeholder="Course branch"
													className={
														form.formState.errors.branch ? "border-red-500" : ""
													}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="yearOfStudy"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-black font-semibold text-lg">
												Year of Study
											</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<FormControl
													className={
														form.formState.errors.yearOfStudy
															? "border-red-500"
															: ""
													}
												>
													<SelectTrigger>
														<SelectValue placeholder="Select year" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value="1">First Year</SelectItem>
													<SelectItem value="2">Second Year</SelectItem>
													<SelectItem value="3">Third Year</SelectItem>
													<SelectItem value="4">Fourth Year</SelectItem>
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="socialHandle"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-black font-semibold text-lg">
												Twitter or Other Social Handle
											</FormLabel>
											<FormControl>
												<Input
													{...field}
													placeholder="Username"
													className={
														form.formState.errors.socialHandle
															? "border-red-500"
															: ""
													}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<Button
									type="submit"
									className="w-fit mr-auto rounded-full p-5 px-7"
								>
									Register
								</Button>
							</form>
						</Form>
					</CardContent>
				</Card>
			</CardContent>
		</Card>
	);
}
