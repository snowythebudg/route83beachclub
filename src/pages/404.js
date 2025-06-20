import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Text, Icon, LinkBox, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import { BsArrowLeftShort } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Route 83 Beach Club - Music from the shoreline to your speakers
			</title>
			<meta name={"description"} content={"As much as it looks like a nightclub, we are not. Route 83 Beach Club is a distribution-foused label exclusively for brand new artists, We provide exclusive distribution through The Orchard and accept most if not all genres!"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6854e3263b5d6f001f996a80/images/HI-83.svg.png?v=2025-06-20T20:55:16.406Z"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="0px 0 0px 0" lg-max-height="none" min-height="100vh" quarkly-title="404-3">
			<Override slot="SectionContent" max-width="none" width="100%" flex-direction="row" />
			<Box
				align-items="flex-start"
				display="flex"
				justify-content="space-between"
				flex-direction="column"
				width="50%"
				lg-width="100%"
				lg-align-items="center"
				background="#000000"
			>
				<Box
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					justify-content="flex-start"
					padding="36px 36px 36px 36px"
					width="100%"
					lg-align-items="center"
					lg-justify-content="center"
					lg-padding="24px 24px 24px 24px"
				>
					<Image src="https://uploads.quarkly.io/6854e3263b5d6f001f996a80/images/HI-83.svg.png?v=2025-06-20T20:55:16.406Z" display="block" width="100px" height="100px" />
				</Box>
				<Box
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					padding="36px 36px 36px 36px"
					lg-align-items="center"
					lg-padding="24px 24px 24px 24px"
					lg-justify-content="flex-start"
				>
					<Text font="--headline3" color="#ffffff" lg-margin="0px 0px 0px 0px">
						404
					</Text>
					<Text
						color="#ffffff"
						margin="8px 0px 16px -4px"
						sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
						font="--headline1"
						letter-spacing="-0.025em"
						lg-font="normal 700 48px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					>
						Page not found
					</Text>
					<Text
						lg-width="80%"
						font="--lead"
						color="#ffffff"
						margin="0px 0px 30px 0px"
						lg-text-align="center"
					>
						Sorry, we couldn’t find the page you’re looking for.
					</Text>
					<Box display="flex" grid-template-columns="1fr 1fr" grid-gap="8px" lg-align-items="center">
						<LinkBox
							flex-direction="row"
							padding="12px 8px 12px 8px"
							transition="--opacityOut"
							hover-opacity="0.7"
							lg-margin="0px 0px 20px 0px"
						>
							<Icon
								category="bs"
								icon={BsArrowLeftShort}
								size="24px"
								margin="4px 4px 0px 0px"
								color="#ffffff"
							/>
							<Text margin="0px 0px 0px 0px" font="--lead" color="#ffffff">
								Back to home
							</Text>
						</LinkBox>
					</Box>
				</Box>
			</Box>
			<Box width="50%" lg-display="none">
				<Image
					src="https://images.unsplash.com/photo-1561571994-3c61c554181a?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
					display="block"
					width="100%"
					height="100%"
					object-fit="cover"
					srcSet="https://images.unsplash.com/photo-1561571994-3c61c554181a?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=500 500w,https://images.unsplash.com/photo-1561571994-3c61c554181a?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=800 800w,https://images.unsplash.com/photo-1561571994-3c61c554181a?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=1080 1080w,https://images.unsplash.com/photo-1561571994-3c61c554181a?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=1600 1600w,https://images.unsplash.com/photo-1561571994-3c61c554181a?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=2000 2000w,https://images.unsplash.com/photo-1561571994-3c61c554181a?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=2600 2600w,https://images.unsplash.com/photo-1561571994-3c61c554181a?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6854e3263b5d6f001f996a7e"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});