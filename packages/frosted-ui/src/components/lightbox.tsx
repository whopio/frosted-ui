"use client";

import { ChevronLeft24, ChevronRight24, XMark24 } from "@frosted-ui/icons";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import classNames from "classnames";
import React from "react";
import { getValidChildren } from "../helpers";
import { useIsomorphicLayoutEffect } from "../helpers/use-isomorphic-layout-effect";
import { Theme } from "../theme";
import { Button } from "./button";
import { Flex } from "./flex";

interface LightboxRootProps
	extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> {}

const LightboxRoot: React.FC<LightboxRootProps> = (props) => {
	return <DialogPrimitive.Root {...props} />;
};

type LightboxTriggerElement = React.ElementRef<typeof DialogPrimitive.Trigger>;

interface LightboxTriggerProps
	extends Omit<
		React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>,
		"asChild"
	> {}

const LightboxTrigger: React.FC<LightboxTriggerProps> = React.forwardRef<
	LightboxTriggerElement,
	LightboxTriggerProps
>((props, forwardedRef) => {
	return <DialogPrimitive.Trigger {...props} ref={forwardedRef} asChild />;
});

LightboxTrigger.displayName = "LightboxTrigger";

type LightboxContentElement = React.ElementRef<typeof DialogPrimitive.Content>;

interface LightboxContentProps
	extends Omit<
		React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
		"asChild"
	> {
	loop?: boolean;
	container?: React.ComponentProps<typeof DialogPrimitive.Portal>["container"];
}

interface LightboxContextValue {
	items: React.ReactElement[];
	setItems: (items: React.ReactElement[]) => void;
	activeItemIndex: number;
	setActiveItemIndex: (index: number) => void;
	toPrev: () => void;
	toNext: () => void;
}

const LightboxContext = React.createContext<LightboxContextValue | null>(null);

const useLightbox = () => {
	const context = React.useContext(LightboxContext);
	if (!context) {
		throw new Error("useLightbox must be used within a LightboxProvider");
	}
	return context;
};

const LightboxContent: React.FC<LightboxContentProps> = React.forwardRef<
	LightboxContentElement,
	LightboxContentProps
>((props, forwardedRef) => {
	const { children, className, container, ...contentProps } = props;

	const [items, setItems] = React.useState<React.ReactElement[]>([]);
	const [activeItemIndex, setActiveItemIndex] = React.useState(0);

	const toPrev = React.useCallback(() => {
		setActiveItemIndex((current) => {
			const prevIndex = current - 1;
			if (prevIndex < 0) {
				return 0;
			}
			return prevIndex;
		});
	}, []);

	const toNext = React.useCallback(() => {
		setActiveItemIndex((current) => {
			const nextIndex = current + 1;
			if (nextIndex >= items.length) {
				return items.length - 1;
			}
			return nextIndex;
		});
	}, [items.length]);

	// Handle keyboard navigation
	React.useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			switch (event.key) {
				case "ArrowLeft":
					toPrev();
					break;
				case "ArrowRight":
					toNext();
					break;
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [toPrev, toNext]);

	const contextValue = React.useMemo(
		() => ({
			items,
			setItems,
			activeItemIndex,
			setActiveItemIndex,
			toPrev,
			toNext,
		}),
		[items, activeItemIndex, toPrev, toNext],
	);

	return (
		<DialogPrimitive.Portal container={container}>
			<DialogPrimitive.Title className="sr-only">
				Test title
			</DialogPrimitive.Title>
			<DialogPrimitive.Description className="sr-only">
				Test description
			</DialogPrimitive.Description>

			<Theme asChild>
				<DialogPrimitive.Overlay className="fui-DialogOverlay fui-LightboxOverlay">
					<DialogPrimitive.Content
						{...contentProps}
						ref={forwardedRef}
						className={classNames("fui-LightboxContent", className)}
						aria-roledescription="carousel"
					>
						<LightboxContext.Provider value={contextValue}>
							{children}
						</LightboxContext.Provider>
					</DialogPrimitive.Content>
				</DialogPrimitive.Overlay>
			</Theme>
		</DialogPrimitive.Portal>
	);
});

LightboxContent.displayName = "LightboxContent";

interface LightboxItemsProps extends React.HTMLAttributes<HTMLDivElement> {}

const LightboxItems: React.FC<LightboxItemsProps> = ({
	children,
	className,
	...props
}) => {
	const { setItems, activeItemIndex, setActiveItemIndex } = useLightbox();

	const validChildren = getValidChildren<React.ReactNode>(children);
	const containerRef = React.useRef<HTMLDivElement>(null);

	// Update the active slide based on scroll position
	const handleScroll = React.useCallback(() => {
		if (!containerRef.current) return;

		const container = containerRef.current;
		const slideWidth = container.firstElementChild?.clientWidth || 0;
		const newIndex = Math.round(container.scrollLeft / slideWidth);

		setActiveItemIndex(newIndex);
	}, [setActiveItemIndex]);

	React.useEffect(() => {
		if (!containerRef.current) return;

		const container = containerRef.current;
		const activeItem = container.children[activeItemIndex] as HTMLElement;

		if (activeItem) {
			container.scrollTo({
				left: activeItem.offsetLeft,
				behavior: "smooth",
			});
		}
	}, [activeItemIndex]);

	// Attach the scroll event listener
	React.useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		container.addEventListener("scroll", handleScroll);
		return () => container.removeEventListener("scroll", handleScroll);
	}, [handleScroll]);

	useIsomorphicLayoutEffect(() => {
		setItems(validChildren);
	}, []);

	return (
		<div className="fiu-LightboxContainer">
			<div
				ref={containerRef}
				className={classNames("fui-LightboxItems", className)}
				{...props}
			>
				{validChildren.map((child, i) => {
					return (
						<div
							className={classNames("fui-LightboxItem", {
								"fui-LightboxActiveItem": activeItemIndex === i,
							})}
							key={child.key}
						>
							{React.cloneElement(child, {})}
						</div>
					);
				})}
			</div>
			<Flex
				gap="3"
				align="center"
				style={{
					margin: "0 auto",
				}}
			>
				<LightboxPrevButton />
				<LightboxNextButton />
			</Flex>
		</div>
	);
};

