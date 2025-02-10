import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function EventInformation() {
	return (
		<Card className="bg-white shadow-md">
			<CardHeader className="border-b border-gray-100">
				<CardTitle className="text-2xl font-bold text-gray-900">
					Event Information
				</CardTitle>
			</CardHeader>
			<CardContent className="prose prose-gray max-w-none p-6 space-y-6">
				{/* Event Introduction */}
				<div className="bg-blue-50 p-4 rounded-lg">
					<h3 className="text-xl font-semibold text-blue-900 mb-2">
						StarkCon comes to 🇮🇳
					</h3>
					<p className="text-blue-800">
						We are thrilled to bring the 'STARK' team to IIT Madras after
						hosting meetups at IIT Delhi, IIT Guwahati, IIT Kharagpur, IIT
						Roorkee, and, BITS Pilani! 🙌🏻
					</p>
				</div>

				{/* Main Description */}
				<div className="space-y-4">
					<p className="text-gray-700 leading-relaxed">
						In this meetup, you will get to learn about ZK-Rollup technology, L2
						scaling, programming in CAIRO, the progress of the StarkNet
						ecosystem, and much more 🚀
					</p>
					<p className="text-gray-700 leading-relaxed">
						If blockchain and web3 interest you, make sure to come by and learn
						from the best! Cool merchandise awaits you ✨
					</p>
					<p className="text-gray-700 leading-relaxed">
						Come hang out with the 'STARK fam' for an evening of learning and
						socializing for coders, enthusiasts, and the future builders of
						CAIRO in the web3 ecosystem 🎉
					</p>
				</div>

				{/* Get Involved Section */}
				<div className="bg-gray-50 p-4 rounded-lg">
					<h3 className="text-xl font-semibold text-gray-900 mb-4">
						More on how to get involved with us:
					</h3>

					{/* Grants Program */}
					<div className="mb-4">
						<h4 className="text-lg font-medium text-gray-800 mb-2">
							Grants Program
						</h4>
						<p className="text-gray-700">
							We have grants specifically for the Indian community targeting
							students, developers, and builders. Know more and apply here:{" "}
							<a
								href="https://starkcon.com/grants"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:text-blue-800 underline"
							>
								https://starkcon.com/grants
							</a>
						</p>
					</div>

					{/* Bootcamp Section */}
					<div>
						<h4 className="text-lg font-medium text-gray-800 mb-2">
							Online Cairo Bootcamp
						</h4>
						<ul className="list-disc list-inside space-y-2 text-gray-700">
							<li>
								If you have a superb idea for grants but don't know how to
								buidl, we gotchu you 🤝🏻 We are planning a Cairo online
								Bootcamp on a global scale.
							</li>
							<li>Learn Cairo and buidl exciting projects with us 🥳</li>
							<li>
								Register here:{" "}
								<a
									href="https://lu.ma/cairoBootcamp"
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-600 hover:text-blue-800 underline"
								>
									https://lu.ma/cairoBootcamp
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Event Details */}
				<div className="bg-green-50 p-4 rounded-lg">
					<div className="space-y-2">
						<p className="text-green-900">
							<strong>Date:</strong> 22nd December
						</p>
						<p className="text-green-900">
							<strong>Time:</strong> 3 PM to 6 PM IST
						</p>
						<p className="text-green-900">
							<strong>Location:</strong> Raman hall, IIT Madras
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
