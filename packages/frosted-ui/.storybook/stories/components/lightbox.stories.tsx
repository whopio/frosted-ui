import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Flex, Lightbox } from "../../../src/components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: "Components/Lightbox",
	component: Lightbox.Content,
	args: {
		loop: true,
	},
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ["autodocs"],
} satisfies Meta<typeof Lightbox.Content>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
	render: ({ children, ...args }) => (
		<Lightbox.Root>
			<Flex gap="3">
				<Lightbox.Trigger>
					<img
						src="https://img-v2-prod.whop.com/hBOMqb1G4YIzR0jw7qnF0_IkXBoAOh78ybHZt_mKrT8/rs:fit:1280:720/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTExLTEyL3VzZXJfMjMzNDg3XzAxMmY0ZDBkLWY1M2UtNGJhZS1iOTNhLWI3YTVhODhjMjA1Yy5wbmc"
						alt="placeholder"
					/>
				</Lightbox.Trigger>
				<Lightbox.Trigger>
					<img
						src="https://img-v2-prod.whop.com/7nS_TeQmzSCCznok6NSF4dsz-UivsmFcSIejHh_diFU/rs:fit:1280:720/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTExLTEyL3VzZXJfMjMzNDg3XzM1YmRkZjAwLTgzNDMtNDE4Yy1hYzYzLWZkY2VmYWU2YzBhYS5wbmc"
						alt="placeholder"
					/>
				</Lightbox.Trigger>
			</Flex>
			<Lightbox.Content {...args}>
				<Lightbox.Close
					style={{
						position: "absolute",
						top: 24,
						right: 24,
					}}
				/>

				<Lightbox.Items>
					<img
						src="https://img-v2-prod.whop.com/hBOMqb1G4YIzR0jw7qnF0_IkXBoAOh78ybHZt_mKrT8/rs:fit:1280:720/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTExLTEyL3VzZXJfMjMzNDg3XzAxMmY0ZDBkLWY1M2UtNGJhZS1iOTNhLWI3YTVhODhjMjA1Yy5wbmc"
						alt="placeholder"
					/>
					<img
						src="https://img-v2-prod.whop.com/7nS_TeQmzSCCznok6NSF4dsz-UivsmFcSIejHh_diFU/rs:fit:1280:720/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTExLTEyL3VzZXJfMjMzNDg3XzM1YmRkZjAwLTgzNDMtNDE4Yy1hYzYzLWZkY2VmYWU2YzBhYS5wbmc"
						alt="placeholder"
					/>
					<img
						src="https://img-v2-prod.whop.com/45RrSIKml_7SfjaM5Zpr-MJ7RXHYATXoARw2Y3mi3eo/rs:fit:1280:720/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTExLTEyL3VzZXJfMjMzNDg3X2FjY2I4MTFmLTJhNzgtNDJiZS1iNzQ1LTM0Yjk3MTNhN2Q5NS5wbmc"
						alt="placeholder"
					/>
					<img
						src="https://img-v2-prod.whop.com/45RrSIKml_7SfjaM5Zpr-MJ7RXHYATXoARw2Y3mi3eo/rs:fit:1280:720/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTExLTEyL3VzZXJfMjMzNDg3X2FjY2I4MTFmLTJhNzgtNDJiZS1iNzQ1LTM0Yjk3MTNhN2Q5NS5wbmc"
						alt="placeholder"
					/>
					<img
						src="https://img-v2-prod.whop.com/k74M-g4J5gH-h3RrhCbNXmDw6JIIO6l2Mn_Sd0HIDvs/rs:fit:1280:720/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTExLTEyL3VzZXJfMjMzNDg3XzFmMTU1NWNhLTRkM2EtNGVlOS04NWU1LTAzOGQxYzE2ZmU2Zi5wbmc"
						alt="placeholder"
					/>
					<img
						src="https://img-v2-prod.whop.com/3QrIa6Leu4aOOcM6VwT0Op0ozR4ef-ZGOd7kDx61WfA/rs:fit:1280:720/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTExLTEyL3VzZXJfMjMzNDg3XzliOWI1YWQ4LTcyMjUtNDM3OC1iYTQ1LTI0Y2FhNTE3YTQ4OS5wbmc"
						alt="placeholder"
					/>
					<img src="https://placehold.co/720x1280" alt="placeholder" />
				</Lightbox.Items>

				<Flex
					gap="3"
					align="center"
					style={{
						margin: "0 auto",
						bottom: 24,
					}}
				>
					<Lightbox.PrevButton />
					<Lightbox.Thumbs />
					<Lightbox.NextButton />
				</Flex>
			</Lightbox.Content>
		</Lightbox.Root>
	),
};