type LightboxPrevElement = React.ElementRef<typeof Button>;
interface LightboxPrevButtonProps
	extends Omit<React.ComponentPropsWithoutRef<typeof Button>, "children"> {
	children?: never;
}

const LightboxPrevButton: React.FC<LightboxPrevButtonProps> = React.forwardRef<
	LightboxPrevElement,
	LightboxPrevButtonProps
>(({ className, ...props }, ref) => {
	const { toPrev, activeItemIndex, items } = useLightbox();

	return (
		<Button
			variant="ghost"
			onClick={toPrev}
			ref={ref}
			disabled={activeItemIndex === 0}
			aria-label="Previous item"
			className={classNames(
				className,
				"fui-LightboxNavButton",
				"fui-LightboxPrevButton",
			)}
			{...props}
		>
			{/* @ts-expect-error -- TODO: fix frosted-icons types issue */}
			<ChevronLeft24 stroke="white" />
		</Button>
	);
});

type LightboxNextElement = React.ElementRef<typeof Button>;
interface LightboxNextButtonProps
	extends Omit<React.ComponentPropsWithoutRef<typeof Button>, "children"> {
	children?: never;
}

const LightboxNextButton: React.FC<LightboxNextButtonProps> = React.forwardRef<
	LightboxNextElement,
	LightboxNextButtonProps
>(({ className, ...props }, ref) => {
	const { toNext, activeItemIndex, items } = useLightbox();

	return (
		<Button
			variant="ghost"
			onClick={toNext}
			ref={ref}
			disabled={activeItemIndex === items.length - 1}
			aria-label="Next item"
			className={classNames(
				className,
				"fui-LightboxNavButton",
				"fui-LightboxNextButton",
			)}
			{...props}
		>
			{/* @ts-expect-error -- TODO: fix frosted-icons types issue */}
			<ChevronRight24 stroke="white" />
		</Button>
	);
});

LightboxNextButton.displayName = "LightboxNextButton";

interface LightboxThumbsProps extends React.ComponentPropsWithRef<"div"> {}

const LightboxThumbs: React.FC<LightboxThumbsProps> = ({
	className,
	...props
}) => {
	const { items, activeItemIndex, setActiveItemIndex } = useLightbox();
	const containerRef = React.useRef<HTMLDivElement>(null);

	// Scroll to center the active item
	React.useEffect(() => {
		if (containerRef.current && items.length > 0) {
			const container = containerRef.current;
			const activeChild = container.children[activeItemIndex] as HTMLElement;
			const containerCenter = container.offsetWidth / 2;
			const childCenter = activeChild.offsetLeft + activeChild.offsetWidth / 2;

			container.scrollTo({
				left: childCenter - containerCenter,
				behavior: "smooth",
			});
		}
	}, [activeItemIndex, items.length]);

	return (
		<div
			className={classNames("fui-LightboxThumbs", className)}
			ref={containerRef}
			{...props}
		>
			{items.map((item, index) => {
				return (
					<button
						onClick={() => setActiveItemIndex(index)}
						type="button"
						key={item.key}
						className={classNames("fui-LightboxThumb", {
							"fui-LightboxActiveThumb": activeItemIndex === index,
						})}
					>
						{React.cloneElement(item, {
							className: "fui-LightboxThumbImage",
							style: {},
						})}
					</button>
				);
			})}
		</div>
	);
};

type LightboxCloseElement = React.ElementRef<typeof DialogPrimitive.Close>;
interface LightboxCloseProps
	extends Omit<
		React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>,
		"asChild" | "children"
	> {
	children?: never;
}

const LightboxClose = React.forwardRef<
	LightboxCloseElement,
	LightboxCloseProps
>(({ className, ...props }, forwardedRef) => (
	<DialogPrimitive.Close
		className={classNames("fui-LightboxClose", className)}
		{...props}
		ref={forwardedRef}
		asChild
	>
		<Button variant="ghost" aria-label="Close lightbox">
			{/* @ts-expect-error -- TODO: fix frosted-icons types issue */}
			<XMark24 />
		</Button>
	</DialogPrimitive.Close>
));

LightboxClose.displayName = "LightboxClose";

export {
	LightboxClose as Close,
	LightboxContent as Content,
	LightboxItems as Items,
	LightboxNextButton as NextButton,
	LightboxPrevButton as PrevButton,
	LightboxRoot as Root,
	LightboxTrigger as Trigger,
	LightboxThumbs as Thumbs,
};

export type {
	LightboxCloseProps as CloseProps,
	LightboxContentProps as ContentProps,
	LightboxItemsProps as ItemsProps,
	LightboxNextButtonProps as NextButtonProps,
	LightboxPrevButtonProps as PrevButtonProps,
	LightboxRootProps as RootProps,
	LightboxTriggerProps as TriggerProps,
	LightboxThumbsProps as ThumbsProps,
};
