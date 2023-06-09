import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	ImageBackground,
	FlatList,
} from "react-native";
import React, { useContext } from "react";
import Search from "../../../components/Search";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import styled from "styled-components";
import { ThemeContext } from "styled-components/native";
import { SvgXml } from "react-native-svg";
import { xml } from "../../../../assets/images/homer-simpson";

const StyledView = styled(View)`
	padding: ${(props) => props.theme.space[2]};
	justify-content: center;
`;
export default function RestaurantsScreen() {
	const themeContext = useContext(ThemeContext);

	return (
		<SafeAreaView
			style={{ flex: 1, backgroundColor: themeContext.colors.brand.primary }}
		>
			<StyledView>
				<Search />
			</StyledView>

			<StyledView style={{flex:1}}>
				<FlatList
					data={[
            { name:'0' },
            { name:'1' },
            { name:'2' },
            { name:'3' },
            { name:'4' },
            { name:'5' },
            { name:'6' },
            { name:'7' },
            { name:'8' },
            { name:'9' }
          ]}
					renderItem={(element) => <RestaurantInfoCard restaurant={element.item} />}
					keyExtractor={(element) => element.index}
				/>

				<SvgXml
					style={{ position: "absolute", zIndex: -1 }}
					xml={xml}
					width='100%'
					height='100%'
				></SvgXml>
			</StyledView>
		</SafeAreaView>
	);
}
