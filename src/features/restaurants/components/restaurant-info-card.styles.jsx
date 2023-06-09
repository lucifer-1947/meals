import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

export const StyledView = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const StyledText = styled.Text`
	font-family: ${(props) => props.theme.fonts.body};
	padding-left: ${(props) => props.theme.space[1]};
`;

export const StyledSvg = styled(SvgXml)`
	position: absolute;
	left: 90%;
	top: 50%;
`;



export const CardCover = styled(Card.Cover)`
	padding: ${(props) => props.theme.space[2]};
`;

export const CardContent = styled(Card.Content)`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	font-family: ${(props) => props.theme.fonts.body};
`;

export const CardTitle = styled(Card.Title).attrs((props) => ({
	title: props.name,
	subtitle: props.address,
	titleStyle: {
		fontFamily: props.theme.fonts.body,
	},
}))``;
