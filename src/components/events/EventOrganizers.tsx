import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const organizers = [
	{ name: "Starkcon", role: "Organizer", avatar: "SC" },
	{ name: "Chaal Pritam", role: "Host", avatar: "CP" },
	{ name: "Web3Chennai", role: "Community Partner", avatar: "W3" },
	{ name: "IITM RP", role: "Partner", avatar: "RP" },
];

export function EventOrganizers() {
	return (
		<Card className="mb-8 border-none bg-cream">
			<CardContent className="pt-3">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
					{organizers.map((org) => (
						<div
							key={org.name}
							className="flex items-center group rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-orange-600 tex-white cursor-pointer group p-3"
						>
							<Avatar className="h-12 w-12 transform group-hover:scale-105 transition-transform duration-300">
								<AvatarImage src="" alt={org.name} />
								<AvatarFallback className="bg-white text-[#403E43] text-sm">
									{org.avatar}
								</AvatarFallback>
							</Avatar>

							<div className="flex flex-col ml-4 flex-1 text-white">
								<h3 className="font-medium text-md truncate">{org.name}</h3>
								<Badge
									variant="secondary"
									className="mt-1 w-fit group-hover:bg-gradient-to-r from-[#D3E4FD] to-[#E5DEFF] text-[#403E43] text-xs hover:from-[#FEC6A1] hover:to-[#FFDEE2] transition-all duration-300 border-none px-3 py-0.5 rounded-full shadow-sm group-hover:shadow"
								>
									{org.role}
								</Badge>
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
