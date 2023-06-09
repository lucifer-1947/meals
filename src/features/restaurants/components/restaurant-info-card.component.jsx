import React from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/images/star";
import open from "../../../../assets/images/open";
import {
	CardContent,
	CardCover,
	CardTitle,
	StyledSvg,
	StyledText,
	StyledView,
} from "./restaurant-info-card.styles";

export default function RestaurantInfoCard({ restaurant = {} }) {
	const {
		name = "Swagath Grand",
		icon,
		photos = [
			"https://assets.architecturaldigest.in/photos/63733ec2a2dd6ea6560eb6da/4:3/w_1440,h_1080,c_limit/Ditas%20Interior%20Image%20-%201%20(8).png",
		],
		address = "9-2001/30 , Mumbai",
		rating = 4.5,
		isClosed = false,
	} = restaurant;

	const stars = Array(Math.floor(rating));
	stars.fill(
		<SvgXml
			xml={star}
			width={20}
			height={20}
		/>
	);

	return (
		<Card
			elevation={5}
			style={{ shadowColor: "black", shadowRadius: 10, shadowOpacity: 0.5, marginVertical:24}}>
			{/* <CardCover source={{ uri: photos[0] }} /> */}

			<CardTitle
				name={name}
				address={address}
			/>

			<CardContent>
				<StyledView>
					{stars}
					<StyledText>{rating}</StyledText>
				</StyledView>

				{isClosed ? (
					<StyledText>CLOSED RIGHT NOW</StyledText>
				) : (
					<StyledSvg
						xml={open}
						width={50}
						height={50}
					/>
				)}
			</CardContent>
		</Card>
	);
}
