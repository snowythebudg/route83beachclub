import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, LinkBox, Box, Section, Icon, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { FiPackage, FiDollarSign, FiClipboard, FiXSquare } from "react-icons/fi";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Route 83 Beach Club - Music from the shoreline to your speakers
			</title>
			<meta name={"description"} content={"As much as it looks like a nightclub, we are not. Route 83 Beach Club is a distribution-foused label exclusively for brand new artists, We provide exclusive distribution through The Orchard and accept most if not all genres!"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6854e3263b5d6f001f996a80/images/HI-83.svg.png?v=2025-06-20T20:55:16.406Z"} type={"image/x-icon"} />
		</Helmet>
		<Section sm-padding="8px 0 8px 0" quarkly-title="Header-6" padding="24px 0px 24px 0px" background="#000000">
			<Override
				slot="SectionContent"
				flex-direction="row"
				justify-content="space-between"
				max-width="100%"
				width="100%"
				padding="0px 24px 0px 24px"
			/>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="center"
				align-items="flex-start"
				flex-direction="row"
				width="20%"
				sm-width="50%"
				sm-align-items="center"
				sm-flex-direction="row"
				sm-justify-content="flex-start"
				md-width="50%"
				lg-width="20%"
				md-justify-content="flex-start"
				md-order="-1"
			>
				<LinkBox flex-direction="row" href="/index" display="flex" grid-gap="12px">
					<Image src="https://uploads.quarkly.io/6854e3263b5d6f001f996a80/images/HI-83.svg.png?v=2025-06-20T20:55:16.406Z" display="block" width="36px" height="36px" />
					<Text
						margin="0"
						md-margin="0px 0 0px 0"
						text-align="left"
						font="normal 500 21px/1.2 --fontFamily-googleStixTwoText"
						sm-margin="0px 0 0px 0"
						display="block"
						color="#ffffff"
					>
						Route 83 Beach Club
					</Text>
				</LinkBox>
			</Box>
		</Section>
		<Section
			background="#ff7c00 url(https://images.unsplash.com/photo-1548382929-d7e0c5f87647?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) center center/cover no-repeat"
			min-height="100vh"
			lg-padding="120px 0 88px 0"
			md-padding="140px 0 96px 0"
			sm-padding="60px 0 96px 0"
			quarkly-title="Hero-22"
			padding="88px 0 88px 0"
		>
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				padding="0px 0px 0px 0px"
				lg-justify-content="center"
				width="100%"
				flex-direction="row"
				align-items="flex-start"
				lg-align-items="center"
				lg-flex-direction="column"
				display="flex"
				lg-width="100%"
				margin="0px 0px 0px 0px"
				md-margin="0px 0px 0px 0px"
			>
				<Text
					lg-width="100%"
					lg-text-align="center"
					margin="0px 0px 0px 0px"
					color="#FFFFFF"
					font="--lead"
					width="100%"
					sm-margin="0px 0px 12px 0px"
					letter-spacing="2px"
				>
					Music from the shoreline to your speakers{"\n\n"}
				</Text>
			</Box>
			<Box
				md-margin="0px 0px 0px 0px"
				width="100%"
				flex-direction="row"
				align-items="flex-end"
				lg-width="100%"
				margin="0px 0px 0px 0px"
				lg-justify-content="center"
				display="flex"
				lg-align-items="center"
				padding="0px 0px 0px 0px"
				justify-content="space-between"
				lg-flex-direction="column"
			>
				<Text
					md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					md-width="100%"
					margin="0px 0px 0px 0px"
					lg-width="100%"
					lg-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					color="--light"
					width="30%"
					lg-text-align="center"
					lg-margin="0px 0px 20px 0px"
					font="--headline1"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					Route 83 Beach Club
				</Text>
			</Box>
		</Section>
		<Section background="#000000" padding="60px 0" sm-padding="40px 0">
			<Box margin="-16px -16px -16px -16px" padding="16px 16px 16px 16px" display="flex" flex-wrap="wrap">
				<Box padding="16px 16px 16px 16px" width="50%" lg-width="100%">
					<Box
						background="url(https://images.unsplash.com/photo-1740284443465-aef0606836d1?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) 50% 15%/cover"
						padding="0px 0px 672px 0px"
						margin="0px -112px 0px 0px"
						lg-margin="0px 0px 0px 0px"
						sm-padding="0px 0px 400px 0px"
					/>
				</Box>
				<Box width="50%" display="flex" padding="16px 16px 0px 16px" lg-width="100%">
					<Box
						padding="98px 64px 98px 64px"
						mix-blend-mode="lighten"
						background="#3d1c79"
						margin="36px 0px -20px -112px"
						display="flex"
						flex-direction="column"
						color="--light"
						lg-margin="0px 0px 0px 0px"
						lg-width="100%"
						sm-padding="64px 32px 64px 32px"
					>
						<Text
							as="h4"
							margin="0"
							font="--base"
							letter-spacing="1px"
							text-transform="uppercase"
						>
							About route 83 beach club
						</Text>
						<Text as="h1" margin="0 0 16px 0" font="--headline1" lg-font="--headline2">
							What is Route 83 Beach Club?
						</Text>
						<Text as="p" margin="16px 0" font="normal 300 24px/1.5 --fontFamily-googleNeuton" max-width="400px">
							Although it sounds like a nightclub. Route 83 Beach Club is part of the next generation of distribution-focused record labels. Route 83 Beach Club was founded in June 2025 and is part of the XZ1 Recordings umbrella of companies. We focus on brand new talent and have extremely generous royalty splits and non-exclusive agreements so you don't have to worry about any risks when it comes to distribution. All you need to focus on is your music!
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section
			padding="60px 0 90px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="#000000"
			display="flex"
			lg-padding="45px 0 45px 0"
			quarkly-title="Advantages/Features-26"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				flex-wrap="wrap"
				grid-gap="5%"
				max-width="1200px"
				sm-min-width="280px"
			/>
			<Box
				display="flex"
				width="100%"
				flex-direction="column"
				align-items="center"
				lg-width="100%"
				sm-margin="0px 0px 40px 0px"
				sm-padding="0px 0px 0px 0px"
				lg-flex-direction="row"
				lg-flex-wrap="wrap"
				lg-justify-content="center"
			>
				<Text
					as="h1"
					margin="0px"
					font="--headline2"
					color="--light"
					width="100%"
					md-width="100%"
					sm-font="normal 600 40px/1.2 --fontFamily-sans"
					text-align="center"
					sm-text-align="left"
				>
					What we do for artists
				</Text>
				<Text
					margin="8px 0px 0px 0px"
					font="--base"
					text-align="center"
					color="--lightD2"
					lg-max-width="720px"
					sm-text-align="left"
				>
					See how we care for all new talent
				</Text>
				<Box
					display="grid"
					width="100%"
					grid-template-columns="repeat(2, 1fr)"
					grid-gap="24px"
					margin="36px 0px 0px 0px"
					max-width="1000px"
					md-grid-template-columns="1fr"
				>
					<Box
						padding="24px 24px 48px 24px"
						background="#000000"
						border-radius="8px"
						border-width="0px 0px 0px 4px"
						border-style="solid"
						border-color="#3d1c79"
						box-shadow="--m"
						sm-padding="24px 24px 24px 24px"
					>
						<Box display="flex" align-items="center">
							<Icon
								category="fi"
								icon={FiPackage}
								size="28px"
								color="#3d1c79"
								border-color="#3d1c79"
							/>
							<Text margin="0px 0px 0px 12px" font="--lead" color="--light">
								Distribution
							</Text>
						</Box>
						<Text margin="16px 0px 0px 0px" font="--base" color="--lightD2">
							We provide new talent with our high-tier distribution through The Orchard
						</Text>
					</Box>
					<Box
						padding="24px 24px 48px 24px"
						background="#000000"
						border-radius="8px"
						border-width="0px 0px 0px 4px"
						border-style="solid"
						border-color="#3d1c79"
						box-shadow="--m"
						sm-padding="24px 24px 24px 24px"
					>
						<Box display="flex" align-items="center">
							<Icon category="fi" icon={FiDollarSign} size="28px" color="#3d1c79" />
							<Text margin="0px 0px 0px 12px" font="--lead" color="--light">
								Artist-first royalty splits
							</Text>
						</Box>
						<Text margin="16px 0px 0px 0px" font="--base" color="--lightD2">
							All royalty splits are 80/20 just like regular distributor splits
						</Text>
					</Box>
					<Box
						padding="24px 24px 48px 24px"
						background="#000000"
						border-radius="8px"
						border-width="0px 0px 0px 4px"
						border-style="solid"
						border-color="#3d1c79"
						box-shadow="--m"
						sm-padding="24px 24px 24px 24px"
					>
						<Box display="flex" align-items="center">
							<Icon category="fi" icon={FiClipboard} size="28px" color="#3d1c79" />
							<Text margin="0px 0px 0px 12px" font="--lead" color="--light">
								Publishing administration
							</Text>
						</Box>
						<Text margin="16px 0px 0px 0px" font="--base" color="--lightD2">
							All artists get access to XZ1 MUSIC PUBLISHING with fair royalty splits. You do need to sign an extra deal with us to access our publishing admin
						</Text>
					</Box>
					<Box
						padding="24px 24px 48px 24px"
						background="#000000"
						border-radius="8px"
						border-width="0px 0px 0px 4px"
						border-style="solid"
						border-color="#3d1c79"
						box-shadow="--m"
						sm-padding="24px 24px 24px 24px"
					>
						<Box display="flex" align-items="center">
							<Icon category="fi" icon={FiXSquare} size="28px" color="#3d1c79" />
							<Text margin="0px 0px 0px 12px" font="--lead" color="--light">
								Non-exclusive distribution deals
							</Text>
						</Box>
						<Text margin="16px 0px 0px 0px" font="--base" color="--lightD2">
							Our deals do not lock you into distributing with Route 83 Beach Club. However, as most labels. We do hold the rights to anything you submit through us,
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="60px 0" sm-padding="40px 0" color="--dark" background="#000000">
			<Text as="h1" font="--headline1" margin="0 0 24px 0" color="#ffffff">
				FAQs
			</Text>
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
				<Box padding="16px 16px 16px 16px" width="33.333%" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text as="h3" font="--headline3" margin="12px 0" color="#ffffff">
							Do you do physical distribution?
						</Text>
						<Text as="p" font="--base" margin="12px 0" color="#ffffff">
							We do, but only if you land a deal with our main label XZ1 Recordings. Route 83 Beach Club is more of a simple label and as such, we only do digital distribution
						</Text>
					</Box>
				</Box>
				<Box width="33.333%" padding="16px 16px 16px 16px" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text as="h3" font="--headline3" margin="12px 0" color="#ffffff">
							Who is your PRO?
						</Text>
						<Text as="p" font="--base" margin="12px 0" color="#ffffff">
							For XZ1 MUSIC PUBLISHING. Our PRO is AllTrack
						</Text>
					</Box>
				</Box>
				<Box width="33.333%" padding="16px 16px 16px 16px" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text as="h3" font="--headline3" margin="12px 0" color="#ffffff">
							How long do you hold the rights to my music for?
						</Text>
						<Text as="p" font="--base" margin="12px 0" color="#ffffff">
							We hold the rights for your music for a total of 1 year. After that, you are free to request us to release the rights to you or keep the release up through Route 83 Beach Club
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" position="relative" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1568650558991-475bafc09d66?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 50% 50% /cover repeat scroll padding-box" quarkly-title="Form-4">
			<Override slot="SectionContent" max-width="1220px" />
			<Box
				z-index="1"
				left="0px"
				top="0px"
				right="auto"
				bottom="auto"
				position="static"
				grid-template-columns="repeat(2, 1fr)"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					justify-content="center"
					align-items="center"
				>
					<Text
						lg-padding="0px 0px 0px 0px"
						sm-font="normal 700 36px/1.2 --fontFamily-sans"
						margin="0px 0px 18px 0px"
						font="--headline2"
						color="#ffffff"
						text-align="center"
						padding="0px 0 0px 0px"
						lg-width="100%"
						lg-margin="0px 0px 25px 0px"
					>
						Send us a demo!
					</Text>
					<Text
						margin="0px 0 50px 0px"
						font="--base"
						lg-margin="0px 0 50px 0px"
						text-align="center"
						display="flex"
						width="600px"
						sm-width="auto"
						md-width="100%"
						color="#ffffff"
					>
						Now's your chance to join the next generation of record labels. Use this form to send us a demo! (Google Drive links only!)
					</Text>
				</Box>
				<Box
					position="relative"
					z-index="1"
					display="flex"
					lg-flex-direction="column"
					flex-direction="column"
					align-items="center"
				>
					<Components.QuarklycommunityKitNetlifyForm lg-margin="0px 0px 35px 0px" sm-margin="0px 0px 25px 0px" sm-width="100%">
						<Override slot="Form" border-color="#ffffff" />
						<Box display="flex" lg-flex-wrap="wrap" margin="0px 0px 15px 0px" flex-direction="column">
							<Box
								min-width="10px"
								min-height="10px"
								display="flex"
								margin="0px 0px 20px 0px"
								sm-flex-direction="column"
								sm-width="100%"
							>
								<Box min-width="10px" min-height="10px" margin="0px 15px 0px 0px" sm-margin="0px 0 15px 0px">
									<Text margin="0px 0px 8px 0px" font="--base" color="#ffffff">
										First Name
									</Text>
									<Input
										margin="0px 10px 0px 0px"
										padding="12px 16px 12px 16px"
										width="100%"
										font="--lead"
										md-max-width="none"
										border-radius="8px"
										name="First Name"
										type="text"
										required
										md-margin="0px 0 16px 0px"
										background="#ffffff"
										border-color="--color-lightD2"
									/>
								</Box>
								<Box min-width="10px" min-height="10px">
									<Text margin="0px 0px 8px 0px" font="--base" color="#ffffff">
										Last Name
									</Text>
									<Input
										margin="0px 0 0px 0px"
										padding="12px 16px 12px 16px"
										width="100%"
										font="--lead"
										md-max-width="none"
										border-radius="8px"
										name="Last Name"
										type="text"
										required
										md-margin="0px 0 16px 0px"
										background="#ffffff"
										border-color="--color-lightD2"
									/>
								</Box>
							</Box>
							<Box
								min-width="10px"
								min-height="10px"
								display="flex"
								margin="0px 0px 0 0px"
								sm-flex-direction="column"
								flex-direction="column"
								sm-width="100%"
							>
								<Box
									min-width="10px"
									min-height="10px"
									margin="0px 15px 20px 0px"
									sm-margin="0px 0 15px 0px"
									width="100%"
								>
									<Text margin="0px 0px 8px 0px" font="--base" color="#ffffff">
										Artist name
									</Text>
									<Input
										margin="0px 10px 0px 0px"
										padding="12px 16px 12px 16px"
										width="100%"
										font="--lead"
										md-max-width="none"
										border-radius="8px"
										name="Company"
										type="text"
										required
										md-margin="0px 0 16px 0px"
										background="#ffffff"
										border-color="--color-lightD2"
									/>
								</Box>
								<Box min-width="10px" min-height="10px" margin="0px 0px 20px 0px" width="100%">
									<Text margin="0px 0px 8px 0px" font="--base" color="#ffffff">
										E-mail
									</Text>
									<Input
										margin="0px 0 0px 0px"
										padding="12px 16px 12px 16px"
										width="100%"
										font="--lead"
										md-max-width="none"
										border-radius="8px"
										name="E-mail"
										type="email"
										required
										md-margin="0px 0 16px 0px"
										background="rgba(255, 255, 255, 0.1)"
										border-color="--color-lightD2"
									/>
								</Box>
								<Box min-width="10px" min-height="10px" margin="0px 0px 20px 0px" width="100%">
									<Text margin="0px 0px 8px 0px" font="--base" color="#ffffff">
										Genre
									</Text>
									<Input
										margin="0px 0 0px 0px"
										padding="12px 16px 12px 16px"
										width="100%"
										font="--lead"
										md-max-width="none"
										border-radius="8px"
										name="Phone number"
										type="tel"
										required
										md-margin="0px 0 16px 0px"
										background="rgba(255, 255, 255, 0.1)"
										border-color="--color-lightD2"
									/>
								</Box>
							</Box>
							<Text margin="0px 0px 8px 0px" font="--base" color="#ffffff">
								Link to your demo
							</Text>
							<Input
								margin="0px 10px 30px 0px"
								padding="12px 16px 52px 16px"
								width="100%"
								font="--lead"
								md-max-width="none"
								border-radius="8px"
								name="Message"
								type="text"
								required
								background="#ffffff"
								border-color="--color-lightD2"
							/>
							<Button
								padding="11px 24px 11px 24px"
								font="--headline3"
								sm-width="100%"
								focus-box-shadow="none"
								color="--light"
								background="#000000"
								border-radius="8px"
								hover-background="--color-darkL1"
								hover-color="--light"
								hover-transition="background-color 0.5s ease 0s"
								transition="background-color 0.1s ease 0s"
								margin="0px 0px 15px 0px"
								border-color="#ffffff"
								border-width="5px"
								border-style="dashed"
							>
								Send
							</Button>
							<Box min-width="10px" min-height="10px" display="flex" sm-flex-direction="column">
								<Text margin="0px 5px 0px 0px" font="--base" color="#ffffff">
									Route 83 Beach Club and/or XZ1 Recordings never sells your data
								</Text>
							</Box>
						</Box>
					</Components.QuarklycommunityKitNetlifyForm>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 50px 0" background="#000000" quarkly-title="Footer-17">
			<Override slot="SectionContent" justify-content="flex-start" />
			<Image
				src="https://uploads.quarkly.io/6854e3263b5d6f001f996a80/images/HI-83.svg.png?v=2025-06-20T20:55:16.406Z"
				display="block"
				width="100px"
				height="100px"
				margin="0px 0px 30px 0px"
			/>
			<Box
				display="flex"
				lg-width="100%"
				flex-direction="row"
				lg-flex-direction="column"
				justify-content="space-between"
				width="100%"
				padding="0 0px 0 0px"
				sm-flex-direction="column"
				sm-padding="0 0px 0 0px"
			>
				<Box
					lg-margin="0px 0px 0px 0px"
					width="50%"
					display="flex"
					lg-width="70%"
					sm-width="100%"
					flex-direction="column"
					padding="0px 50px 0px 0px"
					lg-padding="0px 0 0px 0px"
					sm-margin="0px 0px 35px 0px"
				>
					<Text margin="0px 0px 20px 0px" font="--headline3" color="--light" letter-spacing="1px">
						ABOUT US
					</Text>
					<Text
						margin="0 0px 35px 0px"
						font="--base"
						color="#ffffff"
						sm-text-align="left"
						sm-margin="0 0px 0 0px"
						lg-max-width="640px"
					>
						Route 83 Beach Club is the label for new artists. We specialize in electronic music but are open to most genres. Our exclusive distribution and publishing team are always here for new artists so you can focus on your music!
					</Text>
				</Box>
			</Box>
			<Box
				display="flex"
				justify-content="space-between"
				padding="50px 0px 0px 0px"
				border-color="#232a44"
				md-padding="30px 0px 0px 0px"
				md-flex-direction="column"
				lg-padding="40px 0px 0px 0px"
				align-items="flex-end"
				height="auto"
				md-align-items="flex-start"
			>
				<Text margin="0px 0px 0px 0px" font="--base" color="#ffffff" md-margin="0px 0px 25px 0px">
					© 2025 Route 83 Beach Club, a division of XZ1 Recording Ventures. All rights reserved
					<br />
					The HI-83 Route sign is in the public domain.
					<br />
					Owned and operated by BudgieMint (https://ebb.l5.ca)
				</Text>
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