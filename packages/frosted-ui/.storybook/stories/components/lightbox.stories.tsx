import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Flex, Lightbox } from "../../../src/components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: "Components/Lightbox",
	component: Lightbox.Content,
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
				<Lightbox.Items>
					<Lightbox.Image
						src="https://img-v2-prod.whop.com/hBOMqb1G4YIzR0jw7qnF0_IkXBoAOh78ybHZt_mKrT8/rs:fit:1280:720/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTExLTEyL3VzZXJfMjMzNDg3XzAxMmY0ZDBkLWY1M2UtNGJhZS1iOTNhLWI3YTVhODhjMjA1Yy5wbmc"
						alt="placeholder"
					/>

					<Lightbox.Image
						src="https://img-v2-prod.whop.com/7nS_TeQmzSCCznok6NSF4dsz-UivsmFcSIejHh_diFU/rs:fit:1280:720/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTExLTEyL3VzZXJfMjMzNDg3XzM1YmRkZjAwLTgzNDMtNDE4Yy1hYzYzLWZkY2VmYWU2YzBhYS5wbmc"
						alt="placeholder"
					/>
					<Lightbox.Image
						src="https://img-v2-prod.whop.com/45RrSIKml_7SfjaM5Zpr-MJ7RXHYATXoARw2Y3mi3eo/rs:fit:1280:720/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTExLTEyL3VzZXJfMjMzNDg3X2FjY2I4MTFmLTJhNzgtNDJiZS1iNzQ1LTM0Yjk3MTNhN2Q5NS5wbmc"
						alt="placeholder"
					/>
					<Lightbox.Image
						src="https://img-v2-prod.whop.com/45RrSIKml_7SfjaM5Zpr-MJ7RXHYATXoARw2Y3mi3eo/rs:fit:1280:720/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTExLTEyL3VzZXJfMjMzNDg3X2FjY2I4MTFmLTJhNzgtNDJiZS1iNzQ1LTM0Yjk3MTNhN2Q5NS5wbmc"
						alt="placeholder"
					/>
					<Lightbox.Image
						src="https://img-v2-prod.whop.com/k74M-g4J5gH-h3RrhCbNXmDw6JIIO6l2Mn_Sd0HIDvs/rs:fit:1280:720/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTExLTEyL3VzZXJfMjMzNDg3XzFmMTU1NWNhLTRkM2EtNGVlOS04NWU1LTAzOGQxYzE2ZmU2Zi5wbmc"
						alt="placeholder"
					/>
					<Lightbox.Image
						src="https://img-v2-prod.whop.com/3QrIa6Leu4aOOcM6VwT0Op0ozR4ef-ZGOd7kDx61WfA/rs:fit:1280:720/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTExLTEyL3VzZXJfMjMzNDg3XzliOWI1YWQ4LTcyMjUtNDM3OC1iYTQ1LTI0Y2FhNTE3YTQ4OS5wbmc"
						alt="placeholder"
					/>
					<Lightbox.Video
						src="https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c0/Big_Buck_Bunny_4K.webm/Big_Buck_Bunny_4K.webm.1080p.vp9.webm"
						poster="https://placehold.co/1920x1080"
					/>
				</Lightbox.Items>

				<Lightbox.Thumbs />
			</Lightbox.Content>
		</Lightbox.Root>
	),
};
